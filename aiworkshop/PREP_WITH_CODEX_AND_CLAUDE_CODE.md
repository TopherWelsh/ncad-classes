# Codex / Claude Code Prep Backlog

Working demos demystify abstract ideas. This file is the **instructor build list**: small artifacts to prepare before each week using Claude Code or Codex (or by hand). Keep each one simple enough to explain in under 12 minutes.

The classroom demo *scripts* (exact prompts to paste live, what to show, what students should notice) live in `DEMOS_AND_VISUAL_AIDS.md`. This file is what you build **beforehand** so the live demo has a safety net and a "finished version" to reveal.

**General rules:**
- Every built artifact goes in `demos/week-XX/` with a `README.md` (what it is, how to run/show it, what prompt built it).
- Screenshot every stage. Screenshots are your tool-failure backup.
- Time-box each build: if the agent hasn't produced something demoable in 30 minutes, simplify the spec — that's also a lesson worth retelling in class.

---

## Week 01 — Side-by-side prompt comparison board
**Build:** A single HTML page showing the same task ("poster for NCAD degree show") three ways: weak prompt output, strong creative-brief output, and post-critique-loop output. Static text + screenshots, two columns per stage: *output* and *what a human must still decide*.
**Agent prompt to build it:** "Create a single self-contained HTML page called comparison-board.html, no frameworks, that presents three labelled columns (Weak Prompt / Creative Brief / After Critique Loop). Each column has: the exact prompt in a styled code block, space for a screenshot image, and a 'human decisions still required' list. Clean, large type, prints on A3."
**Done when:** it opens in a browser and a stranger understands the three stages without narration.

## Week 02 — One brief, six tracks
**Build:** A page or doc showing the same creative brief adapted for motion design, UX, illustration, graphic design, animation, and 3D — with the changed lines highlighted.
**Agent prompt:** "Build a single HTML page with tabs or stacked sections for six creative tracks. Each shows the same base brief with track-specific lines visually highlighted. Include a 'what changed and why' note under each."
**Done when:** students can spot in 10 seconds that constraints and output format are what change per track.

## Week 03 — Visual territory cards
**Build:** Three printed/printable "territory cards" generated from one weak idea ("make it cyberpunk"), each with: territory name, 5 visual qualities, 3 historical/contemporary/non-art references, palette, and what to avoid.
**Agent prompt:** "Create a printable HTML page of three 'visual territory' cards laid out A5 landscape, each card: name, five concrete visual qualities, three references (one historical, one contemporary practice, one non-art), a five-swatch palette rendered as coloured blocks, and an 'avoid' line."
**Done when:** cards look like a studio artifact, not a chat log.

## Week 04 — Iteration process board
**Build:** A campaign-poster process board: 6+ image iterations (any image tool), each annotated with keep/kill decision and reason; final version manually repaired (crop, type, colour) in Photoshop/Affinity.
**Build by hand + AI:** generate iterations yourself; the agent builds the board page.
**Agent prompt:** "Build process-board.html: a responsive grid of numbered iteration cards, each with image slot, KEEP/KILL badge, and a one-line reason. Final row shows 'shipped version' large with a list of manual repairs performed."
**Done when:** the rejections are more interesting than the picks.

## Week 05 — Shot list + AE task generator output
**Build:** From a rough concept ("20s title sequence about tide pools"), a generated shot list (CSV or table: shot #, duration, action, camera, asset needs) plus an After Effects task checklist. Show the *edited* version next to the raw one — with your cuts visible.
**Agent prompt:** "Create shotlist.html: two side-by-side tables, 'AI draft' and 'producer's edit', highlighting rows that were cut, merged, or retimed, with a margin note for each change."
**Done when:** the producer's edit is visibly tighter than the AI draft.

## Week 06 — Character continuity packet
**Build:** A character brief → model-sheet prompt → 4 generated views → a continuity errors list (what drifted between views) → repaired notes.
**Agent prompt:** "Build continuity-packet.html: character brief at top, grid of four character views with red annotation badges marking continuity drift (costume, proportions, props), and a repair checklist below."
**Done when:** students can find at least 3 drift errors before you point them out.

## Week 07 — Campaign kit from a weak idea
**Build:** "Gig poster for a synth band" taken to a mini campaign kit: positioning line, 3 type pairings with rationale, palette, 3 layout roughs, asset/export checklist. Human decisions marked with a ✏️ badge.
**Agent prompt:** "Build campaign-kit.html as a one-page brand sheet: positioning, voice attributes, type pairing specimens rendered in real webfonts, palette blocks, three layout thumbnails, and an export checklist. Add a small 'human decision' badge component I can place on items."
**Done when:** the badge count tells the story — most decisions carry one.

## Week 08 — UX plan from a vague idea
**Build:** "An app for plant people" → user assumptions list (labelled as assumptions, not research), 2 personas-as-hypotheses, task flow diagram, 6-screen low-fi wireframe in Figma (or HTML), accessibility checklist.
**Agent prompt:** "Generate a Mermaid task-flow diagram and a 6-screen HTML low-fi wireframe (grey boxes, real microcopy) for a plant-care app, plus an accessibility checklist tuned to this flow. Label all user statements as untested assumptions."
**Done when:** every persona statement is visibly labelled "hypothesis — needs real research."

## Week 09 — Blender scene scaffold script
**Build:** A Python script that builds a simple dressed scene in Blender (ground plane, 12 varied primitive 'rocks', three-point lighting, camera, fog) + a second script that fails informatively (version-mismatched API call) for the debugging demo.
**Agent prompt:** "Write a Blender 4.x Python script that creates a scene: ground plane with subtle displacement, 12 randomized low-poly rock meshes scattered without overlap, three-point area lighting, a camera aimed at the cluster, and volumetric fog. Comment each section in plain language for artists."
**Done when:** it runs from Blender's scripting tab in one paste, and you can explain every block in artist language.

## Week 10 — Caption + edit checklist pipeline
**Build:** A 60–90s rough VO clip (record yourself), its raw transcript, the cleaned caption file (SRT), and a generated shot-specific edit checklist. Keep the raw transcript errors — they're the lesson.
**Agent prompt:** "Take this transcript text and produce: a cleaned SRT with sensible line breaks and timing placeholders, a list of every correction made, and an edit checklist grouped by shot. Output as captions-pipeline.html with three tabs."
**Done when:** students can see exactly what the human corrected and why it mattered.

## Week 11 — Tiny tool built live (have a finished twin)
**Build:** A "moodboard prompt generator" or "export checklist" single-file web app — built ONCE beforehand (your safety copy), then re-built live in class from the same spec.
**Agent prompt (also the live one):** "Build a single-file HTML app: a moodboard prompt generator for artists. Inputs: project type, mood words, three reference qualities, palette preference, what to avoid. Output: a structured image-exploration brief with copy button. No frameworks, mobile-friendly, pleasant type."
**Done when:** the live rebuild can fail completely and you still have the twin to show.

## Week 12 — Agent run, recorded
**Build:** A screen recording + artifact trail of an agent doing real production chores on a messy demo folder: rename files to a convention, build a folder structure, draft alt text for images, produce a QA checklist, and write a log of what it did. Include the one place it made a wrong call (and your correction) in the recording.
**Agent prompt:** "Here is a folder of messy creative project files. Rename to [convention], organize into /assets /exports /process, draft alt-text for each image into alt-text.md, generate QA-CHECKLIST.md for handoff, and write CHANGELOG.md describing every action you took and anything you were unsure about."
**Done when:** the changelog shows both competence and the wrong call — autonomy + checkpoint is the lesson.

## Week 13 — Case study rewrite, before/after
**Build:** One real student-style project written up twice: the generic AI-voice version and the specific human-voice rewrite with process transparency and disclosure line. Diff-style highlighting.
**Agent prompt:** "Build case-study-diff.html showing two versions of the same portfolio case study side by side, with generic phrases highlighted red in version A and the specific human replacements highlighted green in version B. Include the disclosure line in version B."
**Done when:** the red highlights are recognizably the phrases every student has seen AI write.

## Week 14 — Three capstone shapes
**Build:** Three one-slide examples of finished capstones: a motion workflow (boards→shot list→AE checklist), a UX prompt system (research→flows→critique rubric), a tiny coded tool (the Week 11 twin). Each with: friction solved, AI role, human role, time saved.
**Agent prompt:** "Build capstone-gallery.html: three large cards, each with project shape, the friction it solves, an AI-role/human-role split bar, and an honest 'time saved per week' estimate."
**Done when:** a student can point at one and say "mine is like that, but for X."

## Week 15 — Your real AI operating system
**Build:** A genuine, honest one-pager of YOUR current system: tools you pay for, folder structure, your 5 most-used prompts, your agent workflows, your review rhythm, and what you refuse to automate. Warts included.
**Agent prompt:** "Turn these notes about my actual AI working system into ai-os.html: a clean one-page dashboard with sections for tools, prompts, automations, review rhythm, and refusals. Honest, not aspirational."
**Done when:** it's true. Students can smell aspirational fiction.

---

## Build Order Recommendation

If prepping the whole term in advance, build in this order: 11 (you'll reuse the pattern), 1, 2, 5, 13, 14, 3, 7, 8, 12, 6, 4, 9, 10, 15. Weeks 11/1/2 teach you the agent workflow; everything after goes faster.
