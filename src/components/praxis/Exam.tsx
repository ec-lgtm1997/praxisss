import { useState } from "react";
import { ArrowLeft, Eye, Check, CircleHelp, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
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

export function Exam({ questions, onFinish, onCancel }: Props) {
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [revealed, setRevealed] = useState(false);
  const [grade, setGrade] = useState<Grade | null>(null);
  const [records, setRecords] = useState<AnswerRecord[]>([]);

  const current = questions[index];
  const total = questions.length;
  const progress = ((index + (grade ? 1 : 0)) / total) * 100;
  const isLast = index === total - 1;

  const handleNext = () => {
    if (!grade) return;
    const record: AnswerRecord = {
      question: current,
      userAnswer: answer,
      grade,
      points: GRADE_POINTS[grade],
    };
    const next = [...records, record];
    if (isLast) {
      onFinish(next);
      return;
    }
    setRecords(next);
    setIndex(index + 1);
    setAnswer("");
    setRevealed(false);
    setGrade(null);
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
          disabled={revealed}
          className="min-h-[140px] resize-none rounded-2xl border-border bg-secondary/40 p-4 text-base leading-relaxed focus-visible:ring-primary"
        />

        {!revealed ? (
          <Button
            onClick={() => setRevealed(true)}
            size="lg"
            variant="outline"
            className="h-12 w-full rounded-2xl border-primary/30 text-primary hover:bg-primary-soft"
          >
            <Eye className="mr-2 h-5 w-5" />
            Musterlösung anzeigen
          </Button>
        ) : (
          <div className="animate-fade-in space-y-5">
            <div className="rounded-2xl bg-primary-soft/60 p-5">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-primary">
                Musterlösung
              </p>
              <p className="text-[15px] leading-relaxed text-foreground">
                {current.modelAnswer}
              </p>
            </div>

            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Selbstbewertung
              </p>
              <div className="grid grid-cols-1 gap-2">
                <GradeButton
                  active={grade === "correct"}
                  onClick={() => setGrade("correct")}
                  icon={<Check className="h-5 w-5" />}
                  label="Vollständig richtig"
                  points="+1"
                  tone="success"
                />
                <GradeButton
                  active={grade === "partial"}
                  onClick={() => setGrade("partial")}
                  icon={<CircleHelp className="h-5 w-5" />}
                  label="Teilweise richtig"
                  points="+0.5"
                  tone="warning"
                />
                <GradeButton
                  active={grade === "wrong"}
                  onClick={() => setGrade("wrong")}
                  icon={<X className="h-5 w-5" />}
                  label="Falsch"
                  points="0"
                  tone="danger"
                />
              </div>
            </div>

            <Button
              onClick={handleNext}
              disabled={!grade}
              size="lg"
              className="h-14 w-full rounded-2xl text-base font-semibold shadow-[var(--shadow-soft)] transition-transform active:scale-[0.98] disabled:opacity-50"
              style={grade ? { background: "var(--gradient-hero)" } : undefined}
            >
              {isLast ? "Auswertung anzeigen" : "Nächste Frage"}
            </Button>
          </div>
        )}
      </Card>
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
