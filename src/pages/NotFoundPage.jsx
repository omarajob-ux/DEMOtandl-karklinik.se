import { Link } from "react-router-dom";
import SEO from "../components/SEO";

export default function NotFoundPage() {
  return (
    <>
      <SEO title="Sidan kunde inte hittas" path="/404" />
      <section className="flex min-h-[60vh] items-center bg-white py-20">
        <div className="container-page max-w-xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary-500">404</p>
          <h1 className="mt-3 text-3xl font-extrabold text-primary-700">Sidan kunde inte hittas</h1>
          <p className="mt-4 text-[15px] text-ink-soft">
            Sidan du letar efter finns inte, eller har flyttats.
          </p>
          <Link
            to="/"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary-600 px-7 py-3.5 text-base font-semibold text-white shadow-card hover:bg-primary-500 transition-colors cursor-pointer"
          >
            Till startsidan
          </Link>
        </div>
      </section>
    </>
  );
}
