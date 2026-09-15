import { ExternalLink } from "lucide-react"
import { getRigidityIcon, getMomentIcon, getCauseIcon } from "./productIcons"

type Row = { cells: string[]; asin: string }

type Props = {
  headers: string[]
  rows: Row[]
  caption?: string
}

// Repère les colonnes "Rigidité" et "Jour / nuit" ou "Cause ciblée" par leur
// intitulé plutôt que par un index en dur, pour rester générique d'un guide
// à l'autre (attelle-poignet a une colonne jour/nuit, orthese-pouce une
// colonne cause ciblée — jamais les deux à la fois).
function findColumnIndex(headers: string[], match: string) {
  return headers.findIndex(h => h.toLowerCase().includes(match))
}

// Même habillage visuel que ComparisonTable (src/components/article/blocks),
// avec une colonne produit en plus : icônes rigidité + moment/cause (données
// déjà présentes dans guides-achat.ts, cf. productIcons.ts) et lien Amazon
// simple, en remplacement d'une photo produit (droits d'usage liés au statut
// Partenaires, pas encore acquis — cf. TODO ci-dessous).
export default function ProductComparisonTable({ headers, rows, caption }: Props) {
  const rigidityIdx = findColumnIndex(headers, "rigidité")
  const momentIdx = findColumnIndex(headers, "jour")
  const causeIdx = findColumnIndex(headers, "cause")

  return (
    <div className="my-8">
      <div className="overflow-x-auto rounded-lg border border-surface-container-high shadow-card">
        <table className="w-full border-collapse text-sm" role="table">
          <thead>
            <tr className="bg-brand-teal text-white">
              {headers.map((h, i) => (
                <th
                  key={i}
                  scope="col"
                  className={`px-4 py-3 text-left font-mono text-[12px] uppercase tracking-wide
                             ${i === 0 ? "rounded-tl-lg" : ""}`}
                >
                  {h}
                </th>
              ))}
              <th
                scope="col"
                className="px-4 py-3 text-left font-mono text-[12px] uppercase tracking-wide rounded-tr-lg"
              >
                Produit
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, ri) => {
              const rigidity = rigidityIdx >= 0 ? getRigidityIcon(row.cells[rigidityIdx]) : null
              const secondary =
                momentIdx >= 0
                  ? getMomentIcon(row.cells[momentIdx])
                  : causeIdx >= 0
                    ? getCauseIcon(row.cells[causeIdx])
                    : null
              const iconsLabel = [rigidity?.label, secondary?.label].filter(Boolean).join(", ")

              return (
                <tr
                  key={ri}
                  className={ri % 2 === 0 ? "bg-surface-container-lowest" : "bg-surface-container-low"}
                >
                  {row.cells.map((cell, ci) => (
                    <td
                      key={ci}
                      className={`px-4 py-3 border-t border-surface-container-high
                                 font-sans text-on-surface
                                 ${ci === 0 ? "font-semibold" : ""}`}
                      style={{ fontSize: "14px" }}
                    >
                      {cell}
                    </td>
                  ))}
                  <td
                    className="px-4 py-3 border-t border-surface-container-high whitespace-nowrap"
                    style={{ fontSize: "14px" }}
                  >
                    {(rigidity || secondary) && (
                      <div
                        className="mb-2 flex items-center gap-2 text-brand-teal"
                        role="img"
                        aria-label={iconsLabel}
                      >
                        {rigidity && <rigidity.Icon size={16} aria-hidden />}
                        {secondary && <secondary.Icon size={16} aria-hidden />}
                      </div>
                    )}
                    <a
                      // TODO(affiliation): remplacer par le lien Amazon Partenaires (tag
                      // d'affiliation) une fois le compte Amazon Associates actif, et
                      // ajouter "sponsored" à rel= à ce moment-là.
                      href={`https://www.amazon.fr/dp/${row.asin}`}
                      target="_blank"
                      rel="nofollow noopener"
                      className="inline-flex items-center gap-1.5 font-sans font-semibold
                                 text-brand-teal hover:text-brand-amber transition-colors
                                 duration-150 focus-ring rounded"
                    >
                      {/* TODO(image): remplacer par une vraie photo produit une fois les
                          droits d'usage Amazon Partenaires acquis — pas d'image scrapée
                          d'ici là. */}
                      Voir sur Amazon
                      <ExternalLink size={12} aria-hidden />
                    </a>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      {caption && (
        <p
          className="mt-2 font-sans italic text-on-surface-variant"
          style={{ fontSize: "13px" }}
        >
          {caption}
        </p>
      )}
    </div>
  )
}
