import { useState } from "react";
import { ArrowLeft, Sparkles, Check, CircleHelp, X, Loader2 } from "lucide-react";
import { useServerFn } from "@tanstack/react-start";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { gradeAnswer } from "@/lib/grade.functions";
import type { Question } from "@/data/questions";
import type { AnswerRecord, Grade } from "./PraxisApp";

interface Props {
  questions: Question[];
  onFinish: (records: AnswerRecord[]) => void;
  onCancel: () => void;
}

const GRADE_POINTS: Record<Grade, number> = {
  correct: 1,
  partial: 0.5,
  wrong: 0,
};

const GRADE_LABEL: Record<Grade, string> = {
  correct: "Vollständig richtig",
  partial: "Teilweise richtig",
  wrong: "Falsch",
};

type Phase = "writing" | "loading" | "reviewing";

export function Exam({ questions, onFinish, onCancel }: Props) {
  const grade = useServerFn(gradeAnswer);
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [phase, setPhase] = useState<Phase>("writing");
  const [aiGrade, setAiGrade] = useState<Grade | null>(null);
  const [aiReasoning, setAiReasoning] = useState<string>("");
  const [finalGrade, setFinalGrade] = useState<Grade | null>(null);
  const [records, setRecords] = useState<AnswerRecord[]>([]);

  const current = questions[index];
  const total = questions.length;
  const progress = ((index + (finalGrade ? 1 : 0)) / total) * 100;
  const isLast = index === total - 1;

  const handleAiCheck = async () => {
    setPhase("loading");
    try {
      const res = await grade({
        data: {
          question: current.question,
          modelAnswer: current.modelAnswer,
          userAnswer: answer,
        },
      });
      setAiGrade(res.grade);
      setAiReasoning(res.reasoning);
      setPhase("reviewing");
    } catch (e) {
      console.error(e);
      toast.error("KI-Prüfung fehlgeschlagen. Bitte bewerte manuell.");
      setAiGrade(null);
      setAiReasoning("");
      setPhase("reviewing");
    }
  };

  const handleNext = () => {
    if (!finalGrade) return;
    const record: AnswerRecord = {
      question: current,
      userAnswer: answer,
      grade: finalGrade,
      points: GRADE_POINTS[finalGrade],
      aiSuggestion: aiGrade ?? undefined,
      aiReasoning: aiReasoning || undefined,
      overridden: aiGrade ? aiGrade !== finalGrade : undefined,
    };
    const next = [...records, record];
    if (isLast) {
      onFinish(next);
      return;
    }
    setRecords(next);
    setIndex(index + 1);
    setAnswer("");
    setPhase("writing");
    setAiGrade(null);
    setAiReasoning("");
    setFinalGrade(null);
  };

  return (
    <div className="animate-fade-in space-y-6">
      <div className="flex items-center justify-between">
        <button
          onClick={onCancel}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:bg-secondary"
          aria-label="Abbrechen"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <span className="text-sm font-medium text-muted-foreground">
          Frage {index + 1} von {total}
        </span>
        <div className="w-10" />
      </div>

      <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
        <div
          className="h-full rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progress}%`, background: "var(--gradient-hero)" }}
        />
      </div>

      <Card
        key={current.id}
        className="animate-fade-in space-y-5 rounded-3xl border-border/60 bg-card p-6 shadow-[var(--shadow-card)]"
      >
        <Badge
          variant="secondary"
          className="rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold text-primary"
        >
          {current.topic}
        </Badge>

        <h2 className="text-xl font-semibold leading-snug text-foreground">
          {current.question}
        </h2>

        <Textarea
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Ihre Antwort hier eintippen…"
          rows={6}
          disabled={phase !== "writing"}
          className="min-h-[140px] resize-none rounded-2xl border-border bg-secondary/40 p-4 text-base leading-relaxed focus-visible:ring-primary"
        />

        {phase === "writing" && (
          <Button
            onClick={handleAiCheck}
            disabled={!answer.trim()}
            size="lg"
            className="h-12 w-full rounded-2xl text-base font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-transform active:scale-[0.98] disabled:opacity-50"
            style={{ background: "var(--gradient-hero)" }}
          >
            <Sparkles className="mr-2 h-5 w-5" />
            Antwort durch KI prüfen
          </Button>
        )}

        {phase === "loading" && <AiLoading />}

        {phase === "reviewing" && (
          <div className="animate-fade-in space-y-5">
            <div className="rounded-2xl bg-primary-soft/60 p-5">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-primary">
                Musterlösung
              </p>
              <p className="text-[15px] leading-relaxed text-foreground">
                {current.modelAnswer}
              </p>
            </div>

            {aiGrade && (
              <AiFeedbackBox
                grade={aiGrade}
                reasoning={aiReasoning}
                confirmed={finalGrade === aiGrade}
                onConfirm={() => setFinalGrade(aiGrade)}
              />
            )}

            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {aiGrade ? "Manuell überschreiben" : "Selbstbewertung"}
              </p>
              <div className="grid grid-cols-1 gap-2">
                <GradeButton
                  active={finalGrade === "correct"}
                  onClick={() => setFinalGrade("correct")}
                  icon={<Check className="h-5 w-5" />}
                  label="Vollständig richtig"
                  points="+1"
                  tone="success"
                />
                <GradeButton
                  active={finalGrade === "partial"}
                  onClick={() => setFinalGrade("partial")}
                  icon={<CircleHelp className="h-5 w-5" />}
                  label="Teilweise richtig"
                  points="+0.5"
                  tone="warning"
                />
                <GradeButton
                  active={finalGrade === "wrong"}
                  onClick={() => setFinalGrade("wrong")}
                  icon={<X className="h-5 w-5" />}
                  label="Falsch"
                  points="0"
                  tone="danger"
                />
              </div>
            </div>

            <Button
              onClick={handleNext}
              disabled={!finalGrade}
              size="lg"
              className="h-14 w-full rounded-2xl text-base font-semibold shadow-[var(--shadow-soft)] transition-transform active:scale-[0.98] disabled:opacity-50"
              style={finalGrade ? { background: "var(--gradient-hero)" } : undefined}
            >
              {isLast ? "Auswertung anzeigen" : "Nächste Frage"}
            </Button>
          </div>
        )}
      </Card>
    </div>
  );
}

function AiLoading() {
  return (
    <div className="animate-fade-in space-y-4 rounded-2xl border border-primary/20 bg-primary-soft/40 p-6">
      <div className="flex items-center gap-3">
        <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
          <Loader2 className="h-5 w-5 animate-spin text-primary" />
          <Sparkles className="absolute -right-1 -top-1 h-3.5 w-3.5 text-primary animate-pulse" />
        </div>
        <p className="text-sm font-semibold text-primary">
          KI analysiert deine Antwort…
        </p>
      </div>
      <div className="space-y-2">
        <div className="h-3 w-full animate-pulse rounded-full bg-primary/15" />
        <div className="h-3 w-5/6 animate-pulse rounded-full bg-primary/15" />
        <div className="h-3 w-2/3 animate-pulse rounded-full bg-primary/15" />
      </div>
    </div>
  );
}

const aiTones: Record<
  Grade,
  { wrap: string; chip: string; icon: React.ReactNode; label: string }
> = {
  correct: {
    wrap: "border-success/40 bg-success-soft",
    chip: "bg-success text-success-foreground",
    icon: <Check className="h-4 w-4" />,
    label: "Vollständig richtig · +1",
  },
  partial: {
    wrap: "border-warning/40 bg-warning-soft",
    chip: "bg-warning text-warning-foreground",
    icon: <CircleHelp className="h-4 w-4" />,
    label: "Teilweise richtig · +0,5",
  },
  wrong: {
    wrap: "border-destructive/40 bg-danger-soft",
    chip: "bg-destructive text-destructive-foreground",
    icon: <X className="h-4 w-4" />,
    label: "Falsch · 0",
  },
};

function AiFeedbackBox({
  grade,
  reasoning,
  confirmed,
  onConfirm,
}: {
  grade: Grade;
  reasoning: string;
  confirmed: boolean;
  onConfirm: () => void;
}) {
  const t = aiTones[grade];
  return (
    <div
      className={cn(
        "animate-fade-in space-y-4 rounded-2xl border p-5 transition-all",
        t.wrap,
      )}
    >
      <div className="flex items-center gap-2">
        <Sparkles className="h-4 w-4 text-primary" />
        <p className="text-xs font-semibold uppercase tracking-wider text-primary">
          KI-Feedback
        </p>
      </div>

      <div
        className={cn(
          "inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold",
          t.chip,
        )}
      >
        {t.icon}
        {t.label}
      </div>

      <p className="text-sm leading-relaxed text-foreground/90">{reasoning}</p>

      <Button
        onClick={onConfirm}
        variant={confirmed ? "default" : "outline"}
        className={cn(
          "h-11 w-full rounded-xl text-sm font-semibold transition-all",
          confirmed
            ? "border-transparent text-primary-foreground"
            : "border-primary/30 bg-card text-primary hover:bg-primary-soft",
        )}
        style={confirmed ? { background: "var(--gradient-hero)" } : undefined}
      >
        {confirmed ? (
          <>
            <Check className="mr-2 h-4 w-4" />
            Empfehlung übernommen
          </>
        ) : (
          `Empfehlung übernehmen (${GRADE_LABEL[grade]})`
        )}
      </Button>
    </div>
  );
}

function GradeButton({
  active,
  onClick,
  icon,
  label,
  points,
  tone,
}: {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
  points: string;
  tone: "success" | "warning" | "danger";
}) {
  const tones = {
    success: {
      active: "border-success bg-success text-success-foreground shadow-sm",
      idle: "border-border bg-card text-foreground hover:bg-success-soft hover:border-success/50",
    },
    warning: {
      active: "border-warning bg-warning text-warning-foreground shadow-sm",
      idle: "border-border bg-card text-foreground hover:bg-warning-soft hover:border-warning/50",
    },
    danger: {
      active: "border-destructive bg-destructive text-destructive-foreground shadow-sm",
      idle: "border-border bg-card text-foreground hover:bg-danger-soft hover:border-destructive/40",
    },
  }[tone];

  return (
    <button
      onClick={onClick}
      className={cn(
        "flex h-14 w-full items-center gap-3 rounded-2xl border px-4 text-left text-base font-semibold transition-all duration-200 active:scale-[0.99]",
        active ? tones.active : tones.idle,
      )}
    >
      <span
        className={cn(
          "flex h-9 w-9 items-center justify-center rounded-xl",
          active ? "bg-white/20" : "bg-secondary",
        )}
      >
        {icon}
      </span>
      <span className="flex-1">{label}</span>
      <span
        className={cn(
          "rounded-full px-2.5 py-0.5 text-xs font-bold",
          active ? "bg-white/20" : "bg-secondary text-muted-foreground",
        )}
      >
        {points}
      </span>
    </button>
  );
}
