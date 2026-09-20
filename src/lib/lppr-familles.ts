import type { LPPRProtheseItem } from "@/lib/lppr-protheses";

export type FamilleSection = {
  id: string;
  title: string;
  filter: (item: LPPRProtheseItem) => boolean;
};

export type FamilleConfig = {
  h1: string;
  metaTitle: string;
  metaDescription: string;
  cardTitle: string;
  cardDescription: string;
  intro: string;
  filter: (item: LPPRProtheseItem) => boolean;
  sections: FamilleSection[];
};

export const FAMILLES: Record<string, FamilleConfig> = {
  genoux: {
    h1: "Genoux prothétiques LPPR : codes et tarifs de remboursement 2026",
    metaTitle: "Genoux prothétiques LPPR : codes et tarifs 2026",
    metaDescription:
      "44 genoux prothétiques inscrits à la LPPR : monoaxial, à microprocesseur, polycentrique. Codes, nomenclature et tarifs de remboursement à jour.",
    cardTitle: "Genoux prothétiques",
    cardDescription:
      "44 références LPPR - genoux monoaxiaux, à microprocesseur et polycentriques, avec leurs codes et tarifs de remboursement.",
    intro:
      "Le genou prothétique articule la cuisse et la jambe pour les personnes amputées au-dessus du genou. La LPPR distingue trois familles selon leur mode de régulation de la marche : monoaxial, à microprocesseur, polycentrique.",
    filter: (i) => i.famille === "genoux",
    sections: [
      { id: "monoaxial", title: "Genoux monoaxiaux", filter: (i) => i.sousFamille === "monoaxial" },
      { id: "microprocesseur", title: "Genoux à microprocesseur", filter: (i) => i.sousFamille === "microprocesseur" },
      { id: "polycentrique", title: "Genoux polycentriques", filter: (i) => i.sousFamille === "polycentrique" },
    ],
  },
  pieds: {
    h1: "Pieds prothétiques LPPR : codes et tarifs de remboursement 2026",
    metaTitle: "Pieds prothétiques LPPR : codes et tarifs 2026",
    metaDescription:
      "69 pieds à restitution d'énergie inscrits à la LPPR, classés par classe (I, II, III), pour amputation basse de jambe ou pour enfant. Codes, nomenclature et tarifs.",
    cardTitle: "Pieds prothétiques",
    cardDescription:
      "69 références LPPR - pieds à restitution d'énergie classés par classe, avec leurs codes et tarifs de remboursement.",
    intro:
      "Le pied à restitution d'énergie restitue une partie de l'énergie emmagasinée à chaque pas. La LPPR le classe en trois classes selon le niveau d'activité (I, II, III), avec des références dédiées aux amputations basses de jambe et aux enfants.",
    filter: (i) => i.famille === "pieds",
    sections: [
      { id: "classe-1", title: "Pieds classe I", filter: (i) => i.sousFamille === "classe-1" },
      { id: "classe-2", title: "Pieds classe II", filter: (i) => i.sousFamille === "classe-2" },
      { id: "classe-3", title: "Pieds classe III", filter: (i) => i.sousFamille === "classe-3" },
      {
        id: "amputation-basse-jambe",
        title: "Pieds pour amputation basse de jambe",
        filter: (i) => i.sousFamille === "amputation-basse-jambe",
      },
      { id: "enfant", title: "Pieds enfant", filter: (i) => i.sousFamille === "enfant" },
      { id: "accessoire", title: "Accessoires pour pied prothétique", filter: (i) => i.sousFamille === "accessoire" },
    ],
  },
  "emboitures-et-articulations": {
    h1: "Emboîtures et articulations prothétiques LPPR : codes et tarifs 2026",
    metaTitle: "Emboîtures et articulations LPPR : codes et tarifs 2026",
    metaDescription:
      "Emboîtures fémorales et articulations de cheville/hanche inscrites à la LPPR. Codes, nomenclature et tarifs de remboursement à jour.",
    cardTitle: "Emboîtures et articulations",
    cardDescription:
      "Emboîtures fémorales et articulations de cheville ou de hanche, avec leurs codes et tarifs de remboursement.",
    intro:
      "L'emboîture est la pièce qui reçoit le moignon et transmet les forces au reste de la prothèse. Cette page regroupe aussi les articulations de cheville et de hanche inscrites à la LPPR.",
    filter: (i) => i.famille === "emboitures" || i.famille === "chevilles-hanches",
    sections: [
      { id: "dispositifs", title: "Emboîtures et articulations", filter: () => true },
    ],
  },
  "malformations-congenitales": {
    h1: "Prothèses pour malformations congénitales LPPR : codes et tarifs 2026",
    metaTitle: "Malformations congénitales LPPR : codes et tarifs 2026",
    metaDescription:
      "11 prothèses et adjonctions LPPR dédiées aux malformations congénitales du membre inférieur. Codes, nomenclature et tarifs de remboursement.",
    cardTitle: "Malformations congénitales",
    cardDescription:
      "11 références LPPR - prothèses et adjonctions dédiées aux malformations congénitales du membre inférieur.",
    intro:
      "Ces dispositifs répondent à des configurations spécifiques de raccourcissement ou d'agénésie du membre inférieur, avec des points d'appui et des montages adaptés à chaque cas.",
    filter: (i) => i.famille === "malformations-congenitales",
    sections: [
      { id: "dispositifs", title: "Prothèses et adjonctions", filter: () => true },
    ],
  },
  manchons: {
    h1: "Manchons prothétiques LPPR : codes et tarifs de remboursement 2026",
    metaTitle: "Manchons prothétiques LPPR : codes et tarifs 2026",
    metaDescription:
      "23 manchons LPPR pour membre inférieur et membre supérieur : silicone, polyuréthane, copolymère. Codes, nomenclature et tarifs de remboursement.",
    cardTitle: "Manchons",
    cardDescription:
      "23 références LPPR - manchons pour membre inférieur et membre supérieur, avec leurs codes et tarifs de remboursement.",
    intro:
      "Le manchon assure l'interface entre le moignon et l'emboîture. La LPPR distingue les manchons pour membre inférieur (fémoral, tibial) de ceux pour membre supérieur (bras, avant-bras).",
    filter: (i) => i.famille === "manchons",
    sections: [
      { id: "membre-inferieur", title: "Membre inférieur", filter: (i) => i.membre === "inferieur" },
      { id: "membre-superieur", title: "Membre supérieur", filter: (i) => i.membre === "superieur" },
    ],
  },
  "mains-bras-myoelectriques": {
    h1: "Mains et bras myoélectriques LPPR : codes et tarifs de remboursement 2026",
    metaTitle: "Mains et bras myoélectriques LPPR : codes et tarifs 2026",
    metaDescription:
      "9 mains, bras et coudes myoélectriques inscrits à la LPPR (Michelangelo, I-LIMB Ultra, DynamicArm...). Codes, nomenclature et tarifs de remboursement.",
    cardTitle: "Mains et bras myoélectriques",
    cardDescription:
      "9 références LPPR - mains, coudes et bras myoélectriques motorisés, avec leurs codes et tarifs de remboursement.",
    intro:
      "Ces prothèses myoélectriques du membre supérieur sont motorisées et commandées par les signaux électriques des muscles résiduels du moignon.",
    filter: (i) => i.famille === "mains-bras-myoelectriques",
    sections: [
      { id: "dispositifs", title: "Mains et bras myoélectriques", filter: () => true },
    ],
  },
  "adjonctions-et-accessoires": {
    h1: "Adjonctions et accessoires prothétiques LPPR : codes et tarifs 2026",
    metaTitle: "Adjonctions et accessoires LPPR : codes et tarifs 2026",
    metaDescription:
      "21 adjonctions et accessoires LPPR pour membre inférieur et membre supérieur : bonnets, gaines, valves, verrous. Codes, nomenclature et tarifs.",
    cardTitle: "Adjonctions et accessoires",
    cardDescription:
      "21 références LPPR - adjonctions et accessoires du quotidien pour membre inférieur et membre supérieur.",
    intro:
      "Cette page regroupe les pièces complémentaires de la prothèse (adjonctions) et les accessoires d'usage courant (bonnets couvre-moignon, gaines, chausse-prothèse), pour le membre inférieur comme pour le membre supérieur.",
    filter: (i) => i.famille === "adjonctions" || i.famille === "accessoires",
    sections: [
      { id: "membre-inferieur", title: "Membre inférieur", filter: (i) => i.membre === "inferieur" },
      { id: "membre-superieur", title: "Membre supérieur", filter: (i) => i.membre === "superieur" },
    ],
  },
};
