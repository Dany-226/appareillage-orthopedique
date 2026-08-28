export type ArticleBlock =
  | { type: 'paragraph'; content: string }
  | { type: 'h2'; content: string; id: string }
  | { type: 'h3'; content: string }
  | { type: 'stat_callout'; percentage: string; description: string; source?: string }
  | { type: 'info_box'; title: string; content: string }
  | { type: 'comparison_table'; headers: string[]; rows: string[][] }
  | { type: 'faq'; items: { question: string; answer: string }[] }
  | { type: 'cta_block'; title: string; subtitle: string; buttonText: string; buttonHref: string }
  | { type: 'image'; src: string; alt: string; caption?: string }

export type Article = {
  slug: string
  pilier: string
  title: string
  metaTitle: string
  metaDescription: string
  badge: string
  readingTime: string
  publishedAt: string
  updatedAt: string
  heroImage?: string
  excerpt: string
  author?: { name: string; title: string }
  blocks: ArticleBlock[]
  relatedArticles?: string[]
}

export const articles: Article[] = [
  {
    slug: 'prothese-tibiale-niveaux-activite',
    pilier: 'protheses',
    title: "Prothèse tibiale et niveaux d'activité K1 K2 K3 K4 - comment choisir",
    metaTitle: "Niveaux d'activité K1 K2 K3 K4 - Choisir sa prothèse tibiale",
    metaDescription: "Comprendre les niveaux d'activité K1 à K4 pour choisir la bonne prothèse tibiale. Guide complet avec remboursement LPPR.",
    badge: 'Prothèses',
    readingTime: '8 min',
    publishedAt: '2026-05-01',
    updatedAt: '2026-06-01',
    author: {
      name: 'Jean-Marc Tissier',
      title: 'Expert appareillage — 15 ans chez Össur France',
    },
    excerpt: "La classification K1 à K4 conditionne le choix de votre prothèse tibiale et son remboursement par la Sécurité sociale. Explications claires pour comprendre votre niveau et ce à quoi vous avez droit.",
    blocks: [
      {
        type: 'paragraph',
        content: "Quand on parle de prothèse tibiale, le terme \"niveau d'activité\" revient systématiquement dans les échanges avec l'orthoprothésiste et le médecin prescripteur. Cette classification K - de K1 à K4 - n'est pas qu'un détail administratif : elle détermine directement quels composants vous sont prescrits, et ce que la Sécurité sociale accepte de rembourser.",
      },
      {
        type: 'h2',
        id: 'classification-k',
        content: 'La classification K - ce que chaque niveau signifie concrètement',
      },
      {
        type: 'comparison_table',
        headers: ['Niveau', 'Profil patient', 'Capacité de marche', 'Composants adaptés'],
        rows: [
          ['K1', 'Faible activité', 'Terrain plat uniquement, distances courtes', 'Pied rigide, genou stable'],
          ['K2', 'Activité limitée', 'Obstacles simples, trottoirs, escaliers lents', 'Pied restitution énergie faible'],
          ['K3', 'Activité modérée à forte', 'Marche active, travail, loisirs variés', 'Pied dynamique carbone, genou microprocesseur possible'],
          ['K4', 'Haute activité', 'Sport, efforts intenses, usage professionnel exigeant', 'Lame carbone haute performance'],
        ],
      },
      {
        type: 'info_box',
        title: 'Qui évalue le niveau K ?',
        content: "L'évaluation est conjointe entre le médecin prescripteur (idéalement MPR - médecin de médecine physique et de réadaptation) et l'orthoprothésiste. Elle prend en compte votre état général, vos objectifs fonctionnels, votre environnement de vie et votre motivation en rééducation. Ce niveau n'est pas définitif - il peut évoluer à la hausse après rééducation.",
      },
      {
        type: 'h2',
        id: 'remboursement-lppr',
        content: 'Remboursement LPPR selon le niveau K',
      },
      {
        type: 'paragraph',
        content: "La nomenclature LPPR (Liste des Produits et Prestations Remboursables) encadre strictement quels composants sont pris en charge selon le niveau K attribué. Un pied à restitution d'énergie de classe III n'est remboursé que pour les patients K3 ou K4. Un genou à microprocesseur est réservé aux amputés fémoraux actifs, avec des critères d'accès précis.",
      },
      {
        type: 'stat_callout',
        percentage: '65%',
        description: "des patients appareillés ignorent qu'ils peuvent initier eux-mêmes leur demande de renouvellement sans attendre leur orthoprothésiste",
        source: 'Enquête menée auprès de patients appareillés - 2026',
      },
      {
        type: 'h2',
        id: 'pieds-prothetiques',
        content: 'Choisir son pied prothétique selon le niveau K',
      },
      {
        type: 'paragraph',
        content: "Le pied prothétique est le composant qui influence le plus la qualité de marche au quotidien. Pour un niveau K3, un pied dynamique en fibre de carbone - comme le Vari-Flex d'Össur ou le Taleo d'Ottobock - restitue l'énergie à chaque pas et s'adapte à la vitesse de marche. Pour un niveau K4, les lames de course permettent une pratique sportive intensive.",
      },
      {
        type: 'h2',
        id: 'parcours-prescription',
        content: 'Le parcours de prescription - étapes réelles',
      },
      {
        type: 'paragraph',
        content: "Le niveau K est évalué lors du bilan prothétique initial, avant la fabrication de la prothèse définitive. C'est à ce moment que l'orthoprothésiste et le médecin s'accordent sur les composants appropriés. Une période d'essai peut être demandée avant validation définitive pour les composants avancés.",
      },
      {
        type: 'faq',
        items: [
          {
            question: 'Peut-on passer du niveau K1 au niveau K3 ?',
            answer: "Oui. Le niveau K n'est pas figé. Après une rééducation intensive et régulière, de nombreux patients progressent d'un ou deux niveaux. Cette progression doit être réévaluée et documentée par le médecin prescripteur pour ouvrir droit aux composants correspondants.",
          },
          {
            question: "Le niveau K est-il le même en France et à l'étranger ?",
            answer: "La classification K est d'origine américaine (Medicare). Elle est reprise par usage international et par la nomenclature française, mais les critères d'attribution peuvent légèrement varier selon les pays. En France, c'est la LPPR qui définit les conditions de remboursement associées.",
          },
          {
            question: "Combien de temps dure la prise en charge d'un pied prothétique ?",
            answer: "La durée minimale de garantie est de 2 ans pour les pieds à restitution d'énergie. La conformité technique est reconnue 5 ans. Au-delà, un relevé force-déformation peut être exigé par la CPAM avant renouvellement.",
          },
          {
            question: 'Peut-on contester le niveau K attribué ?',
            answer: "Oui. Si vous estimez que votre niveau K ne reflète pas vos capacités réelles, vous pouvez demander une réévaluation auprès de votre médecin prescripteur ou solliciter un second avis auprès d'un médecin MPR spécialisé en appareillage.",
          },
        ],
      },
      {
        type: 'cta_block',
        title: 'Trouver un orthoprothésiste spécialisé',
        subtitle: 'Le choix du prestataire conditionne la qualité de votre appareillage. Vous êtes libre de choisir et de changer à tout moment.',
        buttonText: 'Trouver un praticien agréé',
        buttonHref: '/trouver-un-praticien',
      },
    ],
    relatedArticles: ['pied-prothetique', 'emboiture-prothese-tibiale', 'prothese-femorale-choisir-son-genou'],
  },
  {
    slug: 'prothese-femorale-choisir-son-genou',
    pilier: 'protheses',
    title: 'Prothèse fémorale : genou mécanique ou microprocesseur, comment choisir',
    metaTitle: 'Genou mécanique ou microprocesseur - Choisir sa prothèse fémorale',
    metaDescription: "Comprendre la différence entre genou mécanique et genou à microprocesseur pour une prothèse fémorale. Indications, remboursement LPPR, critères de choix.",
    badge: 'Prothèses',
    readingTime: '9 min',
    publishedAt: '2026-08-28',
    updatedAt: '2026-08-28',
    author: {
      name: 'Jean-Marc Tissier',
      title: 'Expert appareillage — 15 ans chez Össur France',
    },
    excerpt: "Le choix du genou est la décision la plus structurante d'une prothèse fémorale. Entre genou mécanique et genou à microprocesseur, les indications, les usages et le remboursement LPPR diffèrent nettement.",
    blocks: [
      {
        type: 'paragraph',
        content: "Pour une amputation fémorale (au-dessus du genou), le composant qui détermine le plus la qualité de marche - et souvent le budget - n'est pas le pied prothétique mais le genou. Contrairement à une prothèse tibiale où l'articulation du genou reste intacte, une prothèse fémorale doit recréer mécaniquement deux phases de marche : la phase d'appui (jambe légèrement pliée, portant le poids) et la phase d'oscillation (jambe qui se balance vers l'avant). C'est la façon dont chaque type de genou gère ces deux phases qui distingue le mécanique du microprocesseur.",
      },
      {
        type: 'h2',
        id: 'mecanique-vs-microprocesseur',
        content: 'Genou mécanique ou genou à microprocesseur - la vraie différence',
      },
      {
        type: 'paragraph',
        content: "Un genou mécanique est contrôlé par un verrou, un système à friction, ou un mécanisme pneumatique ou hydraulique classique. Le poids du corps active généralement le mécanisme de gestion de la phase d'appui, ce qui produit un schéma de marche moins naturel et demande davantage d'adaptation consciente de la part du patient.",
      },
      {
        type: 'paragraph',
        content: "Un genou à microprocesseur (MPK) utilise des capteurs et un système hydraulique piloté par ordinateur pour ajuster la résistance en temps réel, à chaque pas, selon la vitesse de marche et le terrain. Cela sécurise la marche à allure variable, les descentes de pente et les escaliers - des situations où un genou mécanique demande une compensation active du patient. La programmation initiale prend généralement 2 à 4 semaines, avec plusieurs rendez-vous d'ajustement sur les 12 mois suivants.",
      },
      {
        type: 'info_box',
        title: 'Le microprocesseur n\'est pas réservé aux patients très actifs',
        content: "Contrairement à une idée reçue, les genoux à microprocesseur ne sont pas uniquement destinés aux niveaux d'activité élevés. Certains modèles, comme le Rheo Knee (technologie magnétorhéologique), sont spécifiquement conçus pour améliorer la sécurité des patients à niveau d'activité faible à modéré - la priorité étant alors la prévention des chutes plutôt que la performance sportive.",
      },
      {
        type: 'h2',
        id: 'remboursement-lppr',
        content: 'Remboursement LPPR - composants de base et variantes',
      },
      {
        type: 'paragraph',
        content: "La nomenclature LPPR distingue l'emboîture de base et les variantes de genou, chacune avec son propre code et son propre tarif - le prix final résulte de leur addition, pas d'un forfait unique par type de prothèse.",
      },
      {
        type: 'comparison_table',
        headers: ['Élément', 'Code', 'Tarif TTC'],
        rows: [
          ['Prothèse fémorale, emboîture résines stratifiées (base)', 'PI04SSC23', '1 865,86 €'],
          ['Genou polycentrique à microprocesseur, régulation pneumatique', 'VI4ZE25', '5 497,40 €'],
          ['Boîtier de programmation genou électronique', 'VI4BE01', '982,08 €'],
        ],
      },
      {
        type: 'info_box',
        title: 'Un genou à microprocesseur n\'est pas automatique',
        content: "L'accès à un genou à microprocesseur en prise en charge LPPR répond à des critères précis - profil fonctionnel du patient, capacité de rééducation, projet de vie. Ce n'est pas un choix par défaut même pour un amputé fémoral actif : l'orthoprothésiste et le médecin prescripteur évaluent l'indication au cas par cas.",
      },
      {
        type: 'h2',
        id: 'criteres-choix',
        content: 'Les critères qui orientent le choix du genou',
      },
      {
        type: 'paragraph',
        content: "Au-delà du niveau d'activité, plusieurs facteurs pèsent dans la décision : la capacité du patient à s'engager dans une rééducation qui exploite pleinement les capacités d'un genou avancé, la variabilité des terrains fréquentés au quotidien (un genou microprocesseur apporte le plus de valeur sur terrain irrégulier ou en descente), le risque de chute (particulièrement déterminant chez les patients âgés ou avec comorbidités), et le projet de vie global - activité professionnelle, pratique sportive, contraintes de déplacement.",
      },
      {
        type: 'h2',
        id: 'parcours-essai',
        content: 'L\'essai avant validation définitive',
      },
      {
        type: 'paragraph',
        content: "Pour un genou à microprocesseur, une période d'essai encadrée par un centre prothétique agréé est la norme avant la prescription définitive - le patient teste un ou plusieurs modèles sous la direction d'un professionnel, qui peut ajuster les réglages via un logiciel dédié. Si la prothèse semble instable en cours d'essai, mieux vaut interrompre l'utilisation et le signaler immédiatement plutôt que de poursuivre : la sécurité prime toujours, en particulier avec un genou électronique.",
      },
      {
        type: 'faq',
        items: [
          {
            question: 'Un genou mécanique est-il forcément moins performant ?',
            answer: "Non. Pour un patient avec une marche stable sur terrain régulier, un genou mécanique bien réglé peut parfaitement répondre au besoin. Le microprocesseur apporte sa valeur ajoutée principalement dans les situations variables - vitesse changeante, terrain irrégulier, escaliers - pas comme un progrès universellement supérieur.",
          },
          {
            question: 'Combien de temps dure la programmation d\'un genou à microprocesseur ?',
            answer: "La programmation initiale prend généralement 2 à 4 semaines, avec plusieurs rendez-vous d'ajustement répartis sur les 12 mois suivant la mise à disposition, le temps d'affiner les réglages à la marche réelle du patient.",
          },
          {
            question: 'Peut-on changer de genou mécanique vers microprocesseur plus tard ?',
            answer: "Oui, sous réserve d'une nouvelle évaluation par le médecin prescripteur et l'orthoprothésiste, qui vérifient que l'indication est justifiée au moment du changement - ce n'est pas automatique, même après plusieurs années avec un genou mécanique.",
          },
        ],
      },
      {
        type: 'cta_block',
        title: 'Besoin d\'un avis pour votre prothèse fémorale ?',
        subtitle: 'Trouvez un orthoprothésiste agréé près de chez vous pour évaluer votre indication.',
        buttonText: 'Trouver un praticien',
        buttonHref: '/trouver-praticien',
      },
    ],
    relatedArticles: ['prothese-tibiale-niveaux-activite'],
  },
]

export function getArticle(pilier: string, slug: string): Article | undefined {
  return articles.find(a => a.pilier === pilier && a.slug === slug)
}

export function getArticlesByPilier(pilier: string): Article[] {
  return articles.filter(a => a.pilier === pilier)
}
