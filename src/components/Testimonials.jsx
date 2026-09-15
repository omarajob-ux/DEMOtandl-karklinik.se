import Icon from "./Icon";
import { testimonials } from "../config/site";

export default function Testimonials() {
  return (
    <section aria-labelledby="testimonials-heading" className="bg-cream py-20 sm:py-24">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary-500">Omdömen</p>
          <h2 id="testimonials-heading" className="mt-3 text-3xl font-bold text-primary-700 sm:text-4xl">
            Vad patienter säger
          </h2>
          <p className="mt-4 text-[15px] text-ink-soft">
            Nedan visas exempeltext som demonstrerar layouten — ersätt med riktiga, verifierade
            patientomdömen innan sidan publiceras.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure key={i} className="relative rounded-2xl bg-white p-7 shadow-card">
              {t.isPlaceholder && (
                <span className="absolute right-5 top-5 rounded-full bg-accent-100 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-primary-600">
                  Exempel
                </span>
              )}
              <Icon name="Quotes" size={26} weight="fill" className="text-accent-400" />
              <blockquote className="mt-4 text-[15px] leading-relaxed text-ink-soft">
                {t.quote}
              </blockquote>
              <figcaption className="mt-5 text-sm font-semibold text-primary-700">{t.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
