import Icon from "./Icon";
import { pricing, pricingNotes, clinic } from "../config/site";

export default function Pricing() {
  return (
    <section id="priser" className="bg-white py-20 sm:py-24">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary-500">Priser</p>
          <h2 className="mt-3 text-3xl font-bold text-primary-700 sm:text-4xl">Prislista</h2>
          <p className="mt-4 text-lg text-ink-soft">
            Riktpriser nedan. Slutgiltig kostnad meddelas alltid innan behandling påbörjas.
          </p>
        </div>

        <div className="mt-6 flex items-start gap-2 rounded-xl bg-accent-100 px-4 py-3 text-sm text-primary-700 max-w-3xl mx-auto">
          <Icon name="WarningCircle" size={18} className="mt-0.5 shrink-0" />
          <p>Samtliga priser nedan är exempelbelopp för demonstration och ska ersättas med klinikens faktiska prislista.</p>
        </div>

        <div className="mt-10 overflow-x-auto rounded-2xl border border-primary-100 shadow-card">
          <table className="w-full min-w-[520px] border-collapse text-left">
            <caption className="sr-only">Prislista för behandlingar hos {clinic.name}</caption>
            <thead>
              <tr className="bg-primary-50">
                <th scope="col" className="px-6 py-4 text-sm font-bold text-primary-700">
                  Behandling
                </th>
                <th scope="col" className="px-6 py-4 text-sm font-bold text-primary-700 text-right">
                  Från pris (SEK)
                </th>
              </tr>
            </thead>
            <tbody>
              {pricing.map((row, i) => (
                <tr key={row.treatment} className={i % 2 === 0 ? "bg-white" : "bg-cream"}>
                  <td className="px-6 py-4 text-[15px] text-ink">{row.treatment}</td>
                  <td className="px-6 py-4 text-[15px] font-semibold text-primary-700 text-right tabular-nums">
                    {row.price} kr
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <ul className="mt-8 mx-auto max-w-3xl space-y-3">
          {pricingNotes.map((note) => (
            <li key={note} className="flex items-start gap-2.5 text-[15px] text-ink-soft">
              <Icon name="CheckCircle" size={19} className="mt-0.5 shrink-0 text-primary-500" />
              {note}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
