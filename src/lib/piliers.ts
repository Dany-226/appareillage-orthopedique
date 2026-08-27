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
  heroImage?: string;
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
    heroImage: "https://i.imgur.com/24V24KZ.png",
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
        text: "En France, les prothèses de membres sont inscrites à la Liste des Produits et Prestations Remboursables (LPPR). Chaque dispositif porte un code alphanumérique propre à la nomenclature (par exemple PI06SSA63 pour un composant de base, VI4ZE25 pour une variante optionnelle comme un genou à microprocesseur) : le tarif final résulte de l'addition du composant de base et des adjonctions ou variantes retenues. La prise en charge est de 100 % du tarif de base pour les assurés en ALD, et de 60 % pour les autres.",
      },
      {
        type: "info",
        title: "Renouvellement autonome — ce que vous pouvez faire seul",
        text: "Depuis 2014, le renouvellement de certaines prothèses peut se faire sans nouvelle prescription médicale, à l'initiative du patient ou de l'orthoprothésiste, au terme du délai minimal de renouvellement. Contactez votre CPAM ou votre orthoprothésiste pour initier la démarche.",
      },
      {
        type: "paragraph",
        text: "Les tarifs ci-dessous correspondent aux composants de base tels qu'inscrits à la nomenclature, hors adjonctions et variantes (réglages spécifiques, options, accessoires complémentaires). Le tarif réellement remboursé dépend de la configuration complète prescrite par l'orthoprothésiste, qui peut inclure plusieurs de ces codes combinés.",
      },
      {
        type: "table",
        headers: ["Élément", "Code", "Tarif TTC"],
        rows: [
          ["Prothèse tibiale, emboîture de contact, pied articulé (base)", "PI06SSA63", "1 065,27 €"],
          ["Prothèse tibiale, emboîture à suspension, pied articulé (base)", "PI06SSC33", "1 630,73 €"],
          ["Prothèse fémorale, emboîture résines stratifiées (base)", "PI04SSC23", "1 865,86 €"],
          ["Genou polycentrique à microprocesseur, régulation pneumatique", "VI4ZE25", "5 497,40 €"],
          ["Boîtier de programmation genou électronique", "VI4BE01", "982,08 €"],
          ["Pied à restitution d'énergie classe I", "2707471", "613,59 €"],
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
    heroImage: "https://i.imgur.com/RZHWt7e.png",
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
    readingTime: 14,
    h1: "Fauteuil roulant : guide complet pour les patients et leurs proches",
    author: {
      name: "Sophie Arnaud",
      title: "Ergothérapeute — Centre de rééducation de Lyon",
      updatedAt: "Mis à jour en août 2026 — réforme VPH en vigueur depuis le 1er décembre 2025",
    },
    heroImage: "https://i.imgur.com/DxcmorL.png",
    content: [
      {
        type: "paragraph",
        text: "Depuis le 1er décembre 2025, le terme réglementaire a changé : on ne parle plus de « fauteuil roulant » au sens de l'ancienne nomenclature, mais de VPH — véhicule pour personne en situation de handicap. Ce changement accompagne une refonte complète de la nomenclature, des catégories, des règles de prescription et de la prise en charge par l'Assurance Maladie.",
      },
      {
        type: "h2",
        id: "quest-ce-quun-vph",
        text: "Qu'est-ce qu'un VPH ?",
      },
      {
        type: "paragraph",
        text: "Un VPH est défini réglementairement comme un dispositif médical équipé de roues, conçu pour assurer la mobilité et le soutien du corps d'une personne ne pouvant pas ou peu marcher. Cette définition couvre un champ plus large que le seul fauteuil roulant classique : elle inclut aussi les poussettes adaptées, les bases roulantes, les cycles à roues multiples et les scooters modulaires.",
      },
      {
        type: "info",
        title: "Conformité obligatoire",
        text: "Tout VPH pris en charge doit être conforme au règlement européen sur les dispositifs médicaux (MDR 2017/745) et aux normes NF EN 12183 (fauteuils manuels) ou NF EN ISO 12184 (fauteuils électriques), avec un certificat de conformité valable 5 ans.",
      },
      {
        type: "h2",
        id: "categories-vph",
        text: "Les catégories de VPH",
      },
      {
        type: "paragraph",
        text: "La nomenclature distingue les VPH non modulaires (FMP, FMPR), les VPH modulaires à propulsion manuelle (FRM, FRMC, FRMA, FRMS, FRMP, FRMV) et les VPH modulaires à propulsion électrique (FRE, FREP, FREV), ainsi que les poussettes, bases roulantes, cycles et scooters.",
      },
      {
        type: "table",
        headers: ["Acronyme", "Catégorie", "Particularité"],
        rows: [
          ["FMP / FMPR", "Non modulaire, propulsion manuelle ou à pousser", "Besoins standards"],
          ["FRM", "Modulaire, propulsion manuelle ou à pousser", "Base modulaire"],
          ["FRMA", "Modulaire actif", "Châssis rigide, poids max 10 kg, usage quotidien"],
          ["FRMS", "Modulaire sport", "Châssis non pliant, carrossage adapté à la discipline"],
          ["FRMP", "Modulaire multi-position", "Dossier et assise inclinables"],
          ["FRMV", "Modulaire verticalisateur", "Verticalisation manuelle progressive"],
          ["FRE", "Propulsion électrique", "Classes A, B, C selon l'environnement"],
          ["FREP", "Électrique multi-position", "Inclinaison électrique"],
          ["FREV", "Électrique verticalisateur", "Verticalisation assistée électriquement"],
          ["POU_S / POU_MRE", "Poussette standard / modulaire évolutive", "Moins de 18 ans"],
          ["SCO", "Scooter modulaire", "Classes A+, B, C"],
        ],
      },
      {
        type: "h2",
        id: "manuel-ou-electrique",
        text: "Manuel ou électrique : ce que dit vraiment la réglementation",
      },
      {
        type: "paragraph",
        text: "L'idée reçue « manuel = handicap léger, électrique = handicap lourd » ne correspond pas à la logique clinique retenue par la nomenclature. Un fauteuil électrique (FRE) n'est pas indiqué du simple fait d'une difficulté à marcher : la prise en charge est assurée pour les personnes dans l'impossibilité de propulser elles-mêmes un fauteuil manuel — en raison de leur déficience ou de leur environnement — et qui ont par ailleurs les capacités cognitives, physiques et visuelles nécessaires pour le maîtriser en sécurité. Deux conditions cumulatives, pas une gradation automatique de sévérité.",
      },
      {
        type: "paragraph",
        text: "À l'inverse, un fauteuil manuel actif (FRMA) n'est pas un choix de confort : il répond à un besoin fonctionnel précis d'autonomie de déplacement en intérieur et extérieur, pour un utilisateur expérimenté, avec un cahier des charges technique exigeant (châssis rigide non pliant, poids maximal 10 kg).",
      },
      {
        type: "h2",
        id: "parcours-prescription",
        text: "Le parcours pour obtenir un fauteuil roulant",
      },
      {
        type: "paragraph",
        text: "Le parcours suit toujours la même architecture en trois temps : évaluation des besoins, préconisation, puis essai suivi d'une prescription définitive. Qui réalise l'évaluation dépend de la catégorie visée — un médecin ou ergothérapeute pour les catégories simples (FMP, FMPR, FRM), une équipe pluridisciplinaire complète pour les catégories les plus techniques (FRMS, FRMV, FRE, FREP, FREV, POU_MRE, SCO, CYC).",
      },
      {
        type: "info",
        title: "L'essai est obligatoire",
        text: "Pour la quasi-totalité des catégories, un essai pratique dans les conditions réelles d'utilisation est requis avant toute prescription définitive : 7 jours à compter de la livraison, réductible à la demande du patient mais jamais en dessous de 48 heures. Aucune facturation ne peut intervenir avant la fin de cette période.",
      },
      {
        type: "h2",
        id: "renouvellement",
        text: "Renouvellement et garanties",
      },
      {
        type: "paragraph",
        text: "Le renouvellement d'un VPH de même catégorie ne peut intervenir avant 5 ans pour un adulte et 3 ans pour un enfant. Un renouvellement à l'identique — même catégorie, même modèle, même configuration — peut être prescrit plus simplement par un médecin généraliste ou un ergothérapeute. En cas d'évolution rapide de la pathologie, un renouvellement anticipé est possible par dérogation. À l'achat d'un fauteuil neuf, une garantie fabricant de 2 ans couvre pièces, main-d'œuvre et transport, sans frais facturable au patient.",
      },
      {
        type: "h2",
        id: "remboursement",
        text: "Remboursement",
      },
      {
        type: "paragraph",
        text: "Les VPH inscrits sur la liste des produits et prestations remboursables (LPP) sont pris en charge intégralement par l'Assurance Maladie depuis le 1er décembre 2025, devenue le financeur et guichet unique. Une période transitoire s'applique jusqu'au 30 novembre 2026 pour les prescriptions antérieures à la réforme.",
      },
      {
        type: "info",
        title: "Page tarifs à venir",
        text: "Les montants précis de remboursement par catégorie feront l'objet d'une page dédiée, une fois la source tarifaire officielle vérifiée ligne par ligne.",
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
            q: "Un fauteuil manuel est-il toujours prescrit avant un fauteuil électrique ?",
            a: "Non. Ce n'est pas une gradation obligatoire. Le choix dépend des capacités de propulsion du patient et de son environnement, évalués dès le départ.",
          },
          {
            q: "Qui décide de la catégorie de fauteuil ?",
            a: "Le prescripteur, ou l'équipe pluridisciplinaire pour les catégories techniques, sur la base de l'évaluation des besoins — jamais le distributeur seul, et jamais sans essai préalable pour la plupart des catégories.",
          },
          {
            q: "Peut-on essayer plusieurs modèles avant de choisir ?",
            a: "Oui, c'est une obligation réglementaire pour la quasi-totalité des catégories : le distributeur doit présenter au moins 4 modèles au catalogue et permettre l'essai d'au moins 2 modèles conformes à la prescription.",
          },
          {
            q: "Que se passe-t-il si le fauteuil livré ne convient pas après l'essai ?",
            a: "Une nouvelle préconisation est établie et le parcours reprend. Aucune facturation n'a lieu tant que l'essai n'est pas validé.",
          },
        ],
      },
      {
        type: "cta",
        headline: "Trouver un revendeur agréé",
        sub: "Localisez un revendeur de fauteuils roulants près de chez vous.",
        btnLabel: "Rechercher",
        href: "/trouver-praticien",
      },
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
