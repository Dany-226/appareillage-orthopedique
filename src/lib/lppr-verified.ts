export type LPPRVerifiedItem = {
  code: string
  nomenclature: string
  categorie: string[]
  tarifTTC: number
  source: string
}

const CHAPITRE_7 = 'Chapitre 7 LPPR (Titre II)'
const FICHE_FABRICANT = 'Fiches fabricant Ottobock/Össur, vérifiées août 2026'

export const lpprVerifiedItems: LPPRVerifiedItem[] = [
  // ── Prothèses tibiales / fémorales ─────────────────────────────────────
  {
    code: 'PI06SSA63',
    nomenclature: 'Prothèse tibiale, emboîture contact, pied articulé',
    categorie: ['tibiale', 'jambe', 'prothese'],
    tarifTTC: 1065.27,
    source: CHAPITRE_7,
  },
  {
    code: 'PI06SSC33',
    nomenclature: 'Prothèse tibiale, emboîture suspension, pied articulé',
    categorie: ['tibiale', 'jambe', 'prothese'],
    tarifTTC: 1630.73,
    source: CHAPITRE_7,
  },
  {
    code: 'PI04SSC23',
    nomenclature: 'Prothèse fémorale, emboîture résines stratifiées',
    categorie: ['femorale', 'jambe', 'prothese'],
    tarifTTC: 1865.86,
    source: CHAPITRE_7,
  },
  {
    code: 'VI4ZE25',
    nomenclature: 'Genou polycentrique microprocesseur, régulation pneumatique',
    categorie: ['genou', 'prothese'],
    tarifTTC: 5497.40,
    source: CHAPITRE_7,
  },
  {
    code: 'VI4BE01',
    nomenclature: 'Boîtier de programmation genou électronique',
    categorie: ['genou', 'prothese'],
    tarifTTC: 982.08,
    source: CHAPITRE_7,
  },
  {
    code: '2707471',
    nomenclature: "Pied à restitution d'énergie classe I",
    categorie: ['pied', 'prothese'],
    tarifTTC: 613.59,
    source: CHAPITRE_7,
  },

  // ── Prothèses main / bras ───────────────────────────────────────────────
  {
    code: '-',
    nomenclature: 'Michelangelo, main myoélectrique (Ottobock)',
    categorie: ['main', 'myoelectrique', 'prothese'],
    tarifTTC: 32275.00,
    source: FICHE_FABRICANT,
  },
  {
    code: '-',
    nomenclature: 'Michelangelo Transcarpienne (Ottobock)',
    categorie: ['main', 'poignet', 'myoelectrique', 'prothese'],
    tarifTTC: 32275.00,
    source: FICHE_FABRICANT,
  },
  {
    code: '-',
    nomenclature: 'Pronosupination motorisée Michelangelo (Ottobock)',
    categorie: ['main', 'myoelectrique', 'prothese'],
    tarifTTC: 5427.00,
    source: FICHE_FABRICANT,
  },
  {
    code: '-',
    nomenclature: 'i-Limb Ultra, pack complet (Touch Bionics/Össur)',
    categorie: ['main', 'myoelectrique', 'prothese'],
    tarifTTC: 27270.37,
    source: FICHE_FABRICANT,
  },
  {
    code: '-',
    nomenclature: 'i-Limb Skin Natural, gant boîte de 4 (Touch Bionics/Össur)',
    categorie: ['main', 'myoelectrique', 'prothese'],
    tarifTTC: 892.22,
    source: FICHE_FABRICANT,
  },
  {
    code: 'PS1Z01',
    nomenclature: 'Désarticulation épaule, articulation simple à friction',
    categorie: ['bras', 'epaule', 'prothese'],
    tarifTTC: 1554.22,
    source: CHAPITRE_7,
  },
  {
    code: 'PS1Z02',
    nomenclature: 'Désarticulation épaule, articulation à rotule',
    categorie: ['bras', 'epaule', 'prothese'],
    tarifTTC: 1581.24,
    source: CHAPITRE_7,
  },
  {
    code: 'PS1Z03',
    nomenclature: 'Désarticulation épaule, liaison souple au corselet',
    categorie: ['bras', 'epaule', 'prothese'],
    tarifTTC: 1254.94,
    source: CHAPITRE_7,
  },
  {
    code: 'PS2Z20',
    nomenclature: 'Amputation bras, moignon court',
    categorie: ['bras', 'prothese'],
    tarifTTC: 1395.82,
    source: CHAPITRE_7,
  },
  {
    code: 'PS3Z20',
    nomenclature: 'Amputation bras, moignon moyen/long',
    categorie: ['bras', 'prothese'],
    tarifTTC: 1107.50,
    source: CHAPITRE_7,
  },
  {
    code: 'PS4Z20',
    nomenclature: 'Désarticulation coude, avant-bras très court',
    categorie: ['bras', 'coude', 'prothese'],
    tarifTTC: 1090.23,
    source: CHAPITRE_7,
  },

  // ── Orthèses genou ───────────────────────────────────────────────────────
  {
    code: 'OI36N50',
    nomenclature: 'Contention ligamentaire thermoformée avec dérotation',
    categorie: ['genou', 'orthese', 'entorse'],
    tarifTTC: 626.89,
    source: CHAPITRE_7,
  },
  {
    code: 'OI36D10',
    nomenclature: 'Attelle contention ligamentaire, articulée bilatérale',
    categorie: ['genou', 'orthese', 'entorse'],
    tarifTTC: 1018.07,
    source: CHAPITRE_7,
  },
  {
    code: 'OI36A50',
    nomenclature: 'Contrôle des laxités, articulation polycentrique',
    categorie: ['genou', 'orthese'],
    tarifTTC: 1133.82,
    source: CHAPITRE_7,
  },
  {
    code: 'OI36N10',
    nomenclature: 'Rigide, polyoléfine sans armature',
    categorie: ['genou', 'orthese'],
    tarifTTC: 313.40,
    source: CHAPITRE_7,
  },
  {
    code: 'OI36N60',
    nomenclature: 'Cruro-jambière, effet dynamique réglable',
    categorie: ['genou', 'orthese'],
    tarifTTC: 1511.34,
    source: CHAPITRE_7,
  },
  {
    code: 'OI36N70',
    nomenclature: 'ODRA (Proteor), sur mesure gonarthrose',
    categorie: ['genou', 'orthese', 'gonarthrose'],
    tarifTTC: 1141.31,
    source: CHAPITRE_7,
  },
  {
    code: 'OI36D51',
    nomenclature: 'Contrôle des laxités, chape avec arceau postérieur',
    categorie: ['genou', 'orthese'],
    tarifTTC: 1091.65,
    source: CHAPITRE_7,
  },
]
