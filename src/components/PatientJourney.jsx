import { journeySteps } from "../config/site";

export default function PatientJourney() {
  return (
    <section aria-labelledby="journey-heading" className="bg-primary-700 py-20 sm:py-24">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-accent-400">Så går det till</p>
          <h2 id="journey-heading" className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Från bokning till uppföljning
          </h2>
        </div>

        <ol className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {journeySteps.map((step, i) => (
            <li key={step.step} className="relative">
              <div className="rounded-2xl bg-primary-600/60 p-6 h-full">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent-400 font-display text-base font-bold text-primary-900">
                  {step.step}
                </span>
                <h3 className="mt-5 text-lg font-bold text-white">{step.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-primary-100">{step.text}</p>
              </div>
              {i < journeySteps.length - 1 && (
                <span
                  aria-hidden="true"
                  className="hidden lg:block absolute top-11 -right-4 h-px w-8 bg-accent-400/50"
                />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
