import { createFileRoute } from "@tanstack/react-router";
import { PraxisApp } from "@/components/praxis/PraxisApp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Praxisprüfung — Pflege Lernsimulator" },
      {
        name: "description",
        content:
          "Üben Sie offene Prüfungsfragen aus der Pflege mit Mustantworten und Selbstbewertung.",
      },
    ],
  }),
  component: PraxisApp,
});
