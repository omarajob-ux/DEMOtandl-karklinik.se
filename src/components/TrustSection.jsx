import Icon from "./Icon";
import { trustPoints } from "../config/site";

export default function TrustSection() {
  return (
    <section aria-labelledby="trust-heading" className="bg-white py-20 sm:py-24">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary-500">Vår omtanke</p>
          <h2 id="trust-heading" className="mt-3 text-3xl font-bold text-primary-700 sm:text-4xl">
            Vi vet att ett tandläkarbesök kan kännas olika för olika personer
          </h2>
          <p className="mt-4 text-lg text-ink-soft">
            Därför bygger vi varje möte på tydlighet, lyhördhet och respekt för dina förutsättningar.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((point) => (
            <div
              key={point.title}
              className="rounded-2xl border border-primary-100/70 bg-cream p-6 shadow-card transition-shadow hover:shadow-card-hover"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-600 text-white">
                <Icon name={point.icon} size={22} />
              </span>
              <h3 className="mt-5 text-lg font-bold text-primary-700">{point.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{point.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
