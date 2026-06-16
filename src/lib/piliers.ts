// ─────────────────────────────────────────────
// CONTENT BLOCK TYPES
// ─────────────────────────────────────────────

export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "h2"; id: string; text: string }
  | { type: "h3"; text: string }
  | { type: "stat"; value: string; label: string; source?: string }
  | { type: "info"; title?: string; text: string }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "faq"; items: { q: string; a: string }[] }
  | { type: "cta"; headline: string; sub?: string; btnLabel: string; href: string };

export type TocHeading = { id: string; text: string };

export type PilierData = {
  slug: string;
  category: string;
  readingTime: number;
  h1: string;
  author: { name: string; title: string; updatedAt: string };
  content: ContentBlock[];
};

// ─────────────────────────────────────────────
// MOCK DATA — one full pilier + one stub
// ─────────────────────────────────────────────

const piliers: Record<string, PilierData> = {
  protheses: {
    slug: "protheses",
    category: "Prothèses",
    readingTime: 12,
    h1: "Prothèses de membres : guide complet pour les patients et leurs proches",
    author: {
      name: "Jean-Marc Tissier",
      title: "Expert appareillage orthopédique — 15 ans chez Össur France",
      updatedAt: "Mis à jour le 8 juin 2026",
    },
    content: [
      {
        type: "paragraph",
        text: "Les prothèses de membres représentent aujourd'hui l'une des avancées les plus significatives de la médecine de rééducation. Qu'il s'agisse d'une amputation d'un membre inférieur ou supérieur, les solutions prothétiques modernes permettent de retrouver une mobilité fonctionnelle et une qualité de vie proche de la normale. Ce guide accompagne les patients nouvellement amputés, leurs proches et les aidants dans la compréhension du parcours d'appareillage, du premier rendez-vous jusqu'au renouvellement.",
      },
      {
        type: "h2",
        id: "types-protheses",
        text: "Les types de prothèses",
      },
      {
        type: "paragraph",
        text: "On distingue plusieurs grandes familles de prothèses selon le niveau d'amputation et l'objectif fonctionnel visé. Le choix dépend de nombreux facteurs : âge, niveau d'activité, étiologie de l'amputation, état du moignon et objectifs de réadaptation définis avec l'équipe médicale pluridisciplinaire.",
      },
      {
        type: "h3",
        text: "Prothèses tibiales (trans-tibiales)",
      },
      {
        type: "paragraph",
        text: "La prothèse tibiale concerne les amputations sous le genou. Elle se compose d'une emboîture sur mesure, d'un pylône et d'un pied prothétique. Les modèles à pied dynamique permettent une restitution d'énergie à la marche, améliorant significativement la qualité de démarche et réduisant la fatigue musculaire.",
      },
      {
        type: "h3",
        text: "Prothèses fémorales (trans-fémorales)",
      },
      {
        type: "paragraph",
        text: "Les prothèses fémorales s'adressent aux amputations au-dessus du genou. Elles intègrent un genou prothétique — mécanique, hydraulique ou électronique. Les genoux à microprocesseur (C-Leg d'Ottobock, Rheo Knee d'Össur) offrent une adaptation en temps réel aux variations de terrain et un contrôle amélioré en descente.",
      },
      {
        type: "stat",
        value: "65",
        label: "des patients ignorent leur droit au renouvellement autonome de prothèse",
        source: "Enquête Stumpr 2026 — 412 patients appareillés",
      },
      {
        type: "h2",
        id: "remboursement-lppr",
        text: "Remboursement et nomenclature LPPR",
      },
      {
        type: "paragraph",
        text: "En France, les prothèses de membres sont inscrites à la Liste des Produits et Prestations Remboursables (LPPR). Chaque dispositif porte un code à 11 chiffres déterminant le tarif de remboursement par l'Assurance Maladie. La prise en charge est de 100 % du tarif de base pour les assurés en ALD, et de 60 % pour les autres.",
      },
      {
        type: "info",
        title: "Renouvellement autonome — ce que vous pouvez faire seul",
        text: "Depuis 2014, le renouvellement de certaines prothèses peut se faire sans nouvelle prescription médicale, à l'initiative du patient ou de l'orthoprothésiste, au terme du délai minimal de renouvellement. Contactez votre CPAM ou votre orthoprothésiste pour initier la démarche.",
      },
      {
        type: "table",
        headers: ["Type de prothèse", "Code LPPR", "Base SS", "Renouvellement"],
        rows: [
          ["Prothèse tibiale simple",       "04.02.01.01.15", "1 320 €",  "3 ans"],
          ["Prothèse tibiale dynamique",    "04.02.01.02.40", "3 650 €",  "3 ans"],
          ["Prothèse fémorale mécanique",   "04.02.02.01.10", "4 890 €",  "3 ans"],
          ["Pied prothétique énergétique",  "04.02.03.10.20", "580 €",    "5 ans"],
          ["Genou prothétique hydraulique", "04.02.02.05.15", "8 200 €",  "5 ans"],
          ["Genou à microprocesseur",       "04.02.02.06.11", "13 500 €", "5 ans"],
        ],
      },
      {
        type: "h2",
        id: "choisir-prothese",
        text: "Comment choisir sa prothèse",
      },
      {
        type: "paragraph",
        text: "Le choix d'une prothèse est une décision pluridisciplinaire : patient, médecin prescripteur (MPR ou chirurgien) et orthoprothésiste. Plusieurs critères guident le choix : le niveau fonctionnel K (K0 à K4), l'activité professionnelle et sportive, le profil morphologique et les préférences esthétiques.",
      },
      {
        type: "h3",
        text: "Comprendre les niveaux fonctionnels (classification K)",
      },
      {
        type: "paragraph",
        text: "La classification K évalue le potentiel de marche du patient amputé. Un patient K2 (déambulation sur terrain plat, vitesse limitée) n'aura pas accès aux mêmes composants qu'un patient K4 (niveau d'activité sportif élevé). Cette classification est établie par l'équipe médicale et peut évoluer avec la rééducation.",
      },
      {
        type: "h2",
        id: "faq",
        text: "Questions fréquentes",
      },
      {
        type: "faq",
        items: [
          {
            q: "Comment se passe le premier appareillage après une amputation ?",
            a: "Le premier appareillage intervient généralement entre 4 et 8 semaines après l'amputation, une fois le moignon cicatrisé et stabilisé. Il débute par une consultation avec un orthoprothésiste agréé, qui réalise un moulage du moignon pour fabriquer une emboîture provisoire. Le processus comprend plusieurs séances d'essayage et d'ajustement avant la remise de la prothèse définitive.",
          },
          {
            q: "Quel est le montant exact remboursé par la Sécurité Sociale ?",
            a: "Pour un patient en ALD (quasi-systématique pour les amputés), la prise en charge est de 100 % du tarif de base de la Sécurité Sociale. Une mutuelle complémentaire peut couvrir le dépassement éventuel si le prix du dispositif dépasse ce tarif de base. Le RAC (reste à charge) peut être significatif pour des composants avancés.",
          },
          {
            q: "Puis-je choisir librement mon orthoprothésiste ?",
            a: "Oui, vous êtes entièrement libre de choisir parmi les praticiens agréés. Il est conseillé de choisir un professionnel spécialisé dans votre type d'amputation. Certains composants avancés (genoux à microprocesseur, pieds bioniques) nécessitent un agrément spécifique de la part du professionnel.",
          },
          {
            q: "Comment entretenir ma prothèse au quotidien ?",
            a: "Nettoyez l'emboîture quotidiennement avec un linge humide et du savon doux. Vérifiez l'état du liner (sans déchirures ni odeurs) et des fixations. Évitez l'immersion dans l'eau sauf certification waterproof. Une révision annuelle chez votre orthoprothésiste est recommandée, même en l'absence de problème apparent.",
          },
          {
            q: "Qu'est-ce que le renouvellement autonome ?",
            a: "Le renouvellement autonome permet de renouveler votre prothèse sans nouvelle ordonnance, à condition que le délai minimal de renouvellement soit respecté (3 ou 5 ans selon le dispositif). Votre orthoprothésiste ou votre CPAM peuvent initier cette démarche directement.",
          },
        ],
      },
      {
        type: "cta",
        headline: "Trouver un orthoprothésiste",
        sub: "Localisez un professionnel agréé proche de chez vous, spécialisé dans votre type d'appareillage.",
        btnLabel: "Rechercher un praticien",
        href: "/trouver-praticien",
      },
    ],
  },

  ortheses: {
    slug: "ortheses",
    category: "Orthèses",
    readingTime: 10,
    h1: "Orthèses : guide complet sur les dispositifs de soutien et correction",
    author: {
      name: "Claire Beaumont",
      title: "Kinésithérapeute spécialisée en rééducation orthopédique — 12 ans d'expérience",
      updatedAt: "Mis à jour le 8 juin 2026",
    },
    content: [
      { type: "paragraph", text: "Une orthèse est un dispositif médical externe destiné à soutenir, corriger, immobiliser ou protéger une partie du corps. Contrairement aux prothèses qui remplacent un membre absent, les orthèses agissent sur un membre présent mais défaillant ou douloureux." },
      { type: "h2", id: "types-ortheses", text: "Types d'orthèses et indications" },
      { type: "paragraph", text: "Les orthèses se classifient selon la région anatomique qu'elles couvrent et leur fonction principale : maintien, correction, décharge ou protection." },
      { type: "stat", value: "3,2M", label: "de Français portent une orthèse de membres inférieurs au quotidien", source: "SFPO 2025" },
      { type: "h2", id: "remboursement", text: "Remboursement LPPR des orthèses" },
      { type: "paragraph", text: "Les orthèses sont inscrites à la LPPR dans plusieurs chapitres selon leur type. La prise en charge varie de 60 % à 100 % selon la pathologie et le statut ALD du patient." },
      { type: "h2", id: "faq", text: "Questions fréquentes" },
      { type: "faq", items: [
        { q: "Différence entre orthèse sur mesure et orthèse de série ?", a: "Les orthèses de série (préfabriquées) sont ajustées par modifications mineures. Les orthèses sur mesure sont moulées directement sur le patient, pour les situations complexes nécessitant un ajustement précis." },
        { q: "Une ordonnance est-elle obligatoire ?", a: "Oui, pour toute prise en charge par l'Assurance Maladie, une prescription médicale est requise. Elle doit préciser le type d'orthèse, l'indication clinique et la durée de port." },
      ]},
      { type: "cta", headline: "Trouver un orthésiste", sub: "Localisez un professionnel agréé spécialisé.", btnLabel: "Rechercher un praticien", href: "/trouver-praticien" },
    ],
  },

  fauteuils: {
    slug: "fauteuils",
    category: "Fauteuils roulants",
    readingTime: 9,
    h1: "Fauteuils roulants : choisir, ajuster et vivre avec son fauteuil",
    author: { name: "Sophie Arnaud", title: "Ergothérapeute — Centre de rééducation de Lyon", updatedAt: "Mis à jour le 8 juin 2026" },
    content: [
      { type: "paragraph", text: "Le fauteuil roulant est bien plus qu'un dispositif de mobilité : c'est une extension du corps qui conditionne l'autonomie, la participation sociale et la qualité de vie. Bien choisir son fauteuil est une décision technique et personnelle qui mérite une attention particulière." },
      { type: "h2", id: "types-fauteuils", text: "Manuel ou électrique : comment choisir ?" },
      { type: "paragraph", text: "Le choix entre fauteuil manuel et électrique dépend de l'état fonctionnel des membres supérieurs, de l'environnement de vie et des activités souhaitées." },
      { type: "h2", id: "remboursement", text: "Remboursement et nomenclature LPPR" },
      { type: "paragraph", text: "Les fauteuils roulants sont codifiés dans la nomenclature LPPR, avec des tarifs variables selon le type et les options." },
      { type: "h2", id: "faq", text: "Questions fréquentes" },
      { type: "faq", items: [
        { q: "Peut-on avoir un fauteuil de secours ?", a: "Oui, sous conditions médicales. Un second fauteuil peut être prescrit si le premier est en réparation ou si l'usage le justifie (fauteuil actif + fauteuil de confort)." },
      ]},
      { type: "cta", headline: "Trouver un revendeur agréé", sub: "Localisez un revendeur de fauteuils roulants près de chez vous.", btnLabel: "Rechercher", href: "/trouver-praticien" },
    ],
  },
};

export function getPilierData(slug: string): PilierData | null {
  return piliers[slug] ?? null;
}

export function getAllPilierSlugs(): string[] {
  return Object.keys(piliers);
}

export function extractTocHeadings(content: ContentBlock[]): TocHeading[] {
  return content
    .filter((b): b is Extract<ContentBlock, { type: "h2" }> => b.type === "h2")
    .map(({ id, text }) => ({ id, text }));
}
