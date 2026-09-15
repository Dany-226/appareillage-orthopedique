import type { GuideAchatBlock } from "@/lib/guides-achat"
import { renderInline } from "@/lib/renderInline"
import FaqAccordion from "@/components/article/blocks/FaqAccordion"
import ProductComparisonTable from "./ProductComparisonTable"

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
