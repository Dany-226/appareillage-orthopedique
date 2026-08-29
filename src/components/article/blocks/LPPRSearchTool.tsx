"use client";

import { useMemo, useState } from "react";
import { Search, ExternalLink } from "lucide-react";
import { lpprVerifiedItems } from "@/lib/lppr-verified";

const CNAMTS_URL =
  "http://www.codage.ext.cnamts.fr/codif/tips/index_presentation.php?p_site=AMELI";

const QUICK_FILTERS = ["genou", "pied", "main", "bras", "tibiale", "femorale"];

function formatTarif(value: number): string {
  return value.toLocaleString("fr-FR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }) + " €";
}

export default function LPPRSearchTool() {
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return lpprVerifiedItems.filter((item) => {
      const matchesFilter = !activeFilter || item.categorie.includes(activeFilter);
      const matchesQuery =
        q === "" ||
        item.nomenclature.toLowerCase().includes(q) ||
        item.categorie.some((c) => c.includes(q)) ||
        item.code.toLowerCase().includes(q);
      return matchesFilter && matchesQuery;
    });
  }, [query, activeFilter]);

  return (
    <div className="my-8">
      {/* ── Search + quick filters */}
      <div className="mb-4 relative">
        <Search
          size={16}
          className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground"
          aria-hidden
        />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Rechercher un dispositif ou un code (ex. genou, PI06SSA63)…"
          className="w-full rounded-lg border border-border bg-white py-2.5 pl-10 pr-4
                     text-sm text-brand-dark placeholder:text-muted-foreground
                     focus-ring focus:border-brand-teal"
        />
      </div>

      <div className="mb-6 flex flex-wrap gap-2">
        {QUICK_FILTERS.map((kw) => (
          <button
            key={kw}
            type="button"
            onClick={() => setActiveFilter(activeFilter === kw ? null : kw)}
            className={`rounded-full border px-3 py-1 font-mono text-xs uppercase tracking-wide
                        transition-colors duration-150 focus-ring
                        ${
                          activeFilter === kw
                            ? "border-brand-teal bg-brand-teal text-white"
                            : "border-border bg-white text-on-surface-variant hover:border-brand-teal/50"
                        }`}
          >
            {kw}
          </button>
        ))}
      </div>

      {/* ── Disclaimer */}
      <p className="mb-6 text-sm leading-relaxed text-on-surface-variant">
        Sélection non exhaustive des dispositifs les plus recherchés (24 références
        vérifiées). Pour une recherche exhaustive et à jour dans l&rsquo;ensemble de la
        nomenclature LPP, consultez{" "}
        <a
          href={CNAMTS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 font-semibold text-brand-teal
                     hover:text-brand-teal/80 transition-colors duration-150"
        >
          la base officielle de l&rsquo;Assurance Maladie
          <ExternalLink size={12} aria-hidden />
        </a>
        .
      </p>

      {/* ── Results */}
      {results.length > 0 ? (
        <div className="overflow-x-auto rounded-lg border border-surface-container-high shadow-card">
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
              {results.map((item, i) => (
                <tr
                  key={`${item.code}-${i}`}
                  className={i % 2 === 0 ? "bg-surface-container-lowest" : "bg-surface-container-low"}
                >
                  <td className="border-t border-surface-container-high px-4 py-3 font-mono text-[12px] text-on-surface-variant">
                    {item.code}
                  </td>
                  <td className="border-t border-surface-container-high px-4 py-3 font-sans font-semibold text-on-surface" style={{ fontSize: "14px" }}>
                    {item.nomenclature}
                  </td>
                  <td className="border-t border-surface-container-high px-4 py-3 font-sans text-on-surface" style={{ fontSize: "14px" }}>
                    {formatTarif(item.tarifTTC)}
                  </td>
                  <td className="border-t border-surface-container-high px-4 py-3 font-sans text-on-surface-variant" style={{ fontSize: "13px" }}>
                    {item.source}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="rounded-lg bg-brand-teal-light border-l-4 border-brand-teal p-6">
          <p className="font-sans text-on-surface" style={{ fontSize: "15px", lineHeight: 1.7 }}>
            Aucun résultat dans notre sélection vérifiée pour cette recherche. Cela ne
            signifie pas que le dispositif n&rsquo;existe pas à la nomenclature - consultez{" "}
            <a
              href={CNAMTS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-semibold text-brand-teal
                         hover:text-brand-teal/80 transition-colors duration-150"
            >
              la base officielle de l&rsquo;Assurance Maladie
              <ExternalLink size={12} aria-hidden />
            </a>{" "}
            pour une recherche exhaustive.
          </p>
        </div>
      )}
    </div>
  );
}
