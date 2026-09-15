import SEO from "../components/SEO";
import { clinic } from "../config/site";

const content = {
  privacy: {
    title: "Integritetspolicy",
    body: [
      "Denna sida är en platshållare. En riktig integritetspolicy måste beskriva vilka personuppgifter kliniken samlar in (t.ex. via kontaktformulär, bokningssystem och eventuella analysverktyg), varför de behandlas, hur länge de sparas, och vilka rättigheter besökaren har enligt GDPR.",
      `Kontaktuppgifter för frågor om personuppgiftsbehandling: ${clinic.email}.`,
      "Analysverktyg, bokningssystem och kartor kräver korrekt konfiguration och, i förekommande fall, samtycke innan de aktiveras.",
    ],
  },
  cookies: {
    title: "Cookieinformation",
    body: [
      "Denna sida är en platshållare. Här ska kliniken beskriva vilka kakor (cookies) som används, om de är nödvändiga eller kräver samtycke, samt hur besökaren kan hantera sina val.",
      "Inga icke nödvändiga kakor eller spårningsverktyg ska aktiveras innan besökaren har gett sitt samtycke.",
    ],
  },
  accessibility: {
    title: "Tillgänglighetsredogörelse",
    body: [
      "Denna sida är en platshållare för klinikens tillgänglighetsredogörelse. Här bör det framgå i vilken utsträckning sajten uppfyller WCAG 2.2 nivå AA, kända brister, samt hur besökare kan rapportera tillgänglighetsproblem.",
      `Kontakt för synpunkter på tillgänglighet: ${clinic.email}.`,
    ],
  },
};

export default function LegalPage({ variant }) {
  const page = content[variant];

  return (
    <>
      <SEO title={page.title} path={`/${variant}`} />
      <section className="bg-white py-20">
        <div className="container-page max-w-2xl">
          <h1 className="text-3xl font-extrabold text-primary-700">{page.title}</h1>
          <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-ink-soft">
            {page.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
