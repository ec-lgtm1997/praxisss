export interface Question {
  id: string;
  topic: string;
  question: string;
  modelAnswer: string;
}

export const questions: Question[] = [
  // THEMA 1: BLUTENTNAHME
  {
    id: "be-1",
    topic: "Blutentnahme",
    question:
      "Welche anatomischen Strukturen werden bevorzugt für die venöse Blutabnahme genutzt und wie sollte sich eine geeignete Vene beim Tasten anfühlen?",
    modelAnswer:
      "Bevorzugt werden oberflächlich liegende Venen genutzt. Typische Stellen sind die Ellenbeuge, der Unterarm, der Handrücken, der Fußrücken sowie Kopfvenen bei Säuglingen. Besonders häufig nutzt man die V. mediana cubiti, V. cephalica und V. basilica. Eine geeignete Vene sollte sich weich, elastisch und wie ein „gut gefüllter Fahrradschlauch" anfühlen.",
  },
  {
    id: "be-2",
    topic: "Blutentnahme",
    question:
      "Warum dürfen pulsierende Gefäße bei einer venösen Blutentnahme keinesfalls punktiert werden?",
    modelAnswer:
      "Pulsierende Gefäße sind Arterien und keine Venen. Eine arterielle Punktion ist für eine normale venöse Laboruntersuchung nicht vorgesehen und birgt andere Risiken wie eine höhere Blutungsgefahr.",
  },
  {
    id: "be-3",
    topic: "Blutentnahme",
    question:
      "Nenne fünf physiologische Faktoren oder Fehler bei der Durchführung, die die Blutwerte des Patienten im Rahmen der Entnahme verfälschen können.",
    modelAnswer:
      "Die Blutwerte können beeinflusst werden durch: körperliche Belastung, Nahrungsaufnahme, Medikamente, die Körperlage, eine zu lange Stauung sowie starken Sog bei der Blutabnahme.",
  },
  {
    id: "be-4",
    topic: "Blutentnahme",
    question:
      "Welche konkreten laborchemischen und zellulären Veränderungen treten auf, wenn die Hand des Patienten vor der Abnahme stark „pumpt" oder der Stauschlauch zu lange angelegt bleibt?",
    modelAnswer:
      "Dies kann zu einer Hämolyse (Zerstörung der roten Blutkörperchen) sowie zu künstlich erhöhten Kaliumwerten und allgemein verfälschten Laborwerten führen.",
  },
  {
    id: "be-5",
    topic: "Blutentnahme",
    question:
      "Welche optimalen Rahmenbedingungen (Tageszeit, Zustand des Patienten) sollten für eine venöse Blutentnahme eingehalten werden, um die Vergleichbarkeit der Laborwerte zu gewährleisten?",
    modelAnswer:
      "Die Blutentnahme sollte möglichst morgens, nüchtern, im Liegen oder Sitzen und immer zur gleichen Tageszeit erfolgen.",
  },
  {
    id: "be-6",
    topic: "Blutentnahme",
    question:
      "Welche administrativen und patientenbezogenen Schritte müssen im Rahmen der Vorbereitung zwingend vor dem eigentlichen Stich durchgeführt werden?",
    modelAnswer:
      "Es muss die ärztliche Verordnung kontrolliert, der Patient mittels der 2-Merkmale-Methode identifiziert, das Einverständnis eingeholt und der Patient über den Ablauf informiert werden. Zudem muss das Material vorbereitet und eine Händedesinfektion durchgeführt werden.",
  },
  {
    id: "be-7",
    topic: "Blutentnahme",
    question:
      "In welchem Winkel sollte die Kanüle bei der venösen Blutentnahme in die Haut eingebracht werden?",
    modelAnswer:
      "Die Vene wird in einem Winkel von ca. 30° punktiert.",
  },
  {
    id: "be-8",
    topic: "Blutentnahme",
    question:
      "Wie lange darf der Stauschlauch während einer venösen Blutentnahme maximal angelegt bleiben und was ist beim Umgang mit den befüllten Röhrchen zu beachten?",
    modelAnswer:
      "Der Stauschlauch darf maximal 1 Minute angelegt bleiben. Die Röhrchen müssen nach der Entnahme 3–5-mal geschwenkt und dürfen nicht geschüttelt werden.",
  },
  {
    id: "be-9",
    topic: "Blutentnahme",
    question:
      "Vergleiche das Vacutainer-System mit dem Monovette-System hinsichtlich ihrer jeweiligen Vor- und Nachteile.",
    modelAnswer:
      "Vacutainer: Vorteil ist schnelles Arbeiten und ein einfacher Röhrchenwechsel. Nachteil ist, dass Venen durch das feste Vakuum kollabieren können. Monovette: Vorteil ist der regulierbare Sog, weshalb es gut für dünne Venen geeignet ist. Nachteile sind ein schwierigerer Röhrchenwechsel und eine höhere Gefahr von Venenverletzungen.",
  },
  {
    id: "be-10",
    topic: "Blutentnahme",
    question:
      "Warum ist die korrekte Reihenfolge der Blutentnahmeröhrchen (z. B. Serum vor Citrat, Heparin, EDTA) zwingend einzuhalten? Welche Fehler drohen bei Missachtung?",
    modelAnswer:
      "Bei einer falschen Reihenfolge können Zusätze aus den vorherigen Röhrchen verschleppt werden. Dies führt dazu, dass Gerinnungswerte falsch bestimmt, Elektrolyte verfälscht und Laborwerte unbrauchbar werden.",
  },
  {
    id: "be-11",
    topic: "Blutentnahme",
    question:
      "Welche Ursachen führen bei einer venösen Punktion zur Entstehung eines Hämatoms?",
    modelAnswer:
      "Ein Hämatom entsteht, wenn die Vene vollständig durchstochen wird, die Kanüle während der Abnahme verrutscht oder nach dem Entfernen der Nadel nicht ausreichend komprimiert wird.",
  },
  {
    id: "be-12",
    topic: "Blutentnahme",
    question:
      "Nenne fünf absolute Kontraindikationen für eine venöse Blutentnahme an einer bestimmten Extremität und begründe diese.",
    modelAnswer:
      "1. Arme mit laufender Infusion (Verfälschung der Laborwerte). 2. Shuntarme bei Dialysepatienten (Gefahr der Schädigung des Shunts). 3. Extremitäten mit Lymphödem, z. B. nach Mammakarzinom (Infektionsrisiko/Verschlimmerung). 4. Entzündete oder verletzte Stellen (schlechte Wundheilung/Infektionsrisiko). 5. Ödeme (erhöhte Komplikationsgefahr).",
  },
  {
    id: "be-13",
    topic: "Blutentnahme",
    question:
      "Was sind die Hauptindikationen für eine arterielle Blutabnahme und welche Gefäße werden hierfür punktiert?",
    modelAnswer:
      "Die arterielle Blutabnahme dient primär der Blutgasanalyse (BGA), der Beurteilung des Sauerstoffstatus und der Kontrolle des Säure-Basen-Haushalts. Punktionsorte sind die A. radialis oder die A. dorsalis pedis.",
  },
  {
    id: "be-14",
    topic: "Blutentnahme",
    question:
      "Erkläre die Durchführung und die Interpretation des Allen-Tests. Warum ist er vor einer Punktion der A. radialis obligatorisch?",
    modelAnswer:
      "Der Test prüft, ob die Hand über die A. ulnaris ausreichend durchblutet wird, falls die A. radialis Schaden nimmt. Durchführung: Der Patient bildet eine Faust, beide Arterien (A. radialis und A. ulnaris) werden gleichzeitig komprimiert, bis die Hand blass wird. Dann öffnet der Patient die Hand und die A. ulnaris wird freigegeben. Interpretation: Wird die Hand innerhalb von 10 Sekunden wieder rosig, ist der Test unauffällig. Bei verzögerter Durchblutung darf keine Punktion an der A. radialis erfolgen.",
  },
  {
    id: "be-15",
    topic: "Blutentnahme",
    question:
      "Welche makroskopischen Merkmale unterscheiden arterielles Blut von venösem Blut und welche pflegerische Besonderheit gilt nach der arteriellen Punktion?",
    modelAnswer:
      "Arterielles Blut ist hellrot und tritt pulsierend aus. Aufgrund einer höheren Blutungsgefahr ist nach der Entnahme eine deutlich längere Kompression der Punktionsstelle notwendig.",
  },
  {
    id: "be-16",
    topic: "Blutentnahme",
    question:
      "Nenne drei typische Indikationen und drei geeignete Punktionsstellen für eine kapillare Blutentnahme.",
    modelAnswer:
      "Indikationen: Blutzuckermessung, INR-/Quick-Bestimmung, kapillare Blutgasanalyse oder das Stoffwechselscreening bei Neugeborenen. Punktionsstellen: Fingerbeere, Ohrläppchen oder die laterale Ferse bei Säuglingen.",
  },
  {
    id: "be-17",
    topic: "Blutentnahme",
    question:
      "Welche zwei anwendungsspezifischen Besonderheiten müssen bei der Gewinnung von kapillärem Blut jeweils für die Blutzuckermessung und für die Blutgasanalyse (BGA) beachtet werden?",
    modelAnswer:
      "Bei einer Blutzuckermessung muss der erste Blutstropfen verworfen/entfernt werden. Bei einer kapillaren BGA muss die Kapillare absolut luftfrei gefüllt werden. Zudem darf die Einstichstelle generell nicht gequetscht werden.",
  },

  // THEMA 2: NADELSTICHVERLETZUNGEN & HYGIENE
  {
    id: "nsv-1",
    topic: "Nadelstichverletzungen & Hygiene",
    question:
      "Definiere den Begriff „Nadelstichverletzung" und nenne die drei gefährlichsten Erreger, die dadurch übertragen werden können.",
    modelAnswer:
      "Eine Nadelstichverletzung ist eine Verletzung durch ein scharfes oder spitzes Instrument, das zuvor mit Patientenmaterial kontaminiert wurde. Die gefährlichsten Folgeinfektionen sind Hepatitis B, Hepatitis C und HIV.",
  },
  {
    id: "nsv-2",
    topic: "Nadelstichverletzungen & Hygiene",
    question:
      "Welche Sofortmaßnahmen müssen unverzüglich direkt nach einer Nadelstichverletzung an der betroffenen Stelle eingeleitet werden?",
    modelAnswer:
      "Die Wunde muss sofort bluten gelassen werden (Blutung aktiv provozieren). Danach wird die Wunde ausgiebig mit einem geeigneten Antiseptikum gespült bzw. desinfiziert. Bei Schleimhautkontakt wird gründlich mit Wasser/Flüssigkeit gespült.",
  },
  {
    id: "nsv-3",
    topic: "Nadelstichverletzungen & Hygiene",
    question:
      "Welche administrativen Schritte und medizinischen Nachsorgemaßnahmen müssen nach den Erstmaßnahmen bei einer NSV zwingend erfolgen?",
    modelAnswer:
      "Es muss sofort der Betriebs- oder Durchgangsarzt informiert werden. Im Anschluss müssen serologische Kontrollen durchgeführt und falls nötig eine Postexpositionsprophylaxe (PEP) eingeleitet werden.",
  },
  {
    id: "nsv-4",
    topic: "Nadelstichverletzungen & Hygiene",
    question:
      "Was versteht man unter dem Begriff „Recapping", warum ist es verboten und wie wird es stattdessen richtig gemacht?",
    modelAnswer:
      "„Recapping" bezeichnet das Wiederaufsetzen der Schutzkappe auf eine gebrauchte Nadel. Es ist streng verboten, da es die Hauptursache für Kanülenverletzungen darstellt. Benutzte Sicherheitskanülen müssen stattdessen unter Aktivierung des Safety-Mechanismus sofort unverkappt in einem Abwurfbehälter entsorgt werden.",
  },

  // THEMA 3: HEIMAUFENTHALTSGESETZ, FIXIERUNG & STURZPROPHYLAXE
  {
    id: "fix-1",
    topic: "Heimaufenthaltsgesetz & Fixierung",
    question:
      "Für welchen Personenkreis und in welchen spezifischen Einrichtungen besitzt das Heimaufenthaltsgesetz (HeimAbg) Gültigkeit?",
    modelAnswer:
      "Es gilt für Menschen mit psychischer Erkrankung oder intellektueller Beeinträchtigung, die ständiger Pflege/Betreuung bedürfen und in ihrer Bewegungsfreiheit eingeschränkt werden. Gültig ist es in Alten-, Pflege- und Tagesheimen, Einrichtungen der Behinderten- und Jugendhilfe, sozialpädagogischen Zentren sowie in Krankenanstalten (dort jedoch ausdrücklich nicht auf psychiatrischen Abteilungen).",
  },
  {
    id: "fix-2",
    topic: "Heimaufenthaltsgesetz & Fixierung",
    question:
      "Nenne die rechtlichen Voraussetzungen, die gleichzeitig erfüllt sein müssen, damit eine Freiheitsbeschränkung rechtmäßig durchgeführt werden darf.",
    modelAnswer:
      "Der Betroffene muss psychisch erkrankt oder intellektuell beeinträchtigt sein. Es muss eine ernsthafte und erhebliche Gefahr für das eigene Leben, die eigene Gesundheit oder das Leben anderer vorliegen. Die Maßnahme muss geeignet, unbedingt notwendig, verhältnismäßig in Dauer/Intensität sowie das gelindeste Mittel (Ultima Ratio) sein. Sie darf niemals aus Personalmangel oder Bequemlichkeit erfolgen.",
  },
  {
    id: "fix-3",
    topic: "Heimaufenthaltsgesetz & Fixierung",
    question:
      "Welche Aufgaben übernimmt die Bewohnervertretung im Kontext von freiheitsbeschränkenden Maßnahmen?",
    modelAnswer:
      "Sie schützt das Recht der Bewohner auf persönliche Freiheit. Sie überprüft die Zulässigkeit der gemeldeten Maßnahmen, besucht die Bewohner, spricht mit dem Personal/Ärzten, nimmt Einsicht in die Pflegedokumentation, prüft gelindere Alternativen und kann bei Bedarf eine gerichtliche Überprüfung beantragen.",
  },
  {
    id: "fix-4",
    topic: "Heimaufenthaltsgesetz & Fixierung",
    question:
      "Nenne fünf verschiedene technische, mechanische oder medikamentöse Mittel, die im Alltag rechtlich als freiheitsbeschränkende Maßnahme gewertet werden.",
    modelAnswer:
      "Hochgezogene Bettgitter, Fixiergurte im Bett/Rollstuhl, angezogene Bremsen am Rollstuhl (wenn der Patient sich nicht selbst befreien kann), ein Therapietisch am Stuhl, versperrte Türen, das Wegnehmen von Gehhilfen sowie die Gabe von sedierenden Medikamenten zur reinen Ruhigstellung.",
  },
  {
    id: "fix-5",
    topic: "Heimaufenthaltsgesetz & Fixierung",
    question:
      "Erkläre den Unterschied zwischen einer „Freiheitsbeschränkung" und einer „Freiheitseinschränkung". Welche Kriterien müssen für Letztere erfüllt sein?",
    modelAnswer:
      "Eine Freiheitsbeschränkung erfolgt gegen oder ohne den Willen der betroffenen Person. Eine Freiheitseinschränkung liegt vor, wenn die entscheidungsfähige Person der Maßnahme (z. B. dem Bettgitter aus Angst vor Stürzen) ausdrücklich und freiwillig zustimmt. Sie muss die Situation und Folgen verstehen, verständlich aufgeklärt worden sein und kann die Zustimmung jederzeit widerrufen.",
  },
  {
    id: "fix-6",
    topic: "Heimaufenthaltsgesetz & Fixierung",
    question:
      "Skizziere den korrekten Ablaufplan (inklusive Meldewege und administrative Pflichten) von der Entstehung einer Gefährdungssituation bis zur Beendigung einer Fixierung.",
    modelAnswer:
      "1. Analyse der Gefährdungssituation. 2. Prüfung und Dokumentation gelinderer Alternativen. 3. Anordnung der Maßnahme (wenn alternativlos) und Aufklärung des Patienten. 4. Durchführung und lückenlose Dokumentation (Grund, Art, Beginn, Dauer). 5. Information der Einrichtungsleitung und unverzügliche Meldung an die Bewohnervertretung. 6. Regelmäßige Überprüfung der Notwendigkeit; sofortige Beendigung, sobald eine Voraussetzung wegfällt.",
  },
  {
    id: "fix-7",
    topic: "Heimaufenthaltsgesetz & Fixierung",
    question:
      "Nenne sechs gelindere Alternativen, die statt eines geschlossenen Bettgitters zur Sturzvermeidung geprüft werden müssen.",
    modelAnswer:
      "Einsetzen eines Niederflurbettes, Auslegen einer Sturzmatratze/Abrollmatte vor dem Bett, Nutzung von Sensormatten/Sensorkissen, Verwendung von halben Seitenteilen, Hüftprotektoren, regelmäßige Tagesstrukturen oder die Aktivierung eines Türsensors.",
  },
  {
    id: "fix-8",
    topic: "Heimaufenthaltsgesetz & Fixierung",
    question:
      "Wann genau gilt die Gabe eines sedierenden Medikaments als Fixierung und wann nicht?",
    modelAnswer:
      "Medikamente gelten dann als freiheitsbeschränkend, wenn sie gezielt mit der Absicht verabreicht werden, eine Person ruhigzustellen oder ihre Bewegungsfreiheit einzuschränken. Sind sie jedoch medizinisch-therapeutisch zur Behandlung einer Erkrankung notwendig, gelten sie nicht als Fixierung, selbst wenn Müdigkeit als Nebenwirkung auftritt.",
  },
  {
    id: "fix-9",
    topic: "Heimaufenthaltsgesetz & Fixierung",
    question:
      "Widerlege das Argument: „Fixierungen schützen ältere Menschen zuverlässig vor schweren Sturzverletzungen." Welche Risiken entstehen stattdessen?",
    modelAnswer:
      "Fixierungen schützen nicht automatisch vor Stürzen; sie erhöhen das Sturzrisiko oft sogar, weil Betroffene panisch versuchen, über Bettgitter zu klettern oder sich aus Gurten zu befreien. Zudem drohen immense physische Risiken (Muskelabbau, Dekubitus, Thrombosen, Pneumonien, Kontrakturen, Strangulation) sowie psychische Folgen (Angst, Depression, Resignation, Traumatisierung).",
  },
  {
    id: "fix-10",
    topic: "Heimaufenthaltsgesetz & Fixierung",
    question:
      "Welche intensiven pflegerischen Überwachungs- und Betreuungsmaßnahmen müssen bei einer aktiven, mechanischen Fixierung (z. B. 5-Punkt-Gurtfixierung) geleistet werden?",
    modelAnswer:
      "Es muss eine kontinuierliche Überwachung (bei 5- oder 7-Punkt-Fixierung eine Eins-zu-eins-Überwachung) gewährleistet sein. Regelmäßig müssen Durchblutung, Sensibilität und Motorik kontrolliert sowie Prophylaxen durchgeführt werden. Flüssigkeitszufuhr, Ausscheidung und Schmerzzustände sind engmaschig zu überwachen, alles ist detailliert zu dokumentieren und nach der Maßnahme ist ein Nachgespräch mit dem Betroffenen zu führen.",
  },
  {
    id: "sturz-1",
    topic: "Sturzprophylaxe",
    question:
      "Nenne je drei intrinsische (personenbezogene) und drei extrinsische (umgebungsbezogene) Risikofaktoren für Stürze im Alter.",
    modelAnswer:
      "Intrinsisch: Eingeschränkte Mobilität, Muskelschwäche, Gangunsicherheit, Schwindel, Exsikkose (Flüssigkeitsmangel) oder Demenz. Extrinsisch: Ungeeignetes Schuhwerk, Stolperfallen im Raum, schlechte/unzureichende Beleuchtung oder die Fixierungsmaßnahmen selbst.",
  },
  {
    id: "sturz-2",
    topic: "Sturzprophylaxe",
    question:
      "Wie kann die Mobilität von älteren Menschen im Pflegealltag gezielt gefördert werden und warum ist dies die beste Sturzprophylaxe?",
    modelAnswer:
      "Durch frühe Mobilisation, Gehtraining (auch mit Hilfsmitteln), kinästhetische Bewegungsunterstützung, gezielte Balance- und Gleichgewichtsübungen sowie die Nutzung der vorhandenen Ressourcen im Alltag. Eine verbesserte Mobilität stärkt die Muskeln und die Trittsicherheit, während Immobilität unweigerlich zu Muskelabbau, Kontrakturen und damit zu einem noch höheren Sturzrisiko führt.",
  },

  // THEMA 4: INJEKTIONEN & INFUSIONEN
  {
    id: "inj-1",
    topic: "Injektionen & Infusionen",
    question:
      "Nenne die Injektionsorte für intrakutane, subkutane und intramuskuläre Injektionen sowie deren ungefähre Wirkungseintrittszeiten.",
    modelAnswer:
      "Intrakutan: Rücken, Oberschenkel-Außenseite, Oberarm-Streckseite, Unterarm-Innenseite. Wirkung lokal (unter der obersten Hautschicht bildet sich eine Quaddel). Subkutan (s.c.): Unterhautfettgewebe von Bauch, Oberschenkel, Oberarm oder Gesäß. Wirkungseintritt nach ca. 30 Minuten. Intramuskulär (i.m.): M. deltoideus, M. gluteus medius/minimus, M. quadriceps femoris oder M. vastus lateralis. Wirkungseintritt nach ca. 10–20 Minuten.",
  },
  {
    id: "inj-2",
    topic: "Injektionen & Infusionen",
    question:
      "Was besagt die „7-R-Regel" bei der Medikamentenverabreichung? Zähle alle Komponenten auf.",
    modelAnswer:
      "Richtiger Patient, richtiges Arzneimittel, richtige Dosierung, richtige Applikationsart, richtiger Zeitpunkt, richtige Anwendungsdauer, richtige Dokumentation.",
  },
  {
    id: "inj-3",
    topic: "Injektionen & Infusionen",
    question:
      "Nenne vier absolute Kontraindikationen für die Durchführung einer intramuskulären (i.m.) Injektion.",
    modelAnswer:
      "Eine gesteigerte Blutungsneigung, bestehende orale Antikoagulation (Blutverdünner), bekannte Gerinnungsstörungen, eine laufende Lysetherapie sowie der akute Verdacht auf einen Herzinfarkt.",
  },
  {
    id: "inj-4",
    topic: "Injektionen & Infusionen",
    question:
      "Du möchtest eine i.m.-Injektion verabreichen. Bei der obligatorischen Aspiration vor der Injektion fließt Blut in die Spritze. Wie reagierst du korrekt?",
    modelAnswer:
      "Das Medikament darf keinesfalls injiziert werden. Die Kanüle ist sofort zu entfernen, die gesamte Spritze samt Inhalt zu verwerfen. Das Medikament muss komplett neu aufgezogen und die Injektion an einer anderen anatomischen Stelle erneut durchgeführt werden.",
  },
  {
    id: "inj-5",
    topic: "Injektionen & Infusionen",
    question:
      "Berechne die Infusionsgeschwindigkeit (Tropfen pro Minute) für folgendes Szenario: 500 ml Infusionslösung sollen über einen Zeitraum von exakt 5 Stunden verabreicht werden.",
    modelAnswer:
      "Formel: Tropfen/min = (Infusionsmenge in ml × 20) / Infusionszeit in Minuten. Rechnung: 5 Stunden = 300 Minuten. 500 ml × 20 = 10.000. 10.000 / 300 = 33,33 Tropfen/Minute. Antwort: Die Infusion muss auf ca. 33 Tropfen pro Minute eingestellt werden.",
  },
  {
    id: "inj-6",
    topic: "Injektionen & Infusionen",
    question:
      "Was versteht man unter einer Hypodermoklysis, welche Flüssigkeitsmenge darf darüber maximal in 24 Stunden verabreicht werden und welche Kontraindikationen gibt es?",
    modelAnswer:
      "Die Hypodermoklysis ist eine subkutane Infusion zur Flüssigkeits- oder Medikamentengabe. Es dürfen maximal 3000 ml innerhalb von 24 Stunden infundiert werden (ab 3000 ml sind zwei Punktionsstellen nötig). Kontraindikationen sind akute Notfallsituationen (Schock, Sepsis) mit Bedarf an rascher Volumengabe, schwere Herzinsuffizienz, Hypervolämie sowie die Anwendung bei Kindern/Jugendlichen.",
  },

  // THEMA 5: ZENTRALVENÖSE KATHETER & PORT-SYSTEME
  {
    id: "zvk-1",
    topic: "ZVK & Port-Systeme",
    question:
      "Was versteht man unter einem „Port-Block" (inkl. technischer Durchführung des positiven Drucks) und welche Hygieneprinzipien gelten beim Verbandswechsel einer liegenden Port-Nadel?",
    modelAnswer:
      "Ein Portblock füllt die Portkammer und den Katheter vollständig mit Flüssigkeit (z. B. NaCl 0,9% oder Taurolidin), um Verschlüssen (Okklusionen) und Infektionen vorzubeugen. Positiver Druck: Beim Injizieren des letzten Milliliters wird die Klemme oder der Dreiwegehahn geschlossen, während man noch drückt, damit kein Patientenblut in die Katheterspitze zurückgesaugt wird. Verbandswechsel: Erfordert absolut steriles, aseptisches Arbeiten. Nach Entfernung des alten Verbands und Hautdesinfektion (Einwirkzeit beachten) wird ein neuer steriler Verband angelegt; dieser ist spätestens alle 48 Stunden bzw. sofort bei Feuchtigkeit oder Ablösung zu wechseln. Es dürfen nur 10-ml-Spritzen verwendet und es muss pulsatil gespült werden.",
  },
];

export const topics = Array.from(new Set(questions.map((q) => q.topic)));
