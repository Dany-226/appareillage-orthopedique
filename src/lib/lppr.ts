export type LPPRItem = {
  code: string
  label: string
  plvTTC: string
  conditions?: string
  duree?: string
}

export type LPPRSection = {
  id: string
  title: string
  items: LPPRItem[]
  note?: string
}

export const lpprSections: LPPRSection[] = [
  {
    id: 'protheses-membres-inferieurs',
    title: 'Prothèses de membres inférieurs',
    note: 'Base de remboursement SS. Reste à charge selon mutuelle. Entente préalable requise.',
    items: [
      { code: 'PI06SSA63', label: 'Prothèse tibiale - emboîture contact, pied articulé', plvTTC: '1 065,27 €', duree: '3 ans' },
      { code: 'PI06FFA64', label: 'Prothèse tibiale - composite carbone monobloc', plvTTC: '1 651,10 €', duree: '3 ans' },
      { code: 'PI03SSD20', label: 'Prothèse fémorale - résines stratifiées, emboîture résines', plvTTC: '1 661,30 €', duree: '3 ans' },
      { code: 'PI03SSD23', label: 'Prothèse fémorale - genou monoaxial libre, pied articulé', plvTTC: '1 809,91 €', duree: '3 ans' },
    ],
  },
  {
    id: 'genoux-microprocesseur',
    title: 'Genoux à microprocesseur (PRE)',
    note: "Réservé aux amputés actifs K3-K4. Vitesse marche >= 3 km/h et périmètre > 500 m requis. Prescription MPR obligatoire. Révisions biennales incluses.",
    items: [
      { code: '2760940', label: 'Rheo Knee XC - Össur', plvTTC: '16 191,86 €', duree: '6 ans', conditions: 'K3-K4, essai 15 jours minimum' },
      { code: '2513702', label: 'Orion 3 - Blatchford', plvTTC: '16 191,86 €', duree: '6 ans', conditions: 'K3-K4, essai 15 jours minimum' },
      { code: '2752218', label: 'Kenevo - Otto Bock', plvTTC: '16 178,41 €', duree: '6 ans', conditions: 'K3-K4' },
    ],
  },
  {
    id: 'protheses-myoelectriques',
    title: 'Prothèses myoélectriques membre supérieur',
    note: 'Prescription par équipe pluridisciplinaire spécialisée. Période essai obligatoire. Renouvellement à première panne post-garantie.',
    items: [
      { code: '2523', label: 'DynamicArm 12K100N - Otto Bock', plvTTC: '30 889,00 €', duree: '5 ans' },
      { code: '2797712', label: 'DynamicArm 12K110N - Otto Bock', plvTTC: '30 889,00 €', duree: '5 ans' },
    ],
  },
  {
    id: 'ortheses-genou',
    title: 'Orthèses de genou',
    note: 'Base SS. Prescription rhumatologue, orthopédiste ou MPR. Entente préalable selon modèle.',
    items: [
      { code: 'OI36K10', label: 'Orthèse rigide genou - copolymère', plvTTC: '334,12 €', duree: '2 ans' },
      { code: 'OI36N11', label: 'Orthèse rigide genou - polyoléfine avec armature', plvTTC: '445,39 €', duree: '2 ans' },
      { code: 'OI36D51', label: 'Orthèse contrôle laxités - articulation chape arceau', plvTTC: '1 091,65 €', duree: '2 ans' },
      { code: 'OI36N60', label: 'Orthèse cruro-jambière - articulation libre, butées réglables', plvTTC: '1 511,34 €', duree: '2 ans' },
    ],
  },
  {
    id: 'corsets',
    title: 'Corsets et orthèses de tronc',
    note: "Renouvellement tous les 6 mois chez l'enfant en croissance.",
    items: [
      { code: 'TR49K54', label: 'Corset maintien réduction scoliose structurale', plvTTC: '930,92 €', duree: '1 an adulte / 6 mois enfant' },
      { code: 'TR49N70', label: 'Corset valves modulaires Berck - scoliose', plvTTC: '1 666,18 €', duree: '1 an adulte / 6 mois enfant' },
      { code: 'TR49N80', label: 'Orthèse active réduction tridimensionnelle scolioses', plvTTC: '2 500,38 €', duree: '1 an adulte / 6 mois enfant' },
    ],
  },
  {
    id: 'coussins',
    title: 'Coussin anti-escarre',
    note: 'Prise en charge pour patients à risque en fauteuil roulant. Prescription médicale requise.',
    items: [
      { code: '2767361', label: 'Coussin en silicone', plvTTC: '535,22 €', duree: '2 ans' },
    ],
  },
]
