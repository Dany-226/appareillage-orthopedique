export type PathologieLink = {
  label: string
  href: string
  pilier: string
  description: string
}

export type PathologieBlock =
  | { type: 'paragraph'; content: string }
  | { type: 'h2'; content: string; id: string }
  | { type: 'h3'; content: string }
  | { type: 'stat_callout'; percentage: string; description: string; source?: string }
  | { type: 'info_box'; title: string; content: string }
  | { type: 'device_card'; title: string; description: string; href: string; pilier: string }
  | { type: 'faq'; items: { question: string; answer: string }[] }
  | { type: 'cta_block'; title: string; subtitle: string; buttonText: string; buttonHref: string }

export type Pathologie = {
  slug: string
  name: string
  metaTitle: string
  metaDescription: string
  heroLabel: string
  heroTitle: string
  heroSubtitle: string
  publishedAt: string
  updatedAt: string
  devices: PathologieLink[]
  blocks: PathologieBlock[]
}

export const pathologies: Pathologie[] = [
  {
    slug: 'amputation',
    name: 'Amputation',
    metaTitle: 'Appareillage après amputation - prothèses et aides techniques',
    metaDescription: "Guide complet de l'appareillage après amputation de membre. Prothèses tibiales, fémorales, parcours patient et remboursement LPPR.",
    heroLabel: 'PATHOLOGIE',
    heroTitle: 'Appareillage après amputation',
    heroSubtitle: "Comprendre les options d'appareillage après une amputation de membre inférieur ou supérieur - prothèses, aides à la mobilité et prise en charge.",
    publishedAt: '2026-05-01',
    updatedAt: '2026-06-01',
    devices: [
      { label: 'Prothèses tibiales', href: '/protheses/tibiale', pilier: 'Prothèses', description: 'Amputation sous le genou' },
      { label: 'Prothèses fémorales', href: '/protheses/femorale', pilier: 'Prothèses', description: 'Amputation au-dessus du genou' },
      { label: 'Fauteuils roulants actifs', href: '/fauteuils-roulants/manuel', pilier: 'Fauteuils', description: 'Phase transitoire ou définitive' },
      { label: 'Aides à la mobilité', href: '/aides-techniques/mobilite', pilier: 'Aides techniques', description: 'Cannes, déambulateurs' },
      { label: 'Positionnement assis', href: '/positionnement/assis', pilier: 'Positionnement', description: 'Coussins et systèmes adaptés' },
    ],
    blocks: [
      {
        type: 'paragraph',
        content: "Une amputation bouleverse les repères - mais l'appareillage moderne permet, avec le bon accompagnement, de retrouver une mobilité réelle et une vie active. Ce guide fait le point sur les options disponibles, le parcours d'appareillage concret, et les droits des patients en matière de remboursement.",
      },
      {
        type: 'h2',
        id: 'types-amputation',
        content: "Les niveaux d'amputation et leurs implications pour l'appareillage",
      },
      {
        type: 'paragraph',
        content: "Le niveau d'amputation conditionne directement le type de prothèse prescrite et la complexité de la rééducation. Une amputation tibiale (sous le genou) préserve l'articulation du genou - ce qui simplifie considérablement l'apprentissage de la marche. Une amputation fémorale (au-dessus du genou) nécessite un genou prothétique mécanique ou électronique.",
      },
      {
        type: 'info_box',
        title: 'Amputation tibiale vs fémorale',
        content: "L'amputation tibiale représente environ 53% des cas en France. Elle offre un meilleur pronostic fonctionnel grâce à la préservation du genou. La durée de rééducation est plus courte - 3 à 6 mois en moyenne contre 6 à 12 mois pour une prothèse fémorale.",
      },
      {
        type: 'h2',
        id: 'parcours-appareillage',
        content: "Le parcours d'appareillage après amputation - les étapes réelles",
      },
      {
        type: 'paragraph',
        content: "Le parcours commence bien avant la prothèse définitive. Après la phase de cicatrisation (4 à 12 semaines selon l'amputation), un appareillage provisoire est mis en place pour préparer le moignon et débuter la rééducation de marche. La prothèse définitive est fabriquée une fois le moignon stabilisé.",
      },
      {
        type: 'stat_callout',
        percentage: '77%',
        description: "des patients appareillés n'avaient pas une connaissance opérationnelle de leurs droits au moment de leur premier appareillage",
        source: 'Enquête menée auprès de patients appareillés - 2026',
      },
      {
        type: 'h2',
        id: 'remboursement',
        content: 'Remboursement et droits des patients amputés',
      },
      {
        type: 'paragraph',
        content: "Les prothèses de membres sont inscrites à la nomenclature LPPR. La prise en charge couvre une base tarifaire définie selon le type de prothèse et le niveau d'activité K du patient. Les composants avancés - genoux à microprocesseur notamment - nécessitent une entente préalable de la CPAM avant fabrication. La durée de garantie est de 6 ans pour les genoux à microprocesseur, 3 ans pour les emboîtures.",
      },
      {
        type: 'faq',
        items: [
          {
            question: "A quel moment peut-on commencer l'appareillage après une amputation ?",
            answer: "L'appareillage provisoire peut démarrer dès que la cicatrice est suffisamment consolidée - généralement 4 à 8 semaines après l'amputation. Le timing est évalué par le chirurgien et le médecin MPR. Ne pas attendre trop longtemps est important : plus l'appareillage démarre tôt, meilleur est le pronostic fonctionnel.",
          },
          {
            question: "Peut-on faire du sport après une amputation ?",
            answer: "Oui - et bien au-delà de ce que l'on imagine souvent. Les prothèses sportives (lames de course carbone, prothèses de natation) permettent une pratique à haut niveau. La condition : être évalué K4 et trouver un orthoprothésiste formé à l'appareillage sportif.",
          },
          {
            question: "Le choix de l'orthoprothésiste est-il libre ?",
            answer: "Entièrement libre. Vous pouvez choisir n'importe quel orthoprothésiste agréé par la Sécurité sociale, et en changer à tout moment - y compris en cours de prise en charge. Le dossier de fabrication vous appartient et peut être transmis sur demande.",
          },
          {
            question: "Qu'est-ce qu'une prothèse de secours ?",
            answer: 'La nomenclature LPPR prévoit la prise en charge d\'une deuxième prothèse dite "de secours" pour les patients dont le port est permanent et l\'utilisation régulière. Cette deuxième prothèse doit être prescrite de façon motivée par le médecin.',
          },
        ],
      },
      {
        type: 'cta_block',
        title: 'Trouver un orthoprothésiste spécialisé amputation',
        subtitle: "L'expertise du praticien est déterminante dans la qualité de votre appareillage. Vous êtes libre de choisir et de changer à tout moment.",
        buttonText: 'Trouver un praticien agréé',
        buttonHref: '/trouver-un-praticien',
      },
    ],
  },
  {
    slug: 'avc',
    name: 'AVC',
    metaTitle: 'Appareillage après un AVC - orthèses, fauteuils et aides techniques',
    metaDescription: 'Guide complet de l\'appareillage après un AVC. Orthèses, fauteuil roulant, aides techniques et parcours de rééducation pour retrouver l\'autonomie.',
    heroLabel: 'PATHOLOGIE',
    heroTitle: 'Appareillage après un AVC',
    heroSubtitle: 'Les dispositifs orthopédiques pour accompagner la rééducation après un accident vasculaire cérébral - séquelles motrices, sensitives et cognitives.',
    publishedAt: '2026-05-01',
    updatedAt: '2026-06-01',
    devices: [
      { label: 'Orthèse cheville AFO', href: '/ortheses/membre-inferieur/orthese-cheville-afo', pilier: 'Orthèses', description: 'Releveur de pied spastique' },
      { label: 'Releveur de pied', href: '/ortheses/membre-inferieur/releveur-de-pied', pilier: 'Orthèses', description: 'Pied tombant post-AVC' },
      { label: 'Cannes et déambulateurs', href: '/aides-techniques/mobilite', pilier: 'Aides techniques', description: "Aide à la marche post-AVC" },
      { label: 'Fauteuil roulant manuel', href: '/fauteuils-roulants/manuel', pilier: 'Fauteuils', description: 'Phase aigue et subaigue' },
    ],
    blocks: [
      {
        type: 'paragraph',
        content: "Un AVC peut entraîner des séquelles très variées - hémiplégie, troubles sensitifs, difficultés de communication ou de déglutition. La récupération fonctionnelle dépend de nombreux facteurs, mais l'appareillage joue un rôle central dès les premières semaines : maintenir les bonnes positions, compenser les déficits moteurs, et accompagner la rééducation.",
      },
      {
        type: 'h2',
        id: 'ortheses-avc',
        content: 'Les orthèses après AVC - à quoi servent-elles ?',
      },
      {
        type: 'paragraph',
        content: 'L\'orthèse de cheville AFO (Ankle Foot Orthosis) est le dispositif le plus prescrit après un AVC avec atteinte du membre inférieur. Elle compense le "pied tombant" - l\'incapacité à relever le pied en marchant - et prévient les chutes. Il en existe plusieurs types : rigide, articulée, semi-rigide, en carbone - le choix dépend du degré de spasticité et des objectifs de marche.',
      },
      {
        type: 'info_box',
        title: 'Orthèse AFO rigide ou articulée ?',
        content: "L'orthèse rigide stabilise totalement la cheville - indiquée en phase initiale ou pour les spasticités importantes. L'orthèse articulée permet un mouvement partiel - adaptée quand la récupération progresse et que la marche se normalise. Le choix évolue souvent en cours de rééducation.",
      },
      {
        type: 'faq',
        items: [
          {
            question: "Quand commencer le port d'une orthèse après un AVC ?",
            answer: "Le plus tôt possible - souvent dès la phase de rééducation hospitalière. L'orthèse aide à maintenir une position correcte du pied et de la cheville, prévient les rétractions tendineuses, et sécurise la reprise de la marche. C'est le médecin MPR qui prescrit le type d'orthèse adapté.",
          },
          {
            question: 'L\'orthèse AFO est-elle remboursée après un AVC ?',
            answer: "Oui. Les orthèses de cheville et de membre inférieur sont inscrites à la nomenclature LPPR. La prise en charge est soumise à prescription médicale et accord préalable de la CPAM pour certains modèles. Votre mutuelle complète selon votre contrat.",
          },
        ],
      },
      {
        type: 'cta_block',
        title: 'Trouver un orthoprothésiste spécialisé neuro',
        subtitle: "L'appareillage post-AVC requiert un praticien expérimenté en neurologie. Vous êtes libre de choisir votre orthoprothésiste.",
        buttonText: 'Trouver un praticien',
        buttonHref: '/trouver-un-praticien',
      },
    ],
  },
  {
    slug: 'sep',
    name: 'Sclérose en plaques (SEP)',
    metaTitle: 'Appareillage sclérose en plaques (SEP) - fauteuils électriques et aides techniques',
    metaDescription: 'Guide de l\'appareillage pour les patients atteints de sclérose en plaques. Fauteuil roulant électrique, positionnement, aides techniques et droits MDPH.',
    heroLabel: 'PATHOLOGIE',
    heroTitle: 'Appareillage et sclérose en plaques',
    heroSubtitle: "Fauteuils électriques, systèmes de positionnement et aides techniques pour accompagner l'évolution de la sclérose en plaques.",
    publishedAt: '2026-05-01',
    updatedAt: '2026-06-01',
    devices: [
      { label: 'Fauteuil électrique', href: '/fauteuils-roulants/electrique', pilier: 'Fauteuils', description: 'Intérieur, extérieur, mixte' },
      { label: 'Coussin anti-escarre', href: '/positionnement/assis/coussin-anti-escarre', pilier: 'Positionnement', description: 'Prévention escarres' },
      { label: 'Aides techniques', href: '/aides-techniques', pilier: 'Aides techniques', description: 'Communication, préhension' },
    ],
    blocks: [
      {
        type: 'paragraph',
        content: "La sclérose en plaques évolue par poussées ou de façon progressive, avec des besoins d'appareillage qui changent au fil du temps. L'anticipation est ici aussi importante que la réaction - se préparer aux prochaines étapes évite les ruptures de mobilité.",
      },
      {
        type: 'h2',
        id: 'fauteuil-electrique-sep',
        content: 'Le fauteuil électrique - quand et comment y passer ?',
      },
      {
        type: 'paragraph',
        content: "La décision de passer au fauteuil électrique est souvent difficile à prendre. Pourtant, plus cette transition est anticipée, mieux elle se passe - apprentissage du pilotage, adaptation du domicile, démarches administratives. Le médecin MPR et l'ergothérapeute sont les interlocuteurs clés pour évaluer le bon moment et le bon modèle.",
      },
      {
        type: 'cta_block',
        title: 'Accompagnement dans vos démarches',
        subtitle: 'Fauteuil électrique, MDPH, remboursement LPPR - nos guides pratiques répondent à vos questions.',
        buttonText: 'Guide remboursement LPPR',
        buttonHref: '/guides/remboursement-lppr',
      },
    ],
  },
  {
    slug: 'paralysie-cerebrale',
    name: 'Paralysie cérébrale',
    metaTitle: 'Appareillage paralysie cérébrale IMC - orthèses et fauteuils enfant',
    metaDescription: 'Guide de l\'appareillage pour enfants et adultes IMC. Orthèses pédiatriques, fauteuil roulant enfant, positionnement et parcours.',
    heroLabel: 'PATHOLOGIE',
    heroTitle: 'Appareillage et paralysie cérébrale',
    heroSubtitle: 'Orthèses pédiatriques, fauteuils adaptés et systèmes de positionnement pour accompagner les enfants et adultes avec paralysie cérébrale.',
    publishedAt: '2026-05-01',
    updatedAt: '2026-06-01',
    devices: [
      { label: 'Orthèses pédiatriques', href: '/ortheses/membre-inferieur', pilier: 'Orthèses', description: 'AFO, orthèses genou enfant' },
      { label: 'Fauteuil enfant', href: '/fauteuils-roulants/manuel', pilier: 'Fauteuils', description: 'Manuel et électrique pédiatrique' },
      { label: 'Positionnement pédiatrique', href: '/positionnement/pediatrique', pilier: 'Positionnement', description: 'Coques, systèmes assis/couché' },
    ],
    blocks: [
      {
        type: 'paragraph',
        content: "La paralysie cérébrale (anciennement IMC) regroupe des situations très variées - de la marche autonome avec orthèses légères jusqu'au fauteuil électrique avec système de positionnement complexe. L'appareillage est réévalué régulièrement, en particulier chez l'enfant dont la croissance modifie les besoins tous les 6 à 12 mois.",
      },
      {
        type: 'info_box',
        title: 'Renouvellement rapide chez l\'enfant',
        content: "Pour les orthèses pédiatriques, la nomenclature LPPR prévoit un renouvellement tous les 6 mois pendant la période de croissance. Ne pas attendre que l'orthèse soit trop petite - un dispositif mal ajusté peut aggraver les déformations plutôt que les corriger.",
      },
      {
        type: 'cta_block',
        title: "Trouver un centre d'appareillage pédiatrique",
        subtitle: "L'appareillage pédiatrique requiert une expertise spécifique. Certains centres sont spécialisés enfant.",
        buttonText: 'Trouver un praticien',
        buttonHref: '/trouver-un-praticien',
      },
    ],
  },
  {
    slug: 'arthrose',
    name: 'Arthrose',
    metaTitle: 'Orthèse arthrose genou et hanche - remboursement et choix',
    metaDescription: 'Orthèses pour l\'arthrose du genou et de la hanche. Orthèse de décharge, semelles, remboursement LPPR et conseils de port.',
    heroLabel: 'PATHOLOGIE',
    heroTitle: 'Appareillage et arthrose',
    heroSubtitle: 'Les orthèses pour soulager la douleur arthrosique et préserver la mobilité - genou, hanche, main et rachis.',
    publishedAt: '2026-05-01',
    updatedAt: '2026-06-01',
    devices: [
      { label: 'Orthèse genou décharge', href: '/ortheses/membre-inferieur/orthese-genou-decharge', pilier: 'Orthèses', description: 'Gonarthrose compartiment interne' },
      { label: 'Semelles orthopédiques', href: '/ortheses/membre-inferieur/semelles-orthopediques', pilier: 'Orthèses', description: 'Correction biomécanique' },
      { label: 'Orthèse de poignet', href: '/ortheses/membre-superieur/orthese-poignet', pilier: 'Orthèses', description: 'Arthrose rhizarthrose' },
      { label: 'Aides techniques', href: '/aides-techniques', pilier: 'Aides techniques', description: 'Cannes, préhension facilitée' },
    ],
    blocks: [
      {
        type: 'paragraph',
        content: "L'arthrose est la pathologie rhumatologique la plus fréquente en France. Si la chirurgie (prothèse totale de genou ou de hanche) est parfois inévitable, l'appareillage orthopédique joue un rôle important dans la gestion conservatrice - retarder l'intervention, soulager la douleur, maintenir la mobilité.",
      },
      {
        type: 'h2',
        id: 'orthese-genou-arthrose',
        content: "L'orthèse de décharge pour la gonarthrose",
      },
      {
        type: 'paragraph',
        content: "Dans la gonarthrose fémoro-tibiale interne (la plus fréquente), l'orthèse de décharge transfère les contraintes du compartiment arthrosique vers le compartiment sain. L'effet antalgique peut être très significatif - plusieurs études montrent une réduction notable de la douleur et une amélioration du périmètre de marche.",
      },
      {
        type: 'faq',
        items: [
          {
            question: "L'orthèse de genou pour arthrose est-elle remboursée ?",
            answer: "Les orthèses de genou sont inscrites à la nomenclature LPPR avec différents codes selon le type. La prescription doit émaner d'un rhumatologue, orthopédiste ou médecin MPR. Une entente préalable peut être requise selon le modèle. La base de remboursement SS est complétée par votre mutuelle selon votre contrat.",
          },
          {
            question: "Combien de temps porter l'orthèse par jour ?",
            answer: "Le port est recommandé lors des activités qui provoquent la douleur - marche, station debout prolongée. Certains patients la portent toute la journée, d'autres uniquement lors des activités physiques. L'orthoprothésiste et le médecin guident le protocole de port selon votre situation.",
          },
        ],
      },
      {
        type: 'cta_block',
        title: 'Guide remboursement orthèses',
        subtitle: 'Retrouvez le détail des prises en charge LPPR pour les orthèses de genou et de membre inférieur.',
        buttonText: 'Voir le guide remboursement',
        buttonHref: '/guides/remboursement-lppr',
      },
    ],
  },
  {
    slug: 'lesion-medullaire',
    name: 'Lésion médullaire',
    metaTitle: 'Appareillage lésion médullaire - fauteuil électrique et positionnement',
    metaDescription: 'Guide complet de l\'appareillage pour paraplégiques et tétraplégiques. Fauteuil électrique, positionnement, prévention escarres.',
    heroLabel: 'PATHOLOGIE',
    heroTitle: 'Appareillage et lésion médullaire',
    heroSubtitle: 'Fauteuils électriques haute performance, systèmes de positionnement et prévention des complications pour les patients paraplégiques et tétraplégiques.',
    publishedAt: '2026-05-01',
    updatedAt: '2026-06-01',
    devices: [
      { label: 'Fauteuil électrique extérieur', href: '/fauteuils-roulants/electrique/fauteuil-electrique-exterieur', pilier: 'Fauteuils', description: 'Mixte intérieur/extérieur' },
      { label: 'Fauteuil actif manuel', href: '/fauteuils-roulants/manuel/fauteuil-actif', pilier: 'Fauteuils', description: 'Paraplégiques actifs' },
      { label: 'Coussin anti-escarre', href: '/positionnement/assis/coussin-anti-escarre', pilier: 'Positionnement', description: 'Prévention escarres ischiatiques' },
      { label: 'Aides techniques', href: '/aides-techniques', pilier: 'Aides techniques', description: 'Transferts, autonomie domicile' },
    ],
    blocks: [
      {
        type: 'paragraph',
        content: "Une lésion médullaire - traumatique ou non - entraîne des besoins d'appareillage complexes et évolutifs. Le niveau lésionnel (cervical, thoracique, lombaire) et le caractère complet ou incomplet de la lésion déterminent les capacités fonctionnelles résiduelles et donc les dispositifs appropriés.",
      },
      {
        type: 'h2',
        id: 'coussin-escarre',
        content: 'La prévention des escarres - priorité absolue',
      },
      {
        type: 'paragraph',
        content: "L'escarre est la complication la plus redoutée chez les patients en fauteuil à plein temps. Le coussin anti-escarre est un dispositif médical remboursé par la LPPR - son choix ne doit pas être laissé au hasard. Les recommandations EPUAP/NPUAP distinguent plusieurs niveaux de risque et de protection selon la technologie (mousse, gel, air, hybride).",
      },
      {
        type: 'stat_callout',
        percentage: '53%',
        description: "des patients ont raté au moins un renouvellement de dispositif médical faute d'information sur leurs droits",
        source: 'Enquête menée auprès de patients appareillés - 2026',
      },
      {
        type: 'cta_block',
        title: 'Droits et remboursements LPPR',
        subtitle: 'Fauteuil électrique, coussin anti-escarre, aides techniques - découvrez les bases de remboursement SS et les démarches.',
        buttonText: 'Guide remboursement LPPR',
        buttonHref: '/guides/remboursement-lppr',
      },
    ],
  },
]

export function getPathologie(slug: string): Pathologie | undefined {
  return pathologies.find(p => p.slug === slug)
}
