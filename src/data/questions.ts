export interface Question {
  id: string;
  topic: string;
  question: string;
  modelAnswer: string;
}

export const questions: Question[] = [
  {
    id: "be-1",
    topic: "Blutentnahme",
    question:
      "Welche Vorbereitungen treffen Sie vor einer venösen Blutentnahme, um die Sicherheit der Patientin und die Qualität der Probe zu gewährleisten?",
    modelAnswer:
      "Identifikation der Patientin nach 4-Augen-Prinzip (Name, Geburtsdatum), Aufklärung über den Eingriff und Einholen des Einverständnisses. Vorbereitung der Materialien: Stauschlauch, Desinfektionsmittel, sterile Tupfer, passende Kanüle, Röhrchen in korrekter Reihenfolge, Pflaster, Abwurfbehälter. Händedesinfektion, Handschuhe anziehen, geeignete Vene auswählen (z. B. V. mediana cubiti), Stauung max. 1 Minute, Punktionsstelle desinfizieren und Einwirkzeit beachten.",
  },
  {
    id: "be-2",
    topic: "Blutentnahme",
    question:
      "Nennen Sie mögliche Komplikationen bei der venösen Blutentnahme und beschreiben Sie passende Sofortmassnahmen.",
    modelAnswer:
      "Hämatom (Stauung lösen, Druck ausüben, hochlagern), Nervenverletzung (Nadel sofort entfernen, Arzt informieren), Kreislaufreaktion / Vasovagale Synkope (Patientin flach lagern, Beine hochlagern, Vitalzeichen kontrollieren), Infektion (Asepsis einhalten, bei Zeichen Arzt informieren), arterielle Punktion (hellrotes pulsierendes Blut, sofort Nadel entfernen und mind. 5 Minuten komprimieren).",
  },
  {
    id: "hy-1",
    topic: "Hygiene",
    question:
      "Beschreiben Sie die 5 Momente der Händehygiene gemäss WHO.",
    modelAnswer:
      "1. Vor Patientenkontakt, 2. Vor einer aseptischen Tätigkeit, 3. Nach Kontakt mit potenziell infektiösem Material, 4. Nach Patientenkontakt, 5. Nach Kontakt mit der unmittelbaren Patientenumgebung. Ziel ist die Unterbrechung der Übertragungswege von Krankheitserregern.",
  },
  {
    id: "hy-2",
    topic: "Hygiene",
    question:
      "Welche Schutzausrüstung (PSA) verwenden Sie bei der Pflege eines Patienten mit Verdacht auf eine Tröpfcheninfektion und in welcher Reihenfolge ziehen Sie sie an und aus?",
    modelAnswer:
      "PSA: Schutzkittel, chirurgische Mund-Nasen-Maske (bei aerogen FFP2/3), Schutzbrille, Handschuhe. Anziehen: Händedesinfektion → Kittel → Maske → Brille → Handschuhe. Ausziehen: Handschuhe → Kittel → Händedesinfektion → Brille → Maske → erneute Händedesinfektion. So wird Selbstkontamination vermieden.",
  },
  {
    id: "med-1",
    topic: "Medikamentenabgabe",
    question:
      "Nennen Sie die 6-R-Regel der sicheren Medikamentenverabreichung und erklären Sie kurz jeden Punkt.",
    modelAnswer:
      "Richtiger Patient (Identifikation), Richtiges Medikament (Verordnung prüfen), Richtige Dosierung (Berechnung kontrollieren), Richtige Applikationsart (oral, i.v., s.c. etc.), Richtiger Zeitpunkt (Verordnungszeit einhalten), Richtige Dokumentation (Verabreichung sofort dokumentieren). Ergänzend werden oft Richtige Wirkung und Richtige Aufbewahrung als 8-R-Regel ergänzt.",
  },
  {
    id: "med-2",
    topic: "Medikamentenabgabe",
    question:
      "Eine Patientin verweigert die Einnahme eines verordneten Medikaments. Wie gehen Sie vor?",
    modelAnswer:
      "Patientin in Ruhe nach dem Grund fragen, aufklären über Wirkung und mögliche Folgen einer Nichteinnahme, Selbstbestimmungsrecht respektieren. Verweigerung dokumentieren, behandelnden Arzt informieren, ggf. Alternativen besprechen (andere Form, anderer Zeitpunkt). Keine heimliche Verabreichung – ausser bei klar geregelter rechtlicher Grundlage.",
  },
  {
    id: "vit-1",
    topic: "Vitalzeichen",
    question:
      "Welche Normwerte gelten für Puls, Blutdruck, Atemfrequenz und Körpertemperatur bei einem gesunden Erwachsenen?",
    modelAnswer:
      "Puls: 60–100/min, Blutdruck: ca. 120/80 mmHg (normal < 130/85), Atemfrequenz: 12–20/min, Körpertemperatur: 36.5–37.5 °C. Abweichungen werden als Brady-/Tachykardie, Hypo-/Hypertonie, Brady-/Tachypnoe bzw. Hypo-/Hyperthermie bezeichnet.",
  },
];

export const topics = Array.from(new Set(questions.map((q) => q.topic)));
