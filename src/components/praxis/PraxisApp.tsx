import { useMemo, useState } from "react";
import { Setup } from "./Setup";
import { Exam } from "./Exam";
import { Results } from "./Results";
import { questions as ALL_QUESTIONS, type Question } from "@/data/questions";

export type Grade = "correct" | "partial" | "wrong";

export interface AnswerRecord {
  question: Question;
  userAnswer: string;
  grade: Grade;
  points: number;
  aiSuggestion?: Grade;
  aiReasoning?: string;
  overridden?: boolean;
}

type Stage = "setup" | "exam" | "results";

export type Mode = "topic" | "random";

export function PraxisApp() {
  const [stage, setStage] = useState<Stage>("setup");
  const [session, setSession] = useState<Question[]>([]);
  const [records, setRecords] = useState<AnswerRecord[]>([]);

  const startExam = (mode: Mode, topic: string | null, count: number | "all") => {
    let pool = ALL_QUESTIONS;
    if (mode === "topic" && topic) {
      pool = pool.filter((q) => q.topic === topic);
    }
    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    const n = count === "all" ? shuffled.length : Math.min(count, shuffled.length);
    setSession(shuffled.slice(0, n));
    setRecords([]);
    setStage("exam");
  };

  const finishExam = (final: AnswerRecord[]) => {
    setRecords(final);
    setStage("results");
  };

  const reset = () => {
    setSession([]);
    setRecords([]);
    setStage("setup");
  };

  const view = useMemo(() => {
    if (stage === "exam")
      return <Exam questions={session} onFinish={finishExam} onCancel={reset} />;
    if (stage === "results")
      return <Results records={records} onRestart={reset} />;
    return <Setup onStart={startExam} />;
  }, [stage, session, records]);

  return (
    <div className="min-h-screen w-full" style={{ background: "var(--gradient-soft)" }}>
      <div className="mx-auto w-full max-w-2xl px-4 pb-16 pt-8 sm:px-6 sm:pt-12">
        {view}
      </div>
    </div>
  );
}
