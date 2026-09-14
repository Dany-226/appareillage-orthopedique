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
    title: "Attelle de poignet : quelle orthèse choisir selon la douleur",
    metaTitle: "Attelle de poignet : quelle orthèse choisir ?",
    metaDescription:
      "Entorse, tendinite, canal carpien : comment reconnaître ce qui vous fait mal au poignet et choisir la bonne attelle, souple ou rigide, jour ou nuit.",
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
        text: "**L'entorse**, souvent après une chute ou un faux mouvement : douleur vive, apparue d'un coup, parfois un gonflement. Le besoin immédiat est l'immobilisation, le temps que le ligament cicatrise. Une attelle assez ferme, portée en continu les premiers jours, puis progressivement allégée.",
      },
      {
        type: 'paragraph',
        text: "**La tendinite**, plus insidieuse : douleur qui s'installe avec la répétition d'un geste, clavier, sport de raquette, bricolage, port d'un enfant. Le besoin est un maintien qui limite l'amplitude sans bloquer complètement l'articulation, porté surtout pendant l'activité qui déclenche la douleur.",
      },
      {
        type: 'paragraph',
        text: "**Le syndrome du canal carpien** : fourmillements dans le pouce, l'index et le majeur, souvent pires la nuit parce que le poignet se plie naturellement en dormant. Le besoin n'est pas le même que pour la tendinite : c'est une attelle qui maintient le poignet en position neutre, surtout pendant le sommeil, pas forcément pendant la journée.",
      },
      {
        type: 'paragraph',
        text: "Si la douleur est violente, si elle s'accompagne d'une déformation visible, d'une incapacité à bouger les doigts, ou si les fourmillements du canal carpien deviennent une perte de sensibilité durable, une attelle en vente libre n'est plus la bonne réponse : direction un médecin, pas Amazon. On y revient plus bas.",
      },
      {
        type: 'h2',
        id: 'souple-ou-rigide',
        text: 'Attelle souple ou attelle rigide : ce que ça change vraiment',
      },
      {
        type: 'paragraph',
        text: "La plupart des fiches produit vendent la rigidité comme un argument de qualité. C'est un contresens. Une attelle souple, en tissu élastique avec ou sans renfort, limite l'amplitude sans l'empêcher : elle convient à une tendinite légère ou à un usage préventif pendant une activité physique, parce qu'elle laisse assez de mobilité pour continuer à se servir de sa main. Une attelle rigide, avec une ou plusieurs barres métalliques amovibles, bloque le poignet en position neutre : c'est ce qu'il faut pour une entorse récente ou pour dormir sans plier le poignet en cas de canal carpien. Porter une attelle rigide toute la journée pour une simple tendinite ne guérit pas plus vite, ça ankylose l'articulation et retarde la reprise normale du geste.",
      },
      {
        type: 'h2',
        id: 'jour-nuit',
        text: 'Le jour et la nuit ne se soignent pas avec la même attelle',
      },
      {
        type: 'paragraph',
        text: "C'est le point que la plupart des comparatifs sautent complètement, alors que c'est souvent le premier critère de choix. Une attelle portée au bureau ou pendant le sport doit rester fine, respirante, ne pas gêner la prise d'objets : le pouce reste généralement libre. Une attelle de nuit pour canal carpien n'a pas ces contraintes, elle peut être plus volumineuse et plus rigide puisqu'elle ne sert qu'au repos, l'essentiel est qu'elle empêche le poignet de se replier pendant le sommeil sans réveiller par l'inconfort.",
      },
      {
        type: 'h2',
        id: 'comparatif',
        text: 'Comparatif : quatre attelles et leurs usages réels',
      },
      {
        type: 'product_table',
        headers: ['Attelle', 'Usage principal', 'Rigidité', 'Jour / nuit', 'Point fort'],
        caption:
          "Prix, notes et disponibilité à vérifier sur la fiche Amazon au moment de la publication : ces valeurs bougent d'une semaine à l'autre.",
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
              'Pensée pour le sommeil : plus volumineuse, mais aucune gêne de préhension à gérer',
            ],
          },
        ],
      },
      {
        type: 'paragraph',
        text: "**Attelle de pouce ou de doigt : pas ici.** Si la douleur se concentre à la base du pouce (rhizarthrose, De Quervain) ou sur un doigt qui accroche en pliant (doigt à ressaut), ce n'est pas une attelle de poignet qu'il faut, mais une orthèse dédiée au pouce ou au doigt : l'anatomie et le geste à bloquer ne sont pas les mêmes. *(Lien vers l'article orthèse de pouce, à publier.)*",
      },
      {
        type: 'h2',
        id: 'quand-consulter',
        text: 'Quand une attelle en vente libre ne suffit plus',
      },
      {
        type: 'paragraph',
        text: "Une attelle achetée en ligne est pensée pour un inconfort passager ou une prévention, pas pour un diagnostic. Trois signaux doivent faire consulter plutôt que commander une deuxième attelle plus chère en espérant que ça suffise : une douleur qui ne diminue pas après deux à trois semaines de port régulier, des fourmillements du canal carpien qui deviennent une perte de force ou de sensibilité dans la main, ou une entorse dont le gonflement ne régresse pas. Dans ces cas, la suite logique n'est pas une attelle plus chère sur Amazon, c'est une consultation qui peut déboucher sur une orthèse thermoformée sur mesure, prise en charge par la LPPR. Notre [guide sur le remboursement des orthèses](/guides/remboursement-lppr) détaille les conditions de prescription et de prise en charge.",
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
              "Ça dépend de la cause. Pour une entorse récente, le port peut être continu les premiers jours puis s'alléger. Pour une tendinite, l'attelle se porte surtout pendant le geste qui déclenche la douleur, pas en continu : garder le poignet immobile en permanence retarde la récupération musculaire. Pour un canal carpien, c'est souvent la nuit qui compte le plus.",
          },
          {
            question: 'Peut-on dormir avec une attelle de poignet ?',
            answer:
              "Oui, et c'est même l'usage le plus utile en cas de canal carpien, parce que les symptômes s'aggravent la nuit quand le poignet se plie sans qu'on le sente. Une attelle de nuit dédiée, plus volumineuse qu'une attelle de jour, est plus confortable pour cet usage précis.",
          },
          {
            question: 'Attelle rigide ou souple : laquelle choisir pour la douleur ?',
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
        text: "Identifiez d'abord ce qui fait mal, entorse, tendinite ou canal carpien, avant de regarder les avis Amazon : c'est ce diagnostic maison qui détermine s'il faut une attelle souple ou rigide, et si le port doit être surtout diurne ou nocturne. Une attelle en vente libre traite l'inconfort, elle ne remplace pas un avis médical si la douleur persiste au-delà de quelques semaines.",
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
