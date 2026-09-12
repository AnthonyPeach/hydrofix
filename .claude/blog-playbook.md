# Hydro Fix — Blog Playbook

The single source of truth for writing and shipping one blog post. A run picks the
top undone topic from `blog-topics.md`, produces a post indistinguishable in markup
from an existing one, updates the three index/discovery files, and ships via a PR
that Netlify builds a preview for. **Follow this exactly. Read the DO NOT list first.**

---

## 0. DO NOT (hard rules)

- **Never** modify nav, footer, or shared component files: `js/components.js`, `js/main.js`.
- **Never** modify analytics/pixel/tag code: GA4, GTM, the Facebook Pixel block, or the
  leadsy `r2.leadsy.ai` tag. These are copied **verbatim** from the template and left untouched.
- **Never** edit an existing post. A new post links *outward* to money pages; it never
  reaches back into other posts to add backlinks.
- **Never** touch any page outside `/blog/` except the two allowed index/discovery files
  named in the checklist (`blog.html`, `sitemap.xml`).
- **Never** add a dependency, build step, framework, or npm package. This site is static
  hand-written HTML with no build.
- **Never** touch files outside this repository.
- **Never** create a `/blog/<slug>/index.html` twin — that legacy pattern causes duplicates.
  One file only: `/blog/<slug>.html`.
- **Never** invent a new blog category — reuse an existing `data-tag` (see §5) so the
  blog-index filter buttons don't need changing.

---

## 1. Audience & voice (specifics, not adjectives)

**Who reads this:** property decision-makers in the US Southeast (GA, FL, NC, SC, TN) with
a *standing-water problem they've probably already paid to fix once and it failed.* Five
segments, and a post usually speaks to one:
- **Homeowners** — soggy yards, foundation moisture, a French drain that stopped working.
- **Commercial property managers** — parking lots, HOAs, multifamily, loading docks.
- **Golf course superintendents** — fairways, greens, bunkers, cart paths; rounds lost to rain.
- **Sports-facility managers** — fields closed after storms; synthetic turf; tracks.
- **Municipal / civil** — stormwater compliance (NPDES, MS4), public works.

**Voice — write like the existing posts:**
- **Diagnostic, not salesy.** Lead with the *cause* of a problem, not the product. The
  house style is "diagnose before you prescribe" (see `blog/yard-flooding-root-causes.html`).
- **Plain, declarative sentences.** Short. Concrete. No hype words ("revolutionary,"
  "game-changing"), no exclamation marks, no emoji in body copy.
- **Honest and anti-quick-fix.** We openly say the wrong solution to the wrong problem is
  still wrong, and that we'll tell a prospect if Hydro Fix *isn't* the right fit.
- **Regionally specific and numeric.** Name real conditions: Georgia red-clay percolation,
  57"+ annual rainfall, NPDES/MS4 standards, pressure-fed vs. gravity/French-drain. Use real
  numbers and place names, not vague claims.
- **The through-line:** traditional gravity drainage (French drains, gravel, perforated pipe)
  needs slope and clogs in clay; Hydro Fix is pressure-fed, works on flat/clay lots, is made
  from 100% recycled material, meets NPDES/MS4, and is maintenance-free for 25+ years.
- **Structure:** hook (the expensive mistake / the symptom) → the real causes → how to
  diagnose → matching solutions → an honest closing line. `h2` sections, `h3` sub-points,
  `<ul>` lists, one `<blockquote>` pull-quote. ~700–1,100 words, "N min read" ≈ words/200.

---

## 2. File naming & URL pattern

- **File:** `blog/<slug>.html` (lowercase, hyphenated, no dates, no stopwords bloat).
  Example: `blog/tile-drainage-alternatives-farms.html`.
- **Live URL:** `https://myhydrofix.com/blog/<slug>` — clean, **no `.html`, no trailing slash**
  (Netlify serves it; canonical/OG/schema all use this clean absolute form).
- Slug must be unique — check `blog/` and `blog.html` for collisions before writing.

---

## 3. The exact post template

Copy the **complete** structure of `blog/yard-flooding-root-causes.html` — it is the
canonical reference. A new post must be byte-for-byte identical in every non-content
respect. The skeleton, with only the marked `⟦…⟧` fields changed:

```
<!DOCTYPE html>
<html lang="en">
<head>
  … COPY VERBATIM from the reference, unchanged:
    GSC verification, resource-hint <link>s, FB domain-verification meta,
    <meta charset>, <meta viewport>, all favicon/manifest <link>s …
<title>⟦Title Tag⟧</title>
<meta name="description" content="⟦Meta description⟧">
<link rel="stylesheet" href="../css/style.css">
  <link rel="canonical" href="https://myhydrofix.com/blog/⟦slug⟧">
  … COPY VERBATIM: the entire delayed Facebook Pixel <script> + <noscript> block …
<script type="application/ld+json">
{ "@context":"https://schema.org","@type":"Article",
  "headline":"⟦Full headline (may be longer than title tag)⟧",
  "description":"⟦Meta description⟧",
  "datePublished":"⟦YYYY-MM-DD⟧","dateModified":"⟦YYYY-MM-DD⟧",
  "author":{"@type":"Organization","name":"Hydro Fix","url":"https://myhydrofix.com"},
  "publisher":{"@type":"Organization","name":"Hydro Fix",
    "logo":{"@type":"ImageObject","url":"https://myhydrofix.com/images/hydrofix-logo-header-white-teal.png"}},
  "mainEntityOfPage":{"@type":"WebPage","@id":"https://myhydrofix.com/blog/⟦slug⟧"},
  "image":"https://myhydrofix.com/images/hydrofix-logo-header-white-teal.png" }
</script>
  <!-- Open Graph -->  … og:type=article, og:site_name, og:title, og:description,
                          og:image (the logo url above), og:url=clean URL …
  <!-- Twitter Card --> … summary_large_image, twitter:title/description/image …
<script type="application/ld+json">
{ "@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[
  {"@type":"ListItem","position":1,"name":"Home","item":"https://myhydrofix.com"},
  {"@type":"ListItem","position":2,"name":"Blog","item":"https://myhydrofix.com/blog"},
  {"@type":"ListItem","position":3,"name":"⟦Full headline⟧","item":"https://myhydrofix.com/blog/⟦slug⟧"}
]}
</script>
  … COPY VERBATIM: GA4 block, GTM block, leadsy tag block …
  <meta name="keywords" content="… COPY VERBATIM …">
  <link rel="preload" href="/css/style.css" as="style">
</head>
<body>
  … COPY VERBATIM: GTM <noscript> iframe …
<div id="nav-placeholder"></div>

<div class="post-header">
  <div class="post-header-inner">
    <a href="../blog.html" class="post-back">← All articles</a>
    <p class="label" style="color:var(--teal-light)">⟦Category⟧</p>
    <h1>⟦Full headline — the ONE and only h1⟧</h1>
    <div class="post-meta"><span>⟦Month D, YYYY⟧</span><span>⟦N⟧ min read</span></div>
  </div>
</div>
<div class="post-body">
  ⟦Article body: <p>, <h2>, <h3>, <ul>/<li>, one <blockquote>. No inline styles. No h1.⟧
</div>

  <!-- internal-link callout (money-page link #1) -->
  <div style="background:var(--teal-pale,#e8f4f2);border-left:4px solid var(--teal,#2d7d6f);border-radius:0 12px 12px 0;padding:16px 20px;margin:28px 0;">
    <p style="margin:0;font-size:14px;color:#3d5568;">Explore our <a href="⟦/money-page⟧" style="color:#2d7d6f;font-weight:600;text-decoration:underline;">⟦anchor text⟧</a> ….</p>
  </div>
<div class="post-cta" style="margin:0 auto;max-width:800px;padding:0 5% 64px;">
  … COPY VERBATIM the schedule-a-free-evaluation CTA (calendar.app.google link) …
</div>
<div id="footer-placeholder"></div>
<div id="sticky-placeholder"></div>
<script src="../js/components.js" defer></script>
<script src="../js/main.js" defer></script>
</body>
</html>
```

Paths are **relative** (`../css/style.css`, `../blog.html`, `../js/...`); URLs in
canonical/OG/schema are **absolute**. Do not "fix" or reformat the copied analytics blocks.

---

## 4. SEO requirements (every post)

- **Title tag:** ≤ 60 chars, primary keyword first, ends `| Hydro Fix`.
- **Meta description:** 150–160 chars, unique, includes the primary keyword, no double quotes inside.
- **Exactly one `<h1>`** — the headline in `.post-header`. Body uses `h2`/`h3` only.
- **2–4 internal links** to existing money pages, in-context, with descriptive anchor text
  (not "click here"). Money pages, by exact path:
  `/residential` · `/commercial` · `/golf` · `/sports` · `/service-areas` · `/howwehelp`
  · a relevant `/locations/<state>` (georgia|florida|north-carolina|south-carolina|tennessee)
  · a relevant `/cities/<city>`. At least one must be a core service page.
- **JSON-LD Article schema** present and filled (headline, description, datePublished,
  dateModified, author, publisher, mainEntityOfPage, image) — plus the BreadcrumbList block.
- Title, `og:title`, `twitter:title` need not be identical, but must all be complete and
  about this post (no truncated "…with |" artifacts).

---

## 5. Ordered checklist of files to touch

Exactly three files change. Nothing else.

1. **Create `blog/<slug>.html`** — from §3, meeting §4.
2. **Edit `blog.html`:**
   a. Add a card at the **top** of `<div class="blog-grid" id="blog-grid">` (newest first):
   ```
   <a class='blog-card' data-tag='⟦Category⟧' href='/blog/⟦slug⟧'>
     <div class="blog-card-img" style="background:var(--teal-pale);display:flex;align-items:center;justify-content:center;font-size:52px;min-height:180px;">⟦emoji⟧</div>
     <div class="blog-card-body">
       <span style="background:#2d6a4a15;color:#2d6a4a;font-size:11px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;padding:3px 10px;border-radius:100px;display:inline-block;margin-bottom:10px;">⟦Category⟧</span>
       <h3>⟦Card title⟧</h3>
       <p>⟦1–2 sentence excerpt⟧</p>
       <span class="blog-card-date">⟦Month D, YYYY⟧</span>
     </div>
   </a>
   ```
   `⟦Category⟧` must be an existing filter tag: **Residential, Commercial, Golf, Sports,
   Agriculture, Municipal, Sustainability, Engineering, Installation, Comparison, Design, Guide.**
   b. **Increment the article count** everywhere it appears (currently `56 articles` / `all 56
   articles`) → the new number. It appears ~7 times: meta description, `og:description`,
   `twitter:description`, the Article JSON-LD description, the hero sub-paragraph,
   `#results-count` text, and the JS `'all N articles'` label. Update all of them.
3. **Edit `sitemap.xml`** — add one `<url>` block, alphabetically/logically near the other
   `/blog/` entries:
   ```
   <url>
     <loc>https://myhydrofix.com/blog/⟦slug⟧</loc>
     <lastmod>⟦YYYY-MM-DD⟧</lastmod>
     <changefreq>monthly</changefreq>
     <priority>0.6</priority>
   </url>
   ```
   Do not create duplicate `<loc>` entries; keep the file valid XML.

**Not applicable on this site** (do not create them): no RSS/Atom feed, no posts JSON/data
manifest, no homepage/footer "recent posts" module. The "related posts" blocks inside older
posts are hand-curated and off-limits (see DO NOT).

---

## 6. Deploy steps (git → Netlify, PR-gated)

This site deploys from the GitHub repo: **push to `main` → Netlify auto-builds and publishes**
(static, no build command; `publish = "."`). Every post ships as a **pull request** so a
Netlify **Deploy Preview** renders it for review before it goes live.

A run does:
1. `git switch -c blog/<slug>` (branch off `main`).
2. Make the three edits from §5.
3. `git add blog/<slug>.html blog.html sitemap.xml` && commit:
   `Add blog post: <slug>` (end with the Co-Authored-By line if a tool requires it).
4. `git push -u origin blog/<slug>`.
5. Open a PR to `main`. Netlify posts a **Deploy Preview** URL on the PR.
6. **Human review**: open the preview, read the post, confirm it renders and links work.
7. **Merge the PR** → Netlify deploys to `myhydrofix.com`. (Merging is the go-live gate.)
8. Mark the topic `[done]` in `blog-topics.md` (in the same PR, or a follow-up commit).

Never deploy by any other path (no manual drag-drop, no `netlify deploy` — the repo is the
source of truth now). To retire a URL later, use a redirect in `netlify.toml`, never deletion
alone if the file might still be linked.

---

## 7. Post-publish

- After merge, optionally request indexing for the new URL in Google Search Console.
- Verify the live clean URL returns 200 and the JSON-LD validates (Rich Results Test).
