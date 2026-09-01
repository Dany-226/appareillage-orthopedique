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
    heroImage: 'https://i.imgur.com/yILXceN.jpeg',
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
        buttonHref: '/trouver-praticien',
      },
    ],
    relatedArticles: ['pied-prothetique', 'prothese-femorale-choisir-son-genou', 'prothese-main-myoelectrique', 'prothese-bras-systeme-corporel'],
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
    heroImage: 'https://i.imgur.com/7szHUzS.jpeg',
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
      {
        type: 'cta_block',
        title: 'Curieux des genoux "bioniques" à microprocesseur ?',
        subtitle: "C-Leg, Kenevo, Rheo Knee XC, SYNSYS : ce que couvre vraiment la LPPR, marque par marque.",
        buttonText: 'Découvrir',
        buttonHref: '/protheses/genou-bionique-microprocesseur',
      },
    ],
    relatedArticles: ['prothese-tibiale-niveaux-activite', 'prothese-main-myoelectrique', 'prothese-bras-systeme-corporel'],
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
    relatedArticles: ['prothese-tibiale-niveaux-activite', 'prothese-femorale-choisir-son-genou', 'prothese-bras-systeme-corporel', 'futur-prothese-bionique-innovation'],
  },
  {
    slug: 'prothese-bras-systeme-corporel',
    pilier: 'protheses',
    title: 'Prothèse de bras : comprendre le système corporel à câble et harnais',
    metaTitle: 'Prothèse de bras mécanique - système corporel, remboursement LPPR',
    metaDescription: "Comment fonctionne une prothèse de bras mécanique à commande corporelle (câble et harnais), ses indications selon le niveau d'amputation et son remboursement LPPR.",
    badge: 'Prothèses',
    readingTime: '8 min',
    publishedAt: '2026-08-28',
    updatedAt: '2026-08-28',
    author: {
      name: 'Jean-Marc Tissier',
      title: 'Expert appareillage — 15 ans chez Össur France',
    },
    heroImage: 'https://i.imgur.com/2IuOQNc.png',
    excerpt: "Avant le myoélectrique, il existe une solution éprouvée pour l'amputation de bras : le système corporel à câble et harnais. Robuste, sans batterie, avec un principe de fonctionnement radicalement différent d'une main myoélectrique.",
    blocks: [
      {
        type: 'paragraph',
        content: "Pour une amputation au niveau du bras - qu'il s'agisse d'une désarticulation de l'épaule ou d'une amputation avec moignon court, moyen ou long - la solution la plus ancienne et la plus répandue reste le système corporel, aussi appelé prothèse à câble et harnais. Contrairement à une prothèse myoélectrique qui capte un signal musculaire, ce système utilise directement le mouvement du corps - notamment de l'épaule controlatérale - pour actionner, via un câble, l'ouverture ou la fermeture du dispositif terminal (main souple ou crochet) et le verrouillage du coude.",
      },
      {
        type: 'h2',
        id: 'principe-fonctionnement',
        content: 'Le principe du système corporel',
      },
      {
        type: 'paragraph',
        content: "Un mouvement d'épaule ou d'omoplate tend le câble relié au harnais, ce qui actionne le dispositif terminal en ouverture (le retour se fait par un ressort). Pour une amputation plus haute, un verrou de coude à commande passive permet de bloquer l'articulation dans la position souhaitée avant d'actionner la main ou le crochet. Ce n'est pas un mouvement intuitif au premier abord - il demande un apprentissage - mais une fois acquis, il offre un retour sensoriel direct (l'utilisateur \"sent\" l'effort transmis par le câble) qu'un système myoélectrique ne reproduit pas de la même façon.",
      },
      {
        type: 'info_box',
        title: 'Pourquoi ce système reste pertinent face au myoélectrique',
        content: "Le système corporel n'a besoin d'aucune batterie, ne craint pas l'eau ou la poussière comme un système électronique, et sa mécanique est réparable localement dans la plupart des ateliers d'orthopédie. Pour un usage professionnel exigeant (travail manuel, environnement humide ou poussiéreux) ou comme prothèse de secours en complément d'une prothèse myoélectrique, il garde une vraie place - ce n'est pas une simple alternative \"moins bien\" par défaut de budget.",
      },
      {
        type: 'h2',
        id: 'niveaux-amputation',
        content: 'Les prothèses selon le niveau d\'amputation',
      },
      {
        type: 'paragraph',
        content: "La nomenclature distingue précisément quatre grands niveaux, chacun avec sa propre configuration technique : la désarticulation scapulo-humérale et les moignons de bras très courts (nécessitant un corselet de fixation englobant l'épaule), l'amputation de bras à moignon court, l'amputation à moignon moyen ou long, et la désarticulation du coude ou moignon d'avant-bras très court assimilable.",
      },
      {
        type: 'comparison_table',
        headers: ['Niveau d\'amputation', 'Code', 'Tarif TTC'],
        rows: [
          ['Désarticulation épaule, articulation simple à friction', 'PS1Z01', '1 554,22 €'],
          ['Désarticulation épaule, articulation à rotule', 'PS1Z02', '1 581,24 €'],
          ['Désarticulation épaule, liaison souple au corselet', 'PS1Z03', '1 254,94 €'],
          ['Amputation bras, moignon court (emboîture stratifiée)', 'PS2Z20', '1 395,82 €'],
          ['Amputation bras, moignon moyen/long (emboîture de contact)', 'PS3Z20', '1 107,50 €'],
          ['Désarticulation coude / avant-bras très court', 'PS4Z20', '1 090,23 €'],
        ],
      },
      {
        type: 'info_box',
        title: 'Ces tarifs couvrent l\'emboîture de base',
        content: "Comme pour toute prothèse LPPR, ces montants correspondent au composant de base (emboîture, coude, corselet le cas échéant). Le dispositif terminal (main souple ou crochet), le verrou de coude, et les adjonctions esthétiques ou fonctionnelles se facturent séparément et s'additionnent au tarif final.",
      },
      {
        type: 'h2',
        id: 'plus-haut-niveau',
        content: 'Plus le niveau d\'amputation est haut, plus la prothèse est complexe',
      },
      {
        type: 'paragraph',
        content: "Une désarticulation scapulo-humérale (amputation au niveau de l'épaule) nécessite un corselet de fixation qui répartit l'appui sur le thorax, avec un choix d'articulation d'épaule - simple à friction, à rotule, ou liaison souple. À l'inverse, une désarticulation du coude avec avant-bras très court assimilable permet une emboîture plus simple, sans articulation d'épaule à gérer, mais nécessite un coude prothétique adapté (avec ou sans verrou) pour recréer la flexion.",
      },
      {
        type: 'h2',
        id: 'mecanique-ou-myoelectrique',
        content: 'Système corporel ou myoélectrique - une vraie décision, pas un défaut',
      },
      {
        type: 'paragraph',
        content: "Le choix entre un système corporel et une prothèse myoélectrique dépend du niveau d'amputation, de l'activité professionnelle, de l'environnement de vie et du projet personnel du patient - ce n'est pas simplement une question de génération technologique. Beaucoup de patients équipés d'une prothèse myoélectrique gardent d'ailleurs un système corporel comme prothèse de secours, précisément pour sa robustesse et sa simplicité de réparation.",
      },
      {
        type: 'faq',
        items: [
          {
            question: 'Le système corporel demande-t-il beaucoup de rééducation ?',
            answer: "Un apprentissage est nécessaire pour maîtriser le mouvement d'épaule qui actionne le câble, mais il est généralement plus rapide à acquérir qu'une commande myoélectrique - le mouvement reste un geste corporel volontaire, pas l'apprentissage d'un signal musculaire fin.",
          },
          {
            question: 'Peut-on faire du sport ou des activités salissantes avec ce système ?',
            answer: "C'est un des atouts du système corporel : sans batterie ni électronique, il tolère mieux l'eau, la poussière et les environnements exigeants qu'une prothèse myoélectrique - c'est pour cela qu'il reste utilisé pour certaines activités professionnelles ou de loisirs même chez des patients équipés en myoélectrique au quotidien.",
          },
          {
            question: 'Le dispositif terminal peut-il être une main plutôt qu\'un crochet ?',
            answer: "Oui, une main souple avec revêtement esthétique peut être montée en dispositif terminal, en adjonction du système de base - le choix entre main et crochet dépend des activités visées, la préhension d'un crochet étant souvent plus précise pour des tâches manuelles fines.",
          },
        ],
      },
      {
        type: 'cta_block',
        title: 'Vous envisagez une prothèse de bras ?',
        subtitle: 'Trouvez un orthoprothésiste agréé pour évaluer la solution la plus adaptée à votre niveau d\'amputation.',
        buttonText: 'Trouver un praticien',
        buttonHref: '/trouver-praticien',
      },
    ],
    relatedArticles: [
      'prothese-tibiale-niveaux-activite',
      'prothese-femorale-choisir-son-genou',
      'prothese-main-myoelectrique',
    ],
  },
  {
    slug: 'prothese-femorale-emboiture',
    pilier: 'protheses',
    title: "Prothèse fémorale : comprendre l'emboîture, l'interface qui porte toute la prothèse",
    metaTitle: "Emboîture de prothèse fémorale - contact, suspension, sub-ischiatique",
    metaDescription: "Emboîture de contact, à suspension ou sub-ischiatique : comment fonctionne l'interface entre le moignon et la prothèse fémorale, les matériaux, et le remboursement LPPR.",
    badge: 'Prothèses',
    readingTime: '8 min',
    publishedAt: '2026-08-31',
    updatedAt: '2026-08-31',
    author: {
      name: 'Jean-Marc Tissier',
      title: 'Expert appareillage — 15 ans chez Össur France',
    },
    excerpt: "Sur une prothèse fémorale, l'emboîture pèse plus lourd dans le confort quotidien que le genou ou le pied. La forme (ischion intégré, CAT-CAM, sub-ischiatique) et le mode de suspension (externe, accrochage distal, dépression) sont deux choix indépendants - avec un remboursement LPPR qui distingue nomenclature générique et dispositifs nominatifs.",
    blocks: [
      {
        type: 'paragraph',
        content: "Pour une amputation fémorale, le composant qui détermine le plus le confort au quotidien n'est ni le genou ni le pied - c'est l'emboîture. C'est elle qui porte le poids du corps à chaque pas, transmet les mouvements du moignon au reste de la prothèse, et reste en contact avec la peau plusieurs heures par jour.",
      },
      {
        type: 'h2',
        id: 'forme-emboiture',
        content: "La forme de l'emboîture - trois générations",
      },
      {
        type: 'h3',
        content: 'Emboîture à ischion intégré',
      },
      {
        type: 'paragraph',
        content: "La forme la plus répandue et la plus universelle : le calage se fait au niveau du grand trochanter, et l'ischion est intégré dans la structure pour stabiliser le bassin. Elle convient à la majorité des morphologies et reste la référence par défaut.",
      },
      {
        type: 'h3',
        content: 'Emboîture CAT-CAM',
      },
      {
        type: 'paragraph',
        content: "Une évolution historique, aujourd'hui moins utilisée : une tablette reprend l'appui sous l'ischion, complétée par un appui sur la face antérieure du moignon. Réservée à des morphologies particulières - son indication répond à des prérequis anatomiques précis, pas à une préférence esthétique.",
      },
      {
        type: 'h3',
        content: 'Emboîture sub-ischiatique',
      },
      {
        type: 'paragraph',
        content: "La génération la plus récente déleste l'ischion au profit de la branche ischio-pubienne, libérant la mobilité du bassin et de la hanche. Plusieurs acteurs portent cette approche - le PROTEOR I-SUB, l'Access Socket et le FleXEO d'Ottobock, le Direct Socket TF d'Össur, ou l'I.S.S. développé par le prothésiste indépendant Pommier Orthopédie. Le principe commun : une paroi supérieure souple qui accompagne l'écrasement naturel de la cuisse en position assise, là où une structure rigide impose un point de pression fixe.",
      },
      {
        type: 'h2',
        id: 'mode-suspension',
        content: "Le mode de suspension - un choix indépendant de la forme",
      },
      {
        type: 'paragraph',
        content: "La suspension externe classique - courroie sur poulie, ceinture silésienne - reste utilisée en phase provisoire ou sur des moignons difficiles à appareiller autrement. L'accrochage distal, aujourd'hui le plus répandu, s'appuie sur un manchon en silicone, copolymère ou polyuréthane dont l'extrémité se verrouille mécaniquement au fond de l'emboîture. La suspension par dépression va d'une simple valve d'expulsion d'air à des systèmes actifs plus élaborés - une pompe qui maintient le vide en continu (Ottobock Harmony), ou une membrane d'étanchéité intégrée directement au manchon plutôt qu'à l'emboîture (Össur Seal-In). Les différents types de manchons et leurs systèmes d'accroche sont détaillés dans l'article dédié.",
      },
      {
        type: 'info_box',
        title: "L'I-SUB n'est pas une simple emboîture parmi d'autres",
        content: "L'I-SUB doit être utilisé avec un manchon en silicone à anneaux - la valve anti-retour et le manchon se remplacent quatre fois par an. La garantie s'inscrit dans celle de l'appareillage sur mesure (3 ans), et la prescription relève d'un médecin spécialiste MPR, pas d'une prescription générale.",
      },
      {
        type: 'h2',
        id: 'remboursement-lppr',
        content: 'Remboursement LPPR - deux systèmes qui coexistent',
      },
      {
        type: 'paragraph',
        content: "La nomenclature générique (titre I) couvre les emboîtures classiques par matériau et mécanisme, intégrée au prix global de la prothèse. Les dispositifs nominatifs (titre II), comme l'I-SUB, sont évalués individuellement par la CNEDiMTS et inscrits avec leur propre code et tarif. L'I-SUB a obtenu son inscription par arrêté du 8 juillet 2025, après l'avis favorable de la CNEDiMTS de décembre 2023.",
      },
      {
        type: 'comparison_table',
        headers: ['Élément', 'Code', 'Tarif TTC'],
        rows: [
          ['Prothèse fémorale, emboîture résines stratifiées (base)', 'PI04SSC23', '1 865,86 €'],
          ['Emboîture fémorale sub-ischiatique, PROTEOR I-SUB', '2783242', '1 171,05 €'],
          ['Prestation I-SUB (fabrication, mise à disposition, suivi)', '2702841', '1 566,58 €'],
        ],
      },
      {
        type: 'h2',
        id: 'criteres-choix',
        content: "Qui bénéficie de quelle combinaison",
      },
      {
        type: 'paragraph',
        content: "Forme et suspension se combinent selon le profil : un moignon dont le volume fluctue s'accommode souvent mieux d'un accrochage distal que d'une dépression, qui exige un volume stable. Le gain du sub-ischiatique se lit surtout en position assise et dans la liberté de mouvement du bassin - pertinent pour une activité sédentaire ou la conduite. Le réseau de prothésistes formés aux techniques sub-ischiatiques reste plus restreint que celui des emboîtures classiques - un critère d'accès à vérifier avant de fixer ses attentes.",
      },
      {
        type: 'faq',
        items: [
          {
            question: "La CAT-CAM est-elle encore prescrite aujourd'hui ?",
            answer: "Plus rarement, mais elle reste indiquée pour certaines morphologies précises où l'ischion intégré ou le sub-ischiatique ne conviennent pas - ce n'est pas une technique abandonnée, seulement moins fréquente.",
          },
          {
            question: "Accrochage distal ou dépression - lequel est le plus sûr ?",
            answer: "Les deux sont fiables pour un moignon stable. L'accrochage distal tolère mieux les petites variations de volume ; la dépression offre un contact plus intime mais demande un ajustement plus précis et un moignon au volume constant.",
          },
          {
            question: "Peut-on passer d'une emboîture classique à une sub-ischiatique ?",
            answer: "Oui, sous réserve d'une évaluation par un médecin MPR et l'orthoprothésiste - la forme et la longueur du moignon influencent directement la faisabilité d'un montage sub-ischiatique.",
          },
        ],
      },
      {
        type: 'cta_block',
        title: "Besoin d'un avis sur votre emboîture ?",
        subtitle: "Trouvez un orthoprothésiste agréé près de chez vous pour évaluer votre indication.",
        buttonText: 'Trouver un praticien',
        buttonHref: '/trouver-praticien',
      },
    ],
    relatedArticles: ['prothese-tibiale-niveaux-activite', 'prothese-femorale-choisir-son-genou', 'prothese-main-myoelectrique', 'prothese-bras-systeme-corporel'],
  },
  {
    slug: 'manchon-accroche',
    pilier: 'protheses',
    title: "Manchon et systèmes d'accroche : silicone, copolymère, polyuréthane, comment choisir",
    metaTitle: "Manchon de prothèse - silicone, copolymère, polyuréthane, accrochage",
    metaDescription: "Manchon préfabriqué ou sur moulage, accrochage distal ou dépression : comment choisir le manchon d'une prothèse de membre, les indications cliniques et le remboursement LPPR.",
    badge: 'Prothèses',
    readingTime: '7 min',
    publishedAt: '2026-08-31',
    updatedAt: '2026-08-31',
    author: {
      name: 'Jean-Marc Tissier',
      title: 'Expert appareillage — 15 ans chez Össur France',
    },
    heroImage: 'https://i.imgur.com/DlHO0yB.jpeg',
    excerpt: "Le manchon est la seule pièce de la prothèse en contact permanent avec la peau. Silicone, copolymère ou polyuréthane, accrochage distal ou dépression : le choix répond à des indications cliniques précises, pas à une préférence de confort.",
    blocks: [
      {
        type: 'paragraph',
        content: "Le manchon est la seule pièce de toute la prothèse en contact permanent avec la peau du moignon. C'est lui qui détermine si le port est tolérable sur une journée complète, et c'est souvent le premier composant à changer quand un appareillage cause des irritations - pas l'emboîture elle-même.",
      },
      {
        type: 'h2',
        id: 'materiaux',
        content: 'Silicone, copolymère ou polyuréthane - une hiérarchie de prescription',
      },
      {
        type: 'paragraph',
        content: "Le silicone et le copolymère de qualité médicale sont la référence de première intention, préfabriqués ou réalisés sur moulage. Le polyuréthane n'est pas une alternative de confort : la nomenclature LPPR conditionne sa prise en charge à l'échec médicalement constaté d'un manchon silicone ou copolymère - c'est une solution de second recours, pas un choix initial.",
      },
      {
        type: 'h2',
        id: 'systemes-accroche',
        content: "Deux logiques d'accroche, indépendantes du matériau",
      },
      {
        type: 'paragraph',
        content: "L'accrochage distal reste le plus répandu : une goupille à l'extrémité du manchon se verrouille mécaniquement au fond de l'emboîture. L'anneau d'étanchéité intermédiaire suit une autre logique - il crée le joint nécessaire à une suspension par dépression plutôt qu'un verrouillage mécanique. C'est ce second système qu'exige par exemple l'I-SUB de PROTEOR, traité dans l'article sur l'emboîture fémorale.",
      },
      {
        type: 'h2',
        id: 'technologies-avancees',
        content: 'Dépression active et manchons à membrane intégrée',
      },
      {
        type: 'paragraph',
        content: "Au-delà d'une simple valve d'expulsion d'air, certains systèmes gèrent la dépression activement. Le Harmony d'Ottobock utilise une pompe mécanique (P3, P4) ou électronique (E2) qui extrait l'air entre manchon et emboîture à chaque pas, maintenant un vide constant autour de -600 mbar - avec un amortisseur en élastomère intégré qui absorbe les chocs verticaux. Le Seal-In d'Össur inverse la logique : l'étanchéité vient d'une membrane intégrée directement au manchon, avec des anneaux de joint successifs, plutôt que d'une valve sur l'emboîture elle-même.",
      },
      {
        type: 'info_box',
        title: 'Le manchon préfabriqué a des indications précises, pas génériques',
        content: "La LPPR réserve le manchon fémoral préfabriqué à des situations cliniques identifiées : moignon court, moignon flasque, peau extrêmement fragile (patients brûlés ou greffés), cicatrices invaginées, ou amputation fémorale associée à une atteinte d'un ou des membres supérieurs. En dehors de ces indications, le manchon sur moulage reste la référence.",
      },
      {
        type: 'h2',
        id: 'remboursement-lppr',
        content: 'Remboursement LPPR',
      },
      {
        type: 'comparison_table',
        headers: ['Élément', 'Code', 'Tarif TTC'],
        rows: [
          ['Manchon préfabriqué, silicone ou copolymère', 'VI3X603', '1 059,25 €'],
          ['Manchon injecté et tramé sur moulage, silicone ou copolymère', 'VI3X003', '1 157,61 €'],
          ['Manchon polyuréthane préfabriqué (après échec silicone/copolymère)', 'VI3U601', '1 606,48 €'],
          ['Cupule distale en adjonction (moignon conique, cicatrice irrégulière)', 'VI3X700', '210,12 €'],
        ],
      },
      {
        type: 'faq',
        items: [
          {
            question: 'Peut-on demander directement un manchon polyuréthane ?',
            answer: "Non - la prise en charge LPPR exige un échec médicalement constaté d'un manchon silicone ou copolymère au préalable. Ce n'est pas une question de préférence.",
          },
          {
            question: "Un manchon à accrochage distal est-il compatible avec une emboîture I-SUB ?",
            answer: "Non - l'I-SUB exige un manchon avec anneau d'étanchéité intermédiaire pour assurer la dépression, pas un système à goupille.",
          },
          {
            question: 'À quelle fréquence change-t-on un manchon ?',
            answer: "Ça dépend du système. Pour un montage type I-SUB, le manchon et la valve se changent quatre fois par an. Pour un accrochage distal classique, la fréquence dépend surtout de l'usure et de l'évolution du volume du moignon.",
          },
        ],
      },
      {
        type: 'cta_block',
        title: 'Un manchon qui irrite ou ne tient plus ?',
        subtitle: "Trouvez un orthoprothésiste agréé près de chez vous pour réévaluer votre appareillage.",
        buttonText: 'Trouver un praticien',
        buttonHref: '/trouver-praticien',
      },
    ],
    relatedArticles: ['prothese-femorale-emboiture', 'prothese-tibiale-niveaux-activite', 'prothese-femorale-choisir-son-genou', 'prothese-main-myoelectrique'],
  },
  {
    slug: 'pied-prothetique',
    pilier: 'protheses',
    title: "Pied prothétique : classe I, II ou III, ce que mesure vraiment la classification",
    metaTitle: "Pied prothétique - classes I, II, III et remboursement LPPR",
    metaDescription: "Comment fonctionne la classification des pieds à restitution d'énergie (classe I, II, III), les critères techniques mesurés, et le remboursement LPPR.",
    badge: 'Prothèses',
    readingTime: '7 min',
    publishedAt: '2026-08-31',
    updatedAt: '2026-08-31',
    author: {
      name: 'Jean-Marc Tissier',
      title: 'Expert appareillage — 15 ans chez Össur France',
    },
    heroImage: 'https://i.imgur.com/qbZYkcM.png',
    excerpt: "La classe d'un pied à restitution d'énergie n'est pas une étiquette marketing - elle correspond à des seuils techniques mesurés en laboratoire et à des profils de déplacement définis par la classification internationale du fonctionnement, pas au prix du modèle.",
    blocks: [
      {
        type: 'paragraph',
        content: "Un pied à restitution d'énergie emmagasine l'énergie de l'appui au sol et la restitue à la propulsion. La classe I, II ou III qui lui est attribuée n'est pas une gamme commerciale : c'est un résultat de laboratoire, mesuré, qui conditionne le remboursement.",
      },
      {
        type: 'h2',
        id: 'classification-cif',
        content: 'Une classification fondée sur des seuils mesurés, pas sur une gamme',
      },
      {
        type: 'paragraph',
        content: "Chaque classe correspond à un profil de déplacement défini par la Classification internationale du fonctionnement (CIF), et à des seuils techniques vérifiés lors d'un essai en laboratoire indépendant : la propulsion (un score obtenu au relevé force-déformation) et la déformation permanente de l'avant-pied et du talon. La conformité est valable cinq ans, puis réévaluée sur un pied neuf.",
      },
      {
        type: 'comparison_table',
        headers: ['Classe', 'Propulsion (P)', 'Déformation permanente', 'Profil de déplacement (CIF)'],
        rows: [
          ['I', '30 ≤ P < 75', '< 10 mm avant-pied et talon', 'Déplacements dans des bâtiments autres que la maison (d4601)'],
          ['II', 'P ≥ 30', '< 10 mm avant-pied, < 5 mm talon', 'Profil intermédiaire, tolérance au talon plus stricte'],
          ['III', 'P ≥ 120', '< 10 mm avant-pied, < 5 mm talon', 'Déplacements extérieurs variés et autres lieux divers (d4601, d4602, d4608)'],
        ],
      },
      {
        type: 'info_box',
        title: 'La classe III ne se prescrit pas par défaut',
        content: "La première prescription d'un pied à restitution d'énergie, ou tout changement de type de pied, relève obligatoirement d'un médecin spécialiste en médecine physique et de réadaptation (MPR) - un renouvellement à l'identique ne l'exige pas. Pour une classe III spécifiquement, le prescripteur doit préciser quelles activités motivent ce choix : ce n'est pas une case cochée par prudence.",
      },
      {
        type: 'h2',
        id: 'exemple-concret',
        content: 'Ce que couvre un pied de classe III en pratique',
      },
      {
        type: 'paragraph',
        content: "Le BIOSTEP LP (ALPS South Europe) illustre ce que la classe III implique techniquement : deux lames dynamiques en fibre de carbone, une pyramide de connexion en titane, une charge supportée jusqu'à 147 kg selon la taille, une étanchéité permettant l'immersion jusqu'à trois mètres pendant une heure, et une tenue en température de -23°C à 93°C. Le module est garanti 36 mois, le revêtement esthétique 6 mois, la chaussette de protection 1 mois - trois durées de garantie distinctes pour trois pièces d'usure différentes.",
      },
      {
        type: 'h2',
        id: 'remboursement-lppr',
        content: 'Remboursement LPPR',
      },
      {
        type: 'comparison_table',
        headers: ['Élément', 'Code', 'Tarif TTC'],
        rows: [
          ['Pied à restitution d\'énergie, classe III, ALPS, BIOSTEP LP (22 cm)', '2744970', '2 512,82 €'],
          ['Pied à restitution d\'énergie, classe III, ALPS, BIOSTEP EVO (23 cm)', '2761230', '2 512,82 €'],
        ],
      },
      {
        type: 'h2',
        id: 'criteres-choix',
        content: 'Pourquoi la classe compte plus que la marque',
      },
      {
        type: 'paragraph',
        content: "Un pied surclassé par rapport à l'activité réelle du patient ne se traduit pas par un bénéfice supplémentaire - la propulsion excédentaire n'est simplement pas exploitée, et l'ajustement (raideur de lame, catégories de résistance selon le poids) devient moins précis. À l'inverse, un pied sous-classé limite réellement le périmètre de marche. La classe se fixe sur le projet de vie du patient, pas sur ses préférences esthétiques ou son budget.",
      },
      {
        type: 'faq',
        items: [
          {
            question: "Peut-on demander directement un pied de classe III ?",
            answer: "La prescription initiale relève d'un médecin MPR, qui doit justifier le choix par les activités réelles du patient - la classe III n'est pas automatique même en cas de demande explicite.",
          },
          {
            question: 'Le renouvellement change-t-il automatiquement de classe ?',
            answer: "Non - un renouvellement à l'identique ne nécessite pas de nouvelle évaluation par un spécialiste MPR. Un changement de classe, en revanche, suit les mêmes règles qu'une première prescription.",
          },
          {
            question: 'Un pied de classe I convient-il à un usage extérieur occasionnel ?',
            answer: "Oui pour un usage ponctuel, mais la classe I reste calibrée sur des déplacements en bâtiment - un usage extérieur régulier et varié relève plutôt d'une classe II ou III selon l'intensité.",
          },
        ],
      },
      {
        type: 'cta_block',
        title: 'Besoin de réévaluer votre appareillage ?',
        subtitle: "Trouvez un orthoprothésiste agréé près de chez vous pour faire le point sur votre classe de pied.",
        buttonText: 'Trouver un praticien',
        buttonHref: '/trouver-praticien',
      },
    ],
    relatedArticles: ['prothese-femorale-emboiture', 'manchon-accroche', 'prothese-tibiale-niveaux-activite', 'prothese-femorale-choisir-son-genou', 'futur-prothese-bionique-innovation'],
  },
  {
    slug: 'genou-bionique-microprocesseur',
    pilier: 'protheses',
    title: "Genoux bioniques : ce que couvre vraiment la Sécu, marque par marque",
    metaTitle: "Genou bionique microprocesseur - remboursement LPPR par marque",
    metaDescription: "C-Leg, Kenevo, Rheo Knee XC, Orion3, HYBRID-1P360, SYNSYS : quelles conditions d'attribution, quel remboursement LPPR réel pour les genoux prothétiques à microprocesseur.",
    badge: 'Prothèses',
    readingTime: '10 min',
    publishedAt: '2026-08-31',
    updatedAt: '2026-08-31',
    author: {
      name: 'Jean-Marc Tissier',
      title: 'Expert appareillage — 15 ans chez Össur France',
    },
    heroImage: 'https://i.imgur.com/LayXnuc.jpeg',
    excerpt: "On dit souvent que les genoux prothétiques bioniques ne sont pas remboursés en France. C'est faux pour les six marques qui se partagent le marché - ce qui varie réellement, c'est l'éligibilité fonctionnelle, pas l'accès au remboursement.",
    blocks: [
      {
        type: 'paragraph',
        content: "Un genou prothétique \"bionique\" ne se limite pas à contenir un microprocesseur - une large partie de la nomenclature LPPR le fait déjà, sans jamais faire les gros titres. Ce qui distingue vraiment les six marques que le grand public connaît, c'est ce que ce microprocesseur contrôle réellement : la sécurité de la phase d'appui, le moment où le genou doit porter tout le poids du corps sans se dérober. C'est cette fonction-là, pas le mot \"microprocesseur\" en soi, qui définit un genou bionique au sens plein.",
      },
      {
        type: 'h2',
        id: 'trois-paliers',
        content: 'Trois paliers technologiques, pas deux',
      },
      {
        type: 'paragraph',
        content: "La majorité des genoux réellement prescrits en France sont purement mécaniques - stabilité obtenue par la géométrie de l'articulation ou par un frein mécanique, aucune électronique, souvent sous les 2 000 €. Un second palier existe, moins connu : des genoux où le microprocesseur assiste uniquement la phase pendulaire - le réglage de la cadence de marche - sans piloter la sécurité de l'appui. Ils coûtent entre 3 400 € et 5 500 € environ. Le troisième palier, celui dont il est question ici, pilote électroniquement les deux phases à la fois : c'est le seul qui corresponde à ce que le grand public appelle un genou bionique.",
      },
      {
        type: 'h2',
        id: 'marques-remboursees',
        content: 'Six marques, toutes remboursées - ce qui varie, c\'est l\'éligibilité',
      },
      {
        type: 'paragraph',
        content: "Contrairement à une idée répandue, aucune des six marques présentes sur le marché français n'est exclue de la LPPR. Chacune a son propre code, son propre tarif, et surtout son propre profil fonctionnel visé - un genou pensé pour la sécurité à basse vitesse n'a pas les mêmes critères d'attribution qu'un genou pensé pour une marche active.",
      },
      {
        type: 'comparison_table',
        headers: ['Genou', 'Fabricant', 'Profil visé', 'Vitesse requise', 'Périmètre continu'],
        rows: [
          ['C-Leg 3C100', 'Ottobock', 'Actif', '≥ 3 km/h (≥ 4 km/h vérifié après essai)', '> 500 m (> 2 km vérifié après essai)'],
          ['Kenevo', 'Ottobock', 'Basse activité, sécurité', '< 3 km/h', '> 300 m'],
          ['Orion3', 'Blatchford', 'Actif', '≥ 3 km/h (≥ 4 km/h vérifié après essai)', '> 500 m (> 2 km vérifié après essai)'],
          ['Rheo Knee XC', 'Össur', 'Actif', '≥ 3 km/h (≥ 4 km/h vérifié après essai)', '> 500 m (> 2 km vérifié après essai)'],
          ['HYBRID-1P360', 'Proteor', 'Actif', '≥ 3 km/h', '> 500 m'],
          ['SYNSYS (ensemble genou-cheville-pied)', 'Proteor', 'Actif avancé', '2 à 5 km/h', 'Terrains inégaux, pentes, escaliers'],
        ],
      },
      {
        type: 'h3',
        content: 'Kenevo - le seul pensé pour la sécurité, pas la performance',
      },
      {
        type: 'paragraph',
        content: "Kenevo est le seul des six à cibler explicitement un profil à risque de chute élevé plutôt qu'un profil actif : score au test TGUG (Timed Get Up and Go) supérieur à 19 secondes, et surtout une interdiction d'utiliser des béquilles axillaires ou un déambulateur - la canne simple ou la canne anglaise restent autorisées. Les trois modes d'activité du dispositif ne sont réglables que par le prothésiste, jamais par le patient. La prescription initiale exige déjà une équipe pluridisciplinaire (MPR ou orthopédiste, kinésithérapeute, orthoprothésiste), avant même l'essai.",
      },
      {
        type: 'h3',
        content: 'Rheo Knee XC - le seul poids limite qui varie selon l\'activité',
      },
      {
        type: 'paragraph',
        content: "Les cinq autres dispositifs fixent un seuil de poids unique. Rheo Knee XC distingue deux seuils selon le niveau d'activité réel du patient : 110 kg pour un niveau d'activité élevé, 136 kg pour un niveau faible à modéré - une même limite physique du dispositif, mais une tolérance différente selon l'usage prévu.",
      },
      {
        type: 'h3',
        content: 'SYNSYS - le seul qui exige un établissement de santé agréé',
      },
      {
        type: 'paragraph',
        content: "SYNSYS n'est pas qu'un genou : c'est un ensemble genou-cheville-pied dont la synergie articulaire (une flexion de genou entraîne une dorsiflexion automatique de la cheville) exige un cadre de prescription différent des cinq autres. La prescription initiale et tout renouvellement doivent venir d'une équipe exerçant au sein d'un établissement de santé titulaire d'une autorisation \"locomoteur\" spécifique, et l'appareillage ne peut être réalisé que par un orthoprothésiste certifié par un expert clinique PROTEOR après formation dédiée au produit et à son logiciel de réglage.",
      },
      {
        type: 'info_box',
        title: "L'éligibilité se vérifie en deux temps, pas un seul",
        content: "Pour C-Leg, Orion3, Rheo Knee XC et HYBRID-1P360, un seuil d'entrée (vitesse ≥3 km/h, périmètre >500 m) permet d'accéder à une période d'essai - mais la prescription définitive n'est confirmée qu'après vérification d'un seuil nettement plus exigeant (vitesse ≥4 km/h, périmètre continu >2 km, descente de pente à 15 %, escaliers en pas alternés). Remplir le premier seuil ne garantit donc pas l'accès au dispositif.",
      },
      {
        type: 'h2',
        id: 'remboursement-lppr',
        content: 'Remboursement LPPR - l\'écart de prix entre marque et générique',
      },
      {
        type: 'paragraph',
        content: "Les six dispositifs nominatifs s'échelonnent entre 15 750 € et 38 546 € TTC - contre environ 3 400 à 6 500 € pour un genou générique à assistance microprocesseur limitée à la phase pendulaire. Le facteur de prix entre les deux paliers dépasse souvent 5, pour une différence technique précise : le contrôle électronique de la phase d'appui, pas simplement la présence d'un microprocesseur.",
      },
      {
        type: 'comparison_table',
        headers: ['Genou', 'Fabricant', 'Tarif TTC'],
        rows: [
          ['HYBRID-1P360', 'Proteor', '15 750,29 €'],
          ['Kenevo', 'Ottobock', '16 178,41 €'],
          ['Orion3', 'Blatchford', '16 191,86 €'],
          ['Rheo Knee XC', 'Össur', '17 044,06 €'],
          ['C-Leg 3C100', 'Ottobock', '17 396,14 €'],
          ['SYNSYS (ensemble genou-cheville-pied, avec prestation)', 'Proteor', '38 546,33 €'],
        ],
      },
      {
        type: 'h2',
        id: 'la-realite-du-terrain',
        content: 'Ce que porte la majorité des patients',
      },
      {
        type: 'paragraph',
        content: "Malgré la place que ces six dispositifs occupent dans les médias et les vitrines des fabricants, la majorité des patients amputés fémoraux portent un genou du premier palier - purement mécanique. L'accès au troisième palier dépend d'un profil fonctionnel documenté, pas d'une simple demande : vitesse de marche, périmètre continu, risque de chute, et pour SYNSYS, un encadrement hospitalier spécifique. Le remboursement n'est pas la barrière - l'éligibilité l'est.",
      },
      {
        type: 'faq',
        items: [
          {
            question: 'Un genou bionique est-il automatiquement mieux remboursé qu\'un genou mécanique ?',
            answer: "Non - le remboursement suit l'éligibilité fonctionnelle du patient, pas une hiérarchie de qualité. Un patient qui ne remplit pas les critères de vitesse ou de périmètre continu n'aura pas accès à ces dispositifs, quel que soit son souhait.",
          },
          {
            question: 'Peut-on choisir librement entre les six marques ?',
            answer: "Non - chaque dispositif a ses propres critères d'indication (Kenevo pour un profil à risque de chute, C-Leg ou Orion3 pour un profil actif, SYNSYS pour un cadre hospitalier spécifique). Le choix suit le profil du patient, évalué en période d'essai par le médecin prescripteur.",
          },
          {
            question: 'Le renouvellement nécessite-t-il un nouvel essai ?',
            answer: "Ça dépend du dispositif. Kenevo ne nécessite pas de nouvel essai au renouvellement. Les autres exigent généralement un bilan d'activité récent du médecin prescripteur, sans nécessairement repasser par la période d'essai complète.",
          },
        ],
      },
      {
        type: 'cta_block',
        title: 'Besoin d\'évaluer votre éligibilité à un genou à microprocesseur ?',
        subtitle: "Trouvez un orthoprothésiste agréé près de chez vous pour faire le point sur votre profil fonctionnel.",
        buttonText: 'Trouver un praticien',
        buttonHref: '/trouver-praticien',
      },
    ],
    relatedArticles: ['prothese-femorale-choisir-son-genou', 'prothese-femorale-emboiture', 'manchon-accroche', 'pied-prothetique', 'futur-prothese-bionique-innovation'],
  },
  {
    slug: 'futur-prothese-bionique-innovation',
    pilier: 'protheses',
    title: "Le futur de la prothèse : la nouvelle vague des acteurs bioniques",
    metaTitle: "Prothèses bioniques du futur - 15 start-ups qui réinventent le membre artificiel",
    metaDescription: "TASKA, Psyonic, Phantom Neuro, BrainCo, Axiles Bionics, BionicM et 10 autres acteurs : le tour complet des start-ups qui réinventent la prothèse externe, du contrôle neuronal au genou motorisé.",
    badge: 'Prothèses',
    readingTime: '14 min',
    publishedAt: '2026-08-31',
    updatedAt: '2026-08-31',
    author: {
      name: 'Jean-Marc Tissier',
      title: 'Expert appareillage — 15 ans chez Össur France',
    },
    heroImage: 'https://i.imgur.com/HFWYOjh.png',
    excerpt: "Ottobock qui mène lui-même la levée de fonds d'une start-up d'interface neuronale, un genou japonais qui pousse au lieu de freiner, une main indienne à 4 gestes conçue pour coûter six fois moins cher : tour complet de la nouvelle vague bionique, membre par membre et tendance par tendance.",
    blocks: [
      {
        type: 'paragraph',
        content: "En avril 2025, Ottobock - le numéro un mondial historique de la prothèse - a mené lui-même une levée de fonds de 19 millions de dollars pour Phantom Neuro, une start-up d'interface neuronale née dans les laboratoires de médecine de Johns Hopkins. Ce n'est pas un fonds de capital-risque anonyme qui investit dans un concurrent lointain : c'est le leader historique du secteur qui rejoint le conseil d'administration d'une entreprise qui pourrait redéfinir la façon dont on pilote une prothèse. Ce signal résume assez bien où en est la prothèse externe en 2026 - une vague d'acteurs qui ne se contentent plus d'améliorer la mécanique, mais qui attaquent simultanément le contrôle neuronal, le confort de chaussage, la robustesse du quotidien et l'accessibilité économique.",
      },
      {
        type: 'h2',
        id: 'mains-etablies',
        content: 'Mains bioniques établies : la course à la robustesse',
      },
      {
        type: 'paragraph',
        content: "TASKA Prosthetics reste la référence du secteur en matière d'étanchéité. Fondée en Nouvelle-Zélande par Mat Jury - un ingénieur reconverti après s'être cassé les deux bras en VTT -, l'entreprise a construit sa réputation sur sa certification IP67 (immersion totale) grâce à sa technologie HydroSeal, et sa gamme actuelle (TASKA CX, HandGen2) propose 23 configurations de préhension. En juin 2024, TASKA a été rachetée à 100% par le groupe Eqwal - un signal de consolidation qui montre qu'une partie du secteur s'organise déjà autour de quelques plateformes robustes et cliniquement déployées, pendant que d'autres continuent d'innover en marge.",
      },
      {
        type: 'paragraph',
        content: "Psyonic (États-Unis) reste le concurrent le plus direct : son Ability Hand revendique la vitesse de fermeture la plus rapide du marché, avec des doigts en silicone et caoutchouc conçus pour absorber les chocs, et surtout un retour haptique - des capteurs de pression en bout de doigt qui transmettent une vibration à l'utilisateur au contact d'un objet. Fondée par le Dr Aadeel Akhtar, inspiré à 7 ans par la rencontre d'une amputée au Pakistan, l'entreprise est aujourd'hui prise en charge par Medicare aux États-Unis - avec une étanchéité IP64, moins poussée que celle de TASKA. Aether Biomedical (Pologne) mise sur la réparabilité : sa main Zeus se démonte en sept modules interchangeables, remplaçables par le clinicien en moins de 10 minutes, pour une force de préhension allant jusqu'à 152 N et une capacité de levage de 35 kg sur la version V1.",
      },
      {
        type: 'paragraph',
        content: "Open Bionics (Royaume-Uni) joue une autre partition : l'accessibilité plutôt que la performance brute. Son Hero Arm, premier bras bionique imprimé 3D à obtenir une approbation clinique pour enfants dès 8 ans, se fabrique par scan et impression 3D en une quarantaine d'heures, avec un socket réimprimable tous les 12 à 18 mois à mesure que l'enfant grandit. Le partenariat avec Disney, en place depuis 2015 sans versement de royalties, permet des coques personnalisables Star Wars, Marvel ou La Reine des Neiges - une approche qui a fait d'Open Bionics une référence sur le segment pédiatrique, loin de la course aux Newtons de préhension.",
      },
      {
        type: 'h2',
        id: 'controle-neuronal',
        content: 'Le contrôle neuronal, prochaine frontière',
      },
      {
        type: 'h3',
        content: 'Phantom Neuro - peu invasif, soutenu par Ottobock',
      },
      {
        type: 'paragraph',
        content: "Phantom Neuro mise sur une interface qualifiée de \"peu invasive\" : un dispositif de type bracelet, implanté sous la peau, qui capte les signaux nerveux périphériques plutôt que les seuls signaux musculaires de surface. L'entreprise revendique 94% de précision sur la reconnaissance de 11 mouvements de main et de poignet, et jusqu'à 85% de fonctionnalité naturelle retrouvée après seulement 10 minutes de calibration une fois le dispositif implanté. Sa Série A de 19 millions de dollars, menée par Ottobock en avril 2025, porte son financement total à 28 millions de dollars. Basée à Austin, la start-up est également soutenue par la DARPA à hauteur d'environ 300 000 dollars, signe d'un intérêt à double usage, civil et militaire.",
      },
      {
        type: 'h3',
        content: 'Morph Labs et BrainCo - l\'EEG sans aucune implantation',
      },
      {
        type: 'paragraph',
        content: "Morph Labs et BrainCo empruntent une voie entièrement non invasive : l'électroencéphalographie (EEG), qui lit l'activité cérébrale à travers le cuir chevelu, sans aucune chirurgie. Fondée en 2024 par Pranai Reddy, Nikola Cadavid et Soham Mehra, Morph Labs vise jusqu'à 19 degrés de liberté - contre 5 à 10 pour la plupart des mains myoélectriques du marché - et espère ses premières ventes commerciales autour de mars 2026, après son admission au programme Y Combinator de l'été 2026. Le stade reste précoce : le prototype actuel ne classifie que 5 gestes distincts avec un casque que son fondateur qualifie lui-même de \"bricolé\". BrainCo a huit ans d'avance : fondée en 2015 et incubée à la Harvard Innovation Lab, l'entreprise chinoise a dévoilé sa main bionique aux Jeux Para-Asiatiques de Hangzhou en 2023. Sa main Intelligent Bionic Hand pèse 383 g et revendique un contrôle indépendant des cinq doigts avec une précision de 0,1 degré, en combinant signaux neuronaux et électromyographiques captés par électrodes sèches.",
      },
      {
        type: 'h2',
        id: 'confort-ajustement',
        content: "Le confort réinventé : quand le problème n'est pas la main, mais le socket",
      },
      {
        type: 'paragraph',
        content: "Deux jeunes entreprises partent d'un constat identique : la première cause d'abandon d'une prothèse n'est pas la mécanique de la main, c'est l'inconfort du socket qui la relie au moignon. Vessl Prosthetics (Ontario, Canada), fondée par Sydney Robinson et Oleksiy Zaika, développe l'Isoform, un système de socket à ajustement automatique qui compense en temps réel les variations de volume du moignon au cours de la journée - sans changer manuellement de chaussettes de compensation. La start-up a bouclé un tour de pré-amorçage sursouscrit en janvier 2025 et vise l'enregistrement FDA. Meablex, spin-off de l'Université de Melbourne fondée par le Dr Alireza Mohammadi après avoir interrogé 60 amputés, cliniciens et fournisseurs, associe un socket ajustable manuellement par l'utilisateur à des capteurs magnétiques - moins sensibles à la transpiration que les électrodes cutanées classiques. Objectif affiché : un prix autour de 10 000 dollars australiens, environ un tiers du prix habituel du marché, avec des essais cliniques prévus fin 2026 et un lancement commercial visé début 2027.",
      },
      {
        type: 'h2',
        id: 'jambes-chevilles-actives',
        content: 'Jambes et chevilles actives : motoriser plutôt que freiner',
      },
      {
        type: 'paragraph',
        content: "La plupart des pieds prothétiques restent passifs : ils restituent l'énergie emmagasinée à l'appui, sans jamais en ajouter. Axiles Bionics (Belgique), spin-off de la Vrije Universiteit Brussel fondée en 2019 par le Dr Pierre Cherelle, part d'un constat simple : la plupart des pieds du marché n'ont aucune véritable articulation de cheville, une architecture héritée des années 1970-1980. Sa prothèse Lunaris intègre une vraie articulation et un tendon élastique adaptatif, avec marquage CE et FDA déjà obtenus, une distribution en Belgique, France, Luxembourg et Pays-Bas, et une Série A de 6 millions d'euros (sur 8 visés) close en juin 2025.",
      },
      {
        type: 'paragraph',
        content: "Toutes les start-ups de cette vague ne survivent pas jusqu'à la commercialisation. Revival Bionics (France), fondée en 2021 par deux ingénieurs de l'UTC Compiègne et lauréate du Grand Prix i-Lab 2022 pour sa cheville motorisée à tendon d'Achille artificiel développée avec le motoriste suisse maxon, a été placée en procédure de sauvegarde en mai 2025 puis en liquidation judiciaire en septembre 2025. Un rappel utile : la biomécatronique de pointe reste un secteur capitalistiquement exigeant, où l'innovation technique ne suffit pas toujours à franchir le cap de la commercialisation.",
      },
      {
        type: 'paragraph',
        content: "Côté genou, BionicM (Japon) prend le contre-pied de toute l'industrie. Les genoux à microprocesseur aujourd'hui remboursés en France régulent tous un frein hydraulique - ils ne font que ralentir le mouvement. Le Bio Leg de BionicM, spin-off de l'Université de Tokyo fondée par Sun Xiaojun (amputé lui-même à 9 ans), motorise activement l'articulation pour assister l'utilisateur - se lever d'une chaise, monter un escalier marche par marche. Le dispositif a obtenu une exemption d'enregistrement 510(k) auprès de la FDA en août 2023.",
      },
      {
        type: 'h2',
        id: 'accessibilite',
        content: "Accessibilité : l'autre course, loin des Newtons et des degrés de liberté",
      },
      {
        type: 'paragraph',
        content: "Toutes les start-ups de ce panorama ne visent pas la performance de pointe. En Inde, Dee Dee Labs - née en 2016 après qu'un des fondateurs a assisté à une conférence de Nicolas Huchet, amputé français qui avait développé sa propre main imprimée en 3D - propose une main myoélectrique limitée à 4 gestes essentiels (poing, pointage, pince, relâchement), disponible en trois tailles avec gant en silicone teinté peau. L'ambition n'est pas de rivaliser avec Psyonic ou Aether sur le nombre de préhensions, mais de rendre la prothèse accessible dans un marché où les dispositifs importés coûtent souvent plus de six fois le revenu mensuel moyen d'une famille rurale. Social Hardware, également indienne, pousse la logique plus loin : ses prothèses, conçues avec des outils agricoles interchangeables pour des amputés ruraux (souvent victimes d'accidents agricoles ou de morsures de serpent), sont distribuées gratuitement via un modèle non lucratif appuyé sur des ONG et six centres de réadaptation répartis dans le pays.",
      },
      {
        type: 'info_box',
        title: 'REEV (France) - à surveiller, mais ce n\'est pas une prothèse',
        content: "REEV, start-up toulousaine cofondée en 2021 par Amaury Ciurana et Robin Temporelli (ex-ingénieur Airbus), développe DREEVEN, une orthèse de genou motorisée par actionnement électrohydraulique pour les troubles neurologiques de la marche (AVC, sclérose en plaques, paralysie cérébrale) - pas pour les amputés. L'entreprise a levé 8,8 millions d'euros en 2025 (Polytechnique Ventures, Newfund Heka, Irdi Capital, avec Raphaël Varane parmi les investisseurs), revendique une réduction d'au moins 30% de l'effort au genou, et vise une première série commerciale en 2026, avec une implantation à Boston pour l'entrée sur le marché américain. Un acteur du champ non invasif au sens large, pas de la prothèse d'amputation au sens strict - mais suffisamment proche pour mériter une veille.",
      },
      {
        type: 'h2',
        id: 'ce-qui-se-dessine',
        content: 'Ce qui se dessine',
      },
      {
        type: 'paragraph',
        content: "Trois lignes de force traversent ce panorama de 15 acteurs. La première : le contrôle ne se limite plus à l'électromyographie de surface - interfaces peu invasives, EEG, capteurs magnétiques, chacun cherchant à contourner les limites du signal musculaire classique. La deuxième : la robustesse et la réparabilité sont devenues des arguments de vente à part entière, pas des détails techniques - étanchéité totale, modules remplaçables en clinique en quelques minutes. La troisième, souvent négligée dans la couverture médiatique de ces innovations : la course à la performance n'est pas la seule qui compte, et toutes les start-ups n'atteignent pas la commercialisation. Des acteurs comme Dee Dee Labs ou Social Hardware, en visant un tout autre marché, adressent une population d'amputés bien plus large que celle qui aura jamais accès à une main à 152 N de force de préhension.",
      },
      {
        type: 'faq',
        items: [
          {
            question: "Ces dispositifs sont-ils disponibles en France ?",
            answer: "Très inégalement. Lunaris (Axiles Bionics) est déjà distribuée en France. TASKA, Psyonic, Aether et Open Bionics sont accessibles via des réseaux de distribution internationaux. La plupart des autres (Phantom Neuro, Morph Labs, Meablex, BionicM) en sont encore au stade clinique ou de lancement initial, hors du circuit LPPR français.",
          },
          {
            question: "Quelle est la différence entre les approches EEG et les interfaces implantées comme Phantom Neuro ?",
            answer: "L'EEG (Morph Labs, BrainCo) lit l'activité cérébrale à travers le cuir chevelu, sans aucune chirurgie, mais avec un signal plus faible et plus bruité. Phantom Neuro implante un dispositif sous la peau pour capter directement les signaux nerveux périphériques - plus invasif que l'EEG, mais nettement moins qu'un implant cérébral profond, avec un signal plus précis et stable.",
          },
          {
            question: "Ces start-ups sont-elles fiables sur la durée ?",
            answer: "Inégalement - la liquidation judiciaire de Revival Bionics en 2025, malgré une innovation technique reconnue, montre que ce secteur reste capitalistiquement exigeant. L'acquisition de TASKA par Eqwal en 2024 illustre à l'inverse la consolidation d'acteurs matures autour de plateformes robustes.",
          },
        ],
      },
      {
        type: 'cta_block',
        title: "Une question sur l'appareillage bionique disponible en France ?",
        subtitle: "Un orthoprothésiste agréé peut vous orienter sur les options réellement accessibles selon votre profil.",
        buttonText: 'Trouver un praticien',
        buttonHref: '/trouver-praticien',
      },
    ],
    relatedArticles: ['prothese-main-myoelectrique', 'genou-bionique-microprocesseur', 'prothese-bras-systeme-corporel', 'pied-prothetique'],
  },
]

export function getArticle(pilier: string, slug: string): Article | undefined {
  return articles.find(a => a.pilier === pilier && a.slug === slug)
}

export function getArticlesByPilier(pilier: string): Article[] {
  return articles.filter(a => a.pilier === pilier)
}
