import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Props = {
  headline: string;
  sub?: string;
  btnLabel: string;
  href: string;
  variant?: "primary" | "secondary";
};

export default function CtaBlock({ headline, sub, btnLabel, href, variant = "primary" }: Props) {
  // "secondary" : carte claire à accent teal, volontairement distincte du
  // "primary" (fond marine + bouton orange) pour ne pas laisser croire que
  // les deux CTA ont la même importance ou la même destination.
  if (variant === "secondary") {
    return (
      <aside
        className="my-12 rounded-2xl bg-white px-10 py-10 text-center
                   border border-surface-container-high border-t-[3px] border-t-brand-teal
                   shadow-card"
        aria-label="Appel à l'action"
      >
        <h3
          className="font-heading text-on-surface mb-3"
          style={{ fontSize: "28px", lineHeight: 1.15 }}
        >
          {headline}
        </h3>

        {sub && (
          <p
            className="font-sans mb-6 mx-auto max-w-sm leading-relaxed text-on-surface-variant"
            style={{ fontSize: "15px" }}
          >
            {sub}
          </p>
        )}

        <Link
          href={href}
          className="inline-flex items-center gap-2 rounded-md border-2 border-brand-teal
                     px-8 py-3 font-sans font-semibold text-brand-teal
                     hover:bg-brand-teal hover:text-white transition-all duration-200"
          style={{ fontSize: "15px" }}
        >
          {btnLabel}
          <ArrowRight size={15} aria-hidden />
        </Link>
      </aside>
    );
  }

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
