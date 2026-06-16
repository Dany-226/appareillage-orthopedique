type Props = {
  headers: string[]
  rows: string[][]
  monoColumns?: number[]
}

export default function ComparisonTable({ headers, rows, monoColumns = [] }: Props) {
  return (
    <div className="my-8 overflow-x-auto rounded-lg border border-surface-container-high shadow-card">
      <table className="w-full border-collapse text-sm" role="table">
        <thead>
          <tr className="bg-brand-teal text-white">
            {headers.map((h, i) => (
              <th
                key={i}
                scope="col"
                className={`px-4 py-3 text-left font-mono text-[12px] uppercase tracking-wide
                           ${i === 0 ? "rounded-tl-lg" : ""}
                           ${i === headers.length - 1 ? "rounded-tr-lg" : ""}`}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr
              key={ri}
              className={ri % 2 === 0 ? "bg-surface-container-lowest" : "bg-surface-container-low"}
            >
              {row.map((cell, ci) => (
                <td
                  key={ci}
                  className={`px-4 py-3 border-t border-surface-container-high
                             font-sans text-on-surface
                             ${ci === 0 && !monoColumns.includes(0) ? "font-semibold" : ""}
                             ${monoColumns.includes(ci) ? "font-mono text-[12px] text-on-surface-variant" : ""}`}
                  style={{ fontSize: "14px" }}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
