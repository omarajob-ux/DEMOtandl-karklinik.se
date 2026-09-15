import { Link } from "react-router-dom";
import Icon from "./Icon";

export default function TreatmentCard({ treatment }) {
  return (
    <article className="group flex flex-col rounded-2xl bg-white p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover motion-reduce:hover:translate-y-0">
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-100 text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors">
        <Icon name={treatment.icon} size={22} />
      </span>
      <h3 className="mt-5 text-lg font-bold text-primary-700">{treatment.title}</h3>
      <p className="mt-2 flex-1 text-[15px] leading-relaxed text-ink-soft">{treatment.shortDesc}</p>
      <Link
        to={`/behandlingar/${treatment.slug}`}
        className="mt-5 inline-flex items-center gap-1.5 text-[15px] font-semibold text-primary-600 hover:text-primary-500 hover:gap-2.5 transition-all"
      >
        Läs mer
        <Icon name="CaretDown" size={14} className="-rotate-90" />
      </Link>
    </article>
  );
}
