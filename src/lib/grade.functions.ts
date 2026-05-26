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
    const key = process.env.GROQ_API_KEY;
    if (!key) throw new Error("GROQ_API_KEY ist nicht konfiguriert.");

    const trimmed = data.userAnswer.trim();
    if (!trimmed) {
      return {
        grade: "wrong" as const,
        reasoning: "Es wurde keine Antwort eingegeben.",
      };
    }

    // Wir rufen Groq über die offizielle OpenAI-Schnittstelle auf
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${key}`,
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile", // Extrem starkes, kostenloses Modell
        temperature: 0.2,
        // Zwingt Groq dazu, echtes JSON auszugeben
        response_format: { type: "json_object" }, 
        messages: [
          {
            role: "system",
            content: `Du bist ein erfahrener Prüfer in der Pflegeausbildung. Bewerte die Antwort des Lernenden im Vergleich zur Musterlösung fair und konstruktiv. Antworte ausschließlich auf Deutsch.
                  
            Du MUSS deine Antwort als valides JSON-Objekt mit exakt dieser Struktur ausgeben:
            {
              "grade": "correct" | "partial" | "wrong",
              "reasoning": "Begründung in maximal 2 prägnanten Sätzen"
            }

            Bedeutung für 'grade':
            'correct' = inhaltlich vollständig und richtig
            'partial' = Kerngedanke erkannt aber unvollständig oder mit kleineren Fehlern
            'wrong' = inhaltlich falsch oder am Thema vorbei.`
          },
          {
            role: "user",
            content: `Frage:\n${data.question}\n\nMusterlösung:\n${data.modelAnswer}\n\nAntwort des Lernenden:\n${trimmed}`
          }
        ]
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      throw new Error(`Groq API Fehler: ${response.status} - ${errText}`);
    }

    const result = await response.json();
    const textResponse = result.choices?.[0]?.message?.content;

    if (!textResponse) {
      throw new Error("Ungültige Antwort von der Groq API erhalten.");
    }

    return JSON.parse(textResponse.trim());
  });
