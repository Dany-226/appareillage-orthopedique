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
  metaTitle: string;
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
    metaTitle: "Prothèses de membres : guide complet",
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
    readingTime: 12,
    h1: "Orthèses : comprendre les 3 grandes familles et bien choisir",
    metaTitle: "Orthèses : les 3 grandes familles",
    author: {
      name: "Claire Beaumont",
      title: "Kinésithérapeute spécialisée en rééducation orthopédique — 12 ans d'expérience",
      updatedAt: "Mis à jour en août 2026",
    },
    heroImage: "https://i.imgur.com/ioyEb2t.png",
    content: [
      {
        type: "paragraph",
        text: "Une orthèse est un dispositif médical externe destiné à soutenir, corriger, immobiliser ou protéger une partie du corps. Contrairement à une prothèse qui remplace un membre absent, l'orthèse agit sur un membre présent mais défaillant, douloureux ou en cours de rééducation. C'est un marché à l'offre considérable - des centaines de références couvrant chaque zone anatomique - mais qui se structure en réalité autour de trois grandes familles fonctionnelles, bien identifiées par la profession.",
      },
      {
        type: "h2",
        id: "trois-familles",
        text: "Les 3 grandes familles d'orthèses",
      },
      {
        type: "paragraph",
        text: "Plutôt que de raisonner uniquement par zone du corps, il est plus utile de comprendre d'abord à quelle famille fonctionnelle appartient une orthèse - cela détermine directement son usage et sa durée de port.",
      },
      {
        type: "table",
        headers: ["Famille", "Fonction", "Exemples", "Durée de port typique"],
        rows: [
          ["Orthèse de traitement", "Corrige une déformation (scoliose, arthrose)", "Corset de scoliose, orthèse de genou pour gonarthrose", "Long terme, souvent plusieurs années"],
          ["Orthèse d'immobilisation", "Bloque une articulation pour favoriser la guérison", "Attelle post-traumatique, orthèse post-opératoire du rachis", "Court à moyen terme, quelques semaines à mois"],
          ["Orthèse de positionnement", "Maintient une position (assise, debout) au quotidien", "Corset-siège, verticalisateur", "Permanent, vie quotidienne"],
        ],
      },
      {
        type: "info",
        title: "Une quatrième catégorie existe hors grand appareillage",
        text: "Les orthèses de contention ou de soutien (genouillères élastiques, ceintures lombaires souples) relèvent généralement du Petit Appareillage Orthopédique (PAO) plutôt que du Grand Appareillage Orthopédique (GAO) sur mesure. Elles sont délivrées sans prescription obligatoire, en pharmacie ou en magasin spécialisé, pour des usages courts (entorse légère, douleur chronique modérée) - un circuit de prise en charge différent de celui des orthèses sur mesure évoquées ci-dessus.",
      },
      {
        type: "stat",
        value: "89%",
        label: "du volume d'appareillages conçus par les orthoprothésistes concerne des orthèses (environ 142 300 dispositifs par an), très majoritairement des orthèses de tronc (corsets)",
        source: "Audit KPMG du système réglementaire du Grand Appareillage Orthopédique, commandé par l'UFOP - mars 2017",
      },
      {
        type: "h2",
        id: "qui-prescrit",
        text: "Qui peut prescrire une orthèse sur mesure",
      },
      {
        type: "paragraph",
        text: "Pour une première prescription de grand appareillage orthopédique (orthèse sur mesure), la réglementation réserve ce droit à des spécialités médicales précises : médecine physique et de réadaptation (MPR), orthopédie, rhumatologie, neurochirurgie, neurologie, endocrinologie, chirurgie plastique et reconstructrice, chirurgie vasculaire. Le médecin MPR reste le prescripteur le plus fréquent, notamment pour les orthèses de positionnement destinées aux patients polyhandicapés.",
      },
      {
        type: "paragraph",
        text: "Pour un renouvellement d'un appareillage identique, un médecin généraliste peut prescrire directement - une simplification qui ne s'applique pas à la première mise, où l'évaluation d'un spécialiste reste nécessaire.",
      },
      {
        type: "h2",
        id: "remboursement",
        text: "Remboursement LPPR - deux circuits distincts",
      },
      {
        type: "paragraph",
        text: "Les orthèses sur mesure conçues par un orthoprothésiste relèvent du chapitre 7 de la LPPR - le même chapitre que les prothèses - avec une prise en charge à 100 % au tarif opposable, quel que soit le fabricant du composant choisi. Les orthèses de série ou de contention plus simples relèvent d'un autre chapitre de la LPPR, avec des règles et des taux de remboursement différents, généralement délivrées sans passer par un orthoprothésiste.",
      },
      {
        type: "info",
        title: "L'entente préalable, un passage obligé pour le sur-mesure",
        text: "Contrairement à une orthèse de série achetée en pharmacie, la prise en charge d'une orthèse sur mesure du chapitre 7 est soumise à une demande d'entente préalable : l'orthoprothésiste transmet un devis à la caisse d'Assurance Maladie, qui dispose d'un délai de réponse (l'absence de réponse dans le délai réglementaire valant accord).",
      },
      {
        type: "h2",
        id: "fabricants-reference",
        text: "Les fabricants qui font référence en France",
      },
      {
        type: "paragraph",
        text: "Le marché français de l'orthèse s'appuie sur un nombre restreint d'acteurs industriels de référence, chacun avec ses domaines de spécialisation : Ottobock (pionnier mondial de l'appareillage), Össur (technologies orthopédiques et bioniques avancées), Thuasne (acteur historique français, fort sur l'orthopédie de série - ceintures, genouillères), DJO Global - marques DonJoy et Aircast (référence des orthèses fonctionnelles et sportives en officine), Bauerfeind (fabricant allemand haut de gamme, orthèses articulaires et bas de compression), auxquels s'ajoutent des acteurs comme Zimmer Biomet, Stryker ou Breg selon les zones anatomiques. C'est votre orthoprothésiste qui oriente le choix du fabricant le plus adapté à votre situation clinique précise, pas une préférence de marque affichée en ligne.",
      },
      {
        type: "faq",
        items: [
          { q: "Différence entre orthèse sur mesure et orthèse de série ?", a: "Les orthèses de série (préfabriquées) sont ajustées par des modifications mineures et relèvent généralement du Petit Appareillage Orthopédique. Les orthèses sur mesure sont moulées directement sur le patient par un orthoprothésiste, pour les situations complexes nécessitant un ajustement précis - c'est le Grand Appareillage Orthopédique, remboursé à 100 % au tarif opposable." },
          { q: "Une ordonnance est-elle obligatoire ?", a: "Pour une orthèse sur mesure du grand appareillage, oui - une prescription médicale d'un spécialiste habilité est requise pour la première mise. Pour une orthèse de série simple (genouillère élastique par exemple), la prescription n'est pas toujours obligatoire, mais reste nécessaire pour un remboursement par l'Assurance Maladie." },
          { q: "Pourquoi certaines orthèses sont-elles remboursées à 100 % et d'autres non ?", a: "Le taux de remboursement dépend du chapitre LPPR concerné. Les orthèses sur mesure du grand appareillage (chapitre 7) sont prises en charge à 100 % au tarif opposable. Les orthèses de série suivent des règles de remboursement différentes, avec un reste à charge possible selon le dispositif et le statut du patient (ALD ou non)." },
        ],
      },
      {
        type: "cta",
        headline: "Trouver un orthoprothésiste",
        sub: "Localisez un professionnel agréé spécialisé près de chez vous.",
        btnLabel: "Rechercher un praticien",
        href: "/trouver-praticien",
      },
    ],
  },

  fauteuils: {
    slug: "fauteuils",
    category: "Fauteuils roulants",
    readingTime: 14,
    h1: "Fauteuil roulant : guide complet pour les patients et leurs proches",
    metaTitle: "Fauteuil roulant : guide complet",
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
