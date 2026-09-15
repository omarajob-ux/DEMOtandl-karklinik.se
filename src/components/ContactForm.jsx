import { useRef, useState } from "react";
import Icon from "./Icon";

const initialValues = { name: "", contact: "", message: "", consent: false };

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Ange ditt namn.";
  if (!values.contact.trim()) {
    errors.contact = "Ange telefonnummer eller e-postadress.";
  } else {
    const isEmail = /\S+@\S+\.\S+/.test(values.contact);
    const isPhone = /^[0-9+\s()-]{6,}$/.test(values.contact);
    if (!isEmail && !isPhone) errors.contact = "Ange en giltig e-postadress eller telefonnummer.";
  }
  if (!values.message.trim()) errors.message = "Skriv ett kort meddelande.";
  if (!values.consent) errors.consent = "Du behöver godkänna hanteringen av dina uppgifter för att skicka.";
  return errors;
}

export default function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const summaryRef = useRef(null);

  const handleChange = (field) => (e) => {
    const value = field === "consent" ? e.target.checked : e.target.value;
    setValues((v) => ({ ...v, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setStatus("error");
      requestAnimationFrame(() => summaryRef.current?.focus());
      return;
    }

    setStatus("submitting");
    // DEMO: inget backend är kopplat. Ersätt med ett riktigt anrop, t.ex.
    // en POST till klinikens formulärtjänst (Formspree, Web3Forms, egen API-rutt m.m.).
    window.setTimeout(() => {
      setStatus("success");
      setValues(initialValues);
    }, 700);
  };

  if (status === "success") {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-2xl bg-primary-50 p-8 text-center"
      >
        <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary-600 text-white">
          <Icon name="CheckCircle" size={24} weight="fill" />
        </span>
        <h3 className="mt-4 text-lg font-bold text-primary-700">Tack för ditt meddelande</h3>
        <p className="mt-2 text-[15px] text-ink-soft">
          Detta är en demoversion — meddelandet har inte skickats någonstans. I en skarp version
          kopplas formuläret till klinikens e-post eller bokningssystem.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-5 text-sm font-semibold text-primary-600 underline underline-offset-2 cursor-pointer"
        >
          Skicka ett till meddelande
        </button>
      </div>
    );
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="space-y-5">
      {status === "error" && (
        <div
          ref={summaryRef}
          tabIndex={-1}
          role="alert"
          className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800 focus:outline-none"
        >
          <p className="font-semibold">Formuläret kunde inte skickas:</p>
          <ul className="mt-1 list-disc pl-5">
            {Object.entries(errors).map(([field, msg]) => (
              <li key={field}>{msg}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="flex items-start gap-2.5 rounded-xl bg-accent-100 px-4 py-3 text-sm text-primary-700">
        <Icon name="WarningCircle" size={18} className="mt-0.5 shrink-0" />
        <p>
          Skriv inte känslig hälsoinformation i det här formuläret. Ring oss i stället vid akuta eller
          medicinskt känsliga ärenden.
        </p>
      </div>

      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-primary-700">
          Namn <span aria-hidden="true">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          value={values.name}
          onChange={handleChange("name")}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
          className="w-full rounded-xl border border-primary-200 bg-white px-4 py-3 text-[15px] text-ink placeholder:text-muted focus-visible:border-primary-500"
        />
        {errors.name && (
          <p id="name-error" className="mt-1.5 text-sm text-red-700">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="contact" className="mb-1.5 block text-sm font-semibold text-primary-700">
          Telefon eller e-post <span aria-hidden="true">*</span>
        </label>
        <input
          id="contact"
          name="contact"
          type="text"
          autoComplete="email tel"
          required
          value={values.contact}
          onChange={handleChange("contact")}
          aria-invalid={Boolean(errors.contact)}
          aria-describedby={errors.contact ? "contact-error" : undefined}
          className="w-full rounded-xl border border-primary-200 bg-white px-4 py-3 text-[15px] text-ink placeholder:text-muted focus-visible:border-primary-500"
        />
        {errors.contact && (
          <p id="contact-error" className="mt-1.5 text-sm text-red-700">
            {errors.contact}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-primary-700">
          Meddelande <span aria-hidden="true">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          value={values.message}
          onChange={handleChange("message")}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          placeholder="Berätta gärna kort vad ditt ärende gäller"
          className="w-full rounded-xl border border-primary-200 bg-white px-4 py-3 text-[15px] text-ink placeholder:text-muted focus-visible:border-primary-500"
        />
        {errors.message && (
          <p id="message-error" className="mt-1.5 text-sm text-red-700">
            {errors.message}
          </p>
        )}
      </div>

      <div>
        <label className="flex cursor-pointer items-start gap-3 text-[14px] text-ink-soft">
          <input
            type="checkbox"
            checked={values.consent}
            onChange={handleChange("consent")}
            aria-invalid={Boolean(errors.consent)}
            aria-describedby={errors.consent ? "consent-error" : undefined}
            className="mt-0.5 h-5 w-5 shrink-0 rounded border-primary-300 text-primary-600 focus-visible:outline-2 focus-visible:outline-primary-500"
          />
          <span>
            Jag godkänner att mina uppgifter behandlas för att kliniken ska kunna kontakta mig. Läs mer i
            vår <a href="/integritetspolicy" className="underline underline-offset-2 hover:text-primary-600">integritetspolicy</a>.
          </span>
        </label>
        {errors.consent && (
          <p id="consent-error" className="mt-1.5 text-sm text-red-700">
            {errors.consent}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="flex w-full items-center justify-center gap-2 rounded-full bg-primary-600 px-6 py-3.5 text-base font-semibold text-white shadow-card transition-colors hover:bg-primary-500 disabled:cursor-not-allowed disabled:opacity-70 cursor-pointer"
      >
        {status === "submitting" ? (
          <>
            <Icon name="SpinnerGap" size={19} className="animate-spin motion-reduce:animate-none" />
            Skickar…
          </>
        ) : (
          "Skicka meddelande"
        )}
      </button>
    </form>
  );
}
