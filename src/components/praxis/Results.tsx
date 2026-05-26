import { Trophy, Check, CircleHelp, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { AnswerRecord, Grade } from "./PraxisApp";

interface Props {
  records: AnswerRecord[];
  onRestart: () => void;
}

const gradeMeta: Record<
  Grade,
  { label: string; icon: React.ReactNode; cls: string; chip: string }
> = {
  correct: {
    label: "Vollständig richtig",
    icon: <Check className="h-4 w-4" />,
    cls: "border-l-success",
    chip: "bg-success-soft text-success",
  },
  partial: {
    label: "Teilweise richtig",
    icon: <CircleHelp className="h-4 w-4" />,
    cls: "border-l-warning",
    chip: "bg-warning-soft text-warning-foreground",
  },
  wrong: {
    label: "Falsch",
    icon: <X className="h-4 w-4" />,
    cls: "border-l-destructive",
    chip: "bg-danger-soft text-destructive",
  },
};

export function Results({ records, onRestart }: Props) {
  const total = records.length;
  const score = records.reduce((s, r) => s + r.points, 0);
  const pct = total > 0 ? Math.round((score / total) * 100) : 0;
  const circumference = 2 * Math.PI * 52;

  return (
    <div className="animate-fade-in space-y-6">
      <Card className="space-y-6 overflow-hidden rounded-3xl border-border/60 bg-card p-7 text-center shadow-[var(--shadow-card)]">
        <div
          className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl text-primary-foreground shadow-[var(--shadow-soft)]"
          style={{ background: "var(--gradient-hero)" }}
        >
          <Trophy className="h-7 w-7" />
        </div>
        <div className="space-y-1">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Bilanz
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-foreground">
            Simulation abgeschlossen
          </h1>
        </div>

        <div className="relative mx-auto h-32 w-32">
          <svg viewBox="0 0 120 120" className="h-full w-full -rotate-90">
            <circle
              cx="60"
              cy="60"
              r="52"
              fill="none"
              stroke="var(--secondary)"
              strokeWidth="10"
            />
            <circle
              cx="60"
              cy="60"
              r="52"
              fill="none"
              stroke="var(--primary)"
              strokeWidth="10"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={circumference - (pct / 100) * circumference}
              className="transition-all duration-1000 ease-out"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-3xl font-bold text-foreground">{pct}%</span>
            <span className="text-xs text-muted-foreground">erreicht</span>
          </div>
        </div>

        <div className="text-foreground">
          <span className="text-2xl font-semibold">{score}</span>
          <span className="text-2xl font-semibold text-muted-foreground"> / {total}</span>
          <span className="ml-1 text-sm text-muted-foreground">Punkte</span>
        </div>
      </Card>

      <div className="space-y-3">
        <h2 className="px-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Auswertung im Detail
        </h2>
        {records.map((r, i) => {
          const m = gradeMeta[r.grade];
          return (
            <Card
              key={r.question.id}
              className={cn(
                "space-y-3 rounded-2xl border-l-4 border-border/60 bg-card p-5 shadow-[var(--shadow-card)]",
                m.cls,
              )}
            >
              <div className="flex items-center justify-between gap-3">
                <Badge
                  variant="secondary"
                  className="rounded-full bg-primary-soft px-2.5 py-0.5 text-xs font-semibold text-primary"
                >
                  {r.question.topic}
                </Badge>
                <span
                  className={cn(
                    "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold",
                    m.chip,
                  )}
                >
                  {m.icon}
                  {m.label}
                </span>
              </div>

              <p className="text-sm font-semibold leading-snug text-foreground">
                {i + 1}. {r.question.question}
              </p>

              <div className="space-y-2 text-sm">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Ihre Antwort
                  </p>
                  <p className="mt-1 whitespace-pre-wrap text-foreground/90">
                    {r.userAnswer.trim() || (
                      <span className="italic text-muted-foreground">
                        Keine Antwort eingegeben
                      </span>
                    )}
                  </p>
                </div>
                <div className="rounded-xl bg-primary-soft/50 p-3">
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary">
                    Musterlösung
                  </p>
                  <p className="mt-1 leading-relaxed text-foreground/90">
                    {r.question.modelAnswer}
                  </p>
                </div>
                {r.aiReasoning && (
                  <div className="rounded-xl border border-border/60 bg-secondary/40 p-3">
                    <div className="flex items-center justify-between gap-2">
                      <p className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
                        <Sparkles className="h-3.5 w-3.5" />
                        KI-Feedback
                      </p>
                      {r.overridden && (
                        <span className="rounded-full bg-warning-soft px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-warning-foreground">
                          Manuell überschrieben
                        </span>
                      )}
                    </div>
                    {r.aiSuggestion && (
                      <p className="mt-1.5 text-xs text-muted-foreground">
                        Empfehlung: <span className="font-semibold text-foreground">{gradeMeta[r.aiSuggestion].label}</span>
                      </p>
                    )}
                    <p className="mt-1.5 leading-relaxed text-foreground/90">
                      {r.aiReasoning}
                    </p>
                  </div>
                )}
                <div className="flex items-center justify-between rounded-xl bg-secondary/30 px-3 py-2 text-xs">
                  <span className="font-semibold uppercase tracking-wider text-muted-foreground">
                    Vergebene Punkte
                  </span>
                  <span className="text-sm font-bold text-foreground">
                    {r.points} / 1
                  </span>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      <Button
        onClick={onRestart}
        size="lg"
        className="h-14 w-full rounded-2xl text-base font-semibold shadow-[var(--shadow-soft)] transition-transform active:scale-[0.98]"
        style={{ background: "var(--gradient-hero)" }}
      >
        Neue Simulation starten
      </Button>
    </div>
  );
}
