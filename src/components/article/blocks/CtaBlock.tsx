import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Props = {
  headline: string;
  sub?: string;
  btnLabel: string;
  href: string;
};

export default function CtaBlock({ headline, sub, btnLabel, href }: Props) {
  return (
    <aside
      className="my-12 rounded-2xl bg-brand-dark px-10 py-10 text-center
                 border-t-[3px] border-brand-amber"
      aria-label="Appel à l'action"
    >
      <h3
        className="font-heading text-white mb-3"
        style={{ fontSize: "32px", lineHeight: 1.15 }}
      >
        {headline}
      </h3>

      {sub && (
        <p
          className="font-sans mb-6 mx-auto max-w-sm leading-relaxed"
          style={{ fontSize: "16px", color: "rgba(255,255,255,0.70)" }}
        >
          {sub}
        </p>
      )}

      <Link
        href={href}
        className="inline-flex items-center gap-2 rounded-md bg-brand-amber
                   px-8 py-3 font-sans font-semibold text-white
                   hover:brightness-95 transition-all duration-200"
        style={{ fontSize: "15px" }}
      >
        {btnLabel}
        <ArrowRight size={15} aria-hidden />
      </Link>
    </aside>
  );
}
