# MASTER PROMPT — NCAD AI for Artists Workshop: Production Finish

> **Paste this entire file to Codex.** It is self-contained. Do not assume any prior conversation. Read the "Current State" and "House Style" sections before touching anything, because most of this project is already built to a high standard and your job is to FINISH it without breaking it.

---

## 0. ROLE & MISSION

You are a senior curriculum-production engineer finishing a creative-college workshop. The pedagogy, writing, and site are already built across 15 weeks. Your job is the **production tail**: build the demo artifacts, regenerate the PDFs, verify external resources, run a consistency/QA pass, fix what you find, and report.

**Hard rule:** you are FINISHING, not rewriting. Do not regenerate the 75 completed content files (handouts, guides, slide sources, site pages, slide decks) wholesale. Touch them only to apply specific, surgical QA fixes you identify in Task D, and only with edits — never full rewrites that could lose nuance or change the verified video IDs.

Project root: `/Users/tophclaw/Documents/NCAD AI Workshop`
This is **not** a git repo. There is no build system. Plain Markdown + static HTML/CSS/JS.

---

## 1. WHAT THIS PROJECT IS

A 15-week, optional, 4-hour Wednesday drop-in workshop teaching NCAD art/design students (mostly under 23; tracks: motion, illustration, UX, animation, graphic design, 3D, video) **professional AI literacy** — not "AI makes art for you." Core thesis: *AI for friction, humans for meaning.* It must work for (a) a first-run drop-in series, (b) a future credited class, (c) Dean/admin observation, and (d) a substitute instructor with only basic AI knowledge delivering from the guide.

Read these first, in order, to absorb the project (10 min):
1. `COURSE_OVERVIEW.md`
2. `TEACHING_GUIDE_MASTER.md`
3. `STUDENT_AI_INTEGRITY_PACT.md`
4. `PRODUCTION_NOTES.md`  ← your status board; update it as you finish things
5. `DEMOS_AND_VISUAL_AIDS.md`  ← the live-demo scripts you'll build artifacts for
6. `PREP_WITH_CODEX_AND_CLAUDE_CODE.md`  ← the artifact build backlog
7. One full week as a model: `weekly/week-01/student-handout.md`, `site/weeks/week-01.html`, `site/weeks/week-01-slides.html`

---

## 2. CURRENT STATE — ALREADY DONE (do NOT redo)

- **All 15 weeks complete** across five surfaces each: `weekly/week-XX/{student-handout.md, instructor-guide.md, slides.md}` + `site/weeks/week-XX.html` + `site/weeks/week-XX-slides.html`.
- **Global docs complete:** `COURSE_OVERVIEW.md`, `TEACHING_GUIDE_MASTER.md`, `TOOLS_AND_ACCESS_JUNE_2026.md`, `STUDENT_AI_INTEGRITY_PACT.md`, `PREP_WITH_CODEX_AND_CLAUDE_CODE.md`, `GLOSSARY.md` (70+ terms), `DEMOS_AND_VISUAL_AIDS.md`, `ADMIN_OBSERVATION_BRIEF.md`, `PRODUCTION_NOTES.md`.
- **Templates complete:** `templates/{creative-brief, critique-rubric, tiny-tool-spec, ai-workflow-spec, process-documentation, portfolio-ai-disclosure-language}.md`.
- **Site framework complete:** `site/styles.css` (design system), `site/site.js` (copy buttons on `.prompt` blocks), `site/slides.js` (slide-deck keyboard nav + progress + speaker-notes toggle), `site/index.html`.
- **`demos/week-01..15/`** exist with a `README.md` each naming the artifact to build. **The artifacts themselves are NOT built yet — that's your Task A.**
- **8 embedded YouTube videos** are placed and ID-verified (see `PRODUCTION_NOTES.md` → "Embedded Videos Inventory"). DO NOT change these IDs.

Verified-clean already: forward-link chain week 1→15→index; all 15 H1 titles match `manifest.json`; slide decks 33–60 slides each; JS wiring intact. You may re-verify (Task C/D) but these passed on 2026-06-12.

---

## 3. HOUSE STYLE — match this in anything you create or edit

### Voice (non-negotiable)
- Practical, direct, visually minded. Respects skepticism. **No AI hype** ("revolutionary," "game-changing" — banned). No "just prompt better."
- Constantly separate AI **assistance** from **authorship / taste / ethics / craft / disclosure.**
- Every week repeats: *AI for friction, humans for meaning. Raw output is never finished work. Verify before trusting. Disclose where it matters. Skepticism welcome when specific.*
- The four weekly integrity questions: **taste / accelerate / verify / disclose.**
- Every lab has a **zero-generation (or zero-AI) track** of equal standing.

### Per-week content structure (already used everywhere — match if you add)
Handout sections, in order: title + one-sentence promise + "you will make"; Why This Matters; Key Concepts (each with "in real work" + "watch out"); This Week's Words (glossary table); Tool Map; Demo ("I made this, so can you"); Step-by-Step Workflows; Prompt Recipes (fenced code blocks); Lab (per-track variants + zero-gen track); Integrity Check; Troubleshooting (table); Reflection & Documentation; Resources (annotated, tagged); Optional Extension; "Next week" teaser.

### Site design system (classes in `site/styles.css` — reuse, don't reinvent)
- Callouts: `<div class="callout try|warn|work|ethics|demo|def"><span class="label">…</span>…</div>`
- Prompt recipe (gets an auto copy button via `site.js`): `<div class="prompt"><span class="prompt-label">Name</span>PROMPT TEXT</div>`
- Numbered workflow: `<ol class="steps"><li>…</li></ol>` · Checklist: `<ul class="check"><li>…</li></ul>`
- Glossary cards: `<div class="glossary"><div class="term"><b>Term</b>def</div>…</div>`
- Per-track grid: `<div class="tracks"><div class="track"><b>Motion</b>…</div>…</div>`
- Responsive video: `<div class="video-embed"><div class="frame"><iframe src="https://www.youtube.com/embed/ID" title="…" loading="lazy" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe></div><p class="video-note"><b>Why this video:</b> …</p></div>`
- Resource list: `<ul class="resources"><li><span class="tag video|article|docs|embedded|linked|verify">…</span><a class="r-title" href>…</a><span class="r-why">…</span></li></ul>`
- CSS variables available: `--ink --paper --card --red --blue --green --gold --purple --muted --line`. Fonts: Georgia (body), Helvetica/Arial (`--sans`), monospace (`--mono`).
- Slide decks: `<body class="slides">`, one `<section class="slide [s-title|s-section|s-demo|s-lab|s-ethics|s-video]">` per slide, optional `<span class="flag">…</span>`, optional `<div class="notes">…</div>` (toggled with N). `<div class="compare"><div class="bad">…</div><div class="good">…</div></div>` for side-by-sides.

---

## 4. YOUR TASKS

Work in this order. Update the relevant row/section of `PRODUCTION_NOTES.md` as each task closes.

---

### TASK A — Build the 15 demo artifacts (the big one)

Each `demos/week-XX/` folder has a `README.md` naming its artifact and pointing to the build spec in `DEMOS_AND_VISUAL_AIDS.md` (live-demo script + exact prompts) and `PREP_WITH_CODEX_AND_CLAUDE_CODE.md` (build target). Build each artifact below into its week folder.

**Conventions for ALL demo artifacts:**
- Self-contained single files where possible. HTML artifacts: no frameworks, no build step, no network calls; inline `<style>` echoing the site palette (warm paper `#f3efe5`, ink `#12120f`, riso red `#e6422e`, blue `#176c8c`, green `#22745a`); print-friendly (these get shown on a projector and sometimes printed A4/A3).
- Every artifact that depends on **real generated images, audio, or screen recordings** (which you can't produce): build the HTML/scaffold with clearly-labelled placeholder slots (`<!-- INSTRUCTOR: drop generated image here -->` and visible grey placeholder boxes) and add a `TODO-INSTRUCTOR.md` in that week's folder listing exactly what human-made asset is still needed and how to capture it. Do NOT fake or fabricate generated artwork.
- Keep each explainable in under 12 minutes (instructor demo constraint).
- Update each `demos/week-XX/README.md` to mark the artifact built and list any human TODOs.

**The 15 artifacts:**

- **week-01 — `comparison-board.html`**: three labelled columns (Weak Prompt / Creative Brief / After Critique Loop). Each column: the exact prompt in a styled code block, a placeholder image slot, and a "human decisions still required" list. Clean, large type, prints A3. Source script: DEMOS Week 01.
- **week-02 — `one-brief-six-tracks.html`**: the base "Field Notes" degree-show brief shown adapted for the six tracks (motion, illustration, UX, graphic design, animation, 3D), with the changed lines visually highlighted and a "what changed and why" note under each. Tabs or stacked sections.
- **week-03 — `visual-territory-cards.html`**: three printable A5-landscape "visual territory" cards (name, five concrete visual qualities, three references = one historical/one contemporary/one non-art, a five-swatch palette as coloured blocks, an "avoid" line). PLUS `hallucinated-reference-example.md` — a saved example of a confident but invented reference, for the live verification moment.
- **week-04 — `process-board.html`**: responsive grid of numbered iteration cards, each with an image slot, a KEEP/KILL badge, and a one-line reason; final row = "shipped version" + a list of manual repairs. Add `TODO-INSTRUCTOR.md` (the 6–8 generated images + the prepared 8-image set for the zero-gen track are human-supplied).
- **week-05 — `shotlist.html`**: two side-by-side tables, "AI draft" vs "producer's edit," highlighting rows cut/merged/retimed with a margin note per change. Tide-pools 20s title sequence. Include the treatment text at top.
- **week-06 — `continuity-packet.html`**: character brief at top; grid of four character-view slots with red annotation badges marking continuity drift (costume/proportions/props); a repair checklist (continuity-bible entry) below. `TODO-INSTRUCTOR.md`: the 4 drifting generated views (also serve the zero-gen set).
- **week-07 — `campaign-kit.html`**: one-page brand sheet for "Toy Cathedral" — positioning line, 4 voice adjectives with this-not-that pairs, two type-pairing specimens in real Google webfonts, 5-colour palette blocks with hex + usage rules, three layout thumbnails (described), an export checklist, and a small "human decision ✏️" badge component placed on the human-made calls.
- **week-08 — `ux-plan/`**: (a) `flow.md` containing a Mermaid task-flow for "diagnose my plant" with 3 unhappy paths; (b) `wireframe.html` — a 5-screen low-fi wireframe (grey boxes, real microcopy, no styling); (c) `personas.md` — two persona HYPOTHESES, each loudly labelled "UNVALIDATED HYPOTHESIS" with 5 test questions.
- **week-09 — `scene_scaffold.py` + `scene_scaffold_broken.py`**: a Blender 4.x Python script that builds a previz scene (ground plane w/ subtle displacement, 12 non-overlapping low-poly rocks, three-point area lighting, low camera, light volumetric fog), every section commented in plain language for a non-coder, ending with a "what could go wrong" comment block. The `_broken` variant uses a deliberately outdated/wrong API call that throws an informative error (for the error-loop demo). PLUS `TODO-INSTRUCTOR.md` noting the sample AI mesh + annotated topology screenshots are human-supplied, and **a warning that the script must be tested in the classroom Blender version before class.**
- **week-10 — `captions-pipeline.html`**: three tabs/sections — raw transcript (with realistic mis-hearings of "NCAD", Irish names, "risograph"), cleaned SRT (≤42 chars/line, sense-boundary breaks), and a corrections table (heard → corrected). PLUS a 3-reviewer critique relay example. `TODO-INSTRUCTOR.md`: the live VO recording is human-supplied.
- **week-11 — `moodboard-generator.html`**: a FULLY WORKING single-file web app (the "safety twin") — inputs (project type, mood words, three reference qualities, palette preference, what to avoid), output = a structured image-exploration brief with a working Copy button. No frameworks, no network calls, mobile-friendly, pleasant type. This one must actually run.
- **week-12 — `messy-folder/` + `agent-run/`**: (a) `messy-folder/` populated with realistically-named junk files (`final_v2_FINAL(3).png`, `untitled.psd`, `IMG_4421.jpg`, scattered exports — empty placeholder files are fine); (b) `agent-run/` containing exemplar output of a supervised run: `CHANGELOG.md` (logging every action + one honestly-flagged uncertain decision), `QA-CHECKLIST.md`, `alt-text.md`, and a `/_review` folder with one ambiguous file — demonstrating plan-then-act + never-delete. `TODO-INSTRUCTOR.md`: optionally record a live agent run; always run agents on a COPY.
- **week-13 — `case-study-diff.html`**: two versions of one portfolio case study side by side — generic AI-voice (stock phrases highlighted red) vs specific human-voice rewrite (replacements highlighted green), ending with the disclosure line in version B.
- **week-14 — `capstone-gallery.html`**: three large cards (motion workflow / UX prompt system / tiny coded tool), each showing friction → AI-role/human-role split bar → honest "time saved per week" estimate. Plus a short "what would make this FAIL the quality bar" note per card.
- **week-15 — `ai-os.html`**: a clean one-page "AI Operating System" dashboard with the six sections (tools paid-for + cancelled, folder system, top-5 prompts, automations + checkpoints, refusals, review rhythm) and the monthly tool-tracker table. Honest, not aspirational; clearly a STAND-IN the instructor replaces with their real system (note this at top).

**Task A acceptance:** every `demos/week-XX/` contains its built artifact(s); HTML artifacts open in a browser and look intentional; the week-11 app actually works (test it); image/audio/recording-dependent artifacts have visible placeholders + a `TODO-INSTRUCTOR.md`; the week-09 scripts are syntactically valid Python; each README updated.

---

### TASK B — Regenerate the 45 PDFs

All 45 PDFs in `pdfs/{student-handouts,instructor-guides,slide-decks}/week-XX-*.pdf` are STALE (generated from old skeletons). No PDF toolchain is installed (`pandoc`, `wkhtmltopdf`, `weasyprint` all absent on 2026-06-12).

1. Install a toolchain: `brew install pandoc` plus a PDF engine (`brew install --cask basictex` for LaTeX, or `pip install weasyprint`).
2. **Handouts (15) and instructor guides (15):** convert the Markdown:
   `pandoc "weekly/week-01/student-handout.md" -o "pdfs/student-handouts/week-01-student-handout.pdf" --pdf-engine=… -V geometry:margin=2cm`
   Loop over all `weekly/week-*/`. Pick a clean, readable default; tables and fenced code blocks must render legibly.
3. **Slide-deck PDFs (15):** do NOT convert `slides.md`. Instead print each `site/weeks/week-XX-slides.html` to PDF via a headless browser (the deck CSS already has print styles — notes render, backgrounds simplify, one slide per printed block). E.g. headless Chrome: `chrome --headless --print-to-pdf=… --no-pdf-header-footer "file:///…/site/weeks/week-01-slides.html"`. If headless printing of the slide decks is impractical, fall back to printing the **week page** (`week-XX.html`, also print-styled) for a styled handout, and note the choice.
4. Spot-check 3 PDFs of each type for legibility before declaring done.

**Task B acceptance:** all 45 PDFs regenerated from current content; spot-checks legible; method + any fallbacks recorded in `PRODUCTION_NOTES.md`. If you cannot install a toolchain, STOP this task, document the blocker precisely, and leave the stale PDFs untouched (do not delete them).

---

### TASK C — Verify external resources & embeds

1. **Embedded videos (8):** confirm each YouTube ID in `PRODUCTION_NOTES.md` → "Embedded Videos Inventory" still resolves to the named video and is embeddable (not private/removed/region-locked). If web access is unavailable to you, output the 8 watch-URLs as a checklist for a human. **Do not swap IDs without confirming the replacement on-page and updating both the page and any deck embed.**
2. **"Verify before teaching" list:** `PRODUCTION_NOTES.md` has a per-week list of volatile links (tool docs, pricing, recruiter/state-of-AI articles). Where you have web access, check each resolves (200, not redirected to a dead/parked page) and still matches its annotation; flag drifted ones. Where you don't, compile the full clickable list grouped by week for a human.
3. **Internal links:** verify every `href` in `site/` resolves to a real file (week pages, slide decks, `../../GLOSSARY.md`, `../../templates/*`, `../../STUDENT_AI_INTEGRITY_PACT.md`, the new `demos/` artifacts you built — add links to those from the relevant week pages' Demo or Resources block where natural). Report any 404s.

**Task C acceptance:** an "external resources" verification report (live-checked or human-checklist) appended to `PRODUCTION_NOTES.md`; zero broken internal links; any demo-artifact links wired into the matching week page.

---

### TASK D — Consistency & "brutal QA" pass, then fix

Run these checks, then apply **surgical fixes** (Edits, not rewrites). Re-read House Style (§3) before editing any content file.

**Mechanical checks (script them):**
- Forward-link chain `site/weeks/week-XX.html` → next week; week-15 → back to index. (Was clean on 2026-06-12.)
- All 15 site H1s and all 15 handout `##` titles match `manifest.json` titles exactly.
- Every `site/weeks/week-XX.html` references `../site.js`; every `*-slides.html` references `../slides.js`.
- No slide flagged `s-video` claims an embedded video without an `<iframe>` OR an explicit "Live tab"/external-link instruction. (Week 05's `s-video` is intentionally a "Live tab" — that's correct.)
- Each weekly slide deck has 33–60 `class="slide"` sections.
- `GLOSSARY.md` still contains all 36 brief-required terms (LLM, token, context window, hallucination, multimodal, diffusion model, latent space, image-to-image, text-to-image, text-to-video, upscaling, inpainting, outpainting, prompt, system prompt, constraints, critique loop, chain of thought, retrieval, RAG, agent, tool use, workflow automation, model bias, copyright, disclosure, provenance, dataset/training data, synthetic media, slop, style reference, moodboard, creative brief, storyboard, shot list, case study, portfolio disclosure).

**Editorial "brutal QA" checks (read for these and fix):**
1. Shallow sections — any handout/guide section that's thin vs its peers.
2. Missing substitute-teacher explanation — any instructor-guide concept walkthrough that assumes knowledge a basic-AI sub lacks.
3. Slide decks too thin / handouts not standalone-useful.
4. Website pages that don't match their handout's concepts/labs/deliverable.
5. Missing glossary terms, missing/contextless resource links, weak or generic demos.
6. Ethics/disclosure gaps — any week missing the integrity block or a relevant consent line (e.g., likeness in 06, voice in 10).
7. Inconsistent weekly titles/objectives/labs/deliverables across the five surfaces.
8. Anything that reads as AI hype rather than practical creative education.

**Fix policy:** prefer the smallest edit that resolves the issue. Preserve the verified video IDs, the integrity framework, the zero-generation tracks, and the voice. If a fix would be large or judgment-heavy, log it in the report instead of guessing.

**Task D acceptance:** a "QA pass" report in `PRODUCTION_NOTES.md` with: (1) Top issues found, (2) what you fixed, (3) what you deliberately left for human judgment and why. Mechanical checks all green or explained.

---

### TASK E — Final report

Append a "Codex Finish — Summary" section to `PRODUCTION_NOTES.md` and also print it to me:
- Files created (demo artifacts) and files edited (QA fixes), as two lists.
- PDF regeneration: done / blocked (with the exact blocker).
- External-resource verification: live-checked vs human-checklist; flagged items.
- QA pass: top issues, fixes applied, items left for human judgment.
- Any human TODOs outstanding (the generated images, audio, recordings the demos still need).
- A one-line readiness statement per audience: drop-in run / future credited class / Dean observation / substitute delivery.

---

## 5. GUARDRAILS

- **Do not** rewrite completed content files wholesale. Surgical edits only, in Task D.
- **Do not** change the 8 verified YouTube IDs without confirming a replacement and updating every place it appears.
- **Do not** delete the stale PDFs unless you have successfully regenerated their replacements.
- **Do not** fabricate generated artwork, audio, or screen recordings — scaffold with placeholders + `TODO-INSTRUCTOR.md`.
- **Do not** introduce hype language or weaken the "friction vs. meaning / disclosure / verification / zero-generation track" spine.
- **Preserve** the existing visual design; extend `styles.css` thoughtfully only if a demo artifact genuinely needs a shared class (prefer self-contained inline styles in demo files).
- This is not a git repo — if you want rollback safety, copy a file before a risky edit. Confirm-before-overwrite mentally on anything you didn't create.
- Keep `manifest.json` as the single source of truth for week titles.

---

## 6. DEFINITION OF DONE

- [ ] All 15 demo artifacts built into `demos/week-XX/`; week-11 app verified working; image/audio/recording-dependent ones placeheld + `TODO-INSTRUCTOR.md`; READMEs updated.
- [ ] Demo artifacts linked from their week pages where natural.
- [ ] 45 PDFs regenerated from current content (or blocker documented and stale PDFs left intact).
- [ ] Embeds + external resources verified (live or human-checklist); zero broken internal links.
- [ ] Mechanical consistency checks green; brutal-QA editorial findings fixed or logged.
- [ ] `PRODUCTION_NOTES.md` updated throughout; final summary written and printed.

Begin with §1 reading, then Task A. Report progress as you close each task.
