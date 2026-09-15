import { Link, useParams, Navigate } from "react-router-dom";
import SEO from "../components/SEO";
import Icon from "../components/Icon";
import { treatments, clinic } from "../config/site";

export default function TreatmentPage() {
  const { slug } = useParams();
  const treatment = treatments.find((t) => t.slug === slug);

  if (!treatment) return <Navigate to="/404" replace />;

  const otherTreatments = treatments.filter((t) => t.slug !== slug).slice(0, 3);

  return (
    <>
      <SEO
        title={treatment.title}
        description={`${treatment.title} hos ${clinic.name} i ${clinic.city}. ${treatment.shortDesc}`}
        path={`/behandlingar/${treatment.slug}`}
      />

      <section className="bg-white py-16 sm:py-20">
        <div className="container-page max-w-3xl">
          <nav aria-label="Brödsmulor" className="mb-8 flex items-center gap-2 text-sm text-muted">
            <Link to="/" className="hover:text-primary-600">
              Hem
            </Link>
            <span aria-hidden="true">/</span>
            <Link to="/#behandlingar" className="hover:text-primary-600">
              Behandlingar
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-ink-soft">{treatment.title}</span>
          </nav>

          <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-100 text-primary-600">
            <Icon name={treatment.icon} size={26} />
          </span>
          <h1 className="mt-5 text-3xl font-extrabold text-primary-700 sm:text-4xl">{treatment.title}</h1>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">{treatment.longDesc}</p>

          <div className="mt-8 rounded-2xl bg-cream p-6">
            <h2 className="text-base font-bold text-primary-700">Passar dig som</h2>
            <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{treatment.forWho}</p>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={clinic.bookingUrl}
              className="inline-flex items-center gap-2 rounded-full bg-primary-600 px-7 py-3.5 text-base font-semibold text-white shadow-card hover:bg-primary-500 transition-colors cursor-pointer"
            >
              <Icon name="CalendarCheck" size={19} />
              Boka tid
            </a>
            <a
              href={clinic.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border-2 border-primary-200 bg-white px-7 py-3.5 text-base font-semibold text-primary-700 hover:border-primary-400 cursor-pointer"
            >
              <Icon name="Phone" size={18} />
              {clinic.phone}
            </a>
          </div>
        </div>
      </section>

      <section aria-labelledby="related-heading" className="bg-cream py-16 sm:py-20">
        <div className="container-page">
          <h2 id="related-heading" className="text-2xl font-bold text-primary-700">
            Andra behandlingar
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {otherTreatments.map((t) => (
              <Link
                key={t.slug}
                to={`/behandlingar/${t.slug}`}
                className="group rounded-2xl bg-white p-6 shadow-card transition-shadow hover:shadow-card-hover"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-100 text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                  <Icon name={t.icon} size={20} />
                </span>
                <h3 className="mt-4 font-bold text-primary-700">{t.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{t.shortDesc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
