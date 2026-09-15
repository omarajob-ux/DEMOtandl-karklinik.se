import Icon from "./Icon";
import { clinic } from "../config/site";

export default function MobileStickyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-primary-100 bg-white/95 p-3 backdrop-blur pb-[max(0.75rem,env(safe-area-inset-bottom))] lg:hidden">
      <a
        href={clinic.phoneHref}
        className="flex flex-1 items-center justify-center gap-2 rounded-full border-2 border-primary-200 py-3 text-[15px] font-semibold text-primary-700 cursor-pointer"
      >
        <Icon name="Phone" size={18} />
        Ring oss
      </a>
      <a
        href={clinic.bookingUrl}
        className="flex flex-1 items-center justify-center gap-2 rounded-full bg-primary-600 py-3 text-[15px] font-semibold text-white shadow-card cursor-pointer"
      >
        <Icon name="CalendarCheck" size={18} />
        Boka tid
      </a>
    </div>
  );
}
