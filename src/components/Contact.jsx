import Icon from "./Icon";
import ContactForm from "./ContactForm";
import { clinic } from "../config/site";

export default function Contact() {
  return (
    <section id="kontakt" className="bg-cream py-20 sm:py-24">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary-500">Kontakt</p>
          <h2 className="mt-3 text-3xl font-bold text-primary-700 sm:text-4xl">Boka tid eller hör av dig</h2>
          <p className="mt-4 text-lg text-ink-soft">
            Vi svarar gärna på frågor om behandlingar, priser eller bokning.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-card">
                <Icon name="MapPin" size={22} className="mt-0.5 shrink-0 text-primary-600" />
                <div className="text-[15px] text-ink-soft">
                  <p className="font-semibold text-primary-700">Adress</p>
                  <p>{clinic.address.line1}</p>
                  <p>{clinic.address.line2}</p>
                  <p className="mt-1 text-sm text-muted">
                    Kollektivtrafik och parkering: [ange hållplats/parkeringsinfo här]
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-card">
                <Icon name="Phone" size={22} className="mt-0.5 shrink-0 text-primary-600" />
                <div className="text-[15px] text-ink-soft">
                  <p className="font-semibold text-primary-700">Telefon</p>
                  <a href={clinic.phoneHref} className="hover:text-primary-600">
                    {clinic.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-card">
                <Icon name="EnvelopeSimple" size={22} className="mt-0.5 shrink-0 text-primary-600" />
                <div className="text-[15px] text-ink-soft">
                  <p className="font-semibold text-primary-700">E-post</p>
                  <a href={`mailto:${clinic.email}`} className="hover:text-primary-600">
                    {clinic.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-card">
                <Icon name="Clock" size={22} className="mt-0.5 shrink-0 text-primary-600" />
                <div className="text-[15px] text-ink-soft">
                  <p className="font-semibold text-primary-700">Öppettider</p>
                  <dl className="mt-1 space-y-0.5">
                    {clinic.openingHours.map((o) => (
                      <div key={o.day} className="flex justify-between gap-6">
                        <dt>{o.day}</dt>
                        <dd className="font-medium text-ink">{o.hours}</dd>
                      </div>
                    ))}
                  </dl>
                  <p className="mt-2 text-sm text-muted">{clinic.openingHoursNote}</p>
                </div>
              </li>
            </ul>

            <a
              href={clinic.bookingUrl}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary-600 px-6 py-3 text-[15px] font-semibold text-white shadow-card hover:bg-primary-500 transition-colors cursor-pointer"
            >
              <Icon name="CalendarCheck" size={18} />
              Boka tid
            </a>

            <div className="mt-8 overflow-hidden rounded-2xl border border-primary-100 shadow-card">
              <iframe
                title={`Karta till ${clinic.name}`}
                src={clinic.mapEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-64 w-full grayscale-[15%]"
              />
              <p className="bg-white px-4 py-2 text-xs text-muted">
                Platshållarkarta — koppla klinikens exakta adress innan publicering.
              </p>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-card sm:p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
