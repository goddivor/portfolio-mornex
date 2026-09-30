import { lienWhatsApp } from "@/lib/site";
import { IconeWhatsApp } from "./Icones";

export function WhatsAppFlottant() {
  return (
    <a
      href={lienWhatsApp()}
      target="_blank"
      rel="noopener"
      aria-label="Écrire à Mornex sur WhatsApp"
      className="print:hidden fixed bottom-5 right-5 z-50 flex size-16 items-center justify-center rounded-full bg-jaune text-encre shadow-[0_10px_30px_rgba(0,0,0,0.45)] transition hover:scale-105 hover:bg-white"
    >
      <IconeWhatsApp className="size-8" />
    </a>
  );
}
