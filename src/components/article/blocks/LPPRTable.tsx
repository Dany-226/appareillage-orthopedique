import type { LPPRProtheseItem } from "@/lib/lppr-protheses";

function formatTarif(value: number): string {
  return (
    value.toLocaleString("fr-FR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }) + " €"
  );
}

export default function LPPRTable({ items }: { items: LPPRProtheseItem[] }) {
  return (
    <div className="mb-10 overflow-x-auto rounded-lg border border-surface-container-high shadow-card">
      <table className="w-full border-collapse text-sm" role="table">
        <thead>
          <tr className="bg-brand-teal text-white">
            <th scope="col" className="rounded-tl-lg px-4 py-3 text-left font-mono text-[12px] uppercase tracking-wide">
              Code
            </th>
            <th scope="col" className="px-4 py-3 text-left font-mono text-[12px] uppercase tracking-wide">
              Nomenclature
            </th>
            <th scope="col" className="px-4 py-3 text-left font-mono text-[12px] uppercase tracking-wide">
              Tarif TTC
            </th>
            <th scope="col" className="rounded-tr-lg px-4 py-3 text-left font-mono text-[12px] uppercase tracking-wide">
              Source
            </th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, i) => (
            <tr
              key={item.code}
              className={i % 2 === 0 ? "bg-surface-container-lowest" : "bg-surface-container-low"}
            >
              <td className="border-t border-surface-container-high px-4 py-3 font-mono text-[12px] text-on-surface-variant">
                {item.code}
              </td>
              <td
                className="border-t border-surface-container-high px-4 py-3 font-sans font-semibold text-on-surface"
                style={{ fontSize: "14px" }}
              >
                {item.nomenclature}
              </td>
              <td
                className="border-t border-surface-container-high px-4 py-3 font-sans text-on-surface"
                style={{ fontSize: "14px" }}
              >
                {formatTarif(item.tarifTTC)}
              </td>
              <td
                className="border-t border-surface-container-high px-4 py-3 font-sans text-on-surface-variant"
                style={{ fontSize: "13px" }}
              >
                {item.source}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
