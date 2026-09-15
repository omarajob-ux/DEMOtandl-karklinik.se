import Icon from "./Icon";
import { clinic, heroTrustIndicators, team, treatments } from "../config/site";

export default function Hero() {
  return (
    <section id="hem" className="relative overflow-hidden bg-cream pt-14 pb-20 sm:pt-20 sm:pb-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-32 h-96 w-96 rounded-full bg-accent-100 blur-3xl"
      />
      <div className="container-page relative grid gap-14 lg:grid-cols-2 lg:items-center">
        <div className="animate-fade-up motion-reduce:animate-none">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary-50 px-4 py-1.5 text-sm font-semibold text-primary-600">
            <Icon name="Sparkle" size={16} />
            {clinic.tagline}
          </p>
          <h1 className="text-balance-heading text-4xl font-extrabold leading-[1.1] text-primary-700 sm:text-5xl">
            Personlig tandvård du kan lita på, mitt i {clinic.city}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
            {clinic.name} erbjuder allt från undersökning och tandhygien till lagningar, rotbehandling
            och implantat — i en lugn miljö där du alltid får tydlig information innan vi går vidare.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={clinic.bookingUrl}
              className="inline-flex items-center gap-2 rounded-full bg-primary-600 px-7 py-3.5 text-base font-semibold text-white shadow-card transition-colors hover:bg-primary-500 cursor-pointer"
            >
              <Icon name="CalendarCheck" size={19} />
              Boka tid
            </a>
            <a
              href={clinic.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border-2 border-primary-200 bg-white px-7 py-3.5 text-base font-semibold text-primary-700 transition-colors hover:border-primary-400 cursor-pointer"
            >
              <Icon name="Phone" size={18} />
              Ring oss
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3">
            {heroTrustIndicators.map((item) => (
              <li key={item.label} className="flex items-center gap-2 text-sm font-medium text-ink-soft">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent-100 text-primary-600">
                  <Icon name={item.icon} size={16} />
                </span>
                {item.label}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] w-full max-w-md mx-auto overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-primary-100 via-accent-100 to-cream-100 shadow-card">
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 p-10 text-center">
              <span className="flex h-20 w-20 items-center justify-center rounded-full bg-white/70 text-primary-600 shadow-card">
                <Icon name="Tooth" size={36} weight="duotone" />
              </span>
              <p className="text-sm font-medium text-primary-700/70">
                Bildplats — ersätt med ett foto av tandläkare och patient i ett lugnt möte
              </p>
            </div>
          </div>

          <div className="absolute -left-3 top-8 hidden sm:flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-card-hover animate-fade-up motion-reduce:animate-none">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-50 text-primary-600">
              <Icon name="Users" size={18} />
            </span>
            <div className="text-sm">
              <p className="font-bold text-primary-700 leading-none">{team.length}</p>
              <p className="text-ink-soft leading-none mt-1">medarbetare</p>
            </div>
          </div>

          <div className="absolute -right-3 bottom-10 hidden sm:flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-card-hover animate-fade-up motion-reduce:animate-none">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-50 text-primary-600">
              <Icon name="Certificate" size={18} />
            </span>
            <div className="text-sm">
              <p className="font-bold text-primary-700 leading-none">{treatments.length}</p>
              <p className="text-ink-soft leading-none mt-1">behandlingsområden</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
