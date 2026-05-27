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
      "Bevorzugt werden oberflächlich liegende Venen genutzt. Typische Stellen sind die Ellenbeuge, der Unterarm, der Handrücken, der Fußrücken sowie Kopfvenen bei Säuglingen. Besonders häufig nutzt man die V. mediana cubiti, V. cephalica und V. basilica. Eine geeignete Vene sollte sich weich, elastisch und wie ein \"gut gefüllter Fahrradschlauch\" anfühlen.",
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
      "Welche konkreten laborchemischen und zellulären Veränderungen treten auf, wenn die Hand des Patienten vor der Abnahme stark „pumpt\" oder der Stauschlauch zu lange angelegt bleibt?",
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
      "Definiere den Begriff Nadelstichverletzung und nenne die drei gefährlichsten Erreger, die dadurch übertragen werden können.",
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
      "Was versteht man unter dem Begriff Recapping, warum ist es verboten und wie wird es stattdessen richtig gemacht?",
    modelAnswer:
      "Recapping bezeichnet das Wiederaufsetzen der Schutzkappe auf eine gebrauchte Nadel. Es ist streng verboten, da es die Hauptursache für Kanülenverletzungen darstellt. Benutzte Sicherheitskanülen müssen stattdessen unter Aktivierung des Safety-Mechanismus sofort unverkappt in einem Abwurfbehälter entsorgt werden.",
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
      "Erkläre den Unterschied zwischen einer Freiheitsbeschränkung und einer Freiheitseinschränkung. Welche Kriterien müssen für Letztere erfüllt sein?",
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
      "Widerlege das Argument: Fixierungen schützen ältere Menschen zuverlässig vor schweren Sturzverletzungen. Welche Risiken entstehen stattdessen?",
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
      "Was besagt die 7-R-Regel bei der Medikamentenverabreichung? Zähle alle Komponenten auf.",
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
      "Was versteht man unter einem Port-Block (inkl. technischer Durchführung des positiven Drucks) und welche Hygieneprinzipien gelten beim Verbandswechsel einer liegenden Port-Nadel?",
    modelAnswer:
      "Ein Portblock füllt die Portkammer und den Katheter vollständig mit Flüssigkeit (z. B. NaCl 0,9% oder Taurolidin), um Verschlüssen (Okklusionen) und Infektionen vorzubeugen. Positiver Druck: Beim Injizieren des letzten Milliliters wird die Klemme oder der Dreiwegehahn geschlossen, während man noch drückt, damit kein Patientenblut in die Katheterspitze zurückgesaugt wird. Verbandswechsel: Erfordert absolut steriles, aseptisches Arbeiten. Nach Entfernung des alten Verbands und Hautdesinfektion (Einwirkzeit beachten) wird ein neuer steriler Verband angelegt; dieser ist spätestens alle 48 Stunden bzw. sofort bei Feuchtigkeit oder Ablösung zu wechseln. Es dürfen nur 10-ml-Spritzen verwendet und es muss pulsatil gespült werden.",
  },


// ─────────────────────────────────────────────────────────────
// 45 ZUSÄTZLICHE FRAGEN – im selben Format wie questions.ts
// Einfach in das questions-Array einfügen (vor der schließenden `];`)
// ─────────────────────────────────────────────────────────────

  // BLUTENTNAHME – VERTIEFUNG
  {
    id: "be-v-1",
    topic: "Blutentnahme",
    question:
      "Warum darf nach der Hautdesinfektion die Punktionsstelle nicht mehr mit unsterilen Fingern berührt werden, auch wenn dies für die Venenfindung hilfreich wäre?",
    modelAnswer:
      "Durch das Berühren werden Hautkeime wieder auf die desinfizierte Stelle übertragen und die Desinfektionswirkung wird vollständig aufgehoben. Dies würde das Infektionsrisiko (z. B. Phlebitis, Sepsis) erheblich erhöhen. Ist eine Palpation nach Desinfektion unvermeidbar, muss ein steriler Handschuh oder ein steriler Tupfer verwendet werden.",
  },
  {
    id: "be-v-2",
    topic: "Blutentnahme",
    question:
      "Welche konkrete Lagerung des Arms ist nach der venösen Punktion empfohlen und warum ist dies relevant?",
    modelAnswer:
      "Der Arm sollte nach der Punktion gestreckt gehalten werden – nicht angewinkelt. Wird der Arm angewinkelt, erhöht sich der Druck auf die Punktionsstelle und das Blutungsrisiko (Hämatom) steigt deutlich. Die gestreckte Haltung unterstützt eine effektive Kompression der Einstichstelle.",
  },
  {
    id: "be-v-3",
    topic: "Blutentnahme",
    question:
      "Ein Patient berichtet, er habe heute Morgen sein Frühstück gegessen, bevor er zur Blutabnahme kam. Welche Laborwerte können dadurch konkret verfälscht sein?",
    modelAnswer:
      "Der Nüchternblutzucker (Glucose) ist nach einer Mahlzeit erhöht. Triglyceride sind nach fetthaltigen Mahlzeiten erhöht. Lipämisches (trübes) Serum kann außerdem Messergebnisse für Elektrolyte, Enzyme und Proteine stören. Konsequenz: Idealerweise die Blutabnahme wiederholen oder den Umstand in der Dokumentation vermerken.",
  },
  {
    id: "be-v-4",
    topic: "Blutentnahme",
    question:
      "Was versteht man unter dem Begriff 'Hämolyse' im Kontext der Blutabnahme und welche Maßnahmen bei der Entnahme provozieren sie?",
    modelAnswer:
      "Hämolyse bezeichnet die Zerstörung der roten Blutkörperchen mit Freisetzung des Zellinnhalts ins Plasma. Ursachen bei der Blutabnahme sind: zu starker Sog (besonders beim Vacutainer), zu langes Stauen, heftiges Schütteln der Röhrchen, zu kleine Kanüle oder langsames Fließen des Blutes. Folge: Kalium, LDH und GOT erscheinen falsch erhöht – die Probe wird unbrauchbar.",
  },
  {
    id: "be-v-5",
    topic: "Blutentnahme",
    question:
      "Erkläre, warum die Blutabnahme idealerweise immer zur selben Tageszeit erfolgen sollte. Nenne zwei konkrete Beispiele für tagesrhythmisch schwankende Parameter.",
    modelAnswer:
      "Viele Laborparameter unterliegen einer circadianen Rhythmik (tageszeitliche Schwankung). Beispiele: Kortisol ist morgens am höchsten und abends am niedrigsten; Eisen ist ebenfalls morgens höher. Nur bei gleichbleibender Abnahmezeit sind Verlaufskontrollen sinnvoll vergleichbar.",
  },
  {
    id: "be-v-6",
    topic: "Blutentnahme",
    question:
      "Was bedeutet die '2-Merkmale-Methode' zur Patientenidentifikation und warum ist sie vor jeder invasiven Maßnahme verpflichtend?",
    modelAnswer:
      "Vor der Blutabnahme wird die Identität anhand von zwei unabhängigen Merkmalen bestätigt, z. B. Name + Geburtsdatum oder Name + Patientennummer. Ziel: Verwechslungen ausschließen, da falsch zugeordnete Blutproben zu falschen Diagnosen und gefährlichen Therapieentscheidungen führen können. Dies ist eine grundlegende Patientensicherheitsmaßnahme.",
  },
  {
    id: "be-v-7",
    topic: "Blutentnahme",
    question:
      "Warum darf bei einem Dialysepatienten keine Blutabnahme am Shuntarm erfolgen? Welche konkreten Risiken entstehen?",
    modelAnswer:
      "Der Shunt ist eine operativ angelegte arteriovenöse Verbindung für die Dialyse. Eine Punktion kann den Shunt schädigen, eine Thrombose verursachen oder Infektionen einbringen. Der Shuntverlust bedeutet den Verlust des Dialysezugangs und ist damit lebensbedrohlich für den Patienten. Beide Arme müssen daher genau abgeklärt und die Dokumentation beachtet werden.",
  },
  {
    id: "be-v-8",
    topic: "Blutentnahme",
    question:
      "Erkläre den Unterschied zwischen dem Vacutainer- und dem Monovette-System hinsichtlich des Druckprinzips und wann du welches System bevorzugen würdest.",
    modelAnswer:
      "Der Vacutainer funktioniert mit einem vorgefertigten Unterdruck (Vakuum) – der Sog ist fix und nicht regulierbar, was bei schwachen Venen zum Kollaps führen kann. Die Monovette erzeugt den Sog durch Zurückziehen des Kolbens – dieser ist regulierbar und sanfter, daher besser geeignet bei dünnen, fragilen oder schwierigen Venen. Empfehlung: Vacutainer bei guten Venenverhältnissen für schnelles Arbeiten; Monovette bei älteren Patienten oder schlechten Venen.",
  },

  // NADELSTICHVERLETZUNGEN – VERTIEFUNG
  {
    id: "nsv-v-1",
    topic: "Nadelstichverletzungen & Hygiene",
    question:
      "Ein Kollege sagt: 'Die Nadel war nur kurz in der Haut – da kann ich mir eine PEP sparen.' Wie reagierst du fachlich korrekt auf diese Aussage?",
    modelAnswer:
      "Diese Aussage ist falsch und gefährlich. Bereits eine oberflächliche Verletzung mit kontaminierter Nadel kann Hepatitis B, Hepatitis C oder HIV übertragen. Das Transmissionsrisiko hängt von Erregermenge, Nadeltiefe und Immunstatus ab – eine eigene Risikoeinschätzung ist keine medizinische Entscheidung. Korrekt: Sofortmaßnahmen einleiten, Betriebsarzt aufsuchen, serologische Baseline-Abnahme und ggf. PEP innerhalb von 2 Stunden beginnen.",
  },
  {
    id: "nsv-v-2",
    topic: "Nadelstichverletzungen & Hygiene",
    question:
      "Welche drei Infektionskrankheiten sind bei Nadelstichverletzungen besonders gefürchtet und warum unterscheiden sie sich in ihrer Übertragungswahrscheinlichkeit?",
    modelAnswer:
      "Hepatitis B hat das höchste Übertragungsrisiko (bis zu 30 % bei nicht-geimpften Personen) aufgrund der sehr hohen Viruslast im Blut. Hepatitis C hat ein mittleres Risiko (ca. 1–3 %) – kein Impfschutz verfügbar, aber gute Therapierbarkeit. HIV hat das geringste Risiko (ca. 0,3 %), führt aber zu einer lebenslangen Erkrankung; eine PEP innerhalb von 2 Stunden ist hocheffektiv. Jede NSV ist daher ernst zu nehmen.",
  },
  {
    id: "nsv-v-3",
    topic: "Nadelstichverletzungen & Hygiene",
    question:
      "Welche konkreten organisatorischen und technischen Maßnahmen können auf einer Station eingeführt werden, um die Häufigkeit von Nadelstichverletzungen dauerhaft zu senken?",
    modelAnswer:
      "Verpflichtende Verwendung von Sicherheitskanülen mit automatischem Schutzmechanismus. Ausreichend Abwurfbehälter in unmittelbarer Reichweite – kein Transport offener Nadeln. Regelmäßige Schulungen zu sicherer Handhabung und Entsorgung. Klares Meldewesen und No-Blame-Kultur für schnelle Meldung nach NSV. Striktes Verbot des Recappings als absolute Regel kommunizieren und kontrollieren.",
  },

  // HEIMAUFENTHALTSGESETZ, FIXIERUNG & STURZ – VERTIEFUNG
  {
    id: "fix-v-1",
    topic: "Heimaufenthaltsgesetz & Fixierung",
    question:
      "Warum gilt das Heimaufenthaltsgesetz ausdrücklich NICHT auf psychiatrischen Abteilungen von Krankenanstalten? Welches Gesetz ist dort stattdessen anzuwenden?",
    modelAnswer:
      "Auf psychiatrischen Abteilungen gilt das Unterbringungsgesetz (UbG), welches die Unterbringung psychisch kranker Personen gegen ihren Willen mit eigenen Verfahren und Richtervorbehalten regelt. Das HeimAufG ist für Pflegeeinrichtungen konzipiert und nicht für psychiatrische Akutstationen.",
  },
  {
    id: "fix-v-2",
    topic: "Heimaufenthaltsgesetz & Fixierung",
    question:
      "Eine Bewohnerin hat einem Bettgitter schriftlich zugestimmt. Beim Nachtdienst versucht sie, das Bettgitter aufzuschieben und klettert darüber. Was bedeutet dieses Verhalten rechtlich und was muss jetzt passieren?",
    modelAnswer:
      "Das Verhalten gilt als Widerruf der Zustimmung – die Freiheitseinschränkung wird damit zur Freiheitsbeschränkung. Das Bettgitter muss sofort entfernt oder geöffnet werden. Die Situation muss neu bewertet werden: Sind alle Voraussetzungen des HeimAufG erfüllt? Die Bewohnervertretung ist zu verständigen, die Dokumentation sofort zu aktualisieren und alternative Maßnahmen (z. B. Niederflurbett, Sturzmatratze) sind zu prüfen.",
  },
  {
    id: "fix-v-3",
    topic: "Heimaufenthaltsgesetz & Fixierung",
    question:
      "Was muss in der Dokumentation einer Freiheitsbeschränkung lückenlos enthalten sein? Nenne mindestens sieben Pflichtinhalte.",
    modelAnswer:
      "Pflichtinhalte sind: 1. Grund/Anlass der Maßnahme. 2. Art der Maßnahme (z. B. Bettgitter, Gurte). 3. Beginn der Maßnahme (Datum, Uhrzeit). 4. Dauer und Verlauf. 5. Geprüfte und durchgeführte Alternativen. 6. Aufklärung der betroffenen Person. 7. Information der Einrichtungsleitung. 8. Meldung an die Bewohnervertretung. 9. Evaluationszeitpunkte und Ergebnisse.",
  },
  {
    id: "fix-v-4",
    topic: "Heimaufenthaltsgesetz & Fixierung",
    question:
      "Erkläre, warum eine Fixierung tatsächlich MEHR Pflegeaufwand bedeutet und keine Arbeitserleichterung darstellt.",
    modelAnswer:
      "Eine Fixierung erfordert kontinuierliche Überwachung (bei 5-/7-Punkt-Fixierung sogar 1:1-Betreuung), regelmäßige Kontrolle von Durchblutung, Sensibilität und Motorik sowie intensivierte Prophylaxen gegen Dekubitus, Thrombose, Pneumonie und Kontrakturen. Dazu kommen lückenlose Dokumentation, ein Nachgespräch mit der betroffenen Person und regelmäßige Meldungen an die Bewohnervertretung. Fixierungen binden damit deutlich mehr Personalressourcen als präventive Alternativen.",
  },
  {
    id: "fix-v-5",
    topic: "Heimaufenthaltsgesetz & Fixierung",
    question:
      "Nenne fünf konkrete Alternativen zur Fixierung, die speziell das nächtliche Sturz- und Weglaufrisiko bei dementen Personen reduzieren können.",
    modelAnswer:
      "1. Niederflurbett mit Sturzmatratze/Abrollmatte am Boden. 2. Sensormatte oder Sensorbalken, der Alarm schlägt, wenn die Person aufsteht. 3. Türsensor oder Weglaufsicherung (Chip-System am Kleidungsstück). 4. Nachtcafé oder strukturierte Nachtaktivität für unruhige Personen. 5. Einbeziehung von Angehörigen oder Bezugspersonen zur beruhigenden Begleitung. 6. Stoppersocken und festes Schuhwerk bereitstellen. 7. Ausreichende Beleuchtung im Zimmer und auf dem Weg zur Toilette.",
  },
  {
    id: "fix-v-6",
    topic: "Heimaufenthaltsgesetz & Fixierung",
    question:
      "Unterscheide mechanische, medikamentöse und räumliche Fixierung anhand je eines konkreten Beispiels. Erkläre außerdem, wann eine medikamentöse Maßnahme als Fixierung gilt.",
    modelAnswer:
      "Mechanisch: Fixiergurt im Bett, Bettgitter oder Therapietisch am Rollstuhl. Räumlich: Versperrte Türen oder geschlossene Station mit kompliziertem Türmechanismus. Medikamentös: Gabe von Benzodiazepinen oder Antipsychotika mit dem expliziten Ziel der Ruhigstellung. Wichtig: Medikamente gelten NICHT als Fixierung, wenn sie medizinisch-therapeutisch indiziert sind – auch wenn Sedierung eine Nebenwirkung ist. Entscheidend ist die Intention.",
  },
  {
    id: "fix-v-7",
    topic: "Heimaufenthaltsgesetz & Fixierung",
    question:
      "Welche Rolle spielt die Biografie eines Bewohners bei der Sturzprophylaxe und der Auswahl von Alternativen zur Fixierung?",
    modelAnswer:
      "Die Biografie gibt Aufschluss über frühere Gewohnheiten, Tagesrhythmus und Bewegungsmuster. Beispiel: Eine Person, die nachts oft aufgestanden ist (z. B. für den Toilettengang), braucht eine angepasste Nachtstruktur, keine Fixierung. Biografiebezogene Beschäftigung (Musik, vertraute Gegenstände) kann Unruhe reduzieren. Validation und Reminiszenz können Angst mindern. Individuelle Maßnahmen sind stets effektiver als standardisierte Fixierungen.",
  },
  {
    id: "sturz-v-1",
    topic: "Sturzprophylaxe",
    question:
      "Wie wird die Wirksamkeit von Sturzprophylaxe-Maßnahmen systematisch überprüft? Nenne fünf konkrete Methoden.",
    modelAnswer:
      "1. Regelmäßige Sturzrisikoeinschätzung mit validierten Instrumenten (z. B. Morse Fall Scale). 2. Dokumentation und Analyse aller Sturz- und Beinahe-Sturzereignisse. 3. Regelmäßige Fallbesprechungen im interprofessionellen Team. 4. Beurteilung von Gangbild, Gleichgewicht und Mobilität in definierten Abständen. 5. Rückmeldungen der Bewohner und Angehörigen einholen sowie Überprüfung, ob eingesetzte Hilfsmittel korrekt verwendet werden.",
  },
  {
    id: "sturz-v-2",
    topic: "Sturzprophylaxe",
    question:
      "Eine ältere Patientin hat nach einer Hüft-OP starke Schmerzen und traut sich nicht aufzustehen. Welche pflegerischen Maßnahmen helfen, eine Immobilität mit ihren Folgerisiken zu verhindern?",
    modelAnswer:
      "Adäquates Schmerzmanagement als Grundvoraussetzung (nach ärztlicher Anordnung). Frühe Mobilisation ab dem ersten postoperativen Tag unter fachkundiger Anleitung. Kinästhetische Bewegungsunterstützung – Bewegung führen statt heben. Physiotherapie einbinden: Gehtraining und Balanceübungen mit Gehhilfe. Motivation und Ermutigung: Angst ernst nehmen und Sicherheit vermitteln. Sturzprophylaxe-Maßnahmen aktiv umsetzen (Stoppersocken, Rollator, Rufanlage). Prophylaxen gegen Thrombose, Pneumonie und Dekubitus konsequent durchführen.",
  },

  // INJEKTIONEN – VERTIEFUNG
  {
    id: "inj-v-1",
    topic: "Injektionen & Infusionen",
    question:
      "Erkläre, warum bei subkutanen Fertigspritzen (z. B. Heparin, NMH) die Luftblase in der Spritze verbleibt und nicht entfernt werden darf.",
    modelAnswer:
      "Die Luftblase sitzt konstruktionsbedingt am Ende des Kolbens und stellt sicher, dass die gesamte Medikamentenmenge vollständig injiziert wird. Beim Entfernen der Luftblase kann Medikament verloren gehen, was zu einer Unterdosierung führen kann. Außerdem kann ein subkutan eingebrachter Luftbolus keine Embolie auslösen – das Risiko besteht nur bei intravenöser Gabe.",
  },
  {
    id: "inj-v-2",
    topic: "Injektionen & Infusionen",
    question:
      "Welche spezifischen Besonderheiten gelten beim Umgang mit Insulin-Pens vor und während der Injektion?",
    modelAnswer:
      "Vor jeder Injektion eine neue Nadel aufschrauben – Mehrfachverwendung erhöht Verletzungsrisiko und Kontaminationsgefahr. Pen ca. 20-mal schwenken (nicht schütteln), um Trübinsulin gleichmäßig zu suspendieren. Hautfalte während der Injektion halten, um eine subkutane statt intramuskuläre Injektion sicherzustellen. Nach der Injektion ca. 10 Sekunden warten, bevor die Nadel entfernt wird – verhindert Medikamentenverlust. Spritz-Ess-Abstand je nach Insulintyp einhalten.",
  },
  {
    id: "inj-v-3",
    topic: "Injektionen & Infusionen",
    question:
      "Was geschieht physiologisch, wenn bei einer i.m.-Injektion versehentlich Knochen getroffen wird? Wie ist zu reagieren?",
    modelAnswer:
      "Knochenkontakt ist sehr schmerzhaft und kann zu einer Periost-Irritation führen. Das Medikament darf auf keinen Fall injiziert werden, da intraossäre Depotbildung oder Knochenschäden möglich sind. Korrekte Reaktion: Kanüle minimal zurückziehen, erneut aspirieren und dann erst injizieren. Ist die Lage unsicher, Kanüle ganz entfernen und an anderer Stelle neu ansetzen.",
  },
  {
    id: "inj-v-4",
    topic: "Injektionen & Infusionen",
    question:
      "Ein Patient unter oraler Antikoagulation (Marcoumar) benötigt laut ärztlicher Anordnung eine i.m.-Injektion. Wie verhältst du dich?",
    modelAnswer:
      "Orale Antikoagulation ist eine klare Kontraindikation für i.m.-Injektionen. Bei erhöhter Blutungsneigung kann es zu einem ausgedehnten intramuskulären Hämatom kommen, das zu Nervenschäden und Kompartmentsyndrom führen kann. Korrekte Reaktion: Injektion NICHT durchführen und ärztliche Rücksprache suchen. Der Arzt muss entscheiden, ob eine alternative Applikationsform (z. B. subkutan, oral, intravenös) gewählt werden kann.",
  },
  {
    id: "inj-v-5",
    topic: "Injektionen & Infusionen",
    question:
      "Erkläre, warum bei der intrakutanen Injektion zwingend eine Quaddel entstehen muss und was das Ausbleiben einer Quaddel bedeutet.",
    modelAnswer:
      "Die Quaddel entsteht, wenn das Medikament korrekt in die oberste Hautschicht (Stratum dermis) injiziert wird. Das Gewebe hat wenig Dehnungsfähigkeit, weshalb das Medikament die Haut sichtbar anhebt. Fehlt die Quaddel, wurde zu tief injiziert (subkutan statt intrakutan). Das Testergebnis (z. B. Allergietest, Tuberkulintest) ist dann nicht verwertbar und die Injektion muss wiederholt werden.",
  },
  {
    id: "inj-v-6",
    topic: "Injektionen & Infusionen",
    question:
      "Welche Maßnahmen helfen konkret, den Schmerz bei einer Injektion für den Patienten zu minimieren? Nenne mindestens fünf.",
    modelAnswer:
      "1. Angst ernst nehmen und Patienten ausreichend informieren. 2. Desinfektionsmittel vollständig trocknen lassen (feuchtes Desinfektionsmittel brennt). 3. Medikament auf Raumtemperatur bringen (kalte Lösung schmerzt mehr). 4. Entspannte Lagerung und Muskelentspannung fördern. 5. Langsam und gleichmäßig injizieren (kein rascher Druck). 6. Atemtechnik anwenden (z. B. ausatmen während der Injektion). 7. Hautfalte bei s.c.-Injektion korrekt verwenden.",
  },
  {
    id: "inj-v-7",
    topic: "Injektionen & Infusionen",
    question:
      "Warum muss bei regelmäßigen subkutanen Injektionen (z. B. Insulin, Heparin) die Einstichstelle systematisch rotiert werden?",
    modelAnswer:
      "Wiederholte Injektionen an derselben Stelle führen zu Lipodystrophie (fettige Verhärtungen oder Eindellungen der Haut). Lipodystrophisches Gewebe absorbiert das Medikament unregelmäßig, was zu Blutzucker- oder Gerinnungsschwankungen führt. Durch ein systematisches Rotationsschema wird das Gewebe geschont und eine gleichmäßige Resorption sichergestellt.",
  },
  {
    id: "inj-v-8",
    topic: "Injektionen & Infusionen",
    question:
      "Beschreibe die korrekte hygienische Zubereitung eines Medikaments aus einer Glasampulle. Auf welche Details ist dabei besonders zu achten?",
    modelAnswer:
      "Arbeitsfläche vorher wischdesinfizieren und hygienische Händedesinfektion durchführen. Ampulle auf Trübungen, Verfallsdatum und Unversehrtheit prüfen. Ampullenhals mit einem Tupfer abbrechen oder mit spezieller Ampullenfeile einritzen. Medikament mit einer Aufziehkanüle (stumpfe Filterkanüle) aufziehen, um Glaspartikel zu vermeiden. Danach Aufziehkanüle gegen die korrekte Injektionskanüle wechseln. Spritze sofort beschriften (Medikament, Dosis, Zeit) und die Lösung zeitnah verabreichen.",
  },

  // PVVK & INFUSIONSTHERAPIE – VERTIEFUNG
  {
    id: "inf-v-1",
    topic: "Injektionen & Infusionen",
    question:
      "Was ist eine Thrombophlebitis und wie erkennst du sie bei einer liegenden PVVK klinisch?",
    modelAnswer:
      "Thrombophlebitis ist eine Entzündung der Venenwand mit gleichzeitiger Thrombenbildung. Klinische Zeichen sind Rötung, Schwellung, Überwärmung und Schmerz entlang der Vene – oft ist ein schmerzhafter Venenstrang tastbar. Ursachen sind mechanische Reizung durch die Kanüle, Infektionen, venenwandreizende Medikamente oder zu lange Liegedauer der PVVK. Maßnahme: PVVK sofort entfernen, Arzt informieren, dokumentieren, ggf. Kühlung und Heparinsalbe.",
  },
  {
    id: "inf-v-2",
    topic: "Injektionen & Infusionen",
    question:
      "Was versteht man unter einem 'Paravasat' und welche Maßnahmen sind bei dessen Auftreten einzuleiten?",
    modelAnswer:
      "Ein Paravasat ist der Austritt von Infusionslösung oder Medikament ins umliegende Gewebe. Ursache: PVVK-Fehllage, Durchstechung der Venenwand oder Dislokation der Kanüle. Zeichen: Schwellung, Verhärtung, Kälte oder Schmerz an der Einstichstelle, keine Aspiration möglich. Maßnahmen: Infusion sofort stoppen, PVVK entfernen, betroffene Stelle hochlagern, Arzt informieren. Bei nekrotisierenden Substanzen (z. B. Chemotherapeutika) ist eine sofortige medizinische Notfallbehandlung erforderlich.",
  },
  {
    id: "inf-v-3",
    topic: "Injektionen & Infusionen",
    question:
      "Welche Faktoren beeinflussen die tatsächliche Infusionsgeschwindigkeit bei einem Schwerkraft-Infusionssystem und warum weicht sie häufig von der berechneten Tropfenzahl ab?",
    modelAnswer:
      "Folgende Faktoren beeinflussen die Geschwindigkeit: Höhe der Infusionsflasche über dem Venenniveau, Konsistenz/Viskosität der Lösung, Durchgängigkeit und Lage der Kanülenspitze, Druckveränderungen in der Flasche durch Belüftungsstörungen sowie Manipulation an der Rollklemme durch Patienten oder Angehörige. Konsequenz: Die Tropfenzahl muss regelmäßig überprüft und ggf. korrigiert werden.",
  },
  {
    id: "inf-v-4",
    topic: "Injektionen & Infusionen",
    question:
      "Berechne: 1000 ml NaCl 0,9% sollen über 8 Stunden infundiert werden. Wie viele Tropfen pro Minute sind einzustellen?",
    modelAnswer:
      "Formel: Tropfen/min = (Menge in ml × 20) / Zeit in Minuten. Rechnung: 8 Stunden = 480 Minuten. 1000 × 20 = 20.000. 20.000 / 480 = 41,66 → ca. 42 Tropfen pro Minute.",
  },
  {
    id: "inf-v-5",
    topic: "Injektionen & Infusionen",
    question:
      "Warum dürfen Lösungen mit einer Osmolarität über 800 mOsm/l nicht peripher, sondern ausschließlich zentralvenös verabreicht werden?",
    modelAnswer:
      "Hyperosmolare Lösungen (z. B. konzentrierte Glukose, parenterale Ernährung) reizen die Venenwand stark. Periphere Venen sind kleinlumig und haben geringen Blutfluss – die hohe Konzentration kann nicht ausreichend verdünnt werden, was zu schwerer Thrombophlebitis und Venennekrose führt. Über einen ZVK wird die Lösung sofort in den blutreichen, großlumigen Bereich nahe dem rechten Vorhof eingebracht und stark verdünnt.",
  },
  {
    id: "inf-v-6",
    topic: "Injektionen & Infusionen",
    question:
      "Für wen ist die Hypodermoklysis besonders geeignet und warum ist sie in der Palliativ- und Geriatriepflege von besonderer Bedeutung?",
    modelAnswer:
      "Besonders geeignet für ältere Menschen, Patienten mit schlechten Venenverhältnissen, bei Dysphagie, akuter Verwirrtheit oder in der Terminalphase. In der Palliativ- und Geriatriepflege kann sie auch zu Hause durchgeführt werden, Angehörige können angelernt werden. Sie ist weniger invasiv als eine i.v.-Infusion, birgt kein Risiko intravasaler Überwässerung, ermöglicht nächtliche Infusion ohne Venenkatheter und erhält so Lebensqualität und Autonomie.",
  },

  // ZVK & PORT-SYSTEME – VERTIEFUNG
  {
    id: "zvk-v-1",
    topic: "ZVK & Port-Systeme",
    question:
      "Warum muss die korrekte Lage eines ZVK nach der Anlage zwingend per Röntgen bestätigt werden, bevor Infusionen gestartet werden dürfen?",
    modelAnswer:
      "Die Katheterspitze muss in der Vena cava superior nahe dem rechten Vorhof liegen. Fehllagen sind möglich: z. B. Katheter läuft in die V. jugularis interna hoch, liegt zu tief im Herzen oder hat einen Pneumothorax verursacht. Eine fehlerhafte Lage kann zu Herzrhythmusstörungen, Gewebsschäden oder ineffektiver Therapie führen. Die Röntgenkontrolle ist daher obligatorisch vor dem ersten Infusionsbeginn.",
  },
  {
    id: "zvk-v-2",
    topic: "ZVK & Port-Systeme",
    question:
      "Erkläre die Entstehung und klinische Bedeutung einer portassoziierten Thrombose und welche Patienten besonders gefährdet sind.",
    modelAnswer:
      "Eine Thrombose bildet sich im Gefäß, in dem der Portkatheter liegt (z. B. V. subclavia oder V. jugularis). Begünstigende Faktoren sind Katheterlage, Gefäßreizung, verlangsamter Blutfluss sowie Gerinnungsaktivierung, besonders bei Tumorpatienten. Klinische Zeichen: Schwellung des Armes oder Halses, Schmerzen, Rötung, Schwierigkeiten bei Aspiration oder Spülen. Konsequenz: Bildgebung (Sonografie), ggf. Antikoagulation, in schweren Fällen Portentfernung.",
  },
  {
    id: "zvk-v-3",
    topic: "ZVK & Port-Systeme",
    question:
      "Was versteht man unter 'pulsatilem Spülen' eines Port- oder ZVK-Systems und welchen physiologischen Effekt hat diese Technik?",
    modelAnswer:
      "Pulsatiles Spülen erfolgt nicht kontinuierlich, sondern in kurzen ruckhaften Druckimpulsen (Push-Pause-Technik). Durch den turbulenten Fluss werden Ablagerungen (Fibrin, Medikamentenreste, Blutreste) von der Katheterwand effektiver gelöst. Dies verhindert Katheterokklusion und Biofilmbildung. Es wird immer mit einer 10-ml-Spritze durchgeführt – kleinere Spritzen erzeugen zu hohen Druck und können den Katheter schädigen.",
  },
  {
    id: "zvk-v-4",
    topic: "ZVK & Port-Systeme",
    question:
      "Warum muss beim Portblock zwingend mit positivem Druck gearbeitet werden und was passiert, wenn dies unterlassen wird?",
    modelAnswer:
      "Positiver Druck bedeutet: Die Klemme oder der Dreiwegehahn wird geschlossen, während noch Druck auf den Kolben ausgeübt wird. Dadurch entsteht kein Sogeffekt, der Blut in die Katheterspitze zurücksaugen könnte. Wird ohne positiven Druck gearbeitet, tritt Blut in die Katheterspitze zurück, gerinnt dort und bildet ein Fibringerinnsel, was zu einer Portokklusion führt. Folge: Aufwändige Lysebehandlung oder Portentfernung notwendig.",
  },
  {
    id: "zvk-v-5",
    topic: "ZVK & Port-Systeme",
    question:
      "Ein Patient mit liegendem Port berichtet über Rötung, Schwellung und Druckschmerz über der Portkammer. Welche Komplikation ist zu vermuten und wie ist das weitere Vorgehen?",
    modelAnswer:
      "Es besteht der Verdacht auf eine Porttascheninfektion. Ursachen sind Keimeintritt bei Manipulation, unsauberes Arbeiten oder lange Liegedauer der Portnadel. Sofortmaßnahmen: Portnadel nicht erneut legen, Arzt sofort informieren. Diagnostik: Blutkultur (peripher + aus dem Port), CRP, Leukozytenwerte. Therapie: Antibiotische Behandlung, ggf. Portentfernung bei persistierender Infektion. Prävention: Strikte Asepsis und Liegedauer der Portnadel auf max. 7 Tage begrenzen.",
  },
  {
    id: "zvk-v-6",
    topic: "ZVK & Port-Systeme",
    question:
      "Nenne fünf Indikationen für die Anlage eines ZVK und erkläre, warum diese peripher nicht realisierbar wären.",
    modelAnswer:
      "1. Parenterale Ernährung (Osmolarität >800 mOsm/l – peripher venenwandschädigend). 2. Chemotherapeutika (stark venenwandreizend, schwere Gewebsschäden bei Paravasat). 3. Kaliumchlorid-Konzentrate (kardiotoxisch bei schneller Gabe, periphere Venen unzureichend). 4. Messung des zentralvenösen Drucks (ZVD) – nur über zentralen Katheter möglich. 5. Kein peripherer Zugang möglich (schlechte Venenverhältnisse, schwere Verbrennungen, Schock).",
  },
  {
    id: "zvk-v-7",
    topic: "ZVK & Port-Systeme",
    question:
      "Welche Komplikationen können spezifisch beim ENTFERNEN eines ZVK auftreten und welche Schutzmaßnahmen sind einzuhalten?",
    modelAnswer:
      "Luftembolie: Beim Ziehen kann Luft in das offene Gefäß gesaugt werden – lebensbedrohlich. Schutz: Patient Valsalva-Manöver durchführen lassen oder Katheter in der Exspirationsphase ziehen. Blutung/Hämatom: Lange Kompression (mind. 5–10 min) erforderlich. Katheterembolie: Katheter bricht ab und ein Stück verbleibt im Gefäß – chirurgische Entfernung nötig. Nach Entfernung: Einstichstelle steril abdecken und Patient auf Symptome wie Atemnot oder Tachykardie überwachen.",
  },

  // ÜBERGREIFENDE PRÜFUNGSFRAGEN
  {
    id: "quer-1",
    topic: "Blutentnahme",
    question:
      "Du hast eine venöse Blutabnahme durchgeführt und dabei die Reihenfolge Serum → EDTA → Citrat eingehalten. Ist dies korrekt? Begründe deine Antwort.",
    modelAnswer:
      "Nein, die Reihenfolge ist falsch. Die korrekte Reihenfolge lautet: Serum → Citrat → Heparin → EDTA. Citrat muss vor EDTA abgenommen werden, da EDTA-Zusätze (EDTA bindet Kalzium und Magnesium) die Gerinnungsproben (Citrat-Röhrchen) verfälschen würden. Durch die falsche Reihenfolge können Gerinnungswerte (PTT, Quick/INR) komplett unbrauchbar werden. Konsequenz: Blutabnahme wiederholen und korrekte Reihenfolge einhalten.",
  },
  {
    id: "quer-2",
    topic: "Heimaufenthaltsgesetz & Fixierung",
    question:
      "Erkläre den Begriff 'Ultima Ratio' im Kontext des HeimAufG und leite daraus ab, was vor jeder Freiheitsbeschränkung zwingend dokumentiert sein muss.",
    modelAnswer:
      "'Ultima Ratio' (letztes Mittel) bedeutet: Eine Freiheitsbeschränkung darf nur dann durchgeführt werden, wenn alle anderen, weniger einschränkenden Maßnahmen nachweislich nicht ausgereicht haben. Vor jeder Freiheitsbeschränkung müssen daher dokumentiert sein: alle geprüften gelinderen Alternativen mit Ergebnis, die Begründung, warum diese nicht ausreichend waren, sowie die akute Gefährdungssituation. Ohne diese Dokumentation ist die Freiheitsbeschränkung rechtlich nicht haltbar und kann als Körperverletzung gewertet werden.",
  },
  {
    id: "quer-3",
    topic: "Injektionen & Infusionen",
    question:
      "Eine Patientin hat starke Angst vor Spritzen und weint bereits im Vorfeld. Welche kommunikativen und pflegerischen Maßnahmen setzt du ein, um die Situation zu deeskalieren und dennoch die notwendige Blutabnahme sicher durchzuführen?",
    modelAnswer:
      "Angst ernst nehmen – nicht bagatellisieren. Ruhig und empathisch kommunizieren, ausreichend Zeit nehmen. Patientin genau informieren: Was passiert jetzt, wie lange dauert es. Lagerung optimieren: liegend, entspannt, Arm bequem gelagert. Ablenkung anbieten: Gespräch, Atemübungen, Blick abwenden lassen. Desinfektionsmittel vollständig trocknen lassen. Langsam und ruhig punktieren. Bei sehr starker Angst oder Synkopenneigung Arzt informieren und ggf. Maßnahme verschieben. Nachbetreuung: positives Feedback geben und Situation dokumentieren.",
  },



];

export const topics = Array.from(new Set(questions.map((q) => q.topic)));
