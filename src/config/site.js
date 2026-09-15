// ─────────────────────────────────────────────────────────────────────────
// SITE-KONFIGURATION — DEMO-INNEHÅLL
//
// Detta är den enda fil som behöver redigeras för att anpassa sajten till
// en riktig klinik. All text, alla priser, allt team och alla omdömen
// nedan är EXEMPELINNEHÅLL och måste ersättas innan sidan publiceras.
// Fält märkta med "// PLACEHOLDER" innehåller inte verifierade fakta.
// ─────────────────────────────────────────────────────────────────────────

export const clinic = {
  name: "Tandkliniken Solhem", // PLACEHOLDER — klinikens namn
  shortName: "Solhem",
  tagline: "Trygg tandvård, nära dig",
  city: "Lindeby", // PLACEHOLDER — fiktiv ort
  address: {
    line1: "Storgatan 14",
    line2: "123 45 Lindeby",
    full: "Storgatan 14, 123 45 Lindeby",
  },
  phone: "08-123 456 78", // PLACEHOLDER
  phoneHref: "tel:+46812345678",
  email: "info@tandklinikensolhem.se", // PLACEHOLDER — domän ej registrerad, endast exempel
  bookingUrl: "#kontakt", // PLACEHOLDER — ersätt med riktig bokningslänk (t.ex. Boka Direkt, Vitals, Dentakod)
  mapEmbedUrl:
    "https://www.google.com/maps?q=Stockholm&output=embed", // PLACEHOLDER — byt till klinikens riktiga adress
  openingHours: [
    { day: "Måndag–Torsdag", hours: "08:00–17:00" },
    { day: "Fredag", hours: "08:00–15:00" },
    { day: "Lördag–Söndag", hours: "Stängt" },
  ],
  openingHoursNote: "Akuta tider kan ofta erbjudas samma dag, kontakta oss per telefon.",
  social: {
    facebook: "#", // PLACEHOLDER
    instagram: "#", // PLACEHOLDER
  },
  orgNumber: "000000-0000", // PLACEHOLDER
};

export const nav = [
  { label: "Hem", href: "/#hem" },
  { label: "Behandlingar", href: "/#behandlingar" },
  { label: "Om kliniken", href: "/#om-kliniken" },
  { label: "Priser", href: "/#priser" },
  { label: "Vanliga frågor", href: "/#faq" },
  { label: "Kontakt", href: "/#kontakt" },
];

export const trustPoints = [
  {
    icon: "ShieldCheck",
    title: "Tryggt och personligt bemötande",
    text: "Vi tar oss tid att lyssna på dina behov och förklarar varje steg innan vi går vidare, så att du alltid vet vad som händer.",
  },
  {
    icon: "Certificate",
    title: "Tydlig information före behandling",
    text: "Du får en genomgång av föreslagen behandling och kostnad innan vi startar — inga överraskningar i efterhand.",
  },
  {
    icon: "Sparkle",
    title: "Modern och skonsam tandvård",
    text: "Vi arbetar med uppdaterad utrustning och skonsamma metoder, anpassade efter varje patients förutsättningar.",
  },
  {
    icon: "HeartStraight",
    title: "Hjälp för tandvårdsrädda patienter",
    text: "Känner du oro inför tandläkarbesök? Berätta för oss, så anpassar vi tempot och går igenom varje moment i lugn takt.",
  },
];

export const heroTrustIndicators = [
  { icon: "Users", label: "Erfaret team" },
  { icon: "Sparkle", label: "Modern utrustning" },
  { icon: "HeartStraight", label: "Personlig omtanke" },
];

// Behandlingar — ikon refererar till @phosphor-icons/react
export const treatments = [
  {
    slug: "basundersokning",
    icon: "MagnifyingGlass",
    title: "Basundersökning",
    shortDesc: "Grundlig genomgång av tänder, tandkött och munhälsa.",
    longDesc:
      "En basundersökning ger oss en helhetsbild av din munhälsa. Vi går igenom tänder, tandkött och bett, och tar vid behov röntgenbilder för att upptäcka eventuella problem i tid. Efter undersökningen får du en tydlig genomgång av läget och, om det behövs, förslag på vidare behandling.",
    forWho:
      "Passar dig som vill göra en rutinkontroll, är ny patient hos oss, eller inte varit hos tandläkare på ett tag.",
  },
  {
    slug: "akut-tandvard",
    icon: "FirstAid",
    title: "Akut tandvård",
    shortDesc: "Snabb hjälp vid akuta tandbesvär och smärta.",
    longDesc:
      "Vid akuta besvär som tandvärk, en lossnad fyllning eller en skadad tand försöker vi alltid erbjuda tid så snart som möjligt. Vi bedömer skadans omfattning, lindrar besvären och planerar eventuell fortsatt behandling tillsammans med dig.",
    forWho: "Passar dig med plötslig smärta, svullnad, eller en tand som skadats vid till exempel en olycka.",
  },
  {
    slug: "tandhygienist",
    icon: "Sparkle",
    title: "Tandhygienist",
    shortDesc: "Professionell tandrengöring och förebyggande vård.",
    longDesc:
      "Vår tandhygienist arbetar förebyggande med tandstensborttagning, polering och genomgång av dina rutiner för munhygien hemma. Regelbundna besök hos tandhygienisten är ett av de mest effektiva sätten att förebygga hål och tandlossning.",
    forWho: "Passar alla som vill underhålla en god munhälsa och få personlig rådgivning om hemmarutiner.",
  },
  {
    slug: "lagningar",
    icon: "Wrench",
    title: "Lagningar",
    shortDesc: "Behandling av hål och skadad tandsubstans.",
    longDesc:
      "Om en undersökning visar hål eller skadad tandsubstans lagar vi tanden skonsamt med moderna fyllningsmaterial anpassade efter tandens läge och belastning. Vi berättar alltid vilka alternativ som finns innan vi utför behandlingen.",
    forWho: "Passar dig med karies eller en tidigare lagning som behöver bytas ut.",
  },
  {
    slug: "rotbehandling",
    icon: "Syringe",
    title: "Rotbehandling",
    shortDesc: "Behandling som kan rädda en infekterad tand.",
    longDesc:
      "En rotbehandling utförs när infektion eller inflammation nått tandens nerv. Målet är att avlägsna det infekterade materialet och rädda den egna tanden i stället för att den behöver dras ut. Behandlingen sker under lokalbedövning och anpassas efter varje tands förutsättningar.",
    forWho: "Passar dig med långvarig tandvärk, känslighet för värme/kyla, eller en tand med konstaterad infektion.",
  },
  {
    slug: "tandutdragning",
    icon: "Tooth",
    title: "Tandutdragning",
    shortDesc: "Skonsam borttagning när tanden inte kan räddas.",
    longDesc:
      "I vissa fall, till exempel vid kraftig skada eller platsbrist inför tandreglering, är utdragning det bästa alternativet. Vi går igenom varför, hur ingreppet går till och vilka alternativ som finns för att ersätta tanden om det behövs.",
    forWho: "Passar dig med en svårt skadad tand, visdomstandsproblem, eller enligt rekommendation vid tandreglering.",
  },
  {
    slug: "kronor-och-broar",
    icon: "Certificate",
    title: "Kronor & broar",
    shortDesc: "Återställer form, funktion och utseende.",
    longDesc:
      "Kronor och broar används för att återställa kraftigt skadade tänder eller ersätta en eller flera saknade tänder. Vi planerar utformningen tillsammans med dig så att resultatet passar naturligt in i ditt bett och leende.",
    forWho: "Passar dig med en kraftigt skadad tand eller en lucka som påverkar tuggfunktion eller utseende.",
  },
  {
    slug: "implantat",
    icon: "Drop",
    title: "Implantat",
    shortDesc: "Fast lösning vid en eller flera saknade tänder.",
    longDesc:
      "Ett tandimplantat ersätter tandroten med en liten skruv av titan som kroppen normalt läker fast i käkbenet. Ovanpå fästs sedan en krona. Vi gör alltid en noggrann bedömning och planering innan vi rekommenderar implantatbehandling.",
    forWho: "Passar dig som saknar en eller flera tänder och vill ha en stabil, långsiktig lösning.",
  },
  {
    slug: "estetisk-tandvard",
    icon: "Smiley",
    title: "Estetisk tandvård",
    shortDesc: "Skonsamma justeringar för ett harmoniskt leende.",
    longDesc:
      "Estetisk tandvård handlar om mindre justeringar — som konturering, fasader eller korrigering av missfärgade fyllningar — för att skapa ett mer harmoniskt leende. Vi utgår alltid från vad som är skonsamt och realistiskt för just din situation.",
    forWho: "Passar dig som vill förbättra leendets helhetsintryck utan omfattande ingrepp.",
  },
  {
    slug: "tandblekning",
    icon: "Star",
    title: "Tandblekning",
    shortDesc: "Professionell blekning under kontrollerade former.",
    longDesc:
      "Vi erbjuder professionell tandblekning som utförs eller inleds på kliniken, där vi säkerställer att tänder och tandkött mår bra under processen. Resultatet varierar mellan individer beroende på tändernas ursprungliga färg och struktur.",
    forWho: "Passar dig som vill lysa upp leendet inför till exempel en särskild händelse.",
  },
];

export const journeySteps = [
  {
    step: 1,
    title: "Boka en tid",
    text: "Boka enkelt via telefon, e-post eller vår bokningslänk — välj den tid som passar dig bäst.",
  },
  {
    step: 2,
    title: "Undersökning och bedömning",
    text: "Vi går igenom din munhälsa i lugn takt och lyssnar på eventuella besvär eller önskemål.",
  },
  {
    step: 3,
    title: "Personligt behandlingsförslag",
    text: "Du får ett tydligt förslag med information om innehåll och kostnad innan vi går vidare.",
  },
  {
    step: 4,
    title: "Behandling och uppföljning",
    text: "Vi utför behandlingen i din takt och följer upp resultatet så att du känner dig trygg hela vägen.",
  },
];

// Riktprislista — samtliga belopp är PLACEHOLDER-exempel och ska ersättas
export const pricing = [
  { treatment: "Basundersökning", price: "895" },
  { treatment: "Akut tandvård", price: "1 195" },
  { treatment: "Tandhygienist, 45 min", price: "995" },
  { treatment: "Lagning, mindre", price: "1 450" },
  { treatment: "Rotbehandling, per rotkanal", price: "2 950" },
  { treatment: "Tandutdragning, enkel", price: "1 250" },
  { treatment: "Krona, helkeramisk", price: "8 900" },
  { treatment: "Implantat, exkl. krona", price: "16 500" },
  { treatment: "Tandblekning", price: "2 400" },
];

export const pricingNotes = [
  "Du får alltid tydlig kostnadsinformation innan behandling påbörjas.",
  "Vid mer omfattande behandlingar kan kliniken ta fram en skriftlig kostnadsplan.",
  "Statligt tandvårdsstöd kan gälla för vissa behandlingar och grupper — fråga oss gärna, eller läs mer på 1177.se.",
];

export const team = [
  {
    name: "Exempel Namn", // PLACEHOLDER
    role: "Klinikchef & Leg. Tandläkare", // PLACEHOLDER
    bio: "Ersätt med en kort presentation av tandläkaren, erfarenhet och specialområden.",
    photo: null,
  },
  {
    name: "Exempel Namn",
    role: "Tandhygienist",
    bio: "Ersätt med en kort presentation av tandhygienisten och fokusområden.",
    photo: null,
  },
  {
    name: "Exempel Namn",
    role: "Tandsköterska",
    bio: "Ersätt med en kort presentation av tandsköterskan.",
    photo: null,
  },
  {
    name: "Exempel Namn",
    role: "Receptionist",
    bio: "Ersätt med en kort presentation av receptionisten — ofta patientens första kontakt.",
    photo: null,
  },
];

export const philosophy = {
  heading: "Vår filosofi",
  paragraphs: [
    "Vi tror på tandvård där du som patient är delaktig i besluten om din egen behandling. Därför förklarar vi alltid vad vi ser, vilka alternativ som finns och varför vi rekommenderar en viss lösning.",
    "Kliniken arbetar enligt gällande professionella riktlinjer och håller oss löpande uppdaterade om nya metoder och material inom tandvården.",
    "Målet är enkelt: att du ska lämna kliniken välinformerad, och med en god långsiktig munhälsa.",
  ],
};

// Omdömen — TYDLIGT EXEMPELINNEHÅLL. Ersätt med riktiga, verifierade patientomdömen.
export const testimonials = [
  {
    quote:
      "Exempeltext — ersätt med ett riktigt patientomdöme. Beskriv gärna vad patienten uppskattade med besöket.",
    name: "Exempel, patient",
    isPlaceholder: true,
  },
  {
    quote:
      "Exempeltext — ersätt med ett riktigt patientomdöme innan sidan publiceras.",
    name: "Exempel, patient",
    isPlaceholder: true,
  },
  {
    quote:
      "Exempeltext — endast för demonstration av layout, inte ett verkligt citat.",
    name: "Exempel, patient",
    isPlaceholder: true,
  },
];

export const faqs = [
  {
    q: "Hur bokar jag en tid?",
    a: "Du kan boka tid via vår bokningslänk, ringa oss på telefon eller skicka ett e-postmeddelande. Vi bekräftar alltid din tid innan besöket.",
  },
  {
    q: "Tar ni emot nya patienter?",
    a: "Ja, vi välkomnar nya patienter i alla åldrar. Kontakta oss så hjälper vi dig att hitta en tid som passar.",
  },
  {
    q: "Vad ska jag göra vid akuta tandbesvär?",
    a: "Ring kliniken så snart som möjligt så gör vi vårt bästa för att erbjuda en tid samma dag. Vid stängt kan du behöva vända dig till akuttandvården i din region.",
  },
  {
    q: "Vad kostar en undersökning?",
    a: "Se vår prislista under Priser för ett riktpris. Det slutgiltiga priset beror på undersökningens omfattning och meddelas alltid innan behandling.",
  },
  {
    q: "Hjälper ni tandvårdsrädda patienter?",
    a: "Ja. Berätta gärna om din oro när du bokar, så anpassar vi bemötande och tempo för att göra besöket så tryggt som möjligt.",
  },
  {
    q: "Kan jag avboka eller omboka min tid?",
    a: "Ja, kontakta oss i så god tid som möjligt via telefon eller e-post om du behöver avboka eller boka om din tid.",
  },
  {
    q: "Hur fungerar det statliga tandvårdsstödet?",
    a: "Det statliga tandvårdsstödet kan ge ett bidrag till vissa behandlingar beroende på ålder och behov. Vi hjälper dig gärna att reda ut vad som gäller för dig, eller läs mer på 1177.se.",
  },
];

export const seoDefaults = {
  siteUrl: "https://example.se", // PLACEHOLDER — byt till klinikens riktiga domän
  titleSuffix: `${clinic.name} — Tandläkare i ${clinic.city}`,
  description: `${clinic.name} är en tandvårdsklinik i ${clinic.city}. Vi erbjuder undersökning, tandhygienist, lagningar, rotbehandling, implantat och estetisk tandvård för hela familjen.`,
  keywords: `tandläkare i ${clinic.city}, tandvård ${clinic.city}, tandläkare, tandhygienist, akut tandvård`,
};
