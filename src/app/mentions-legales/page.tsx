import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Breadcrumb from '@/components/article/Breadcrumb'
import { Reveal } from '@/components/ui/Reveal'
import InfoBox from '@/components/article/blocks/InfoBox'

export const metadata: Metadata = {
  title: 'Mentions légales',
  description:
    "Mentions légales du site appareillageorthopedique.fr : éditeur, hébergement, propriété intellectuelle, données personnelles et droit applicable.",
  alternates: {
    canonical: '/mentions-legales',
  },
}

const heroGradient = 'linear-gradient(135deg, #00374e 0%, #0b4f6c 60%, #0d5875 100%)'

const sections = [
  {
    title: '1. Éditeur du site',
    body: (
      <>
        <p className="font-sans text-on-surface leading-[1.8]" style={{ fontSize: '17px' }}>
          Le site appareillageorthopedique.fr est édité par :
        </p>
        <p className="font-sans text-on-surface leading-[1.9] mt-4" style={{ fontSize: '17px' }}>
          DIGICORPEX<br />
          SASU (Société par Actions Simplifiée Unipersonnelle) au capital de 500,00 €<br />
          Siège social : 226 rue Camille Godard, 33000 Bordeaux<br />
          SIREN : 940 521 719<br />
          SIRET : 940 521 719 00010<br />
          RCS Bordeaux<br />
          N° TVA intracommunautaire : FR69940521719
        </p>
        <p className="font-sans text-on-surface leading-[1.8] mt-4" style={{ fontSize: '17px' }}>
          Email de contact :{' '}
          <a href="mailto:danielrollin@digicorpex.com" className="text-brand-teal underline underline-offset-2">
            danielrollin@digicorpex.com
          </a>
        </p>
        <p className="font-sans text-on-surface leading-[1.8] mt-4" style={{ fontSize: '17px' }}>
          Directeur de la publication : le représentant légal de la société DIGICORPEX.
        </p>
      </>
    ),
  },
  {
    title: '2. Hébergement',
    body: (
      <>
        <p className="font-sans text-on-surface leading-[1.8]" style={{ fontSize: '17px' }}>
          Le site est hébergé par :
        </p>
        <p className="font-sans text-on-surface leading-[1.9] mt-4" style={{ fontSize: '17px' }}>
          Vercel Inc.<br />
          340 S Lemon Ave #4133, Walnut, CA 91789, États-Unis<br />
          Site web :{' '}
          <a
            href="https://vercel.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-teal underline underline-offset-2"
          >
            https://vercel.com
          </a>
          <br />
          Contact :{' '}
          <a href="mailto:privacy@vercel.com" className="text-brand-teal underline underline-offset-2">
            privacy@vercel.com
          </a>
        </p>
      </>
    ),
  },
  {
    title: '3. Propriété intellectuelle',
    body: (
      <p className="font-sans text-on-surface leading-[1.8]" style={{ fontSize: '17px' }}>
        L&rsquo;ensemble des contenus présents sur ce site (textes, illustrations,
        infographies, structure, logo) est protégé par le droit d&rsquo;auteur et
        demeure la propriété de l&rsquo;éditeur du site, sauf mention contraire.
        Toute reproduction, représentation, modification ou publication de tout ou
        partie des éléments du site, par quelque procédé que ce soit, est interdite
        sans autorisation écrite préalable.
      </p>
    ),
  },
  {
    title: '4. Nature des contenus et responsabilité',
    body: (
      <div className="space-y-5">
        <p className="font-sans text-on-surface leading-[1.8]" style={{ fontSize: '17px' }}>
          Les informations publiées sur ce site ont une vocation strictement
          informative et pédagogique. Elles ne constituent en aucun cas un avis
          médical, un diagnostic ou une prescription, et ne sauraient se substituer
          à la consultation d&rsquo;un professionnel de santé (médecin,
          orthoprothésiste, kinésithérapeute) habilité à évaluer votre situation
          individuelle.
        </p>
        <p className="font-sans text-on-surface leading-[1.8]" style={{ fontSize: '17px' }}>
          Les données réglementaires et tarifaires (LPPR) présentées sont vérifiées
          avec soin à la date de publication indiquée sur chaque page, mais peuvent
          évoluer. En cas de doute, se référer à la base officielle de l&rsquo;Assurance
          Maladie ou consulter directement votre orthoprothésiste.
        </p>
        <p className="font-sans text-on-surface leading-[1.8]" style={{ fontSize: '17px' }}>
          L&rsquo;éditeur du site ne saurait être tenu responsable des décisions prises
          sur la seule base des informations publiées ici.
        </p>
      </div>
    ),
  },
  {
    title: '5. Données personnelles et cookies',
    body: (
      <div className="space-y-5">
        <p className="font-sans text-on-surface leading-[1.8]" style={{ fontSize: '17px' }}>
          Ce site ne dépose actuellement aucun cookie publicitaire ou de suivi
          tiers. Aucune régie publicitaire (Google AdSense ou équivalent) ni
          programme d&rsquo;affiliation commerciale n&rsquo;est pour l&rsquo;instant actif
          sur appareillageorthopedique.fr. Cette page sera mise à jour si cela évolue.
        </p>
        <p className="font-sans text-on-surface leading-[1.8]" style={{ fontSize: '17px' }}>
          Conformément au Règlement Général sur la Protection des Données (RGPD) et
          à la loi Informatique et Libertés, vous disposez d&rsquo;un droit d&rsquo;accès,
          de rectification et de suppression des données vous concernant. Pour
          exercer ce droit, contactez{' '}
          <a href="mailto:danielrollin@digicorpex.com" className="text-brand-teal underline underline-offset-2">
            danielrollin@digicorpex.com
          </a>
          .
        </p>
      </div>
    ),
  },
  {
    title: '6. Droit applicable',
    body: (
      <p className="font-sans text-on-surface leading-[1.8]" style={{ fontSize: '17px' }}>
        Le présent site et les présentes mentions légales sont soumis au droit
        français. Tout litige relatif à leur interprétation ou leur exécution
        relève de la compétence des tribunaux français.
      </p>
    ),
  },
]

export default function MentionsLegalesPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="pt-32 pb-16" style={{ background: heroGradient }}>
          <div className="max-w-[900px] mx-auto px-6 sm:px-8 lg:px-10">
            <Breadcrumb
              items={[{ label: 'Accueil', href: '/' }, { label: 'Mentions légales' }]}
              light
            />
            <Reveal eager className="mt-6">
              <span
                className="font-mono uppercase tracking-widest text-brand-amber block mb-3"
                style={{ fontSize: '11px' }}
              >
                INFORMATIONS LÉGALES
              </span>
              <h1
                className="font-heading font-bold text-white leading-tight"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
              >
                Mentions légales
              </h1>
            </Reveal>
          </div>
        </section>

        <section className="bg-surface py-16">
          <div className="max-w-[900px] mx-auto px-6 sm:px-8 lg:px-10">
            <Reveal>
              <InfoBox
                title="Ce que ce document couvre"
                text="Éditeur du site, hébergement, propriété intellectuelle, nature des contenus, données personnelles et droit applicable. Pour toute question, contactez-nous à l'adresse indiquée ci-dessous."
              />
            </Reveal>

            <div className="mt-12 space-y-12">
              {sections.map((section, i) => (
                <Reveal key={section.title} delay={i * 0.05}>
                  <h2
                    className="font-heading font-semibold text-on-surface mb-4 leading-tight"
                    style={{ fontSize: 'clamp(1.25rem, 2vw, 1.5rem)' }}
                  >
                    {section.title}
                  </h2>
                  {section.body}
                </Reveal>
              ))}
            </div>

            <Reveal delay={sections.length * 0.05}>
              <p
                className="font-mono uppercase tracking-widest text-on-surface-variant mt-16 pt-8 border-t border-outline-variant"
                style={{ fontSize: '10px' }}
              >
                Dernière mise à jour : 30 août 2026
              </p>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
