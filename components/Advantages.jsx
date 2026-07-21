import { advantages } from "@/lib/tokens";
import { icon } from "./icons";
import Reveal from "./Reveal";

export default function Advantages() {
  return (
    <div className="max-w-7xl mx-auto px-5">
      {/* Remonté sur le hero, comme sur la maquette de référence. */}
      <Reveal className="relative z-10 -mt-10">
        <div className="bg-white rounded-card shadow-float grid sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
          {advantages.map((a) => {
            const I = icon(a.icon);
            return (
              <div key={a.title} className="flex items-center gap-3.5">
                <span className="w-11 h-11 shrink-0 rounded-full grid place-items-center bg-primary-soft text-primary">
                  <I size={20} aria-hidden="true" />
                </span>
                <span>
                  <span className="block font-bold text-sm">{a.title}</span>
                  <span className="block text-xs text-slateink mt-0.5">{a.text}</span>
                </span>
              </div>
            );
          })}
        </div>
      </Reveal>
    </div>
  );
}
