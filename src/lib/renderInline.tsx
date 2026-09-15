import type { ReactNode } from "react"
import Link from "next/link"

// Parseur inline minimal partagé : **gras**, *italique*, [texte](lien).
// Pas de lien deviné : un lien interne relatif (/...) devient un <Link>,
// un lien externe une <a> classique, tout le reste (texte sans marqueur,
// parenthèses sans href fourni) reste du texte simple.
export function renderInline(text: string, keyPrefix: string): ReactNode[] {
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
