import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Breadcrumb from "@/components/article/Breadcrumb";
import { Reveal } from "@/components/ui/Reveal";
import InfoBox from "@/components/article/blocks/InfoBox";
import PraticienDirectory from "@/components/directory/PraticienDirectory";
import { orthoprothesistes } from "@/lib/orthoprothesistes";

export const metadata: Metadata = {
  title: "Trouver un orthoprothésiste agréé",
  description:
    "Annuaire national des orthoprothésistes agréés en France - recherchez par département ou par ville pour trouver un professionnel près de chez vous.",
  alternates: {
    canonical: "/trouver-praticien",
  },
};

const heroGradient = "linear-gradient(135deg, #00374e 0%, #0b4f6c 60%, #0d5875 100%)";

export default function TrouverPraticienPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="pt-32 pb-16" style={{ background: heroGradient }}>
          <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10">
            <Breadcrumb
              items={[
                { label: "Accueil", href: "/" },
                { label: "Trouver un praticien" },
              ]}
              light
            />
            <Reveal eager className="mt-4 max-w-2xl">
              <span
                className="font-mono uppercase tracking-widest text-brand-amber block mb-3"
                style={{ fontSize: "11px" }}
              >
                ANNUAIRE
              </span>
              <h1
                className="font-heading font-bold text-white leading-tight mb-4"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
              >
                Trouver un orthoprothésiste agréé
              </h1>
              <p
                className="font-sans leading-relaxed"
                style={{ fontSize: "18px", color: "rgba(255,255,255,0.80)" }}
              >
                295 professionnels référencés dans 83 départements. Filtrez par
                département ou recherchez par nom et ville.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="bg-surface py-16">
          <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10">
            <Reveal>
              <InfoBox
                title="Source des données"
                text="Données issues de l'annuaire UFOP (Union Française des Orthoprothésistes). Les coordonnées peuvent avoir changé depuis leur collecte - nous vous invitons à vérifier les informations directement auprès du praticien avant de vous déplacer."
              />
            </Reveal>

            <div className="mt-10">
              <PraticienDirectory praticiens={orthoprothesistes} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
