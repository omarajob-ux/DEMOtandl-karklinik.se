import { useState } from "react";
import Icon from "./Icon";

export default function DemoBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="relative bg-primary-700 text-primary-50 text-sm">
      <div className="container-page flex items-center gap-3 py-2.5">
        <Icon name="WarningCircle" size={18} className="shrink-0 text-accent-400" />
        <p className="leading-snug">
          Detta är en demosajt. Klinikens namn, adress, priser, team och omdömen är exempelinnehåll och
          ska ersättas innan publicering.
        </p>
        <button
          type="button"
          onClick={() => setVisible(false)}
          aria-label="Stäng meddelandet"
          className="ml-auto shrink-0 rounded-full p-1 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-white cursor-pointer"
        >
          <Icon name="X" size={16} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
