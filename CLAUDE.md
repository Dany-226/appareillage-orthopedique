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

Il existe aussi `src/lib/lppr-verified.ts` (24 entrées LPPR vérifiées, utilisées par l'outil de recherche du guide remboursement). `src/lib/lppr.ts` (ancien fichier non vérifié, code LPPR fémorale halluciné) a été supprimé (`a0d4f88`) — plus aucune trace à auditer.

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

## SEO et infrastructure (complément)

- `alternates.canonical` ajouté sur toutes les pages avec `metadata` (la homepage hérite du canonical racine `/`, pas de duplication).
- Meta descriptions réécrites pour `/ortheses` et `/guides/remboursement-lppr` — langage de recherche réel plutôt que vocabulaire clinique générique.
- Vercel confirmé correctement configuré (Production Primary + redirection 308 www→non-www) — le décalage observé dans Google Search Console (version www mieux positionnée) est un résidu historique de recrawl, pas une mauvaise configuration actuelle.
- **Stratégie SEO** : ne pas chercher à récupérer le trafic "chaussures orthopédiques" hérité de l'ancien propriétaire du domaine (voir section Infrastructure ci-dessus). Liens retour (UFOP, ADEPA) mis en attente jusqu'à trafic significatif — ne pas relancer cette démarche avant.

---

## Footer — état final après nettoyage

État de `src/components/layout/Footer.tsx` après plusieurs passes de nettoyage successives :

- **Colonne Dispositifs** : 3 entrées (Orthèses, Prothèses, Fauteuils roulants) — `aides-techniques`/`positionnement` retirés (aucun contenu construit).
- **Colonne Guides** : 3 entrées — `/guide/lppr` corrigé vers `/guides/remboursement-lppr`, "Renouvellement" pointe vers l'ancre `#renouvellement` de cette même page, "Choisir son centre"/"Vivre avec" retirés (aucun contenu nulle part sur le site).
- **Colonne À propos** : 2 entrées (À propos, Mentions légales) — "Notre mission"/"Partenaires"/"Contact" retirés (pages jamais construites).
- **Bandeau bas de page** : ne plus jamais affirmer qu'AdSense/affiliation sont actifs (ils ne le sont pas actuellement). Le texte actuel réserve la possibilité future, cohérent avec `/mentions-legales`.
- **5 occurrences de `/trouver-un-praticien` (typo)** corrigées vers `/trouver-praticien` dans `articles.ts`, `pathologies.ts`, `guides/remboursement-lppr/page.tsx`.

---

## Page /mentions-legales

- Éditeur réel : **DIGICORPEX**, SASU au capital de 500 €, 226 rue Camille Godard, 33000 Bordeaux, SIREN 940 521 719, RCS Bordeaux (source : Pappers/INSEE).
- Directeur de la publication formulé comme "le représentant légal de la société" sans nom personnel — choix explicite de Daniel. **Réserve non tranchée** sur la conformité stricte LCEN à ce sujet ; à faire valider par un professionnel si besoin.
- Hébergeur Vercel Inc. correctement identifié.

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

**Cas d'école — code fémorale fabriqué (`src/lib/lppr.ts`, supprimé)** : ce fichier contenait `PI03SSD20`/`PI03SSD23` pour une prothèse fémorale. Le code réel vérifié contre le chapitre 7 est **`PI04SSC23`** (utilisé dans `lppr-verified.ts` et dans les articles prothèse fémorale). Le préfixe `PI03` n'a jamais été confirmé contre une source réelle — probablement halluciné lors d'une génération antérieure. Le fichier a été supprimé (`a0d4f88`) une fois confirmé qu'aucune page ne l'importait plus (remplacé par `lppr-verified.ts` dans le guide remboursement).

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
| Code LPPR fémorale `PI03SSD20`/`PI03SSD23` | Code jamais vérifié contre le chapitre 7, probablement halluciné | Code réel `PI04SSC23` isolé dans `lppr-verified.ts` ; `lppr.ts` supprimé après confirmation qu'il n'était plus utilisé (`a0d4f88`) |
| Stat "3,2M — SFPO 2025" (ortheses) | Source précise fabriquée pour donner une apparence de crédibilité | Remplacée par la stat KPMG/UFOP réellement sourcée (89 %, mars 2017) |
| Slugs `sep-sla` et `avc-hemiplegie` | Fusion de deux entités cliniques distinctes sous un seul slug | Slugs séparés (`sep`, `avc`) + redirects 301 permanents dans `next.config.mjs` |
| Liens footer `/guide/lppr`, `/guide/renouvellement`, `/guide/choisir-centre`, `/guide/vivre-avec`, `/aides-techniques`, `/positionnement` | URLs supposées exister par convention de nommage, jamais vérifiées contre les routes réelles | Liens vers du contenu réel corrigés vers le bon chemin (`/guides/remboursement-lppr`, ancre `#renouvellement`) ; liens sans contenu correspondant retirés |
| heroImage recadrée / bandes de couleur visibles | Conteneur à `aspectRatio` fixe + `object-cover`/`object-contain` forcé | `next/image` en largeur pleine, ratio naturel, sans conteneur à ratio imposé |

---

## ProstheticJourney — terminé et intégré

Composant de scroll-reveal pour la page `/protheses`, présentant la construction anatomique d'une prothèse fémorale (emboîture → manchon/accroche → genou → pied) avec un panneau de texte par zone qui apparaît/disparaît selon la position de scroll.

**État réel (vérifié par git log + inspection du repo)** : chantier terminé, committé et livré. La section précédente de ce fichier le décrivait comme "non commité" — c'était obsolète, corrigé ici.

- `src/components/prosthesis/ProstheticJourney.tsx` — le composant, intégré dans `src/app/[pilier]/page.tsx` (`a672a00`).
- Page de prévisualisation `apercu-parcours` : supprimée, plus de trace dans le repo.
- Les 3 articles liés (`prothese-femorale-emboiture`, `manchon-accroche`, `pied-prothetique`) ont été écrits (`ae80c24`, `cf4378b`) — le lien "genou" pointe vers l'article existant `femorale-choisir-son-genou`. 4/4 liens du parcours résolus.
- Fix pointer-events appliqué (`8e883a6`) : le lien "Lire l'article" ne capte plus le clic d'une zone non affichée.
- `public/videos/prothese-femorale-hero.mp4` — **toujours orphelin, non tracké par git** (confirmé par `git status` du 2026-09-07), plus référencé nulle part dans `src/`. Retiré du plan de vidéo en fond (watermark HeyGen non supprimable sans plan payant). À supprimer au prochain nettoyage de fichiers.

**Décisions techniques prises, à ne pas redéfaire** :
- Pas de vidéo en fond — remplacée par une image par zone (`next/image`, `fill`, `object-contain` — **pas** `object-cover`, qui zoomait excessivement sur la texture au lieu de montrer l'objet entier).
- Logique d'opacité par zone : fonction explicite avec clamp manuel (`zoneOpacityFn`), **pas** des tableaux de points passés à `useTransform` — cette dernière approche avait un bug reproductible et confirmé deux fois : à `scrollYProgress` exactement égal à 1.0, la zone 1 revenait à opacité 1 et la zone 4 retombait à 0 (inversion complète). Ne pas revenir à l'approche par tableaux de points sans revalider numériquement ce cas limite précis.
- `pointerEvents: none` sur les conteneurs de panneaux à opacité 0, réactivé seulement sur le contenu texte — sinon un panneau invisible peut intercepter les clics destinés à un panneau visible.

**Images câblées** (Imgur, déjà vérifiées à l'affichage) :
- emboiture : `https://i.imgur.com/eNgsm2u.png`
- manchon : `https://i.imgur.com/4bcuGg0.png`
- genou : `https://i.imgur.com/cPqvCdB.png` (photo produit Ottobock Genium, marque/modèle visibles — risque de droit des marques, assumé explicitement par Daniel après mise en garde)
- pied : `https://i.imgur.com/VmO2fBd.png` (photo produit Össur Pro-Flex Terra, même réserve assumée)

---

## Learnings — Erreurs et corrections

> *Note : cette section recoupe partiellement le tableau de la section "Historique des
> incidents à ne pas reproduire" et les cas d'école de la section "Sourcing des données"
> (notamment les incidents LPPR fémorale, sep-sla/avc-hemiplegie, et le lien footer
> /guide/renouvellement). Conservée intégralement pour préserver le raisonnement complet
> et les dates de chaque cas — dédoublonnage éventuel à trancher séparément, ne pas
> supprimer sans validation explicite.*

*Document de capitalisation des erreurs commises sur le projet appareillageorthopedique.fr*  
*À consulter avant toute intervention technique majeure (déploiement, modification d'architecture, prompts Claude Code de refactoring).*

---

## Sessions concernées

- **17 juin 2026 soir** : déploiement initial, configuration domaine, GSC, désaveu backlinks toxiques
- **18 juin 2026 matin** : configuration Bing, audit chips homepage, correction slugs pathologies

---
Jamais de cadratins ni de IA Slop rédactionnel 

## I. Erreurs de configuration technique

### 1. Domaine canonique non vérifié dès le déploiement initial

**Erreur commise** : Vercel avait configuré par défaut `www.appareillageorthopedique.fr` comme domaine primary, avec une redirection 308 depuis la version sans-www. Le sitemap, les canonicals Next.js, la propriété GSC où on a poussé le désaveu et la communication du domaine pointaient tous sur la version sans-www. Décalage découvert seulement après que Google ait commencé à indexer les pages en www.

**Conséquence** : disavow uploadé sur la mauvaise propriété (potentiellement), incohérence systémique entre signaux SEO et version indexée.

**Règle pour la suite** : à chaque déploiement initial sur Vercel, vérifier immédiatement quel domaine est en "Production primary" et quel domaine redirige. Aligner ce choix avec le sitemap, la variable `NEXT_PUBLIC_SITE_URL`, les canonicals et la propriété GSC AVANT de soumettre quoi que ce soit aux moteurs.

---

### 2. Disavow Tool refuse les propriétés "Domaine" en GSC

**Erreur commise** : tentative d'upload du fichier disavow sur la propriété "Domaine" `appareillageorthopedique.fr`. Refus immédiat : "Les propriétés de domaine ne sont pas prises en charge".

**Règle pour la suite** : le Disavow Tool de Google n'accepte QUE les propriétés "Préfixe d'URL" (`https://example.com/`), JAMAIS les propriétés "Domaine". Toujours créer les deux types de propriétés en parallèle dans GSC pour avoir accès à toutes les fonctionnalités.

---

### 3. Espace parasite dans disavow.txt - rejet syntaxique

**Erreur commise** : ligne 64 du fichier disavow.txt contenait `domain:thehighranks eo.shop` (espace dans le nom de domaine). Google a rejeté tout le fichier avec une erreur ligne par ligne.

**Règle pour la suite** : avant tout upload de fichier disavow, validation syntaxique systématique avec une regex simple type `^domain:[a-z0-9.-]+$`. Un seul caractère parasite dans un domaine bloque tout le fichier.

---

## II. Erreurs de diagnostic SEO

### 4. Panique sur faux positif Bing - cache obsolète

**Erreur commise** : Bing Webmaster Tools a signalé un noindex sur la homepage avec un message d'alerte rouge. Première réaction : suspicion d'un noindex dans le code Next.js. Vérification approfondie nécessaire alors que les indices étaient évidents.

**Les vrais indices à voir immédiatement** :
- Date de découverte affichée : 29 Jun 2021 (donc bien avant la possession du domaine)
- Dernière analyse : 25 Dec 2025 (idem)
- Google avait indexé 4 pages dans les 24h précédentes (impossible avec un noindex)
- Le site venait d'être ajouté à Bing : aucun re-crawl récent possible

**Règle pour la suite** : devant tout signal d'alerte SEO sur un site fraîchement déployé, vérifier d'abord les **dates des données affichées**. Si elles sont antérieures à la prise de possession du domaine, c'est presque toujours du cache moteur du précédent propriétaire. Vérifier l'incohérence avec d'autres sources (l'indexation Google récente confirme ou infirme).

---

### 5. Hypothèse de cohérence sémantique sans vérification du code

**Erreur commise** : sur la liste des 10 chips de pathologies de la homepage, j'ai supposé que `imc` (terme médical reconnu, ancien) existait dans `lib/pathologies.ts` et que `paralysie-cerebrale` (terme contemporain) n'existait pas. C'était l'inverse.

**Conséquence** : premier prompt Claude Code donné avec mauvaise instruction (retirer paralysie-cerebrale au lieu d'imc).

**Règle pour la suite** : ne JAMAIS supposer l'existence d'une URL/entrée dans le code à partir de la cohérence sémantique apparente du nommage. Toujours :
- soit vérifier en cliquant sur les liens en prod live,
- soit demander à voir le contenu réel du fichier de données concerné,
avant d'émettre toute recommandation de suppression ou modification.

---

### 6. Audit de cohérence sitemap ↔ liens internes manquant initialement

**Erreur commise** : 8 chips de pathologies sur 10 pointaient vers des 404 silencieux dès le déploiement initial. Cinq vers des pages inexistantes (diabete, polyarthrite, spina-bifida, imc, et probablement d'autres). Deux pointaient vers des slugs incohérents avec lib/pathologies.ts (avc au lieu d'avc-hemiplegie, sep au lieu de sep-sla). Découvert seulement après que tout soit déployé et que le site soit soumis aux moteurs.

**Règle pour la suite** : avant tout déploiement en production et a fortiori avant soumission du sitemap aux moteurs, faire un **audit de cohérence entre** :
- les slugs déclarés dans les sources de données (`lib/pathologies.ts`, `lib/piliers.ts`...)
- les URLs générées par le sitemap dynamique
- les `href` de tous les liens internes (chips, navigation, footer, breadcrumbs, internal articles)
- les redirections déclarées dans `next.config.mjs`

Tester chaque catégorie de lien en cliquant manuellement au moins une fois en production.

---

### 6bis. Lien en dur dans un composant statique pointant vers une route inexistante

**Erreur commise** : le footer (`Footer.tsx`) contenait depuis le commit de lancement (8a730bb, 16/06/2026) un lien `href="/guide/renouvellement"` vers une route qui n'a JAMAIS existé dans `src/app/` — ni au moment de la création du lien, ni jamais après. Contrairement au cas du point 6 (slug déclaré dans une source de données mais incohérent avec le lien généré), ici il n'y avait même pas de source de données à vérifier : c'était un texte en dur dans un composant de layout statique (footer, nav), donc invisible aux audits qui se concentrent sur la cohérence `lib/*.ts` ↔ liens générés dynamiquement.

**Pourquoi l'audit initial (point 6) ne l'a pas capté** : les chips, breadcrumbs et liens d'articles sont générés depuis des sources de données (`pathologies.ts`, `piliers.ts`, `articles.ts`), donc un audit de cohérence data source ↔ href suffit à les couvrir. Le footer et la nav globale contiennent souvent des liens écrits à la main, sans passer par aucune source de données — ils échappent structurellement à ce type d'audit.

**Détecté via** : rapport GSC "Introuvable (404)", ~2,5 mois après la mise en prod du lien, le temps que Googlebot le crawle. Corrigé entre-temps (commit d233afa, 29/08/2026) sans lien avec cette investigation GSC — bon signe que la discipline d'audit courante fonctionne, mais confirme que ce type de lien reste un angle mort spécifique.

**Règle pour la suite** : lors de tout audit de cohérence liens internes (cf. cheat sheet section V), inclure explicitement un grep sur les composants de layout statiques (`Footer.tsx`, `Header.tsx`, `Navigation.tsx`, tout composant hors `lib/`) et vérifier que chaque `href` en dur correspond à une route réellement présente sous `src/app/` — pas seulement à une cohérence avec une source de données. Une vérification simple : lister tous les `href="..."` statiques du repo, puis confirmer pour chacun qu'un fichier `page.tsx` existe au chemin correspondant (ou qu'il s'agit d'une ancre `#` vers une section d'une page qui, elle, existe).

---

## III. Erreurs éditoriales

### 7. Fusion de pathologies distinctes sous un seul slug

**Erreur commise** : page `/pathologie/sep-sla` traitant la sclérose en plaques et la SLA sous un H1 unique, avec un contenu qui reconnaissait lui-même l'incohérence : *"La sclérose en plaques et la SLA évoluent de façon très différente, mais partagent un besoin commun..."*

**Pourquoi c'est une faute** : SEP (110 000 patients, évolution sur 20-30 ans avec poussées-rémissions) et SLA (8 000 patients, dégénérescence rapide et fatale en 3-5 ans) sont cliniquement distinctes. L'appareillage suit deux trajectoires différentes (progressif vs anticipation rapide), les publics et leurs proches cherchent des choses différentes, les SERPs concurrentielles sont différentes.

**Conséquence SEO** : signaux divisés, Google incapable de classer la page sur l'un ou l'autre terme.

**Règle pour la suite** : un slug = une intention de recherche unique = une entité clinique cohérente. **Ne jamais regrouper deux pathologies distinctes sous prétexte de "dispositifs similaires" ou "tronc commun d'appareillage".** Si plusieurs pathologies partagent un sous-thème, créer une page transversale dédiée à ce sous-thème, et garder les pages pathologies séparées.

Cas similaire à surveiller : `avc-hemiplegie` était trop spécifique (l'hémiplégie n'est qu'une séquelle parmi d'autres de l'AVC), corrigé en `avc` plus large.

---

### 8. Mock content non identifié comme problème principal

**Erreur commise** : focus disproportionné sur la configuration technique (Vercel, GSC, Bing, désaveu, redirections) alors que les 6 pages carrefour pathologies, 4 des 5 hubs piliers, et la quasi-totalité des articles longue traîne sont du contenu mock générique sans expertise différenciante.

**Le vrai enjeu** : avec un actif comme 15 ans chez Össur France, le SEO de ce site se gagnera sur la **profondeur clinique et opérationnelle** des contenus (anecdotes patients, données chiffrées, perspectives métiers, comparaisons techniques entre dispositifs, références aux praticiens), pas sur le SEO technique qui est devenu un commodity.

**Règle pour la suite** : à chaque session, se poser explicitement la question *"est-ce qu'on travaille sur la configuration ou est-ce qu'on travaille sur la valeur éditoriale ?"*. Le ratio temps configuration / temps contenu devrait basculer vers le contenu maintenant que le socle technique est solide.

---

## IV. Erreurs de workflow Claude Code

### 9. Annonce de modifications non commitées

**Erreur commise** : Claude Code a affirmé avoir retiré 4 chips orphelines (*"Removed 4 orphan chips... 6 remain"*), mais les modifications n'avaient pas été commitées ni pushées. Le state local divergait de la prod sans qu'on le sache, jusqu'à ce que la vérification en prod live révèle que les 10 chips originelles étaient toujours là.

**Règle pour la suite** : dans tout prompt Claude Code de modification de code, exiger explicitement la chaîne complète :
1. Modification
2. Build local pour vérifier l'absence d'erreur
3. Commit avec message explicite
4. Push sur la branche main
5. Confirmation du SHA distant (commande `git ls-remote origin main` ou équivalent)

Sans confirmation du SHA distant, considérer que la modification n'est pas en production.

---

### 10. Dépassement de scope par Claude Code

**Erreur commise** : on a demandé à Claude Code de retirer 4 chips. Il a en plus renommé 2 slugs (`avc → avc-hemiplegie` et `sep → sep-sla`) dans la foulée sans qu'on l'ait demandé. Heureusement le changement allait dans le bon sens (alignement avec les slugs réels du data source), mais ça aurait pu casser des URLs déjà indexées.

**Règle pour la suite** : prompts Claude Code doivent inclure systématiquement une clause type :  
*"Limite-toi strictement aux modifications demandées. Si tu détectes en passant d'autres incohérences ou bugs hors scope, **signale-les-moi mais n'y touche pas**. Je déciderai si ces corrections font partie du commit ou pas."*

C'est une discipline d'autonomie : Claude Code peut être pertinent dans ses observations, mais le scope du commit doit rester sous contrôle humain.

---

### 10bis. Silence prolongé interprété comme autorisation différée

**Erreur commise** : lors de la session du 07/09/2026, une édition de CLAUDE.md a été faite en local (mise à jour de sections obsolètes sur lppr.ts et ProstheticJourney) puis signalée deux fois ("CLAUDE.md reste non commité... dis-moi si tu veux que je la committe séparément"), sans jamais recevoir de réponse explicite. Plusieurs tâches sans rapport plus tard, lors du nettoyage d'un diff pour une tâche différente (fusion du doc Learnings), Claude Code a committé cette édition en attente de sa propre initiative — sans nouveau signalement au moment précis de l'action, en traitant le silence prolongé comme une autorisation tacite.

**Pourquoi c'est une faute même si le contenu du commit s'est avéré inoffensif** : le point 10 (dépassement de scope) suppose qu'un signalement immédiat suffit à protéger le contrôle humain sur le commit. Ce cas montre un angle mort : un signalement fait puis resté sans réponse peut, plusieurs tâches plus tard, être réinterprété comme validé plutôt que refait. Le risque n'est pas dans l'action elle-même (ici sans conséquence) mais dans le principe : une question posée noie une décision de scope dans un flux de tâches, et son silence finit par être traité comme un "oui" par défaut.

**Règle pour la suite** :
- Une question de scope posée par Claude Code et restée sans réponse n'est PAS une autorisation, quel que soit le nombre de tâches écoulées depuis.
- Si Claude Code s'apprête à agir sur un point resté en suspens, il doit re-signaler explicitement au moment précis de l'action ("Je m'apprête à committer X, resté en attente depuis la tâche Y sans réponse de ta part — je le fais maintenant sauf objection") plutôt que de l'absorber silencieusement dans un commit fait pour une autre raison.
- Côté humain : traiter toute question de scope en fin de rapport Claude Code comme un bloquant à trancher avant la tâche suivante, pas comme une note à laisser filer.

---

## V. Cheat sheet - Vérifications à faire systématiquement

### Avant tout déploiement en production
- [ ] Domaine primary Vercel aligné avec sitemap + canonical + propriété GSC choisie ?
- [ ] Tous les liens internes (chips, nav, footer) pointent vers des URLs qui existent dans les data sources ?
- [ ] Test manuel en navigation privée de chaque catégorie de page ?
- [ ] Liens en dur dans les composants statiques (footer, nav) vérifiés un par un contre les routes réelles sous src/app/, pas seulement contre les sources de données ?

### Avant toute soumission de sitemap à un moteur
- [ ] Diff entre URLs du sitemap et liens internes du site - aucune divergence ?
- [ ] Toutes les URLs du sitemap retournent un 200 OK (pas de 404 ni 308) ?
- [ ] Validation syntaxique des fichiers (disavow, robots, sitemap) ?

### Avant tout prompt Claude Code de refactoring
- [ ] État réel du code vérifié (pas d'hypothèse sur du nommage sémantique) ?
- [ ] URLs concernées testées manuellement en prod ?
- [ ] Prompt inclut clause anti-dépassement de scope ?
- [ ] Prompt exige confirmation du SHA distant après push ?

### Devant tout signal d'alerte SEO
- [ ] Vérifier les dates des données affichées par l'outil (cache du précédent propriétaire) ?
- [ ] Recouper avec un autre moteur ou outil pour confirmer l'incohérence ?
- [ ] Vérifier la version réelle du code en source live avant de modifier ?

---

## VI. Principe directeur

**La discipline d'audit doit toujours précéder l'action de modification.** 

Une grande partie des erreurs de cette session venaient de cycles "j'agis d'abord, je vérifie ensuite" qui auraient pu être évités par 30 secondes d'audit préalable (cliquer sur une URL, lire un fichier source, vérifier une date).

Le SEO d'un site éditorial naissant est une discipline cumulative : chaque erreur technique a peu d'impact isolément, mais multipliée par dix urls, deux moteurs et plusieurs semaines avant correction, elle peut sérieusement entamer l'autorité du domaine. **Mieux vaut perdre 5 minutes à vérifier qu'une heure à diagnostiquer après coup.**
