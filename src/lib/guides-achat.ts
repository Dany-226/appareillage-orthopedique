// ─────────────────────────────────────────────
// SOUS-SILO "GUIDE D'ACHAT" — /ortheses/guide-achat/[slug]
// ─────────────────────────────────────────────
// Système de contenu distinct de piliers.ts / articles.ts / pathologies.ts.
// Contrairement aux 3 autres systèmes (contenu clinique, sourcing LPPR),
// ce silo couvre des guides d'achat grand public avec affiliation Amazon —
// d'où un bloc dédié (`product_table`) qui n'a pas d'équivalent ailleurs.

export type GuideAchatBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'h2'; id: string; text: string }
  | { type: 'h3'; text: string }
  | {
      type: 'product_table'
      headers: string[]
      rows: { cells: string[]; asin: string }[]
      caption?: string
    }
  | { type: 'faq'; items: { question: string; answer: string }[] }

export type GuideAchatArticle = {
  slug: string
  title: string
  metaTitle: string
  metaDescription: string
  readingTime: string
  publishedAt: string
  updatedAt: string
  author: { name: string; title: string }
  blocks: GuideAchatBlock[]
}

export const guidesAchat: GuideAchatArticle[] = [
  {
    slug: 'attelle-poignet',
    title: "Attelle de poignet : quelle orthèse choisir selon la douleur",
    metaTitle: "Attelle de poignet : quelle orthèse choisir ?",
    metaDescription:
      "Entorse, tendinite, canal carpien : comment reconnaître ce qui vous fait mal au poignet et choisir la bonne attelle, souple ou rigide, jour ou nuit.",
    readingTime: '6 min',
    publishedAt: '2026-09-14',
    updatedAt: '2026-09-14',
    author: {
      name: 'Jean-Marc Tissier',
      title: 'Expert appareillage',
    },
    blocks: [
      {
        type: 'paragraph',
        text: "Une attelle de poignet à 8€ et une attelle à 40€ ne soignent pas la même chose. La différence ne tient pas à la marque ni au nombre d'étoiles sur Amazon, elle tient à ce qui fait mal, et à quel moment de la journée. Une entorse récente, une tendinite qui traîne depuis des semaines et un canal carpien qui réveille la nuit demandent trois réponses différentes, et la plupart des comparatifs en ligne les traitent comme un seul problème avec un seul classement. Ce n'en est pas un.",
      },
      {
        type: 'h2',
        id: 'identifier-douleur',
        text: 'Identifier ce qui fait mal avant de choisir',
      },
      {
        type: 'paragraph',
        text: "Trois situations reviennent le plus souvent chez les personnes qui cherchent une attelle de poignet sans ordonnance.",
      },
      {
        type: 'paragraph',
        text: "**L'entorse**, souvent après une chute ou un faux mouvement : douleur vive, apparue d'un coup, parfois un gonflement. Le besoin immédiat est l'immobilisation, le temps que le ligament cicatrise. Une attelle assez ferme, portée en continu les premiers jours, puis progressivement allégée.",
      },
      {
        type: 'paragraph',
        text: "**La tendinite**, plus insidieuse : douleur qui s'installe avec la répétition d'un geste, clavier, sport de raquette, bricolage, port d'un enfant. Le besoin est un maintien qui limite l'amplitude sans bloquer complètement l'articulation, porté surtout pendant l'activité qui déclenche la douleur.",
      },
      {
        type: 'paragraph',
        text: "**Le syndrome du canal carpien** : fourmillements dans le pouce, l'index et le majeur, souvent pires la nuit parce que le poignet se plie naturellement en dormant. Le besoin n'est pas le même que pour la tendinite : c'est une attelle qui maintient le poignet en position neutre, surtout pendant le sommeil, pas forcément pendant la journée.",
      },
      {
        type: 'paragraph',
        text: "Si la douleur est violente, si elle s'accompagne d'une déformation visible, d'une incapacité à bouger les doigts, ou si les fourmillements du canal carpien deviennent une perte de sensibilité durable, une attelle en vente libre n'est plus la bonne réponse : direction un médecin, pas Amazon. On y revient plus bas.",
      },
      {
        type: 'h2',
        id: 'souple-ou-rigide',
        text: 'Attelle souple ou attelle rigide : ce que ça change vraiment',
      },
      {
        type: 'paragraph',
        text: "La plupart des fiches produit vendent la rigidité comme un argument de qualité. C'est un contresens. Une attelle souple, en tissu élastique avec ou sans renfort, limite l'amplitude sans l'empêcher : elle convient à une tendinite légère ou à un usage préventif pendant une activité physique, parce qu'elle laisse assez de mobilité pour continuer à se servir de sa main. Une attelle rigide, avec une ou plusieurs barres métalliques amovibles, bloque le poignet en position neutre : c'est ce qu'il faut pour une entorse récente ou pour dormir sans plier le poignet en cas de canal carpien. Porter une attelle rigide toute la journée pour une simple tendinite ne guérit pas plus vite, ça ankylose l'articulation et retarde la reprise normale du geste.",
      },
      {
        type: 'h2',
        id: 'jour-nuit',
        text: 'Le jour et la nuit ne se soignent pas avec la même attelle',
      },
      {
        type: 'paragraph',
        text: "C'est le point que la plupart des comparatifs sautent complètement, alors que c'est souvent le premier critère de choix. Une attelle portée au bureau ou pendant le sport doit rester fine, respirante, ne pas gêner la prise d'objets : le pouce reste généralement libre. Une attelle de nuit pour canal carpien n'a pas ces contraintes, elle peut être plus volumineuse et plus rigide puisqu'elle ne sert qu'au repos, l'essentiel est qu'elle empêche le poignet de se replier pendant le sommeil sans réveiller par l'inconfort.",
      },
      {
        type: 'h2',
        id: 'comparatif',
        text: 'Comparatif : quatre attelles et leurs usages réels',
      },
      {
        type: 'product_table',
        headers: ['Attelle', 'Usage principal', 'Rigidité', 'Jour / nuit', 'Point fort'],
        caption:
          "Prix, notes et disponibilité à vérifier sur la fiche Amazon au moment de la publication : ces valeurs bougent d'une semaine à l'autre.",
        rows: [
          {
            asin: 'B0B5T7GN39',
            cells: [
              'ACWOO Palm Support',
              'Arthrite, tendinite légère, canal carpien débutant',
              'Souple',
              'Jour',
              'Fine et respirante, se porte sous un vêtement, bonne entrée de gamme',
            ],
          },
          {
            asin: 'B006L88X04',
            cells: [
              'Bracoo WP30',
              'Canal carpien, douleurs articulaires',
              'Semi-rigide (éclisse profilée)',
              'Jour',
              'Design ouvert qui laisse la paume respirer, soutien ferme sans blocage complet',
            ],
          },
          {
            asin: 'B0GHNFT9K6',
            cells: [
              'Fitomo à soutien rigide, ouverture pouce',
              'Canal carpien, tendinite marquée',
              'Rigide (armature métallique)',
              'Jour',
              'Le pouce reste mobile malgré la rigidité, utile pour continuer à travailler',
            ],
          },
          {
            asin: 'B07GRPS8VC',
            cells: [
              'ATX attelle de nuit',
              'Canal carpien, réveils nocturnes',
              'Rigide (armature amovible + mousse)',
              'Nuit',
              'Pensée pour le sommeil : plus volumineuse, mais aucune gêne de préhension à gérer',
            ],
          },
        ],
      },
      {
        type: 'paragraph',
        text: "**Attelle de pouce ou de doigt : pas ici.** Si la douleur se concentre à la base du pouce (rhizarthrose, De Quervain) ou sur un doigt qui accroche en pliant (doigt à ressaut), ce n'est pas une attelle de poignet qu'il faut, mais une orthèse dédiée au pouce ou au doigt : l'anatomie et le geste à bloquer ne sont pas les mêmes. [Voir notre guide sur l'orthèse de pouce.](/ortheses/guide-achat/orthese-pouce)",
      },
      {
        type: 'h2',
        id: 'quand-consulter',
        text: 'Quand une attelle en vente libre ne suffit plus',
      },
      {
        type: 'paragraph',
        text: "Une attelle achetée en ligne est pensée pour un inconfort passager ou une prévention, pas pour un diagnostic. Trois signaux doivent faire consulter plutôt que commander une deuxième attelle plus chère en espérant que ça suffise : une douleur qui ne diminue pas après deux à trois semaines de port régulier, des fourmillements du canal carpien qui deviennent une perte de force ou de sensibilité dans la main, ou une entorse dont le gonflement ne régresse pas. Dans ces cas, la suite logique n'est pas une attelle plus chère sur Amazon, c'est une consultation qui peut déboucher sur une orthèse thermoformée sur mesure, prise en charge par la LPPR. Notre [guide sur le remboursement des orthèses](/guides/remboursement-lppr) détaille les conditions de prescription et de prise en charge.",
      },
      {
        type: 'h2',
        id: 'faq',
        text: 'Foire aux questions',
      },
      {
        type: 'faq',
        items: [
          {
            question: 'Combien de temps porter une attelle de poignet par jour ?',
            answer:
              "Ça dépend de la cause. Pour une entorse récente, le port peut être continu les premiers jours puis s'alléger. Pour une tendinite, l'attelle se porte surtout pendant le geste qui déclenche la douleur, pas en continu : garder le poignet immobile en permanence retarde la récupération musculaire. Pour un canal carpien, c'est souvent la nuit qui compte le plus.",
          },
          {
            question: 'Peut-on dormir avec une attelle de poignet ?',
            answer:
              "Oui, et c'est même l'usage le plus utile en cas de canal carpien, parce que les symptômes s'aggravent la nuit quand le poignet se plie sans qu'on le sente. Une attelle de nuit dédiée, plus volumineuse qu'une attelle de jour, est plus confortable pour cet usage précis.",
          },
          {
            question: 'Attelle rigide ou souple : laquelle choisir pour la douleur ?',
            answer:
              "Une attelle rigide pour une immobilisation nécessaire (entorse récente, canal carpien la nuit), une attelle souple pour un maintien léger pendant l'activité (tendinite, prévention sportive). Une attelle trop rigide portée sans nécessité ankylose l'articulation au lieu de la soulager.",
          },
          {
            question: 'Quelle différence entre une attelle de poignet et une orthèse de poignet ?',
            answer:
              "Dans l'usage courant, les deux termes désignent la même chose pour ce type de produit en vente libre. Le mot orthèse est le terme médical générique, qui couvre aussi les dispositifs sur mesure et remboursés. Une attelle achetée en ligne est une orthèse de série, pas une orthèse sur mesure.",
          },
          {
            question: 'Une attelle de poignet suffit-elle pour un canal carpien, sans chirurgie ?',
            answer:
              "Dans les formes légères à modérées, une attelle de nuit associée à une adaptation du geste au quotidien soulage souvent suffisamment les symptômes. Dans les formes avancées, avec perte de sensibilité ou de force, l'attelle seule ne suffit généralement plus et un avis médical s'impose pour évaluer une prise en charge plus poussée.",
          },
        ],
      },
      {
        type: 'h2',
        id: 'retenir',
        text: "Ce qu'il faut retenir avant d'acheter",
      },
      {
        type: 'paragraph',
        text: "Identifiez d'abord ce qui fait mal, entorse, tendinite ou canal carpien, avant de regarder les avis Amazon : c'est ce diagnostic maison qui détermine s'il faut une attelle souple ou rigide, et si le port doit être surtout diurne ou nocturne. Une attelle en vente libre traite l'inconfort, elle ne remplace pas un avis médical si la douleur persiste au-delà de quelques semaines.",
      },
    ],
  },
  {
    slug: 'orthese-pouce',
    title: "Orthèse de pouce : quelle attelle choisir selon la douleur",
    metaTitle: "Orthèse de pouce : quelle attelle choisir ?",
    metaDescription:
      "Rhizarthrose, De Quervain, entorse du pouce : reconnaître la cause de la douleur à la base du pouce et choisir la bonne attelle.",
    readingTime: '6 min',
    publishedAt: '2026-09-15',
    updatedAt: '2026-09-15',
    author: {
      name: 'Jean-Marc Tissier',
      title: 'Expert appareillage',
    },
    blocks: [
      {
        type: 'paragraph',
        text: "La base du pouce n'est pas un poignet miniature. C'est l'articulation la plus sollicitée de la main, elle intervient dans presque toute prise entre le pouce et les autres doigts, et trois causes de douleur très différentes s'y logent : l'usure de l'articulation, l'inflammation d'un tendon, et l'entorse. Une attelle de poignet ne les couvre pas, même quand la fiche produit promet un maintien \"poignet et pouce\" : le geste à bloquer n'est pas le même.",
      },
      {
        type: 'h2',
        id: 'trois-causes',
        text: 'Trois douleurs qui se ressemblent, trois causes différentes',
      },
      {
        type: 'paragraph',
        text: "**La rhizarthrose**, l'arthrose de la base du pouce, touche surtout après la cinquantaine, plus souvent les femmes. La douleur s'installe progressivement en pinçant ou en tournant une clé, un couvercle, un robinet. Elle s'accompagne parfois d'une déformation visible de l'articulation avec le temps. Le besoin est une immobilisation partielle de l'articulation trapézo-métacarpienne, portée sur la durée, pas seulement pendant une crise.",
      },
      {
        type: 'paragraph',
        text: "**La ténosynovite de De Quervain**, inflammation des tendons qui longent le bord du poignet jusqu'au pouce, se déclenche typiquement par un geste répété : porter un bébé, un usage intensif du téléphone ou du clavier, certains gestes de sport comme le golf. La douleur suit précisément ce trajet tendineux, entre le poignet et la base du pouce, et s'aggrave en écartant le pouce. Le besoin ici est de bloquer spécifiquement ce mouvement d'écartement, pas toute l'articulation.",
      },
      {
        type: 'paragraph',
        text: "**L'entorse du pouce**, souvent en ski (le pouce reste coincé dans la dragonne du bâton lors d'une chute, d'où son surnom de \"pouce du skieur\") ou lors d'un sport de ballon, touche le ligament collatéral ulnaire. C'est une lésion aiguë, traumatique, qui demande une immobilisation ferme le temps de la cicatrisation, contrairement aux deux causes précédentes qui sont chroniques ou inflammatoires.",
      },
      {
        type: 'paragraph',
        text: "Un doigt qui accroche en pliant, avec un blocage puis un déclic pour le redresser, n'est pas une douleur du pouce mais un doigt à ressaut : une pathologie de tendon différente, qui touche n'importe quel doigt, traitée avec une attelle de doigt et non de pouce. [Voir l'article dédié aux attelles de poignet pour la distinction avec le canal carpien, dont les symptômes se confondent parfois avec la rhizarthrose.](/ortheses/guide-achat/attelle-poignet)",
      },
      {
        type: 'h2',
        id: 'spica-ou-immobilisation',
        text: 'Spica réversible ou immobilisation dédiée : ce que ça change',
      },
      {
        type: 'paragraph',
        text: "La plupart des attelles vendues en ligne sont des \"spica\" du pouce : elles enveloppent le poignet et remontent sur le pouce, réversibles main droite ou gauche. C'est le bon choix pour une rhizarthrose légère à modérée ou une prévention pendant un geste répétitif, parce qu'elles laissent une mobilité résiduelle suffisante pour continuer à se servir de la main au quotidien. Pour une entorse récente ou une rhizarthrose avancée, une attelle avec armature plus rigide, qui bloque franchement l'articulation trapézo-métacarpienne, devient nécessaire : le compromis mobilité contre immobilisation penche alors du côté de l'immobilisation.",
      },
      {
        type: 'h2',
        id: 'comparatif',
        text: 'Comparatif : quatre attelles et leurs usages réels',
      },
      {
        type: 'product_table',
        headers: ['Attelle', 'Cause ciblée', 'Rigidité', 'Point fort'],
        caption: "Prix, notes et disponibilité à vérifier sur la fiche Amazon au moment de la publication.",
        rows: [
          {
            asin: 'B0FSKLZZMV',
            cells: [
              'FREETOO attelle pouce CMC',
              'Rhizarthrose, arthrose de la base du pouce',
              'Rigide, immobilisation dédiée',
              "Conçue spécifiquement pour l'articulation trapézo-métacarpienne, pas un spica généraliste",
            ],
          },
          {
            asin: 'B074326GZB',
            cells: [
              'Bracoo TP33',
              'Arthrite, De Quervain, entorse légère',
              'Semi-rigide, réversible droite/gauche',
              "Généraliste, bon premier achat quand la cause exacte n'est pas encore identifiée",
            ],
          },
          {
            asin: 'B09L4WDB92',
            cells: [
              'Scurnhau De Quervain',
              'Ténosynovite de De Quervain',
              'Semi-rigide, couvre poignet et pouce',
              'Cible précisément le trajet tendineux entre poignet et pouce',
            ],
          },
          {
            asin: 'B074G1JZ29',
            cells: [
              'Push Sports pouce',
              'Entorse du pouce, ligament (pouce du skieur)',
              'Rigide, stabilisateur MCP-1',
              'Marque orthopédique reconnue en pharmacie, pensée pour la reprise du sport',
            ],
          },
        ],
      },
      {
        type: 'paragraph',
        text: "**Attelle de doigt : pas ici.** Un doigt qui bloque en pliant relève d'une attelle de doigt à ressaut, pas d'une orthèse de pouce : anatomie et mécanisme différents. *(Lien vers un futur contenu dédié si le volume le justifie.)*",
      },
      {
        type: 'h2',
        id: 'quand-consulter',
        text: 'Quand une attelle en vente libre ne suffit plus',
      },
      {
        type: 'paragraph',
        text: "Pour une rhizarthrose qui déforme progressivement l'articulation ou limite fortement la prise en pince, l'attelle en vente libre soulage mais ne remplace pas un avis médical : une orthèse thermoformée sur mesure, prise en charge par la LPPR, peut s'avérer plus adaptée et plus durable qu'une succession d'attelles génériques. Pour une entorse du pouce, l'absence d'amélioration après une à deux semaines, ou une instabilité persistante de l'articulation, doit faire consulter plutôt que prolonger le port d'une attelle en vente libre : un ligament rompu ne cicatrise pas avec une simple immobilisation prolongée. Notre [guide sur le remboursement des orthèses](/guides/remboursement-lppr) détaille les conditions de prescription et de prise en charge.",
      },
      {
        type: 'h2',
        id: 'faq',
        text: 'Foire aux questions',
      },
      {
        type: 'faq',
        items: [
          {
            question: 'Comment savoir si c\'est une rhizarthrose ou une tendinite de De Quervain ?',
            answer:
              "La rhizarthrose touche l'articulation elle-même, la douleur se déclenche en pinçant ou en tournant un objet, et progresse sur des mois ou des années. La tendinite de De Quervain suit le trajet d'un tendon le long du poignet jusqu'au pouce, elle s'aggrave surtout en écartant le pouce, et apparaît souvent plus rapidement après un geste répété identifiable. En cas de doute, une consultation permet de trancher, les deux ne se traitent pas de la même façon.",
          },
          {
            question: 'Peut-on continuer à travailler ou à faire du sport avec une attelle de pouce ?',
            answer:
              "Pour une rhizarthrose légère ou une tendinite, oui, une attelle spica réversible laisse assez de mobilité pour la plupart des gestes du quotidien. Pour une entorse récente, mieux vaut suivre les recommandations de reprise progressive, l'attelle rigide sert justement à protéger l'articulation pendant cette phase.",
          },
          {
            question: 'Combien de temps porter une attelle de pouce ?',
            answer:
              "Pour une rhizarthrose, le port est souvent recommandé pendant les activités qui déclenchent la douleur, pas nécessairement en continu. Pour une entorse ou une poussée inflammatoire de De Quervain, un port plus soutenu sur quelques semaines est généralement conseillé, à ajuster selon l'évolution.",
          },
          {
            question: 'Une attelle suffit-elle pour une rhizarthrose avancée ?',
            answer:
              "Dans les formes légères à modérées, oui, associée à des adaptations du geste au quotidien. Dans les formes avancées, avec déformation marquée ou perte de force en pince, l'attelle seule ne suffit généralement plus et une orthèse sur mesure ou un avis chirurgical peuvent être discutés.",
          },
          {
            question: "Quelle différence entre une attelle de pouce et une attelle de poignet avec ouverture pour le pouce ?",
            answer:
              "Une attelle de poignet avec ouverture laisse le pouce libre et bloque le poignet, elle cible le canal carpien ou une tendinite du poignet. Une attelle de pouce bloque spécifiquement l'articulation à la base du pouce et laisse le poignet plus libre. Les deux se confondent souvent dans les fiches produit marketing, pas dans l'anatomie.",
          },
        ],
      },
      {
        type: 'h2',
        id: 'retenir',
        text: "Ce qu'il faut retenir avant d'acheter",
      },
      {
        type: 'paragraph',
        text: "Repérez d'abord si la douleur vient de l'articulation elle-même (rhizarthrose), d'un tendon (De Quervain) ou d'un traumatisme (entorse) : c'est ce diagnostic maison qui oriente vers un spica généraliste ou une immobilisation plus ciblée. Une attelle de pouce en vente libre soulage l'inconfort et accompagne les gestes du quotidien, elle ne remplace pas un avis médical face à une déformation qui progresse ou une instabilité qui persiste.",
      },
    ],
  },
]

export function getGuideAchat(slug: string): GuideAchatArticle | undefined {
  return guidesAchat.find(g => g.slug === slug)
}

export function getAllGuideAchatSlugs(): string[] {
  return guidesAchat.map(g => g.slug)
}
