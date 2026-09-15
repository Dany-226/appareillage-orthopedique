import { Shield, ShieldHalf, ShieldCheck, Sun, Moon, Bone, Flame, Zap } from "lucide-react"

// Mapping centralisé donnée → icône pour les tableaux comparatifs du
// sous-silo guide-achat. Remplace l'icône Package unique (placeholder de
// photo produit) par des icônes qui encodent une vraie information issue
// des colonnes déjà présentes dans guides-achat.ts (rigidité, jour/nuit,
// cause ciblée) — pas une tentative de photo produit.

// Toutes les icônes lucide-react partagent le même type de composant —
// on le dérive de Shield plutôt que de le retyper à la main.
type IconComponent = typeof Shield

// ── Rigidité : progression "bouclier" de plus en plus plein ────────────────
type RigidityLevel = "souple" | "semi-rigide" | "rigide"

const RIGIDITY_ICON: Record<RigidityLevel, { Icon: IconComponent; label: string }> = {
  souple: { Icon: Shield, label: "Attelle souple" },
  "semi-rigide": { Icon: ShieldHalf, label: "Attelle semi-rigide" },
  rigide: { Icon: ShieldCheck, label: "Attelle rigide" },
}

export function classifyRigidity(text: string): RigidityLevel {
  const t = text.toLowerCase()
  if (t.startsWith("semi-rigide") || t.includes("semi-rigide")) return "semi-rigide"
  if (t.startsWith("rigide") || t.includes("rigide")) return "rigide"
  return "souple"
}

// ── Moment de port : jour / nuit (article attelle-poignet) ─────────────────
type MomentType = "jour" | "nuit"

const MOMENT_ICON: Record<MomentType, { Icon: IconComponent; label: string }> = {
  jour: { Icon: Sun, label: "à porter le jour" },
  nuit: { Icon: Moon, label: "à porter la nuit" },
}

export function classifyMoment(text: string): MomentType {
  return text.toLowerCase().startsWith("nuit") ? "nuit" : "jour"
}

// ── Cause ciblée : 3 grandes catégories (article orthese-pouce) ────────────
type CauseCategory = "articulaire" | "tendinite" | "traumatique"

const CAUSE_ICON: Record<CauseCategory, { Icon: IconComponent; label: string }> = {
  articulaire: { Icon: Bone, label: "indiquée pour une cause articulaire (arthrose, arthrite)" },
  tendinite: { Icon: Flame, label: "indiquée pour une tendinite" },
  traumatique: { Icon: Zap, label: "indiquée pour une cause traumatique (entorse, sport)" },
}

const CAUSE_KEYWORDS: Record<CauseCategory, string[]> = {
  articulaire: ["rhizarthrose", "arthrose", "arthrite", "articul"],
  tendinite: ["quervain", "tendin", "ténosynovite", "tenosynovite"],
  traumatique: ["entorse", "ligament", "sport", "skieur", "traumat"],
}

// Classe par mot-clé le plus proche du début du texte plutôt que par ordre
// de priorité fixe : un produit généraliste (ex. "Arthrite, De Quervain,
// entorse légère") suit ainsi la cause listée en premier dans la donnée
// éditoriale, plutôt qu'une règle arbitraire qui écraserait toujours vers
// la même catégorie.
export function classifyCause(text: string): CauseCategory {
  const t = text.toLowerCase()
  let bestCategory: CauseCategory = "articulaire"
  let bestIndex = Infinity

  for (const category of Object.keys(CAUSE_KEYWORDS) as CauseCategory[]) {
    for (const keyword of CAUSE_KEYWORDS[category]) {
      const index = t.indexOf(keyword)
      if (index !== -1 && index < bestIndex) {
        bestIndex = index
        bestCategory = category
      }
    }
  }

  return bestCategory
}

export function getRigidityIcon(text: string) {
  return RIGIDITY_ICON[classifyRigidity(text)]
}

export function getMomentIcon(text: string) {
  return MOMENT_ICON[classifyMoment(text)]
}

export function getCauseIcon(text: string) {
  return CAUSE_ICON[classifyCause(text)]
}
