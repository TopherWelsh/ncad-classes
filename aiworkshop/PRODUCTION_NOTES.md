# Production Notes — NCAD AI for Artists Workshop

**Last updated:** 2026-06-12
**Purpose:** Build status, regeneration needs, and pre-teaching verification list. This is an internal production document, not student-facing.

---

## Audit Findings (2026-06-12)

| Area | State found | Action |
|---|---|---|
| Global docs | Thin skeletons (26–78 lines), good voice | Expanded in place |
| Weekly markdown (45 files) | Uniform ~40–50 line skeletons | Expanded to full reference documents |
| `site/*.html`, `site/styles.css` | **All 0 bytes (empty)** | Built from scratch on existing paths |
| `pdfs/` (45 PDFs) | Exist, generated from old skeleton content | **Stale — regenerate after this pass** |
| Build scripts | None found (no pandoc/wkhtmltopdf/weasyprint installed) | Files updated directly; see PDF notes below |
| `GLOSSARY.md`, `DEMOS_AND_VISUAL_AIDS.md`, `ADMIN_OBSERVATION_BRIEF.md` | Missing | Created |
| `templates/` | 3 ultra-thin templates | Expanded; new templates added |
| `demos/` | Empty directory | Weekly demo specs live in `DEMOS_AND_VISUAL_AIDS.md`; `demos/` reserved for actual built artifacts |
| `manifest.json` | Canonical week titles | Treated as source of truth for titles |

## Canonical Information Architecture (all surfaces)

Every week uses the same chunk order so students recognize the structure across handout, site page, and slides:

1. Snapshot (title, promise, what you'll make)
2. Why This Matters
3. Core Concepts (each: plain explanation → "In real work" → "Watch out")
4. This Week's Words (glossary chunk)
5. Tool & Use-Case Map
6. Demo: "I made this, so can you" (exact prompts)
7. Step-by-Step Workflows
8. Prompt Recipes (copyable)
9. Lab (timed, per-track variants)
10. Integrity & Disclosure
11. Troubleshooting
12. Reflection & Documentation
13. Resources (annotated, embed-flagged)
14. Extension (optional/advanced)

Instructor guides add: objective, materials, pre-class setup checklist, timed 4-hour agenda, full concept walkthrough with plain-language scripts, demo script (what to click/type), confusion points, skeptic Q&A, lab facilitation, critique prompts, backup plan, accessibility notes, admin observation notes.

Standard 4-hour rhythm (from TEACHING_GUIDE_MASTER.md):
0:00 settle/recap · 0:10 concepts · 0:50 break · 1:00 demo + mini-try · 1:45 break · 1:55 lab (70 min) · 3:05 break · 3:15 share/critique/reflection · 4:00 end.

## Build Status

| Week | Handout | Instructor guide | slides.md | Site page | Slides HTML | Resources |
|---|---|---|---|---|---|---|
| Globals | — | — | — | — | — | — |
| 01 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| 02 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| 03 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| 04 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| 05 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| 06 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| 07 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| 08 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| 09 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| 10 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| 11 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| 12 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| 13 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| 14 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| 15 | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |

## PDF Regeneration (required after this pass)

All 45 PDFs in `pdfs/` were generated from the old skeletons and no longer match the source markdown. No PDF toolchain is installed on this machine. Options:

1. Install pandoc (`brew install pandoc`) + a PDF engine, then:
   `pandoc weekly/week-01/student-handout.md -o pdfs/student-handouts/week-01-student-handout.pdf --pdf-engine=...`
2. Or print the site pages to PDF from a browser (the site CSS includes print styles — week pages and slide pages both print cleanly).
3. Or use macOS `textutil`/Pages for quick conversion (lower fidelity).

Recommended: option 2 for handouts (site pages are the styled versions), option 1 for raw markdown fidelity.

## Verify Before Teaching (living list)

AI tools change monthly. Re-check shortly before each session:

- All embedded videos still exist/playable (embeds listed per week under Resources with `Embedded` flag).
- Tool names, free-tier limits, and pricing in `TOOLS_AND_ACCESS_JUNE_2026.md`.
- Items flagged `Verify before teaching` in weekly resource lists.
- Any screenshots/UI references in demo scripts (UIs shift fast).

Per-week verification items are appended at the bottom of this file as weeks are built.

## Build Complete — 2026-06-12

All 15 weeks built across all five surfaces (handout, instructor guide, slides.md, site page, slide deck) + resources. All global docs, glossary (70+ terms, all 36 brief-required terms present), demo prep, admin brief, and 7 templates complete. `demos/week-XX/` folders scaffolded with pointer READMEs. Verified: forward-link chain 1→15→index intact; all 15 H1 titles match `manifest.json`; handout titles match; slide decks 33–60 slides each; no slide promises an embed it lacks.

## Embedded Videos Inventory (re-check playability before each term)

| Week | Video | YouTube ID | Embedded on |
|---|---|---|---|
| 01 | But what is a GPT? — 3Blue1Brown | `wjZofJX0v4M` | page + deck |
| 01 | AI art, explained — Vox | `SVcsDDABEkM` | page + deck |
| 02 | Prompting 101 — Anthropic | `ysPbXH0LpIE` | page |
| 03 | Everything is a Remix (2023) — Kirby Ferguson | `X9RYuvPCQUA` | page |
| 04 | How AI Image Generators Work — Computerphile | `1CIpzeNxIhU` | page + deck |
| 06 | Glen Keane — Step into the Page | `GSbkn6mCfXE` | page + deck |
| 07 | Live Design Critique — The Futur | `y1QzpLFgtqA` | page |
| 09 | Scripting for Artists — Blender (playlist) | `PLa1F2ddGya_8acrgoQr1fTeIuQtkSd6BW` | page (playlist embed) |

Weeks 05, 08, 10–15 use **linked-only** resources by design (NN/g videos aren't embeddable; Runway/tool docs are reference; BBC/W3C are standards; career/state-of-AI items are flagged "verify before teaching" because they date fast).

## "Verify Before Teaching" items by week (the volatile list)

- **W01:** Karpathy LLM intro video; tool free-tier limits.
- **W02:** Anthropic "deep dive" video; The Futur critique link.
- **W03:** deep-research mode access per tool.
- **W04:** Midjourney docs; Adobe Firefly tutorials (UI shifts).
- **W05:** Runway Academy tutorials; Motion Design School course state.
- **W06:** model-sheet/continuity industry article.
- **W07:** platform spec dimensions (Instagram/print).
- **W08:** Figma AI features docs.
- **W09:** Meshy/Tripo docs; a current topology-fundamentals video.
- **W10:** Descript onboarding; ElevenLabs consent policy; a captions-advocacy video.
- **W11:** Claude Code / Codex docs; app-builder platforms.
- **W12:** Claude Code / Codex agent docs; an "what is an agent" explainer.
- **W13:** recruiter-AI article; a careers-and-AI talk.
- **W15:** a current "state of AI" roundup.

## PDF Regeneration — COMPLETED 2026-06-12

All 45 PDFs in `pdfs/` have been regenerated from the expanded source materials.

- **Student handouts:** regenerated from `site/weeks/week-XX.html` into `pdfs/student-handouts/week-XX-student-handout.pdf`.
- **Instructor guides:** regenerated from `weekly/week-XX/instructor-guide.md` via Pandoc HTML + WeasyPrint into `pdfs/instructor-guides/week-XX-instructor-guide.pdf`.
- **Slide decks:** regenerated from `site/weeks/week-XX-slides.html` into `pdfs/slide-decks/week-XX-slides.pdf`.
- **Toolchain used:** `pandoc` + Python `weasyprint`; Homebrew `pango`, `gdk-pixbuf`, and `libffi` libraries were installed so WeasyPrint could render on macOS. Chrome headless was tested first but hung on local PDF export, so it was not used.

## Production Finish Pass — 2026-06-12 23:50 PDT

Completed the Codex handoff finish pass without wholesale rewriting the completed curriculum.

### Demo artifacts

- Built/verified demo artifact folders for all 15 weeks under `demos/week-XX/`.
- Added build-status notes to each `demos/week-XX/README.md`.
- Added prepared-demo links into every `site/weeks/week-XX.html` page so instructor backup artifacts are visible from the week page.
- Added Week 12 messy-folder placeholders plus an `_review` placeholder so the supervised agent-run demo has a concrete folder structure to show.

### QA results

- Internal QA passed: **0 broken local links**, **0 missing required files**, **0 internal warnings**.
- PDF QA passed: **45 PDFs found**, minimum PDF size **57,207 bytes**, maximum PDF size **405,293 bytes**.
- Python compile check passed for the Week 09 Blender scripts.
- External link spot-check: **74 external URLs found**, **72 checked OK**. Two remain manual/pre-class verification items because they are bot-sensitive or timed out during automated checking:
  - `https://docs.blender.org/api/current/` returned `403 Forbidden` to automated checking.
  - `https://helpx.adobe.com/photoshop/using/generative-fill.html` timed out during automated checking.
- Fixed one stale external URL: BBC Subtitle Guidelines moved from `https://bbc.github.io/subtitle-guidelines/` to `https://www.bbc.co.uk/accessibility/forproducts/guides/subtitles/` in Week 10 source and site page.

### Remaining human-only teaching prep

These are not blockers to the course package, but they should be done before teaching:

- Replace placeholder/stand-in generated images, screenshots, and recordings in demo folders that explicitly include `TODO-INSTRUCTOR.md`.
- Week 15 `ai-os.html` should be made fully honest to the instructor’s real current AI operating system before class.
- Re-check volatile resources listed above and under “Verify Before Teaching” shortly before each session.
