import Icon from "./Icon";
import { philosophy, team } from "../config/site";

export default function About() {
  return (
    <section id="om-kliniken" className="bg-white py-20 sm:py-24">
      <div className="container-page">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary-500">Om kliniken</p>
            <h2 className="mt-3 text-3xl font-bold text-primary-700 sm:text-4xl">{philosophy.heading}</h2>
            <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-ink-soft">
              {philosophy.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>

          <ul className="space-y-4">
            {[
              "Patienten är delaktig i varje beslut om sin behandling",
              "Professionella riktlinjer och löpande kompetensutveckling",
              "Moderna metoder anpassade efter varje individ",
              "Tydlig kommunikation genom hela vårdförloppet",
            ].map((point) => (
              <li key={point} className="flex items-start gap-3 rounded-xl bg-cream p-4">
                <Icon name="CheckCircle" size={22} weight="fill" className="mt-0.5 shrink-0 text-primary-500" />
                <span className="text-[15px] text-ink-soft">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-primary-500">Vårt team</p>
            <h3 className="mt-3 text-2xl font-bold text-primary-700 sm:text-3xl">
              Ansikten du möter på kliniken
            </h3>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <article key={member.name + member.role} className="rounded-2xl bg-cream p-6 text-center shadow-card">
                <div
                  className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-primary-100 text-primary-600"
                  role="img"
                  aria-label={`Foto av ${member.name}, ${member.role} — platshållarbild`}
                >
                  <Icon name="Users" size={32} />
                </div>
                <h4 className="mt-4 font-bold text-primary-700">{member.name}</h4>
                <p className="mt-0.5 text-sm font-semibold text-primary-500">{member.role}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{member.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
