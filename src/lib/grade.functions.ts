import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const Input = z.object({
  question: z.string().min(1),
  modelAnswer: z.string().min(1),
  userAnswer: z.string(),
});

export const gradeAnswer = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => Input.parse(d))
  .handler(async ({ data }) => {
    const key = process.env.GEMINI_API_KEY;
    if (!key) throw new Error("GEMINI_API_KEY ist nicht konfiguriert.");

    const trimmed = data.userAnswer.trim();
    if (!trimmed) {
      return {
        grade: "wrong" as const,
        reasoning: "Es wurde keine Antwort eingegeben.",
      };
    }

    // Direktaufruf der Google Gemini API via Standard-fetch (keine AI-Pakete nötig!)
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${key}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `Du bist ein erfahrener Prüfer in der Pflegeausbildung. Bewerte die Antwort des Lernenden im Vergleich zur Musterlösung fair und konstruktiv. Antworte ausschließlich auf Deutsch.
                  
                  Gib deine Antwort als reines JSON-Objekt mit exakt dieser Struktur aus:
                  {
                    "grade": "correct" | "partial" | "wrong",
                    "reasoning": "Begründung in maximal 2 prägnanten Sätzen"
                  }

                  Bedeutung für 'grade':
                  'correct' = inhaltlich vollständig und richtig
                  'partial' = Kerngedanke erkannt aber unvollständig oder mit kleineren Fehlern
                  'wrong' = inhaltlich falsch oder am Thema vorbei

                  Frage:
                  ${data.question}

                  Musterlösung:
                  ${data.modelAnswer}

                  Antwort des Lernenden:
                  ${trimmed}
                  
                  Gibt ausschließlich das JSON-Objekt zurück, ohne Markdown-Formatierung (\`\`\`json ... \`\`\`).`,
                },
              ],
            },
          ],
          generationConfig: {
            responseMimeType: "application/json",
          },
        }),
      }
    );

    if (!response.ok) {
      const errText = await response.text();
      throw new Error(`Gemini API Fehler: ${response.status} - ${errText}`);
    }

    const result = await response.json();
    const textResponse = result.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!textResponse) {
      throw new Error("Ungültige Antwort von der Gemini API erhalten.");
    }

    // Wandelt den Text in das vom Frontend erwartete Objekt um
    return JSON.parse(textResponse.trim());
  });
