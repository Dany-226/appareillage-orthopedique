import type { ReactNode } from "react"
import Link from "next/link"
import type { GuideAchatBlock } from "@/lib/guides-achat"
import FaqAccordion from "@/components/article/blocks/FaqAccordion"
import ProductComparisonTable from "./ProductComparisonTable"

// Parseur inline minimal : **gras**, *italique*, [texte](lien) — les seules
// constructions présentes dans le markdown source de ce silo. Pas de lien
// deviné : un lien interne relatif (/...) devient un <Link>, tout le reste
// reste du texte simple (ex. "(Lien vers l'article orthèse de pouce, à
// publier.)" n'a pas de href fourni, donc pas de balise <a>).
function renderInline(text: string, keyPrefix: string): ReactNode[] {
  const pattern = /(\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\([^)]+\))/g
  return text
    .split(pattern)
    .filter(part => part.length > 0)
    .map((part, i) => {
      const key = `${keyPrefix}-${i}`

      if (part.startsWith("**") && part.endsWith("**")) {
        return <strong key={key}>{part.slice(2, -2)}</strong>
      }

      const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
      if (linkMatch) {
        const [, label, href] = linkMatch
        return href.startsWith("/") ? (
          <Link
            key={key}
            href={href}
            className="text-brand-teal underline underline-offset-2 hover:text-brand-amber transition-colors"
          >
            {label}
          </Link>
        ) : (
          <a
            key={key}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-teal underline underline-offset-2 hover:text-brand-amber transition-colors"
          >
            {label}
          </a>
        )
      }

      if (part.startsWith("*") && part.endsWith("*")) {
        return <em key={key}>{part.slice(1, -1)}</em>
      }

      return part
    })
}

export default function GuideAchatBody({ blocks }: { blocks: GuideAchatBlock[] }) {
  return (
    <div className="mt-10">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "paragraph":
            return (
              <p
                key={i}
                className="mb-6 font-sans leading-[1.8] text-on-surface"
                style={{ fontSize: "18px" }}
              >
                {renderInline(block.text, `p-${i}`)}
              </p>
            )

          case "h2":
            return (
              <h2
                key={i}
                id={block.id}
                className="mt-12 mb-4 pl-4 font-heading font-semibold
                           border-l-4 border-brand-amber leading-tight"
                style={{ fontSize: "32px", color: "#00374e" }}
              >
                {block.text}
              </h2>
            )

          case "h3":
            return (
              <h3
                key={i}
                className="mt-8 mb-3 font-sans font-semibold text-on-surface"
                style={{ fontSize: "22px" }}
              >
                {block.text}
              </h3>
            )

          case "product_table":
            return (
              <ProductComparisonTable
                key={i}
                headers={block.headers}
                rows={block.rows}
                caption={block.caption}
              />
            )

          case "faq":
            return (
              <FaqAccordion
                key={i}
                items={block.items.map(item => ({ q: item.question, a: item.answer }))}
              />
            )

          default:
            return null
        }
      })}
    </div>
  )
}
