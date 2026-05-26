import { useState } from "react";
import { Stethoscope, Shuffle, BookOpen, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { topics } from "@/data/questions";
import { cn } from "@/lib/utils";
import type { Mode } from "./PraxisApp";

interface Props {
  onStart: (mode: Mode, topic: string | null, count: number | "all") => void;
}

const COUNTS: (number | "all")[] = [5, 10, 20, "all"];

export function Setup({ onStart }: Props) {
  const [mode, setMode] = useState<Mode>("topic");
  const [topic, setTopic] = useState<string | null>(topics[0] ?? null);
  const [count, setCount] = useState<number | "all">(10);

  const canStart = mode === "random" || !!topic;

  return (
    <div className="animate-fade-in space-y-8">
      <header className="space-y-3 text-center">
        <div
          className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl text-primary-foreground shadow-[var(--shadow-soft)]"
          style={{ background: "var(--gradient-hero)" }}
        >
          <Stethoscope className="h-7 w-7" />
        </div>
        <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Praxisprüfung
        </h1>
        <p className="text-sm text-muted-foreground sm:text-base">
          Offene Fragen üben — mit Musterlösung und Selbstbewertung.
        </p>
      </header>

      <Card className="space-y-6 rounded-3xl border-border/60 bg-card p-6 shadow-[var(--shadow-card)]">
        <section className="space-y-3">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Modus
          </h2>
          <div className="grid grid-cols-2 gap-3">
            <ModeButton
              active={mode === "topic"}
              onClick={() => setMode("topic")}
              icon={<BookOpen className="h-5 w-5" />}
              label="Themenbasiert"
            />
            <ModeButton
              active={mode === "random"}
              onClick={() => setMode("random")}
              icon={<Shuffle className="h-5 w-5" />}
              label="Zufälliger Mix"
            />
          </div>
        </section>

        {mode === "topic" && (
          <section className="animate-fade-in space-y-3">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Thema wählen
            </h2>
            <div className="space-y-2">
              {topics.map((t) => (
                <button
                  key={t}
                  onClick={() => setTopic(t)}
                  className={cn(
                    "group flex w-full items-center justify-between rounded-2xl border px-5 py-4 text-left transition-all duration-200",
                    topic === t
                      ? "border-primary bg-primary-soft shadow-sm"
                      : "border-border bg-card hover:border-primary/40 hover:bg-secondary",
                  )}
                >
                  <span className="text-base font-medium text-foreground">{t}</span>
                  <ChevronRight
                    className={cn(
                      "h-5 w-5 transition-all",
                      topic === t
                        ? "text-primary translate-x-0.5"
                        : "text-muted-foreground group-hover:translate-x-0.5",
                    )}
                  />
                </button>
              ))}
            </div>
          </section>
        )}

        <section className="space-y-3">
          <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Anzahl Fragen
          </h2>
          <div className="grid grid-cols-4 gap-2">
            {COUNTS.map((c) => (
              <button
                key={String(c)}
                onClick={() => setCount(c)}
                className={cn(
                  "rounded-full border px-3 py-3 text-sm font-semibold transition-all duration-200",
                  count === c
                    ? "border-primary bg-primary text-primary-foreground shadow-[var(--shadow-soft)]"
                    : "border-border bg-card text-foreground hover:border-primary/40 hover:bg-secondary",
                )}
              >
                {c === "all" ? "Alle" : c}
              </button>
            ))}
          </div>
        </section>
      </Card>

      <Button
        size="lg"
        disabled={!canStart}
        onClick={() => onStart(mode, topic, count)}
        className="h-14 w-full rounded-2xl text-base font-semibold shadow-[var(--shadow-soft)] transition-transform active:scale-[0.98]"
        style={{ background: "var(--gradient-hero)" }}
      >
        Prüfung starten
      </Button>
    </div>
  );
}

function ModeButton({
  active,
  onClick,
  icon,
  label,
}: {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex flex-col items-center justify-center gap-2 rounded-2xl border px-3 py-5 text-sm font-medium transition-all duration-200",
        active
          ? "border-primary bg-primary-soft text-primary shadow-sm"
          : "border-border bg-card text-foreground hover:border-primary/40 hover:bg-secondary",
      )}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}
