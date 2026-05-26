import { createServerFn } from "@tanstack/react-start";
import { generateText, Output } from "ai";
import { z } from "zod";
import { createLovableAiGatewayProvider } from "./ai-gateway.server";

const Input = z.object({
  question: z.string().min(1),
  modelAnswer: z.string().min(1),
  userAnswer: z.string(),
});

const Schema = z.object({
  grade: z.enum(["correct", "partial", "wrong"]),
  reasoning: z.string().min(1).max(400),
});

export const gradeAnswer = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => Input.parse(d))
  .handler(async ({ data }) => {
    const key = process.env.LOVABLE_API_KEY;
    if (!key) throw new Error("LOVABLE_API_KEY ist nicht konfiguriert.");

    const gateway = createLovableAiGatewayProvider(key);
    const model = gateway("google/gemini-3-flash-preview");

    const trimmed = data.userAnswer.trim();
    if (!trimmed) {
      return {
        grade: "wrong" as const,
        reasoning: "Es wurde keine Antwort eingegeben.",
      };
    }

    const { experimental_output } = await generateText({
      model,
      output: Output.object({ schema: Schema }),
      system:
        "Du bist ein erfahrener Prüfer in der Pflegeausbildung. Bewerte die Antwort des Lernenden im Vergleich zur Musterlösung fair und konstruktiv. Antworte ausschließlich auf Deutsch. 'correct' = inhaltlich vollständig und richtig, 'partial' = Kerngedanke erkannt aber unvollständig oder mit kleineren Fehlern, 'wrong' = inhaltlich falsch oder am Thema vorbei. Die Begründung darf maximal 2 prägnante Sätze umfassen.",
      prompt: `Frage:\n${data.question}\n\nMusterlösung:\n${data.modelAnswer}\n\nAntwort des Lernenden:\n${trimmed}\n\nBewerte die Antwort.`,
    });

    return experimental_output;
  });
