import { useId, useState } from "react";
import Icon from "./Icon";
import { faqs } from "../config/site";

function FAQItem({ faq, isOpen, onToggle }) {
  const panelId = useId();
  const buttonId = useId();

  return (
    <div className="border-b border-primary-100 last:border-b-0">
      <h3>
        <button
          id={buttonId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-4 py-5 text-left cursor-pointer"
        >
          <span className="text-[16px] font-semibold text-primary-700">{faq.q}</span>
          <Icon
            name="CaretDown"
            size={18}
            className={`shrink-0 text-primary-500 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        hidden={!isOpen}
        className="pb-5 pr-8 text-[15px] leading-relaxed text-ink-soft"
      >
        {faq.a}
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="bg-white py-20 sm:py-24">
      <div className="container-page">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary-500">Vanliga frågor</p>
          <h2 className="mt-3 text-3xl font-bold text-primary-700 sm:text-4xl">Bra att veta</h2>
        </div>

        <div className="mt-12 mx-auto max-w-3xl rounded-2xl bg-cream px-6 shadow-card sm:px-8">
          {faqs.map((faq, i) => (
            <FAQItem
              key={faq.q}
              faq={faq}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
