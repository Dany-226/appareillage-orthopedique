import type { Metadata } from 'next'
import Link from 'next/link'
import { Award, BookOpen, Sparkles, ExternalLink, Mail } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ScrollProgressBar from '@/components/article/ScrollProgressBar'
import Breadcrumb from '@/components/article/Breadcrumb'
import { Reveal } from '@/components/ui/Reveal'
import InfoBox from '@/components/article/blocks/InfoBox'

export const metadata: Metadata = {
  title: 'À propos - Expert appareillage orthopédique, 15 ans chez Össur France',
  description:
    'Qui sommes-nous ? Un expert ayant passé 15 ans chez Össur France, leader mondial de la prothèse et de l\'orthèse, au service des patients appareillés.',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  mainEntity: {
    '@type': 'Person',
    '@id': 'https://appareillageorthopedique.fr/#person',
    name: 'Jean-Marc Tissier',
    jobTitle: 'Expert en appareillage orthopédique',
    description:
      '15 ans de responsable national des ventes chez Össur France, leader mondial prothèse et orthèse',
    knowsAbout: [
      'Orthèses orthopédiques',
      'Prothèses de membres',
      'Fauteuils roulants',
      'Aides techniques',
      'Nomenclature LPPR',
      'Appareillage orthopédique',
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'appareillageorthopedique.fr',
    },
    alumniOf: {
      '@type': 'Organization',
      name: 'Össur France',
    },
  },
}

const heroGradient = 'linear-gradient(135deg, #00374e 0%, #0b4f6c 60%, #0d5875 100%)'

export default function AProposPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <ScrollProgressBar />
      <main>

        {/* ── SECTION 1 — Hero ──────────────────────────────────────────── */}
        <section className="pt-32 pb-20" style={{ background: heroGradient }}>
          <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10">
            <Breadcrumb
              items={[{ label: 'Accueil', href: '/' }, { label: 'À propos' }]}
              light
            />
            <Reveal eager className="mt-6 max-w-3xl">
              <span
                className="font-mono uppercase tracking-widest text-brand-amber block mb-4"
                style={{ fontSize: '11px' }}
              >
                À PROPOS
              </span>
              <h1
                className="font-heading font-bold text-white leading-tight mb-5"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
              >
                Un regard de l&rsquo;intérieur sur l&rsquo;appareillage
                orthopédique
              </h1>
              <p
                className="font-sans leading-relaxed"
                style={{ fontSize: '20px', color: 'rgba(255,255,255,0.80)' }}
              >
                Ce site est fondé et rédigé par un professionnel ayant passé 15 ans
                au coeur de l&rsquo;industrie de l&rsquo;appareillage orthopédique
                en France - au contact quotidien des orthoprothésistes, des
                prescripteurs et des patients.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ── SECTION 2 — Profil auteur ─────────────────────────────────── */}
        <section className="bg-surface py-24">
          <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10">
            <Reveal>
              <div className="flex flex-col gap-10 lg:flex-row lg:gap-16 lg:items-start">

                {/* Photo placeholder */}
                <div className="flex-none flex flex-col items-center gap-4">
                  <div
                    className="h-[200px] w-[200px] rounded-full bg-brand-teal-light
                               flex items-center justify-center overflow-hidden"
                  >
                    <svg
                      width="72"
                      height="72"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#0B4F6C"
                      strokeWidth="1"
                      strokeLinecap="round"
                      aria-hidden
                    >
                      <circle cx="12" cy="8" r="4" />
                      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                    </svg>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <span
                    className="font-mono uppercase tracking-widest text-brand-amber block mb-3"
                    style={{ fontSize: '11px' }}
                  >
                    L&rsquo;AUTEUR
                  </span>
                  <h2
                    className="font-heading font-semibold text-on-surface mb-6 leading-tight"
                    style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}
                  >
                    15 ans chez Össur France
                  </h2>

                  <div className="space-y-5 mb-8">
                    <p className="font-sans text-on-surface leading-[1.8]" style={{ fontSize: '18px' }}>
                      Össur est l&rsquo;un des leaders mondiaux de la conception et
                      fabrication de prothèses et d&rsquo;orthèses. Pendant 15 ans en
                      tant que responsable national des ventes en France, j&rsquo;ai
                      travaillé au quotidien avec des orthoprothésistes, des médecins
                      prescripteurs, et des patients appareillés - des deux côtés de
                      la consultation.
                    </p>
                    <p className="font-sans text-on-surface leading-[1.8]" style={{ fontSize: '18px' }}>
                      Cette expérience terrain est irremplaçable : je connais les
                      produits en profondeur, les nuances cliniques qui conditionnent
                      un bon appareillage, les réalités du remboursement LPPR, et
                      surtout les questions que se posent les patients - souvent sans
                      trouver de réponses claires.
                    </p>
                    <p className="font-sans text-on-surface leading-[1.8]" style={{ fontSize: '18px' }}>
                      Ce site est né de ce constat : l&rsquo;information de qualité
                      sur l&rsquo;appareillage orthopédique est rare, fragmentée, et
                      souvent rédigée pour des professionnels de santé plutôt que
                      pour les patients eux-mêmes.
                    </p>
                  </div>

                  {/* Expertise badges */}
                  <div className="flex flex-wrap gap-3 mb-6">
                    <div className="rounded-lg bg-brand-teal px-4 py-3">
                      <p
                        className="font-heading font-semibold text-white leading-tight"
                        style={{ fontSize: '14px' }}
                      >
                        Össur France
                      </p>
                      <p
                        className="font-mono text-white/70 mt-0.5"
                        style={{ fontSize: '11px' }}
                      >
                        15 ans - Responsable national des ventes
                      </p>
                    </div>
                    <div className="rounded-lg bg-brand-amber px-4 py-3">
                      <p
                        className="font-heading font-semibold text-white leading-tight"
                        style={{ fontSize: '14px' }}
                      >
                        Prothèses &amp; Orthèses
                      </p>
                      <p
                        className="font-mono text-white/70 mt-0.5"
                        style={{ fontSize: '11px' }}
                      >
                        Membre inférieur et supérieur
                      </p>
                    </div>
                    <div
                      className="rounded-lg px-4 py-3"
                      style={{ background: '#eae8e5' }}
                    >
                      <p
                        className="font-heading font-semibold text-on-surface leading-tight"
                        style={{ fontSize: '14px' }}
                      >
                        LPPR
                      </p>
                      <p
                        className="font-mono text-on-surface-variant mt-0.5"
                        style={{ fontSize: '11px' }}
                      >
                        Nomenclature et remboursements
                      </p>
                    </div>
                  </div>

                  <p
                    className="font-mono uppercase tracking-widest text-on-surface-variant"
                    style={{ fontSize: '10px' }}
                  >
                    Parcours professionnel vérifiable sur LinkedIn
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── SECTION 3 — Stumpr ───────────────────────────────────────────── */}
        <section className="bg-surface-container-low py-20">
          <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-start">

              {/* Left content */}
              <Reveal>
                <span
                  className="font-mono uppercase tracking-widest text-brand-amber block mb-4"
                  style={{ fontSize: '11px' }}
                >
                  DONNÉES TERRAIN
                </span>
                <h2
                  className="font-heading font-semibold text-on-surface mb-6 leading-tight"
                  style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.25rem)' }}
                >
                  Stumpr - l&rsquo;application pour les patients appareillés
                </h2>
                <div className="space-y-5 mb-8">
                  <p className="font-sans text-on-surface leading-[1.8]" style={{ fontSize: '17px' }}>
                    En parallèle de ce site éditorial, je développe Stumpr - une
                    application destinée aux patients appareillés pour les aider à
                    suivre leurs renouvellements, connaître leurs droits, et trouver
                    des professionnels adaptés.
                  </p>
                  <p className="font-sans text-on-surface leading-[1.8]" style={{ fontSize: '17px' }}>
                    Les données issues des enquêtes Stumpr auprès de patients
                    appareillés alimentent régulièrement le contenu de ce site -
                    citées systématiquement comme &laquo;&nbsp;Selon une enquête
                    menée auprès de patients appareillés - 2026&nbsp;&raquo;.
                  </p>
                </div>
                <Link
                  href="https://stumpr.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-button border-2
                             border-brand-teal px-5 py-2.5 font-sans font-semibold
                             text-brand-teal hover:bg-brand-teal hover:text-white
                             transition-all duration-200 focus-ring"
                  style={{ fontSize: '15px' }}
                >
                  En savoir plus sur Stumpr
                  <ExternalLink size={14} aria-hidden />
                </Link>
              </Reveal>

              {/* Right stat cards */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '65%', label: 'ignorent leur droit au renouvellement autonome', color: 'amber' },
                  { value: '53%', label: 'ont raté au moins un renouvellement', color: 'amber' },
                  { value: '77%', label: 'sans connaissance opérationnelle de leurs droits', color: 'amber' },
                  { value: '2026', label: 'enquête nationale patients appareillés', color: 'teal' },
                ].map((stat, i) => (
                  <Reveal key={i} delay={i * 0.08}>
                    <div className="bg-white rounded-lg p-6 shadow-card h-full">
                      <div
                        className="font-heading font-bold leading-none mb-2"
                        style={{
                          fontSize: '40px',
                          color: stat.color === 'amber' ? '#E8923A' : '#0B4F6C',
                        }}
                      >
                        {stat.value}
                      </div>
                      <p
                        className="font-sans text-on-surface-variant leading-snug"
                        style={{ fontSize: '13px' }}
                      >
                        {stat.label}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 4 — Méthode éditoriale ───────────────────────────────── */}
        <section className="bg-surface py-20">
          <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10">
            <Reveal>
              <span
                className="font-mono uppercase tracking-widest text-brand-amber block mb-4"
                style={{ fontSize: '11px' }}
              >
                TRANSPARENCE ÉDITORIALE
              </span>
              <h2
                className="font-heading font-semibold text-on-surface mb-14 leading-tight"
                style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.25rem)' }}
              >
                Comment ce site est rédigé
              </h2>
            </Reveal>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  Icon: Award,
                  title: 'Expertise terrain',
                  body: "Chaque article est rédigé ou supervisé en s'appuyant sur 15 ans d'expérience directe dans le secteur. Les nuances cliniques, les réalités du remboursement, les comparaisons produits - rien ne provient d'une synthèse purement documentaire.",
                },
                {
                  Icon: BookOpen,
                  title: 'Sources institutionnelles',
                  body: 'Toutes les informations médicales et réglementaires sont adossées à des sources primaires : HAS, SOFMER, nomenclature LPPR officielle, Ameli.fr. Les sources sont citées en bas de chaque article.',
                },
                {
                  Icon: Sparkles,
                  title: 'IA + contrôle expert',
                  body: "La rédaction utilise des outils d'intelligence artificielle pour la structure et la fluidité du texte. Chaque contenu est relu et validé pour s'assurer de l'exactitude des informations médicales et réglementaires.",
                },
              ].map(({ Icon, title, body }, i) => (
                <Reveal key={title} delay={i * 0.1}>
                  <div className="flex flex-col gap-4">
                    <div
                      className="h-11 w-11 flex-none rounded-lg bg-brand-teal-light
                                 flex items-center justify-center"
                    >
                      <Icon size={20} className="text-brand-teal" aria-hidden />
                    </div>
                    <h3
                      className="font-heading font-semibold text-on-surface leading-tight"
                      style={{ fontSize: '20px' }}
                    >
                      {title}
                    </h3>
                    <p
                      className="font-sans text-on-surface-variant leading-[1.75]"
                      style={{ fontSize: '15px' }}
                    >
                      {body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── SECTION 5 — Transparence commerciale ─────────────────────────── */}
        <section className="bg-surface-container-low py-16">
          <div className="max-w-[900px] mx-auto px-6 sm:px-8 lg:px-10">
            <Reveal>
              <span
                className="font-mono uppercase tracking-widest text-brand-amber block mb-4"
                style={{ fontSize: '11px' }}
              >
                TRANSPARENCE COMMERCIALE
              </span>
              <h2
                className="font-heading font-semibold text-on-surface mb-6 leading-tight"
                style={{ fontSize: 'clamp(1.25rem, 2vw, 1.75rem)' }}
              >
                Modèle économique
              </h2>
              <p
                className="font-sans text-on-surface leading-[1.8] mb-8"
                style={{ fontSize: '17px' }}
              >
                Ce site est financé par deux sources : la publicité Google Adsense et
                des liens d&rsquo;affiliation vers des revendeurs de dispositifs
                médicaux. Ces liens sont systématiquement signalés.
              </p>
              <InfoBox
                title="Notre engagement"
                text="Les recommandations éditoriales sont indépendantes de tout partenariat commercial. Nous ne recommandons jamais un produit en raison d'une commission - seulement en raison de sa pertinence clinique. Aucun fabricant ne finance ou n'influence le contenu de ce site."
              />
            </Reveal>
          </div>
        </section>

        {/* ── SECTION 6 — Contact ───────────────────────────────────────────── */}
        <section className="py-20" style={{ background: heroGradient }}>
          <div className="max-w-[900px] mx-auto px-6 sm:px-8 lg:px-10 text-center">
            <Reveal eager>
              <h2
                className="font-heading font-bold text-white mb-5 leading-tight"
                style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.25rem)' }}
              >
                Contact et partenariats éditoriaux
              </h2>
              <p
                className="font-sans leading-relaxed mb-8 mx-auto max-w-xl"
                style={{ fontSize: '17px', color: 'rgba(255,255,255,0.80)' }}
              >
                Vous êtes orthoprothésiste, médecin, ou professionnel de santé et
                souhaitez contribuer au contenu de ce site ? Vous représentez une
                association de patients et souhaitez un partenariat éditorial ?
              </p>
              <a
                href="mailto:contact@appareillageorthopedique.fr"
                className="inline-flex items-center gap-2 rounded-button bg-brand-amber
                           px-8 py-3 font-sans font-semibold text-white
                           hover:brightness-95 transition-all duration-200"
                style={{ fontSize: '15px' }}
              >
                <Mail size={15} aria-hidden />
                Nous contacter
              </a>
              <p
                className="font-mono uppercase tracking-widest mt-8"
                style={{ fontSize: '10px', color: 'rgba(255,255,255,0.40)' }}
              >
                Dernière mise à jour de cette page : juin 2026
              </p>
            </Reveal>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
