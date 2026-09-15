import { Link } from "react-router-dom";
import Icon from "./Icon";
import { clinic, nav } from "../config/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary-900 text-primary-100">
      <div className="container-page grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-600">
              <Icon name="Tooth" size={18} weight="fill" className="text-accent-400" />
            </span>
            <span className="font-display text-lg font-bold text-white">{clinic.name}</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed">
            {clinic.address.line1}
            <br />
            {clinic.address.line2}
          </p>
          <div className="mt-4 flex gap-3">
            <a
              href={clinic.social.facebook}
              aria-label="Facebook (platshållarlänk)"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
            >
              f
            </a>
            <a
              href={clinic.social.instagram}
              aria-label="Instagram (platshållarlänk)"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
            >
              ig
            </a>
          </div>
        </div>

        <nav aria-label="Sidor">
          <h3 className="font-display text-sm font-bold uppercase tracking-wide text-white">Sidor</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="hover:text-white">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wide text-white">Kontakt</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <a href={clinic.phoneHref} className="hover:text-white">
                {clinic.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${clinic.email}`} className="hover:text-white">
                {clinic.email}
              </a>
            </li>
            <li>{clinic.openingHours[0].day}: {clinic.openingHours[0].hours}</li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-bold uppercase tracking-wide text-white">Juridiskt</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <Link to="/integritetspolicy" className="hover:text-white">
                Integritetspolicy
              </Link>
            </li>
            <li>
              <Link to="/cookies" className="hover:text-white">
                Cookieinformation
              </Link>
            </li>
            <li>
              <Link to="/tillganglighet" className="hover:text-white">
                Tillgänglighetsredogörelse
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-primary-200 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {year} {clinic.name}. Alla rättigheter förbehållna.</p>
          <p>Demosajt — allt innehåll är exempeltext och ska granskas innan publicering.</p>
        </div>
      </div>
    </footer>
  );
}
