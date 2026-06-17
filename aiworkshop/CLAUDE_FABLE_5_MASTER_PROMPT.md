# Claude Fable 5 Master Prompt: NCAD AI Workshop Expansion

Copy/paste this whole prompt into Claude Fable 5 from the project root:

```text
You are Claude Fable 5 acting as a senior curriculum designer, AI literacy instructor, creative technology professor, instructional designer, web content strategist, and production editor.

Your job is to take the existing "NCAD AI for Artists Workshop" project and make it robust enough for:

1. A first-run optional 4-hour Wednesday drop-in workshop series.
2. A future regular NCAD class.
3. Dean/admin observation, where the materials need to feel intentional, rigorous, student-friendly, and professionally teachable.
4. A substitute instructor who has only a tiny knowledge of AI but needs to deliver the class competently from the guide.

Work inside this existing project:

`/Users/tophclaw/Documents/NCAD AI Workshop`

Important existing structure:

- `COURSE_OVERVIEW.md`
- `TEACHING_GUIDE_MASTER.md`
- `TOOLS_AND_ACCESS_JUNE_2026.md`
- `STUDENT_AI_INTEGRITY_PACT.md`
- `PREP_WITH_CODEX_AND_CLAUDE_CODE.md`
- `weekly/week-01` through `weekly/week-15`
  - `student-handout.md`
  - `instructor-guide.md`
  - `slides.md`
- `site/index.html`
- `site/weeks/week-01.html` through `site/weeks/week-15.html`
- `site/weeks/week-01-slides.html` through `site/weeks/week-15-slides.html`
- `templates/`
- `pdfs/`

The current material is a solid skeleton. Your task is to turn it into a deep, usable, professional workshop/class system.

## Core Positioning

This is not an "AI makes art for you" course.

This is a professional creative survival and leverage workshop for art/design students.

Students should learn how AI actually applies to creative work without sacrificing artistic integrity. The tone should respect skepticism. Do not sell AI as magic. Frame it as a messy, powerful, ethically complicated production technology that artists deserve to understand.

Audience:

- NCAD students, mostly under 23.
- Tracks include motion design, illustration, UX, animation, graphic design, 3D, video, and mixed creative practice.
- Some students will be excited. Some will be hostile or anxious. Some will be curious but overwhelmed.

Instructor voice:

- Practical, clear, visually minded, direct.
- Uses real creative examples.
- Speaks to students as artists and future professionals.
- Avoids corporate AI hype.
- Avoids "just prompt better" laziness.
- Constantly separates AI assistance from authorship, taste, ethics, craft, and disclosure.

## Non-Negotiable Design Principle: ADHD-Friendly Reference Structure

Everything should be readable as chunked blocks.

The website, handouts, guides, and slides should all feel like the same information architecture:

- Short sections.
- Strong headings.
- Scannable blocks.
- Quick-reference boxes.
- Step-by-step workflows.
- Definitions near the point of use.
- Examples students can copy/adapt.
- Checklists.
- Reflection questions.
- "What this means in real work" callouts.
- "Watch out for this" warnings.
- "Try this now" activity blocks.
- Glossary terms linked or repeated where useful.

Do not write giant essay walls.
Do not make shallow one-page handouts.
These handouts should become multi-page reference documents students can browse after the workshop and quickly find specific info.

## What I Need You To Produce

Upgrade the whole workshop system across 15 weeks.

For each week, expand and align:

1. Student handout.
2. Instructor guide.
3. HTML/site page content.
4. HTML slide deck.
5. Resource links.
6. Glossary terms.
7. Example demos and "I made this, so can you" prompt artifacts.
8. Hands-on exercise instructions.
9. Admin/substitute-teacher readiness.

The website and handouts should match conceptually. They do not have to be identical word-for-word, but students should recognize the same structure and information chunks.

The slide decks must be real teaching decks, not just agenda decks. They should contain the actual information I will teach in each workshop. Each weekly slide deck should be many slides long, with concept slides, example slides, instructor talking points, mini-demo slides, lab slides, reflection slides, and wrap-up slides.

## Output Standards

### Student Handouts

Each weekly `student-handout.md` should become a substantial, multi-page reference document.

Minimum expectation per week:

- Clear title and one-sentence promise.
- "Why this matters" section.
- Key concepts explained simply.
- Glossary mini-section for that week.
- Tool/use-case map.
- Real creative examples.
- Step-by-step workflows.
- Prompt recipes students can reuse.
- Exercise instructions.
- Reflection and documentation prompts.
- Integrity/disclosure guidance.
- Troubleshooting section.
- Resource list with videos/articles/pages.
- Optional extension activity for advanced students.

Do not make handouts generic. Make them useful after the class.

### Instructor Guides

Each weekly `instructor-guide.md` should be written so a substitute teacher with basic AI literacy could run the workshop.

Minimum expectation per week:

- Teaching objective.
- Student-facing promise.
- Materials/tools needed.
- Pre-class setup checklist.
- 4-hour timed agenda.
- Full concept walkthrough.
- Plain-language explanations.
- Demo setup.
- Demo script.
- What to click/type/show where appropriate.
- Expected student confusion points.
- How to answer skeptical or anxious student questions.
- Lab facilitation notes.
- Critique/share-out prompts.
- Backup plan if tools fail.
- Accessibility/accommodation notes.
- Admin observation notes: what this week demonstrates pedagogically.

These guides should contain basically every bit of material I will cover.

### Slide Decks

Each weekly `slides.md` and corresponding HTML slide page should become a real teaching deck.

Minimum expectation per week:

- Many slides, not a short outline.
- Opening context.
- Key concept sequence.
- Examples.
- Instructor talking points.
- Visual aid prompts.
- "Look at this difference" comparison slides.
- Mini-exercises.
- Lab instructions.
- Reflection prompts.
- Wrap-up.
- Embedded videos where they genuinely support the lesson or demo flow.

Think 35-60 slides per 4-hour workshop, depending on topic complexity. The slides should be concise, but they must carry the lesson.

Do not cram paragraphs onto slides. Put deeper explanation in instructor guide and handouts.

For HTML slide pages:

- Embed videos directly into the slide deck when it helps the instructor teach without jumping between tabs.
- Use official embed methods where possible, especially YouTube/Vimeo iframe embeds.
- Keep embedded videos purposeful: concept explanation, visual example, tool demo, before/after comparison, or critique reference.
- If a video cannot be embedded cleanly, include a clear external link instead.
- Do not overload every slide with embeds. Place videos only where they improve the teaching flow.
- Add a short note under/near the embed explaining what students should watch for.

### Website Pages

Each weekly site page should be an ADHD-friendly student reference page.

Structure each page with grouped blocks:

- Week overview.
- What you will make/learn.
- Concepts.
- Workflow.
- Demos.
- Prompt recipes.
- Lab.
- Integrity check.
- Resources.
- Glossary.
- Download links.
- Embedded videos whenever possible.

Make the HTML pages match the handout structure.

Preserve and improve the existing visual design. Keep the NCAD/student reference feel. If CSS needs to be extended, do it thoughtfully.

For videos on site pages:

- Embed videos directly on the weekly page whenever possible so students and the instructor do not have to jump between tabs.
- Prefer embedded videos for the highest-value examples and explanations.
- If a video is not embeddable, include a normal link with a concise note: "Not embeddable - open in new tab."
- For every embedded video, include a one-sentence reason it is included and what to pay attention to.
- Keep embeds grouped in the relevant content block, not dumped at the bottom unless they are general extra resources.
- Make sure embedded videos are responsive on mobile and desktop.

### Resource Research

For every week, go find current, useful outside resources.

Include:

- Short videos explaining concepts.
- Video examples of the technique/workflow in action.
- Articles or documentation pages that explain the concept further.
- Tool documentation where relevant.
- Examples from creative industry, motion design, UX, illustration, animation, 3D, coding, or portfolio practice.

Requirements:

- Prefer official docs, credible educators, tool makers, recognized artists/designers, reputable publications, and strong visual examples.
- Include 5-10 high-quality resources per week.
- Add one sentence for why each resource is useful.
- Avoid dumping random links.
- Flag anything that may become outdated.
- If a source discusses copyright/ethics, summarize the practical classroom takeaway.

Video embed handling:

- For every video resource, determine whether it can be embedded on the static site and/or HTML slide pages.
- When embeddable, add the embed to the appropriate weekly site page.
- When it makes pedagogical sense, also add the embed to the corresponding HTML slide deck.
- When not embeddable, include a clearly labeled external link instead.
- Do not use sketchy mirror uploads or unofficial reposts just because they are embeddable. Credibility matters more than convenience.
- Keep a small note in the resource list indicating: `Embedded`, `Linked only`, or `Verify before teaching`.

### Glossary

Build a course-wide glossary and per-week glossary chunks.

Create or update:

- `GLOSSARY.md`
- Per-week glossary sections inside each student handout and site page.

Terms should include, when relevant:

- LLM
- token
- context window
- hallucination
- multimodal model
- diffusion model
- latent space
- image-to-image
- text-to-image
- text-to-video
- upscaling
- inpainting
- outpainting
- prompt
- system prompt
- constraints
- critique loop
- chain of thought / reasoning caveat
- retrieval
- RAG
- agent
- tool use
- workflow automation
- model bias
- copyright
- disclosure
- provenance
- dataset
- synthetic media
- slop
- style reference
- moodboard
- creative brief
- storyboard
- shot list
- case study
- portfolio disclosure

Definitions should be student-friendly and tied to creative practice.

### Demo / Visual Aid Prep

For every week, prep "I made this, so can you" examples.

Each week should include:

- A small demo artifact concept.
- The exact prompt or prompt sequence used.
- What the instructor should show.
- What students should notice.
- How students can adapt it.
- What human choices matter.
- Where AI output should be edited, rejected, or verified.

Create or update a dedicated demo prep file, for example:

- `DEMOS_AND_VISUAL_AIDS.md`
- or weekly files in `demos/week-XX/`

These should support hands-on portions of the workshop.

Examples of demo types:

- Weak prompt vs strong creative brief.
- Visual territory/moodboard generator.
- Motion design shot list from rough concept.
- Character brief to model-sheet prompt.
- UX app plan from vague idea.
- Blender scene scaffold via Python.
- Caption/transcript/edit checklist workflow.
- Tiny coded creative tool.
- Agentic folder organization and QA workflow.
- Portfolio case study rewrite with process transparency.

### Admin / Dean Readiness

The material should make the course look intentional, rigorous, and ethically grounded.

Add or update an admin-facing document:

- `ADMIN_OBSERVATION_BRIEF.md`

It should explain:

- Course purpose.
- Why this matters for creative education.
- What students are and are not being taught to do.
- How integrity/disclosure is handled.
- How the workshop supports multiple majors.
- How the workshop can become a regular class.
- Learning outcomes.
- Assessment ideas.
- Evidence of student value.
- What administrators should notice during observation.

## Weekly Topics

Use the existing weekly topics as the base. Refine if needed, but do not casually replace the course arc.

Current rough arc:

1. AI Without the Ick: Literacy, Integrity, and Creative Control
2. Prompting Like a Creative Director
3. Research, Moodboards, and Visual Territories
4. Image Generation and Visual Iteration Without Losing Taste
5. Motion Design and Video Preproduction
6. Illustration, Character, and Story Development
7. Graphic Design, Branding, and Campaign Systems
8. UX/Product Thinking and AI-Assisted Prototyping
9. 3D, Blender, Scene Planning, and Spatial Ideation
10. Video Editing, Captions, Transcripts, and Post-Production Assist
11. Tiny Creative Tools with Code
12. Agents, Automation, and Creative Operations
13. Portfolio, Case Studies, Career Materials, and AI Disclosure
14. Capstone Studio: Personal AI Workflow or Tool
15. Presentations, Critique, Reflection, and Personal AI Operating System

For each week, make sure the specific content connects to the student tracks:

- Motion design.
- Illustration.
- UX.
- Animation.
- Graphic design.
- 3D.
- Video.
- Portfolio/career practice.

## Quality Bar

Do not stop at "better than before."

The target is: if the Dean sits in, the workshop feels thoughtful, current, and teachable.

The target is also: if I am tired or a substitute is filling in, the instructor guide carries the workshop.

The target is also: if students leave and never return, the handout from that day is still valuable as a reference.

## Working Process

1. Audit the existing project structure.
2. Identify gaps across handouts, slides, instructor guides, site pages, resources, glossary, demos, and admin readiness.
3. Create a brief implementation plan.
4. Expand the global documents first:
   - `COURSE_OVERVIEW.md`
   - `TEACHING_GUIDE_MASTER.md`
   - `TOOLS_AND_ACCESS_JUNE_2026.md`
   - `STUDENT_AI_INTEGRITY_PACT.md`
   - `GLOSSARY.md`
   - `DEMOS_AND_VISUAL_AIDS.md`
   - `ADMIN_OBSERVATION_BRIEF.md`
5. Then expand weekly materials week by week.
6. Keep the handout, instructor guide, slides, and site page aligned for each week before moving on.
7. Update HTML pages and slide decks after Markdown content is solid.
8. Add resources and citations/links responsibly.
9. Run a final consistency pass.

## Consistency Requirements

For each week, make sure these match:

- Week title.
- Learning objectives.
- Key terms.
- Demo.
- Lab.
- Deliverable.
- Integrity/reflection prompts.
- Resources.
- Slide flow.
- Website page flow.
- Handout flow.
- Instructor guide agenda.

No orphaned topics.
No slide-only lessons that are missing from handouts.
No handout concepts that the instructor guide never teaches.
No resources listed without context.

## File/Build Instructions

Before editing, inspect the repository and identify whether there are scripts for building PDFs or HTML.

If scripts exist, use them.
If scripts do not exist, preserve the current plain HTML/Markdown structure and update files directly.

Do not delete existing useful files.
Do not rewrite the whole site into a new framework unless explicitly necessary.
Prefer improving the existing static site and Markdown/PDF source structure.

When done:

- Provide a summary of changed files.
- Provide a week-by-week completion checklist.
- Call out any resources that need manual review.
- Call out any places where PDF regeneration is needed.
- Call out any videos/links that should be verified shortly before teaching because AI tools change quickly.

## Final Deliverable Checklist

At the end, I want:

- Expanded 15-week student handouts.
- Expanded 15-week instructor guides.
- Expanded 15-week slide decks.
- Updated 15-week site pages.
- Updated index/home page if needed.
- Course-wide glossary.
- Per-week glossary sections.
- Course-wide demo/visual aid prep.
- Resource links for every week.
- Embedded video examples on weekly site pages wherever possible.
- Embedded video examples in HTML slide decks where they improve the teaching flow.
- Admin/dean observation brief.
- Substitute-teacher-ready teaching material.
- Clear notes on what still needs PDF/export/build work.

Treat this like real curriculum production for a creative college, not content marketing.
```

## Optional Follow-Up Prompt After Claude Finishes

```text
Now perform a brutal curriculum QA pass.

Check the NCAD AI Workshop project for:

- Shallow sections.
- Missing substitute-teacher explanation.
- Slide decks that are too thin.
- Handouts that are not useful as standalone references.
- Website pages that do not match handouts.
- Missing glossary terms.
- Missing resource links.
- Weak or generic demos.
- Ethics/disclosure gaps.
- Admin/dean-facing weaknesses.
- Inconsistent weekly titles/objectives/labs.
- Anything that feels like AI hype instead of practical creative education.

Return:

1. Top 20 issues.
2. Week-by-week fix list.
3. Files that need another pass.
4. Highest-priority fixes before Dean/admin observation.
```
