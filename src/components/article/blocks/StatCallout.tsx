type Props = { value: string; label: string; source?: string };

export default function StatCallout({ value, label, source }: Props) {
  return (
    <aside
      className="my-8 rounded-lg bg-brand-amber-light border-l-4 border-brand-amber p-8"
      aria-label="Donnée clé"
    >
      <div
        className="font-heading font-bold text-brand-amber leading-none mb-2"
        style={{ fontSize: "72px" }}
      >
        {value}
      </div>
      <p
        className="font-sans text-on-surface mt-2"
        style={{ fontSize: "16px", lineHeight: 1.6 }}
      >
        {label}
      </p>
      {source && (
        <p
          className="font-mono uppercase tracking-widest text-on-surface-variant mt-3"
          style={{ fontSize: "11px" }}
        >
          {source}
        </p>
      )}
    </aside>
  );
}
