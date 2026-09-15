import Link from "next/link"
import { ArrowRight, BookOpen } from "lucide-react"
import { guidesAchat } from "@/lib/guides-achat"

// Générique : boucle sur guidesAchat, pas de liste codée en dur — un futur
// article (genouillère, chevillère) apparaît ici automatiquement dès qu'il
// est ajouté à guides-achat.ts, sans intervention manuelle sur cette page.
export default function GuideAchatRelated({ currentSlug }: { currentSlug: string }) {
  const otherGuides = guidesAchat.filter(g => g.slug !== currentSlug)

  return (
    <nav
      aria-label="À lire aussi"
      className="mt-12 rounded-2xl border border-surface-container-high bg-white p-8"
    >
      <div className="flex items-center gap-2 mb-6">
        <BookOpen size={16} className="text-brand-teal" aria-hidden />
        <span
          className="font-mono uppercase tracking-widest text-brand-teal"
          style={{ fontSize: "12px" }}
        >
          À lire aussi
        </span>
      </div>

      <ul className="space-y-3">
        {otherGuides.map(guide => (
          <li key={guide.slug}>
            <Link
              href={`/ortheses/guide-achat/${guide.slug}`}
              className="group inline-flex items-center gap-2 font-sans font-semibold
                         text-on-surface hover:text-brand-teal transition-colors"
              style={{ fontSize: "16px" }}
            >
              {guide.title}
              <ArrowRight
                size={14}
                className="text-brand-teal transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden
              />
            </Link>
          </li>
        ))}
      </ul>

      <div
        className="mt-6 pt-6 border-t flex flex-wrap gap-x-6 gap-y-2"
        style={{ borderColor: "#eae8e5" }}
      >
        <Link
          href="/ortheses/guide-achat"
          className="text-brand-teal underline underline-offset-2 hover:text-brand-amber transition-colors"
          style={{ fontSize: "14px" }}
        >
          Tous nos guides d&rsquo;achat
        </Link>
        <Link
          href="/ortheses"
          className="text-brand-teal underline underline-offset-2 hover:text-brand-amber transition-colors"
          style={{ fontSize: "14px" }}
        >
          Retour au guide orthèses
        </Link>
      </div>
    </nav>
  )
}
