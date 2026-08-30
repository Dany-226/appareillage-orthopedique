# CLAUDE.md — Conventions du projet appareillageorthopedique.fr

Ce fichier est lu automatiquement par Claude Code au début de chaque session sur ce repo. Il documente les conventions techniques, les règles de sourcing éditorial et les règles de workflow établies au fil des sessions précédentes. À appliquer systématiquement, pas à relire une fois puis ignorer.

Stack : Next.js 14 (App Router), TypeScript, Tailwind, Framer Motion. Domaine en prod : `https://appareillageorthopedique.fr`.

---

## Architecture

### Modèles de données (trois systèmes de contenu distincts, non interchangeables)

**`src/lib/piliers.ts`** — les 3 pages piliers (`protheses`, `ortheses`, `fauteuils`).
```ts
type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "h2"; id: string; text: string }
  | { type: "h3"; text: string }
  | { type: "stat"; value: string; label: string; source?: string }
  | { type: "info"; title?: string; text: string }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "faq"; items: { q: string; a: string }[] }
  | { type: "cta"; headline: string; sub?: string; btnLabel: string; href: string }

type PilierData = {
  slug: string; category: string; readingTime: number; h1: string;
  author: { name: string; title: string; updatedAt: string };
  heroImage?: string; content: ContentBlock[];
}
```

**`src/lib/articles.ts`** — les articles longue traîne (ex. les 4 articles prothèses).
```ts
type ArticleBlock =
  | { type: 'paragraph'; content: string }
  | { type: 'h2'; content: string; id: string }
  | { type: 'h3'; content: string }
  | { type: 'stat_callout'; percentage: string; description: string; source?: string }
  | { type: 'info_box'; title: string; content: string }
  | { type: 'comparison_table'; headers: string[]; rows: string[][] }
  | { type: 'faq'; items: { question: string; answer: string }[] }
  | { type: 'cta_block'; title: string; subtitle: string; buttonText: string; buttonHref: string }
  | { type: 'image'; src: string; alt: string; caption?: string }

type Article = {
  slug: string; pilier: string; title: string; metaTitle: string; metaDescription: string;
  badge: string; readingTime: string; publishedAt: string; updatedAt: string;
  heroImage?: string; excerpt: string; author?: { name: string; title: string };
  blocks: ArticleBlock[]; relatedArticles?: string[];
}
```

**`src/lib/pathologies.ts`** — les pages pathologie (`/pathologie/[slug]`).
```ts
type PathologieBlock =
  | { type: 'paragraph'; content: string }
  | { type: 'h2'; content: string; id: string }
  | { type: 'h3'; content: string }
  | { type: 'stat_callout'; percentage: string; description: string; source?: string }
  | { type: 'info_box'; title: string; content: string }
  | { type: 'device_card'; title: string; description: string; href: string; pilier: string }
  | { type: 'faq'; items: { question: string; answer: string }[] }
  | { type: 'cta_block'; title: string; subtitle: string; buttonText: string; buttonHref: string }

type Pathologie = {
  slug: string; name: string; metaTitle: string; metaDescription: string;
  heroLabel: string; heroTitle: string; heroSubtitle: string;
  publishedAt: string; updatedAt: string;
  devices: PathologieLink[]; blocks: PathologieBlock[];
}
```

**Piège connu** : les noms de types se ressemblent (`h2`/`faq`/`cta*` existent dans les 3) mais les champs diffèrent (`text` vs `content`, `cta` vs `cta_block` avec `title/subtitle/buttonText/buttonHref` vs `headline/sub/btnLabel/href`). Toujours vérifier le type exact du fichier concerné avant d'ajouter un bloc — ne pas copier un bloc d'un système vers un autre sans adapter les champs.

Il existe aussi `src/lib/lppr-verified.ts` (24 entrées LPPR vérifiées, utilisées par l'outil de recherche du guide remboursement) et `src/lib/lppr.ts` (ancien fichier, **non vérifié, en attente d'audit séparé — ne pas l'utiliser comme source de vérité, ne pas le supprimer sans consigne explicite**).

### Routing et résolution des slugs

- `src/app/[pilier]/page.tsx` → `getPilierData(params.pilier)` → 404 (`notFound()`) si absent. URL réelle = `/${data.slug}`.
- `src/app/[pilier]/[article]/page.tsx` → `getArticle(params.pilier, params.article)`. URL réelle = `/${article.pilier}/${article.slug}`.
- `src/app/pathologie/[slug]/page.tsx` → `getPathologie(params.slug)`. URL réelle = `/pathologie/${pathologie.slug}`.
- Chaque page dynamique utilise `generateStaticParams` pour le SSG — toute nouvelle entrée dans `piliers.ts`/`articles.ts`/`pathologies.ts` est automatiquement buildée en page statique, pas besoin de créer un fichier de route.
- **Ne jamais deviner qu'une URL existe par convention de nommage.** Toujours vérifier via `find src/app -name "page.tsx"` (liste exhaustive des routes réelles) ou tester en prod (`curl -s -o /dev/null -w "%{http_code}"`) avant de référencer un lien. Plusieurs liens morts ont été introduits par le passé en supposant qu'une page existait à un chemin "logique" (`/guide/lppr`, `/guide/renouvellement`, `/guide/choisir-centre`, `/guide/vivre-avec`, `/aides-techniques`, `/positionnement`) sans jamais avoir été construite.

### Pattern heroImage

- Images hébergées **uniquement sur Imgur** (`i.imgur.com`) — c'est le seul host autorisé dans `next.config.mjs` (`images.remotePatterns`). Ajouter un autre host nécessite d'éditer ce fichier.
- Rendu : `next/image` avec `width`/`height` fixes en placeholder (`1200x675`), mais `className="w-full h-auto rounded-xl"` — **jamais `fill`, jamais `object-cover`/`object-contain` forcé**. Le navigateur affiche l'image à sa largeur de conteneur réelle et à son ratio naturel une fois chargée ; les valeurs `width`/`height` ne servent qu'à réserver l'espace anti-CLS avant chargement.
- Ce choix vient d'un incident concret : un ancien pattern (`aspectRatio` fixe en 16/9 puis 21/9 + `object-cover`/`object-contain`) recadrait ou ajoutait des bandes de couleur autour des vraies photos, coupant des éléments importants du cadrage (ex. la partie basse d'une image montrant un fauteuil roulant était invisible). Le pattern actuel élimine structurellement ce risque — ne jamais réintroduire un conteneur à ratio fixe autour d'une heroImage sans une raison explicite.

### Metadata / SEO

- Toute page avec `metadata`/`generateMetadata` doit inclure `alternates: { canonical: '...' }` avec le chemin exact de la page (chemin en dur pour une page statique, construit depuis le slug réel — `data.slug`, `article.pilier`/`article.slug`, `pathologie.slug` — pour une page dynamique). Le root layout (`src/app/layout.tsx`) définit `canonical: '/'` par défaut (hérité par la homepage, qui n'a pas de metadata propre) et `metadataBase` pour résoudre les URLs absolues.
- Vérification : lire le HTML statique généré après `npm run build` (`.next/server/app/**/*.html`, chercher `<link rel="canonical"`) plutôt que de supposer que l'ajout fonctionne.

### Sidebar et cartes partenaires

`src/components/sidebar/Sidebar.tsx` affiche 3 cartes fixes (sommaire, "Guide remboursement LPPR", "Trouver un praticien") + une prop optionnelle `extraCards?: SidebarExtraCard[]` (variant `'stumpr' | 'aidant'`, chacun avec son propre logo réel en `next/image`, son fond, et un vrai `Button` pleine largeur — pas juste un lien texte). Les pages passent `extraCards` conditionnellement selon leur contenu (voir section Règles éditoriales ci-dessous) — ce n'est jamais codé en dur dans le composant Sidebar lui-même.

### Chaîne de build et vérification locale

```bash
npm run build            # build de prod, révèle les erreurs de type et génère le HTML statique
pkill -f "next dev"; npm run dev &   # serveur de dev, toujours tuer l'instance précédente avant d'en relancer une
```
Le dev server tourne en arrière-plan ; utiliser claude-in-chrome (navigate/screenshot/click réel) pour vérifier visuellement — jamais se contenter de relire le code.

---

## Infrastructure et historique du domaine

- **Hébergement** : Vercel, projet `dany-226/appareillage-orthopedique`. Domaine `appareillageorthopedique.fr` configuré en Production ; `www.appareillageorthopedique.fr` redirige en 308 vers l'apex — configuration vérifiée correcte.
- **Historique du domaine** : avant son rachat pour ce projet, le domaine appartenait à Appareillage Orthopédique Provençal, un chausseur / podo-orthésiste basé à Aix-en-Provence / Toulon. Cet historique laisse une trace dans Google Search Console : un volume de recherche notable sur "chaussures orthopédiques" et requêtes proches, sans rapport avec le contenu actuel du site.
- **Ne jamais produire de contenu sur les chaussures orthopédiques pour capter ce trafic** — hors sujet par rapport au positionnement du site (prothèses, orthèses, fauteuils, pathologies associées). Laisser ce signal GSC se diluer naturellement à mesure que le contenu réel gagne du poids dans l'index.

---

## Sources de données externes

- `github.com/Dany-226/stumpr-mvp` (repo public) : contient `backend/data/orthos_ufop.csv`, les 295 orthoprothésistes réels (source UFOP) utilisés pour construire `src/lib/orthoprothesistes.ts` et alimenter `/trouver-praticien`. Contient aussi, dans `frontend/src/components/LPPRSearch.js`, le schéma (pas les données — protégées par un token Airtable) de la base LPPR complète de Stumpr.
- Pour toute recherche LPPR au-delà des 24 entrées de `lppr-verified.ts` : ne pas essayer de répliquer la base complète sur ce site. La page `/guides/remboursement-lppr` renvoie vers la base officielle CNAMTS (`codage.ext.cnamts.fr`), mise à jour hebdomadairement — c'est la source de référence pour l'exhaustivité, pas ce repo.

---

## Sourcing des données

**Règle absolue : aucune donnée chiffrée (code LPPR, tarif, statistique) n'est inventée.** Trois sources valides seulement :
1. Le chapitre 7 LPPR déjà présent dans le contexte de la conversation/session.
2. Une vérification en direct contre une source officielle (ameli.fr, CNAMTS, fiche fabricant) via recherche web.
3. Une donnée déjà vérifiée lors d'une session précédente et documentée dans le code (`lppr-verified.ts`).

**Cas d'école — code fémorale fabriqué (`src/lib/lppr.ts`, non corrigé, laissé pour audit séparé)** : ce fichier contient `PI03SSD20`/`PI03SSD23` pour une prothèse fémorale. Le code réel vérifié contre le chapitre 7 est **`PI04SSC23`** (utilisé dans `lppr-verified.ts` et dans les articles prothèse fémorale). Le préfixe `PI03` n'a jamais été confirmé contre une source réelle — probablement halluciné lors d'une génération antérieure. Ce fichier reste en place uniquement parce qu'il n'est plus utilisé par aucune page (remplacé par `lppr-verified.ts` dans le guide remboursement) ; ne jamais le citer comme référence.

**Cas d'école — statistique avec fausse source précise** : l'ancienne entrée `ortheses` dans `piliers.ts` citait `"3,2M de Français portent une orthèse... — source: SFPO 2025"`, une source qui n'a jamais été vérifiée et semble fabriquée pour donner une apparence de crédibilité. Remplacée par une statistique réelle et vérifiable : *89 % du volume d'appareillages conçus par les orthoprothésistes concerne des orthèses — Audit KPMG du système réglementaire du Grand Appareillage Orthopédique, commandé par l'UFOP, mars 2017*. Règle qui en découle : **une statistique sans source vérifiable ne doit jamais être publiée avec une fausse précision de source — soit la source est réelle et citée avec exactitude, soit la statistique est omise.**

**Indications cliniques et caractéristiques produit** : sites officiels fabricants uniquement (Ottobock, Össur, Proteor, Blatchford, DJO/DonJoy-Aircast, Bauerfeind, Thuasne). Ne pas extrapoler une caractéristique produit non confirmée par le fabricant.

**Avant de marquer une donnée manquante comme "à vérifier plus tard"** : toujours chercher d'abord si elle n'est pas déjà disponible dans le contexte de la conversation en cours (fichiers déjà lus, données déjà vérifiées dans une session précédente citée par l'utilisateur) avant de la considérer comme un travail futur.

---

## Règles éditoriales

- **Un slug = une entité clinique unique.** Ne jamais fusionner deux pathologies distinctes sous un même slug pour économiser du contenu. Contre-exemple documenté dans `next.config.mjs` (`redirects()`) : `/pathologie/sep-sla` et `/pathologie/avc-hemiplegie` existaient comme slugs fusionnés et ont dû être redirigés vers `/pathologie/sep` et `/pathologie/avc` respectivement — la SEP (sclérose en plaques) et la SLA (sclérose latérale amyotrophique) sont deux maladies différentes avec des besoins d'appareillage différents, tout comme l'AVC et l'hémiplégie ne sont pas synonymes.

- **Liens partenaires (Stumpr, guide-aidant) : placement conditionné par pertinence réelle, jamais systématique.** Logique actuelle (dans `SidebarExtraCard`, wiring par page) :
  - **Stumpr** (app de suivi des renouvellements LPPR) → uniquement sur le pilier `protheses`, ses 4 articles, et la pathologie `amputation`. Pertinent car Stumpr cible spécifiquement le suivi post-appareillage prothétique.
  - **guide-aidant.fr** (ressources aidants familiaux) → uniquement sur les pathologies à forte charge d'aidant familial (`avc`, `sep`, `paralysie-cerebrale`, `lesion-medullaire`) — pas sur `arthrose` ni `amputation`, où la charge d'aidant est moins structurellement centrale.
  - Ne jamais ajouter un de ces deux liens à une nouvelle page sans revalider explicitement cette logique de pertinence avec l'utilisateur.

---

## Workflow de modification

- **Scope strict.** Si une incohérence est détectée en chemin (lien mort, donnée suspecte, fichier legacy) qui n'est pas l'objet de la tâche en cours, elle est **signalée à l'utilisateur puis laissée intacte** — jamais corrigée silencieusement au passage. Plusieurs corrections dans ce projet sont nées d'un signalement fait dans une tâche précédente puis traité dans une tâche dédiée suivante.

- **Chaîne complète obligatoire pour toute modification de code :**
  1. `npm run build` (révèle les erreurs de type/build).
  2. Vérification visuelle réelle : dev server + navigation/capture/clic via claude-in-chrome. Jamais de confiance aveugle sur la lecture du code seul.
  3. Pour un lien (interne ou externe) : **clic réel confirmant la navigation effective**, jamais juste vérifier la présence du `href` dans le HTML généré — un `href` correct peut quand même échouer à l'exécution (mauvais wiring de prop, composant mal branché).
  4. Commit avec message explicite décrivant le changement.
  5. `git push origin main`.
  6. `git ls-remote origin main` pour confirmer que le SHA distant correspond au commit local. **Une modification sans cette confirmation n'est pas considérée comme livrée.**

- **Ne jamais annoncer qu'un élément "fonctionne" sans l'avoir vérifié par l'action correspondante.** Ex. : ne pas dire "le lien mène bien vers stumpr.app" sur la seule base du `href` visible — cliquer réellement et observer l'onglet/l'URL résultante avant de l'affirmer.

---

## Historique des incidents à ne pas reproduire

| Incident | Cause | Correction |
|---|---|---|
| Code LPPR fémorale `PI03SSD20`/`PI03SSD23` | Code jamais vérifié contre le chapitre 7, probablement halluciné | Code réel `PI04SSC23` isolé dans `lppr-verified.ts` ; `lppr.ts` laissé en l'état, non utilisé, en attente d'audit |
| Stat "3,2M — SFPO 2025" (ortheses) | Source précise fabriquée pour donner une apparence de crédibilité | Remplacée par la stat KPMG/UFOP réellement sourcée (89 %, mars 2017) |
| Slugs `sep-sla` et `avc-hemiplegie` | Fusion de deux entités cliniques distinctes sous un seul slug | Slugs séparés (`sep`, `avc`) + redirects 301 permanents dans `next.config.mjs` |
| Liens footer `/guide/lppr`, `/guide/renouvellement`, `/guide/choisir-centre`, `/guide/vivre-avec`, `/aides-techniques`, `/positionnement` | URLs supposées exister par convention de nommage, jamais vérifiées contre les routes réelles | Liens vers du contenu réel corrigés vers le bon chemin (`/guides/remboursement-lppr`, ancre `#renouvellement`) ; liens sans contenu correspondant retirés |
| heroImage recadrée / bandes de couleur visibles | Conteneur à `aspectRatio` fixe + `object-cover`/`object-contain` forcé | `next/image` en largeur pleine, ratio naturel, sans conteneur à ratio imposé |
