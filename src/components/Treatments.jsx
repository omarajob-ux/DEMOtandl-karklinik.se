import { treatments } from "../config/site";
import TreatmentCard from "./TreatmentCard";

export default function Treatments() {
  return (
    <section id="behandlingar" className="bg-cream py-20 sm:py-24">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary-500">Behandlingar</p>
          <h2 className="mt-3 text-3xl font-bold text-primary-700 sm:text-4xl">Det vi erbjuder</h2>
          <p className="mt-4 text-lg text-ink-soft">
            Ett brett utbud av tandvård under ett och samma tak — för hela familjen.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {treatments.map((t) => (
            <TreatmentCard key={t.slug} treatment={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
