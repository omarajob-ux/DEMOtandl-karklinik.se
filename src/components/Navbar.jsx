import { useEffect, useState } from "react";
import Icon from "./Icon";
import { clinic, nav } from "../config/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 bg-cream/95 backdrop-blur transition-shadow duration-300 ${
        scrolled ? "shadow-[0_1px_0_0_rgba(20,43,44,0.08)]" : ""
      }`}
    >
      <div className="container-page flex h-[4.5rem] items-center justify-between py-3">
        <a href="/#hem" className="flex items-center gap-2.5 group" aria-label={`${clinic.name}, startsida`}>
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-600 text-cream">
            <Icon name="Tooth" size={20} weight="fill" className="text-accent-400" />
          </span>
          <span className="font-display text-lg font-bold text-primary-700">{clinic.name}</span>
        </a>

        <nav aria-label="Primär navigering" className="hidden lg:flex items-center gap-7">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[15px] font-medium text-ink-soft hover:text-primary-600 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a
            href={clinic.phoneHref}
            className="flex items-center gap-1.5 text-[15px] font-medium text-ink-soft hover:text-primary-600 transition-colors"
          >
            <Icon name="Phone" size={17} />
            {clinic.phone}
          </a>
          <a
            href={clinic.bookingUrl}
            className="rounded-full bg-primary-600 px-5 py-2.5 text-[15px] font-semibold text-white shadow-card hover:bg-primary-500 transition-colors cursor-pointer"
          >
            Boka tid
          </a>
        </div>

        <button
          type="button"
          className="lg:hidden flex h-11 w-11 items-center justify-center rounded-full text-primary-700 hover:bg-primary-50 cursor-pointer"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Stäng meny" : "Öppna meny"}
          onClick={() => setOpen((v) => !v)}
        >
          <Icon name={open ? "X" : "List"} size={26} />
        </button>
      </div>

      {open && (
        <div id="mobile-nav" className="lg:hidden border-t border-primary-100 bg-cream animate-fade-up">
          <nav aria-label="Mobil navigering" className="container-page flex flex-col gap-1 py-4">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-ink-soft hover:bg-primary-50 hover:text-primary-600"
              >
                {item.label}
              </a>
            ))}
            <a
              href={clinic.phoneHref}
              className="flex items-center gap-2 rounded-lg px-3 py-3 text-base font-medium text-ink-soft hover:bg-primary-50"
            >
              <Icon name="Phone" size={18} />
              {clinic.phone}
            </a>
            <a
              href={clinic.bookingUrl}
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-primary-600 px-5 py-3 text-center text-base font-semibold text-white cursor-pointer"
            >
              Boka tid
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
