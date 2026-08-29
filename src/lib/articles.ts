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
    relatedArticles: ['pied-prothetique', 'emboiture-prothese-tibiale', 'prothese-femorale-choisir-son-genou', 'prothese-main-myoelectrique'],
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
    relatedArticles: ['prothese-tibiale-niveaux-activite', 'prothese-main-myoelectrique'],
  },
  {
    slug: 'prothese-main-myoelectrique',
    pilier: 'protheses',
    title: 'Prothèse de main myoélectrique : Michelangelo, i-Limb Ultra, comment ça marche',
    metaTitle: 'Prothèse de main myoélectrique - Michelangelo, i-Limb, remboursement',
    metaDescription: "Comprendre le fonctionnement d'une prothèse de main myoélectrique, les principales technologies disponibles (Michelangelo, i-Limb Ultra) et les conditions de remboursement.",
    badge: 'Prothèses',
    readingTime: '10 min',
    publishedAt: '2026-08-28',
    updatedAt: '2026-08-28',
    author: {
      name: 'Jean-Marc Tissier',
      title: 'Expert appareillage — 15 ans chez Össur France',
    },
    heroImage: 'https://i.imgur.com/tV6pX7W.png',
    excerpt: "Une prothèse de main myoélectrique capte l'activité musculaire résiduelle pour commander des mouvements de préhension. Un choix technologique lourd, encadré par des conditions de prescription strictes et un vrai budget.",
    blocks: [
      {
        type: 'paragraph',
        content: "Une prothèse myoélectrique fonctionne à partir de la récupération d'un courant électrique généré par la contraction musculaire du membre résiduel, capté par des électrodes placées sur la peau. Ce signal commande l'ouverture, la fermeture et différents modes de préhension de la main prothétique. C'est une technologie fondamentalement différente d'une prothèse mécanique à câble : aucun mouvement corporel de compensation n'est nécessaire, la commande vient directement de l'intention musculaire.",
      },
      {
        type: 'h2',
        id: 'principales-technologies',
        content: 'Les principales mains myoélectriques disponibles',
      },
      {
        type: 'paragraph',
        content: "Deux fabricants dominent le marché français avec des références inscrites à la LPPR : Ottobock avec la gamme Michelangelo, et Össur (via sa filiale Touch Bionics) avec i-Limb Ultra et i-Digits. D'autres technologies comparables existent à l'international, notamment TASKA Prosthetics, distribuée en France par des orthoprothésistes spécialisés - mais sans inscription à la LPPR à ce jour : aucun tarif de responsabilité n'est fixé et la prise en charge par l'Assurance Maladie n'est pas automatique, quelle que soit la prescription. Une demande d'inscription semble avoir été engagée par le passé sans aboutir pour l'instant. Ce statut peut évoluer - à vérifier directement avec votre orthoprothésiste si cette option vous intéresse.",
      },
      {
        type: 'h3',
        content: 'Michelangelo (Ottobock)',
      },
      {
        type: 'paragraph',
        content: "La main Michelangelo associe un pouce motorisé, un système de commande AXON-BUS et une pronosupination (rotation du poignet) disponible en version motorisée ou non motorisée. Elle est indiquée pour les amputations du membre supérieur à partir du niveau transradial (avant-bras), acquises ou congénitales, en appareillage unilatéral ou bilatéral. Une variante, Michelangelo Transcarpienne, existe spécifiquement pour les amputations au niveau du poignet, avec un pouce motorisé adapté à ce niveau.",
      },
      {
        type: 'h3',
        content: 'i-Limb Ultra et i-Digits (Touch Bionics / Össur)',
      },
      {
        type: 'paragraph',
        content: "i-Limb Ultra est une main myoélectrique complète, livrée avec un ensemble de gants de recouvrement esthétique (i-Limb Skin Natural et i-Limb Skin Active) permettant de personnaliser l'apparence. i-Digits est un dispositif distinct, pensé pour les amputations partielles de main : de 1 à 5 doigts prothétiques indépendants, avec batteries logées dans un bracelet-poignet plutôt que dans l'emboîture - une différence de conception notable par rapport à une main complète.",
      },
      {
        type: 'h2',
        id: 'remboursement-lppr',
        content: 'Remboursement LPPR - un budget significatif, encadré strictement',
      },
      {
        type: 'paragraph',
        content: "Les prothèses myoélectriques figurent parmi les dispositifs les plus coûteux de la nomenclature LPPR, avec une prise en charge accordée sur entente préalable, pas de façon automatique.",
      },
      {
        type: 'comparison_table',
        headers: ['Dispositif', 'Fabricant', 'Tarif TTC'],
        rows: [
          ['Main myoélectrique Michelangelo', 'Ottobock', '32 275,00 €'],
          ['Main myoélectrique Michelangelo Transcarpienne', 'Ottobock', '32 275,00 €'],
          ['Pronosupination motorisée (option Michelangelo)', 'Ottobock', '5 427,00 €'],
          ['Main myoélectrique i-Limb Ultra (pack complet)', 'Touch Bionics / Össur', '27 270,37 €'],
          ['Gant de recouvrement i-Limb Skin Natural (boîte de 4)', 'Touch Bionics / Össur', '892,22 €'],
        ],
      },
      {
        type: 'info_box',
        title: 'Ces tarifs incluent l\'essentiel du système, pas tout',
        content: "Ces montants couvrent la main et ses composants de base (batteries, chargeur, électrodes, kit de connexion). L'emboîture (sous coude ou au-dessus du coude) est facturée séparément, tout comme le renouvellement des gants de recouvrement esthétique, limité à un nombre défini par an selon le modèle.",
      },
      {
        type: 'h2',
        id: 'conditions-prise-en-charge',
        content: 'Qui peut prescrire, et selon quelles conditions',
      },
      {
        type: 'paragraph',
        content: "La prescription initiale et tout renouvellement doivent être réalisés par une équipe pluridisciplinaire spécialisée dans l'appareillage du membre supérieur, composée au minimum d'un médecin (spécialiste en médecine physique et de réadaptation, ou en orthopédie), d'un professionnel de la rééducation (kinésithérapeute ou ergothérapeute), et de l'orthoprothésiste au libre choix du patient.",
      },
      {
        type: 'paragraph',
        content: "L'évaluation préalable est approfondie : niveau d'amputation, longueur du moignon, état de la peau, tests de commande musculaire par myotesteurs, motivation du patient et de son entourage, contraintes géographiques et socioprofessionnelles, et capacité à assimiler la technique d'utilisation du système myoélectrique - un apprentissage réel, pas un geste intuitif immédiat.",
      },
      {
        type: 'info_box',
        title: 'Un essai réel avant toute décision définitive',
        content: "Avant la prescription définitive, un essai est systématique. Un compte-rendu est établi en fin d'essai sur la base du projet de vie du patient, de la tolérance cutanée, des différents modes de préhension utilisés (enregistrés par la prothèse elle-même), de la motivation et de la satisfaction du patient. Si un rejet de prothèse myoélectrique a eu lieu par le passé, les raisons doivent être discutées avant de valider la pertinence d'un nouvel essai.",
      },
      {
        type: 'h2',
        id: 'garantie-entretien',
        content: 'Garantie et entretien',
      },
      {
        type: 'paragraph',
        content: "Les mains myoélectriques Michelangelo et i-Limb Ultra bénéficient d'une garantie de 5 ans, avec une maintenance préventive biennale (après le 24e et le 48e mois) prise en charge par le fabricant, frais d'expédition compris. Une main de prêt est mise à disposition gratuitement pendant toute réparation, y compris au-delà de la période de garantie - le patient n'est jamais laissé sans solution de préhension pendant un entretien technique.",
      },
      {
        type: 'faq',
        items: [
          {
            question: 'Une prothèse myoélectrique remplace-t-elle toute autre prothèse ?',
            answer: "Non. La prise en charge d'une prothèse myoélectrique n'exclut pas celle d'une prothèse de secours, esthétique ou mécanique - beaucoup de patients gardent une prothèse mécanique ou esthétique pour certaines activités ou en cas de panne.",
          },
          {
            question: 'Combien de temps faut-il pour apprendre à utiliser une main myoélectrique ?',
            answer: "Il n'y a pas de durée fixe - l'apprentissage dépend de la personne, encadré par l'équipe pluridisciplinaire dès le début de l'essai, avec une rééducation prescrite en parallèle et une évaluation périodique après la mise à disposition.",
          },
          {
            question: 'Que se passe-t-il en cas de panne ?',
            answer: "Une main de prêt est fournie gratuitement pendant la durée de la réparation, y compris après la période de garantie initiale de 5 ans. Le renouvellement complet de la prothèse n'intervient que lors de la première panne survenant après expiration de cette garantie.",
          },
        ],
      },
      {
        type: 'cta_block',
        title: 'Une question sur l\'appareillage myoélectrique ?',
        subtitle: 'Trouvez un orthoprothésiste agréé spécialisé en membre supérieur près de chez vous.',
        buttonText: 'Trouver un praticien',
        buttonHref: '/trouver-praticien',
      },
    ],
    relatedArticles: ['prothese-tibiale-niveaux-activite', 'prothese-femorale-choisir-son-genou'],
  },
]

export function getArticle(pilier: string, slug: string): Article | undefined {
  return articles.find(a => a.pilier === pilier && a.slug === slug)
}

export function getArticlesByPilier(pilier: string): Article[] {
  return articles.filter(a => a.pilier === pilier)
}
