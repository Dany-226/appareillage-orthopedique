import type { Metadata } from 'next'
import { ExternalLink } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ScrollProgressBar from '@/components/article/ScrollProgressBar'
import Breadcrumb from '@/components/article/Breadcrumb'
import { Reveal } from '@/components/ui/Reveal'
import TableOfContents from '@/components/sidebar/TableOfContents'
import StatCallout from '@/components/article/blocks/StatCallout'
import InfoBox from '@/components/article/blocks/InfoBox'
import ComparisonTable from '@/components/article/blocks/ComparisonTable'
import FaqAccordion from '@/components/article/blocks/FaqAccordion'
import CtaBlock from '@/components/article/blocks/CtaBlock'
import { lpprSections } from '@/lib/lppr'

export const metadata: Metadata = {
  title: 'Remboursement appareillage orthopédique LPPR - guide complet 2026',
  description:
    'Comprendre le remboursement de votre appareillage par la Sécurité sociale. Tarifs LPPR 2026, conditions, entente préalable et droits des patients.',
}

const headings = [
  { id: 'principes',          text: 'Principes généraux' },
  { id: 'renouvellement',     text: 'Droit au renouvellement' },
  { id: 'tarifs',             text: 'Tarifs par dispositif' },
  { id: 'entente-prealable',  text: 'Entente préalable' },
  { id: 'changer-praticien',  text: "Changer d'orthoprothésiste" },
]

const faqItems = [
  {
    q: 'Quelle est la différence entre PLV TTC et prix réel ?',
    a: "Le PLV TTC est le prix maximum que l'orthoprothésiste peut facturer à la Sécurité sociale. Le prix réel peut être inférieur. Votre mutuelle complète selon votre contrat - certains contrats couvrent la totalité du reste à charge.",
  },
  {
    q: 'Peut-on cumuler LPPR et aide MDPH ?',
    a: "Oui. La PCH (Prestation de Compensation du Handicap) versée par la MDPH peut compléter le remboursement SS et mutuelle pour les dispositifs coûteux. Les deux aides ne sont pas exclusives.",
  },
  {
    q: "Que faire si la CPAM refuse l'entente préalable ?",
    a: "Vous disposez d'un délai de 2 mois pour contester la décision auprès de la Commission de Recours Amiable (CRA) de votre CPAM. En cas d'échec, le recours contentieux devant le Tribunal Judiciaire est possible. L'aide d'un avocat spécialisé ou d'une association de patients est recommandée.",
  },
  {
    q: 'Les réparations sont-elles remboursées ?',
    a: "Oui. Les frais de réparation des orthoprothèses sont pris en charge par la LPPR dans certaines limites. Le code 2713193 couvre également les frais d'expédition des appareils.",
  },
]

// ── Shared heading styles ─────────────────────────────────────────────────────
function H2({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2
      id={id}
      className="mt-12 mb-4 pl-4 font-heading font-semibold border-l-4 border-brand-amber leading-tight"
      style={{ fontSize: '32px', color: '#00374e' }}
    >
      {children}
    </h2>
  )
}

function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3
      className="mt-8 mb-3 font-sans font-semibold text-on-surface"
      style={{ fontSize: '22px' }}
    >
      {children}
    </h3>
  )
}

function P({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-6 font-sans leading-[1.8] text-on-surface" style={{ fontSize: '18px' }}>
      {children}
    </p>
  )
}

export default function RemboursementLPPRPage() {
  return (
    <>
      <Navbar />
      <ScrollProgressBar />
      <main className="bg-surface">

        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <section
          className="pt-32 pb-16"
          style={{ background: 'linear-gradient(135deg, #00374e 0%, #0b4f6c 60%, #0d5875 100%)' }}
        >
          <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10">
            <Breadcrumb
              items={[
                { label: 'Accueil', href: '/' },
                { label: 'Guides', href: '/#guides' },
                { label: 'Remboursement LPPR' },
              ]}
              light
            />

            <Reveal eager className="mt-4">
              <span
                className="font-mono uppercase tracking-widest text-brand-amber block mb-3"
                style={{ fontSize: '11px' }}
              >
                GUIDE PRATIQUE
              </span>
              <h1
                className="font-heading font-bold text-white leading-tight mb-4"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
              >
                Remboursement de l&rsquo;appareillage orthopédique
              </h1>
              <p
                className="font-sans leading-relaxed max-w-2xl mb-6"
                style={{ fontSize: '18px', color: 'rgba(255,255,255,0.80)' }}
              >
                Nomenclature LPPR mise à jour mars 2026 - tarifs, conditions d&rsquo;accès et
                droits des patients
              </p>
              <div className="flex flex-wrap gap-3">
                <span
                  className="inline-flex items-center rounded-full border border-white/20
                             bg-white/10 px-3 py-1 font-mono uppercase tracking-widest text-white/80"
                  style={{ fontSize: '10px' }}
                >
                  Mis à jour : mars 2026
                </span>
                <span
                  className="inline-flex items-center rounded-full border border-white/20
                             bg-white/10 px-3 py-1 font-mono uppercase tracking-widest text-white/80"
                  style={{ fontSize: '10px' }}
                >
                  Source : LPPR officielle
                </span>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── Body ─────────────────────────────────────────────────────────── */}
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10 py-16">
          <div className="grid gap-14 lg:grid-cols-[1fr_300px] lg:items-start">

            {/* ── Left: article content ─────────────────────────────────── */}
            <article>

              {/* Intro */}
              <Reveal>
                <P>
                  La prise en charge de l&rsquo;appareillage orthopédique par la Sécurité sociale
                  est encadrée par la Liste des Produits et Prestations Remboursables (LPPR). Elle
                  fixe les bases de remboursement, les conditions de prescription, et les durées de
                  garantie de chaque dispositif. Ce guide synthétise les informations essentielles
                  issues de la nomenclature mise à jour en mars 2026.
                </P>
                <StatCallout
                  value="65%"
                  label="des patients ignorent qu'ils peuvent initier eux-mêmes leur demande de renouvellement - sans attendre leur orthoprothésiste"
                  source="Selon une enquête menée auprès de patients appareillés - 2026"
                />
              </Reveal>

              {/* ── Principes généraux ───────────────────────────────────── */}
              <Reveal>
                <H2 id="principes">Principes généraux de la prise en charge</H2>
                <P>
                  Toute prise en charge d&rsquo;une orthoprothèse nécessite un accord préalable de
                  la CPAM avant fabrication. La prescription doit être établie par un médecin
                  spécialiste habilité, sur une ordonnance distincte de tout traitement
                  médicamenteux. Le dispositif doit figurer à la nomenclature LPPR ou faire
                  l&rsquo;objet d&rsquo;une demande dérogatoire argumentée.
                </P>
                <InfoBox
                  title="Qui peut prescrire ?"
                  text="Médecine physique et de réadaptation (MPR), orthopédie, rhumatologie, neurologie, chirurgie vasculaire, pédiatrie, gériatrie, dermatologie, endocrinologie, chirurgie plastique, neurochirurgie. La prescription d'un médecin généraliste est acceptée pour les orthèses courantes inscrites en liste II."
                />
                <P>
                  L&rsquo;ordonnance doit être établie sur une feuille séparée - elle ne peut pas
                  figurer sur la même ordonnance que des médicaments. Cette règle est stricte et
                  conditionne la prise en charge.
                </P>
              </Reveal>

              {/* ── Renouvellement ───────────────────────────────────────── */}
              <Reveal>
                <H2 id="renouvellement">Votre droit au renouvellement autonome</H2>
                <P>
                  Depuis 2014, le renouvellement de certaines orthoprothèses peut être initié
                  directement par le patient ou par l&rsquo;orthoprothésiste, sans nouvelle
                  prescription médicale. Ce droit s&rsquo;applique dès que la durée minimale de
                  garantie est écoulée et que le dispositif présente une usure justifiant le
                  renouvellement.
                </P>
                <StatCallout
                  value="53%"
                  label="ont raté au moins un renouvellement ou ne sont pas certains de ne pas en avoir raté"
                  source="Selon une enquête menée auprès de patients appareillés - 2026"
                />
                <InfoBox
                  title="Comment initier un renouvellement"
                  text="Contactez directement un orthoprothésiste agréé - vous n'avez pas besoin d'attendre une notification de votre CPAM ou de votre médecin. L'orthoprothésiste constitue le dossier de renouvellement et l'envoie à votre caisse pour accord. Vous pouvez choisir un prestataire différent de celui qui a fourni le dispositif initial."
                />
              </Reveal>

              {/* ── Tarifs ───────────────────────────────────────────────── */}
              <Reveal>
                <H2 id="tarifs">Tarifs de remboursement par dispositif</H2>
                <P>
                  Les tarifs ci-dessous sont les Prix Limites de Vente TTC (PLV TTC) - la base de
                  remboursement SS. Votre mutuelle complète selon votre contrat.
                </P>
              </Reveal>

              {lpprSections.map(section => {
                const isKnee = section.id === 'genoux-microprocesseur'
                const headers = isKnee
                  ? ['Code LPPR', 'Dispositif', 'Base SS (PLV TTC)', 'Durée', 'Conditions']
                  : ['Code LPPR', 'Dispositif', 'Base SS (PLV TTC)', 'Durée']
                const rows = section.items.map(item =>
                  isKnee
                    ? [item.code, item.label, item.plvTTC, item.duree ?? '-', item.conditions ?? '-']
                    : [item.code, item.label, item.plvTTC, item.duree ?? '-']
                )

                return (
                  <Reveal key={section.id}>
                    <H3>{section.title}</H3>
                    {section.note && (
                      <InfoBox text={section.note} />
                    )}
                    <ComparisonTable
                      headers={headers}
                      rows={rows}
                      monoColumns={[0]}
                    />
                  </Reveal>
                )
              })}

              {/* ── Entente préalable ─────────────────────────────────────── */}
              <Reveal>
                <H2 id="entente-prealable">Procédure d&rsquo;entente préalable</H2>
                <P>
                  L&rsquo;entente préalable est obligatoire pour toutes les orthoprothèses sur
                  mesure inscrites à la LPPR. Elle garantit la prise en charge et encadre le choix
                  des composants. La procédure se déroule en cinq étapes - la fabrication ne peut
                  commencer qu&rsquo;après accord explicite ou tacite de la CPAM.
                </P>
                <ol className="mb-8 space-y-4 pl-0 list-none">
                  {[
                    'Prescription par le médecin spécialiste habilité, sur ordonnance séparée.',
                    "Bilan prothétique réalisé par l'orthoprothésiste agréé - évaluation du niveau fonctionnel, des besoins et choix des composants.",
                    "Constitution du dossier d'entente préalable sur formulaire homologué (CERFA) - devis détaillé avec codes LPPR.",
                    "Transmission à la CPAM - délai légal de réponse de 15 jours. Absence de réponse = accord tacite.",
                    "Fabrication uniquement après réception de l'accord écrit ou expiration du délai de réponse tacite.",
                  ].map((step, i) => (
                    <li key={i} className="flex gap-4">
                      <span
                        className="flex-none font-mono font-bold text-brand-amber leading-none mt-1"
                        style={{ fontSize: '18px' }}
                        aria-hidden
                      >
                        {i + 1}.
                      </span>
                      <p
                        className="font-sans text-on-surface leading-[1.75] m-0"
                        style={{ fontSize: '17px' }}
                      >
                        {step}
                      </p>
                    </li>
                  ))}
                </ol>
              </Reveal>

              {/* ── Changer praticien ─────────────────────────────────────── */}
              <Reveal>
                <H2 id="changer-praticien">Votre droit de changer d&rsquo;orthoprothésiste</H2>
                <P>
                  Le choix de l&rsquo;orthoprothésiste est entièrement libre. Vous pouvez choisir
                  n&rsquo;importe quel prestataire agréé par la Sécurité sociale, et en changer à
                  tout moment - y compris en cours de prise en charge ou au moment d&rsquo;un
                  renouvellement.
                </P>
                <InfoBox
                  title="Dossier de fabrication - vos données vous appartiennent"
                  text="Les moulages, empreintes et données de réglage constituent votre dossier de fabrication. Ils vous appartiennent et doivent être transmis à tout nouvel orthoprothésiste sur simple demande écrite. Aucun frais ne peut être facturé pour cette transmission."
                />
              </Reveal>

              {/* ── FAQ ───────────────────────────────────────────────────── */}
              <Reveal>
                <H2 id="faq">Questions fréquentes</H2>
                <FaqAccordion items={faqItems} />
              </Reveal>

              {/* ── CTA ───────────────────────────────────────────────────── */}
              <CtaBlock
                headline="Trouver un orthoprothésiste agréé"
                sub="Votre choix est entièrement libre. Vous pouvez changer de prestataire à tout moment."
                btnLabel="Trouver un praticien près de chez vous"
                href="/trouver-un-praticien"
              />

            </article>

            {/* ── Right: sidebar ────────────────────────────────────────── */}
            <aside className="hidden lg:block">
              <div
                className="sticky space-y-4 overflow-y-auto pr-1"
                style={{
                  top: '88px',
                  maxHeight: 'calc(100vh - 108px)',
                  scrollbarWidth: 'none',
                }}
              >
                {/* TOC */}
                <div className="rounded-xl border border-border bg-card p-5 shadow-card">
                  <TableOfContents headings={headings} />
                </div>

                {/* Source card */}
                <div className="rounded-xl border border-border bg-card p-5 shadow-card">
                  <p
                    className="font-sans font-semibold text-on-surface mb-2"
                    style={{ fontSize: '13px' }}
                  >
                    Source officielle
                  </p>
                  <a
                    href="https://www.ameli.fr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-brand-teal
                               hover:text-brand-teal/80 transition-colors duration-150"
                    style={{ fontSize: '12px' }}
                  >
                    ameli.fr - Nomenclature LPPR
                    <ExternalLink size={11} aria-hidden />
                  </a>
                  <div
                    className="mt-3 pt-3 border-t border-surface-container-high"
                  >
                    <span
                      className="font-mono uppercase tracking-widest text-on-surface-variant"
                      style={{ fontSize: '10px' }}
                    >
                      Mis à jour mars 2026
                    </span>
                  </div>
                </div>
              </div>
            </aside>

          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
