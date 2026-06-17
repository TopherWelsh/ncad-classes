# Demos and Visual Aids — "I Made This, So Can You"

The live demo script for every week: the exact prompts to paste, what to show, what students should notice, and where the human work lives. Built artifacts and safety-net screenshots live in `demos/week-XX/` (build list: `PREP_WITH_CODEX_AND_CLAUDE_CODE.md`).

**How to run any demo (the universal moves):**
1. Paste prompts from this file — don't improvise them live (improvise *after* the scripted run works).
2. Narrate decisions, not typing: say *why* each constraint is there.
3. When output appears, pause and ask the room: **"What did it get wrong?"** Collect three answers.
4. Every demo includes one planned failure or weakness. Don't skip it — the recovery is the lesson.
5. End every demo with the adapt line: "Change [X] to your project and this is yours."

**If the tool is down:** every `demos/week-XX/` folder should hold screenshots of a previous successful run. Demo from screenshots, narrate the same way.

---

## Week 01 — Weak Prompt vs. Creative Brief vs. Critique Loop

**Artifact:** The same task done three ways, live, in one chat tool.
**Time:** 30 min + 15 min student turn. **Tool:** ChatGPT or Claude (either).

**Stage 1 — the weak prompt.** Paste:
> Make a poster concept for an art school degree show.

Show: fast, confident, generic output. Ask the room what's missing (no audience, no constraints, no venue, no voice).

**Stage 2 — the creative brief.** Paste:
> Act as a practical creative director. I'm designing a poster for NCAD's degree show, "Field Notes." Audience: Dublin creative industry + students' families. Tone: confident, not corporate; the work is the hero. Constraints: A1 print, must work pasted in cafés and on Instagram stories, two-colour risograph (teal + warm black), typography-led because student work varies wildly in style. Give me 5 directions. For each: concept in one line, headline treatment idea, layout sketch in words, and one risk. Don't pick a winner — that's my job.

Show: the jump in specificity. Point at the last line — **the human keeps the decision**.

**Stage 3 — the critique loop.** Pick the direction the *room* likes least, then paste:
> Direction 3 is the weakest. Critique it against my brief: where is it generic, where does it fight the riso constraint, what would a skeptical Dublin designer roll their eyes at? Then give me two sharper variants that fix those problems.

**Planned failure to show:** Stage 2 usually includes one direction that ignores a constraint (e.g., full-colour photography in a 2-colour riso brief). Catch it out loud: "It was confident about an impossible direction. This is why you stay the director."

**Students should notice:** quality tracked the *brief*, not the model; the human supplied audience, constraints, taste, and the final call.
**Adapt:** swap in any current project; keep the "5 directions + risks, don't pick" structure.
**Verify/reject:** any factual claims about riso printing; any cliché directions (reject minimum two, with reasons, in front of the class).

---

## Week 02 — One Brief, Six Tracks

**Artifact:** The same base brief adapted live for motion, UX, illustration, graphic design, animation, 3D.
**Time:** 35 min. **Tool:** Any chat model + prepared comparison page (`demos/week-02/`).

**Stage 1 — base brief.** Paste:
> Here is my base creative brief: [paste Week 1 Stage 2 brief]. I'm going to adapt this for six creative disciplines. First, as a creative director, tell me: which parts of a brief are universal, and which parts must change per discipline? Answer in a two-column list.

**Stage 2 — track adaptation (do 3 live, show 3 from the prepared page).** Paste:
> Rewrite the brief for a MOTION DESIGNER making a 15-second animated version for Instagram stories. Change only what must change: deliverable specs, timing, motion-specific constraints, references, and critique criteria. Highlight what you changed.

Repeat pattern for UX (degree-show website: wayfinding, accessibility, mobile) and 3D (physical signage/installation: materials, sightlines, build constraints).

**Stage 3 — the rubric.** Paste:
> Build me a 6-line critique rubric for the motion version. Each line: a question I should ask of any draft, tied to my brief. No generic design-school questions — every line must reference a constraint from THIS brief.

**Planned failure:** at least one adaptation will keep an irrelevant constraint (riso colours in a website brief). Ask the room to find it.
**Students should notice:** the spine of a brief is constant; constraints and output format are the moving parts. The rubric turns the brief into a critique tool.
**Adapt:** students run the same two prompts on their own track in the lab.
**Verify/reject:** spec claims (story dimensions, accessibility standards) — look one up live to model the habit.

---

## Week 03 — From "Make It Cyberpunk" to Three Visual Territories

**Artifact:** A weak aesthetic idea turned into three named, specific, referenced territories.
**Time:** 30 min. **Tool:** Chat model; optionally a research-mode/Perplexity-style tool for sources.

**Stage 1 — expose the weak idea.** Paste:
> I'm designing a music venue identity and I want it to feel "cyberpunk." Generate 5 image prompt ideas.

Show the sameness: neon, rain, kanji, hooded figure. Name it: **this is the average of the internet.**

**Stage 2 — territory expansion.** Paste:
> "Cyberpunk" is doing no work. Act as a design researcher. Give me THREE distinct visual territories that could express "near-future tech unease" for a Dublin music venue, deliberately avoiding neon-rain clichés. For each territory: a name, five concrete visual qualities (materials, light, colour behaviour, type feeling, texture), one historical reference, one contemporary non-famous practice or scene, one NON-ART reference (science, industry, nature), and what to explicitly avoid. Flag any reference you're not certain actually exists.

**Stage 3 — verification, live.** Take one historical reference and one contemporary reference; image-search them in front of the class. One will usually be real-but-different or entirely invented — **this is the core lesson**. Correct the territory card with the real findings.

**Planned failure:** the invented/wrong reference in Stage 2 (if all check out, say so — and show a saved example of a hallucinated one from prep).
**Students should notice:** specificity beats vibes; references must be verified; non-art references are where original directions come from; the "flag uncertainty" line changed the model's behaviour.
**Adapt:** swap "near-future tech unease" for any project mood; keep the three-territory structure and the verification step.
**Verify/reject:** every named reference. Reject any territory that's still a cliché wearing a new name.

---

## Week 04 — Campaign Poster: Generate, Reject, Repair

**Artifact:** An iteration process board where the rejections carry the lesson.
**Time:** 40 min. **Tools:** One image tool (Firefly in Photoshop preferred for classroom rights-safety) + chat model for critique.

**Stage 1 — structured exploration.** In the image tool, run a *brief-shaped* prompt (not a vibe):
> Poster background for a contemporary dance festival called "Hinge." Visual territory: industrial materials under stage light — folded steel, tensioned fabric, raking warm light, deep shadow. Bold abstract composition with clear empty zone in the upper third for typography. Muted palette: rust, bone, near-black. No people, no text, no logos.

Generate 4–6. Number them on screen.

**Stage 2 — the rejection round (the actual lesson).** For each output, say keep/kill + one reason, out loud, fast: "Kill — texture is mushy where the eye lands. Kill — empty zone ignored. Keep — light behaviour is real." Then ask the class to overrule one of your calls with a reason.

**Stage 3 — interrogate the survivor.** Screenshot the keeper into the chat model:
> Critique this poster background against my brief [paste brief]. Where will typography fight the image? What reads as AI-generic at arm's length? What would a print production person flag?

**Stage 4 — human repair.** In Photoshop: crop for the type zone, generative-fill ONE small offending region (narrate: "inpainting = surgical, not slot machine"), adjust levels, place real type. Five minutes, visible craft.

**Planned failure:** at least one generation ignores the "no text" instruction — models love fake letters. Use it: "It can't be trusted with type. Type is ours."
**Students should notice:** the brief-shaped prompt; the speed of rejection; critique loop on an *image* via screenshot; the repair work is recognizably design craft.
**Adapt:** any poster/cover/key art task; keep generate→reject→critique→repair order.
**Verify/reject:** rights tier of the image tool (say which licence the class is generating under); reject all outputs if needed and demo from saved set.

---

## Week 05 — Concept to Shot List to After Effects Task List

**Artifact:** A 20-second title-sequence plan: treatment → shot list table → AE task checklist → style-frame prompts.
**Time:** 35 min. **Tool:** Chat model (+ optional image tool for one style frame; video gen as prepared clips only).

**Stage 1 — treatment.** Paste:
> Act as a motion design director. Concept: a 20-second title sequence for a documentary short about tide pools — the drama is in scale shifts, surface tension, and things appearing when you look longer. Audience: festival. Write a treatment in 120 words: visual approach, pacing logic, type behaviour, palette, sound feeling. No shot list yet.

Edit two lines of the treatment live, in front of them (taste, visibly applied).

**Stage 2 — shot list.** Paste:
> Break this treatment into a shot list table: shot #, duration (must total exactly 20s), action, camera/movement, type on screen, asset needed (live action / 2D anim / generated still / typography), transition out. 7–9 shots. Flag the two hardest shots and say why.

**Stage 3 — production reality.** Paste:
> Now make the After Effects task checklist for this shot list, grouped by: pre-comp setup, assets to gather/make, animation tasks per shot, and finishing (grade, sound placement, exports for festival + Instagram). Estimate hours per group honestly.

Cross out / merge tasks live as a producer would. Show the prepared "AI draft vs. producer's edit" page from `demos/week-05/`.

**Stage 4 — style frame prompt (hand-off to Week 4 skills).** Paste:
> Write one image-generation prompt for the style frame of shot 3, in the visual territory of this treatment, composed for type in the lower third.

**Planned failure:** the durations won't sum to 20s on the first try, or the hour estimates are fantasy. Make it recount/re-estimate; say: "It does arithmetic-shaped output. You do arithmetic."
**Students should notice:** structured, checkable production documents are where AI shines; the human edit pass tightened everything; the chain treatment→shots→tasks→frames is reusable for any motion job.
**Adapt:** any 15–30s piece — kinetic type, product spot, title sequence.
**Verify/reject:** durations, export specs, hour estimates. Reject any shot that's unachievable in the student's actual toolkit.

---

## Week 06 — Character Brief to Model Sheet to Continuity Check

**Artifact:** A character packet with deliberately drifting views, repaired.
**Time:** 35 min. **Tools:** Chat model + image tool (or prepared images from `demos/week-06/`).

**Stage 1 — character brief.** Paste:
> Act as a story development partner. I'm developing a character for a 2D animated short: a retired lighthouse keeper who secretly maintains a tiny museum of things the sea returned. Build a character brief: silhouette-first design notes, 5 personality traits that could read in *pose* (not dialogue), costume with 3 signature details, one prop she's never without, what to avoid (no fisherman clichés). Then ask me 3 questions that would sharpen her.

**Answer the 3 questions live** — your answers visibly change her (authorship on display).

**Stage 2 — model sheet prompt.** Paste:
> Turn this brief into an image prompt for a character model sheet: front, 3/4, side views, neutral pose, flat colour, consistent proportions, white background, annotation-friendly spacing. List the 6 details that MUST stay identical across views.

Generate (or show prepared). 

**Stage 3 — Continuity Cop, live.** Put the views side by side. Ask the class to find the drift before you do: buttons change, prop disappears, proportions wander. Circle each on screen.

**Stage 4 — the professional fix.** Paste:
> The generated views drifted: [list the 3 errors found]. Write the continuity bible entry for this character: a checklist an animator (or a future generation run) must verify per shot.

**Planned failure:** the drift IS the planned failure — it is nearly guaranteed.
**Students should notice:** the brief and the questions did the creative work; generation is fast but unreliable on consistency; the continuity bible is a real animation-industry artifact made *more* necessary by AI.
**Adapt:** any character/creature/mascot; same brief→sheet→cop→bible chain.
**Verify/reject:** reject views that break silhouette readability; the acting/timing implications stay human.

---

## Week 07 — Weak Logo Idea to Campaign Kit

**Artifact:** "Gig poster for a synth band" grown into a mini brand system with human decision badges.
**Time:** 35 min. **Tool:** Chat model (+ prepared campaign-kit page from `demos/week-07/`).

**Stage 1 — interrogate before generating.** Paste:
> I want "a logo and poster for my synth band, Toy Cathedral." Before you make anything: ask me the 6 questions a brand designer would ask first. Number them.

Answer live, fast, with personality (venue size, audience, sound references, budget reality).

**Stage 2 — positioning + system, not assets.** Paste:
> From my answers, write: a one-line positioning ("for [audience], Toy Cathedral is the [category] that [difference]"), 4 brand voice adjectives with "this not that" pairs, a type direction (2 pairings with rationale — Google Fonts only, we're broke), a 5-colour palette with hex + where each is allowed, and 3 poster layout concepts described in words. Mark anything that's a guess about my audience.

**Stage 3 — stress test.** Paste:
> Stress-test this system: How does it fail on a phone screen? At a sticker size? For a support slot where our name is 10% of the poster? What would a cynical Dublin gig-goer say? Revise the weakest element.

**Stage 4 — production checklist.** Paste:
> Build the asset/export checklist for one gig: poster A3 print + Instagram (feed, story), ticket-site banner, stage backdrop projection. Include file specs and a pre-export QA list.

**Planned failure:** the palette will include at least one inaccessible contrast pair or the positioning line will be soup. Fix the line yourself, live — wordsmithing is the craft moment.
**Students should notice:** the questions-first move; system before assets; the stress test as critique loop; specs are checkable and useful.
**Adapt:** any micro-brand — student society, pop-up, degree-show identity.
**Verify/reject:** contrast ratios (check one live in a contrast checker), font licences, spec dimensions.

---

## Week 08 — Vague App Idea to UX Plan (Honestly Labelled)

**Artifact:** "An app for plant people" → assumptions, personas-as-hypotheses, task flow, wireframe text, edge cases, accessibility checklist.
**Time:** 35 min. **Tool:** Chat model (+ Figma for paste-in if comfortable; Mermaid flow in `demos/week-08/`).

**Stage 1 — assumption audit.** Paste:
> I want to design "an app for plant people." Before any design: list every assumption hiding in that sentence — about users, problems, context, and devices. Then sort them into: safe to assume / must research / dangerous to guess.

**Stage 2 — personas as hypotheses.** Paste:
> Draft 2 contrasting persona HYPOTHESES for this app. Label each clearly as "unvalidated hypothesis." For each: context, plant-related frustration, moment of need, what they'd never do in an app. Then write the 5 interview questions that would test whether each persona is real.

**Stage 3 — flow + wireframe.** Paste:
> Pick the core task: "diagnose what's wrong with my plant." Write the task flow step by step including 3 unhappy paths (bad photo, no internet at the garden centre, ambiguous diagnosis). Then describe a 5-screen low-fi wireframe in text: each screen's purpose, key elements top to bottom, and the exact microcopy for buttons and empty states. Grey boxes only — no visual styling.

**Stage 4 — Edge Case Hunt + accessibility.** Paste:
> Now attack this flow: 8 edge cases or failure states we haven't handled, ranked by how badly each damages trust. Then an accessibility checklist specific to THIS flow (photo-taking with low vision, colour-only status indicators, touch targets in a garden with gloves).

**Planned failure:** the personas will be plausible fiction — that's the point. Say: "These people do not exist. They're hypotheses wearing name tags. Real research is Stage 5, and AI can't do it for you."
**Students should notice:** assumptions surfaced before pixels; unhappy paths and edge cases are where AI genuinely adds value; microcopy is a real deliverable; accessibility is specific, not generic.
**Adapt:** any app/site idea — the five prompts are a reusable UX planning kit.
**Verify/reject:** all user claims (label or kill), accessibility claims against WCAG, any "users want" sentence without a source.

---

## Week 09 — Blender Scene Scaffold via Python

**Artifact:** An AI-written script that builds a dressed, lit, camera-ready Blender scene — plus a debugging moment.
**Time:** 40 min. **Tools:** Blender 4.x + chat model (script pre-tested; broken variant prepared).

**Stage 1 — the ask.** Paste:
> Write a Blender 4.x Python script that builds a previz scene: ground plane with subtle displacement, 12 low-poly rocks scattered with random scale/rotation but no overlaps, three-point lighting with area lights, a camera framing the cluster from low angle, and light volumetric fog. Comment every section in plain language for an artist who doesn't code. At the end, list what could go wrong when I run it.

**Stage 2 — run it.** Blender → Scripting tab → paste → Run. Orbit the result. Change two values live (rock count, fog density), re-run: "a script is a dial, not a black box."

**Stage 3 — the planned failure.** Run the prepared *broken* variant (old API call). Read the error aloud, then paste it back:
> I ran your script in Blender 4.x and got this error: [paste traceback]. Explain what's wrong in plain language and fix the script.

It fixes itself. Say: "You don't need to know Python. You need to know how to *report* — copy the error, paste the error."

**Stage 4 — the artist's judgment.** Ask the room: what does this scene still need that no script provides? (Composition intent, story, materials with meaning, light *motivation*.) Then paste:
> Generate a render-settings checklist for this scene for a quick previz pass vs. a portfolio still — resolution, samples, denoising, what to check before walking away from a long render.

**Students should notice:** code is dictation now; errors are conversation, not walls; the scene is a *scaffold* — every artistic decision is still open; checklists transfer to their real renders.
**Adapt:** swap "rocks" for their previz need (gallery space, product turntable, crowd blocking).
**Verify/reject:** always test scripts before class; never run AI code with file-deletion operations without reading it; render estimates are guesses.

---

## Week 10 — Transcript → Captions → Edit Checklist

**Artifact:** A rough voice memo turned into corrected captions and a prioritized edit list; a screenshot critique relay.
**Time:** 35 min. **Tools:** Phone voice memo, transcription tool (or editor's built-in), chat model with image input.

**Stage 1 — record dirty audio, live.** Record 45–60 seconds: you describing today's lab, imperfectly, with an "em, sorry, start again" in it. Transcribe with whatever is at hand. Show the raw transcript errors (names, "NCAD," Irish place names — transcription's reliable failures).

**Stage 2 — caption cleanup.** Paste transcript + this:
> Clean this raw transcript into captions: fix obvious mis-hearings (it's "NCAD", "risograph", [names]), break into caption-length lines (max 42 chars/line, 2 lines max), keep my actual speech rhythm — don't formalize my voice. Output as SRT with placeholder timings. Then list every correction you made in a table: heard → corrected.

The corrections table is the teaching object: machine speed + human verification.

**Stage 3 — multimodal critique relay.** Screenshot a student-volunteered (or prepared) video still / design frame. Paste with:
> Critique this frame as three different people: a colourist, a motion designer, and an accessibility reviewer. Each gives exactly 3 observations and 1 priority fix. Don't soften.

Then the relay: a student picks which critiques to accept/reject with reasons; the room responds.

**Stage 4 — the edit list.** Paste:
> Merge the accepted critiques into one prioritized edit checklist: blocker / should-fix / polish. Add estimated minutes per fix.

**Planned failure:** the transcription mangling of Irish names/terms IS the failure; also at least one critique will be confidently wrong — the student's rejection of it is the lesson.
**Students should notice:** captions are an accessibility deliverable with a human QA step; multimodal critique works on *any* visual work; the student stayed the filter.
**Adapt:** their own WIP footage/stills; the three-reviewer prompt works for any discipline (swap the personas).
**Verify/reject:** every caption correction against the audio; consent before uploading anyone else's face/voice.

---

## Week 11 — Tiny Tool, Built Live

**Artifact:** A single-file web app built from a student-shaped spec, live, with one failure and recovery.
**Time:** 45 min. **Tools:** Claude Code or Codex (instructor account); browser. Safety twin pre-built in `demos/week-11/`.

**Stage 1 — the spec is the skill (10 min, chat model on screen).** Paste:
> Help me write a build spec for a tiny tool. Interview me: ask one question at a time. The tool: a "moodboard prompt generator" for art students. I'll answer as we go. When you have enough, output a spec: user, problem, inputs, outputs, UI layout in words, what it does NOT do, and acceptance checks.

Answer the interview questions live (keep it under 6 questions).

**Stage 2 — the build (one prompt to the coding agent).** Paste the spec, prefixed:
> Build this as a single self-contained HTML file, no frameworks, no build step, mobile-friendly, pleasant typography. [SPEC]. When done, tell me how to open it and list 3 things you'd improve with more time.

Open the file. Use it. Let students shout inputs.

**Stage 3 — the change request.** Ask the room for one feature ("add a copy button," "add a dark mode," "save last 5 prompts"). Paste it verbatim as a change request. Show the diff-style update.

**Stage 4 — the inspection (don't skip).** Open the HTML source for 3 minutes:
> Walk me through this file like I'm an artist, not a programmer: what are the three main parts, where does my data go when I type it, and does anything leave my computer?

The answer ("nothing leaves your machine — there's no network call") is the trust lesson.

**Planned failure:** the change request often breaks something (or pick a request likely to). Paste the broken behaviour description back; watch it fix. "Describe the bug like you'd describe a client revision."
**Students should notice:** the interview produced the spec; the spec produced the tool; non-coders can read a file's *shape*; data privacy is checkable.
**Adapt:** the lab is exactly this, for their own friction. Spec template in `templates/`.
**Verify/reject:** anything involving uploads/accounts/payments is out of scope for tiny tools — flag it as the "now you need a real developer" line.

---

## Week 12 — An Agent Does Production Chores (Supervised)

**Artifact:** A live (or recorded) agent run organizing a messy project folder, with a wrong call caught at a checkpoint.
**Time:** 35 min. **Tools:** Claude Code or Codex on a *copy* of a messy demo folder. Recording backup in `demos/week-12/`.

**Stage 1 — show the mess.** A real-feeling folder: `final_v2_FINAL(3).png`, `untitled.psd`, `IMG_4421.jpg`, scattered exports. Everyone laughs in recognition.

**Stage 2 — the brief with checkpoints (paste):**
> This folder is a finished illustration project for client "Marrowbone Books." Plan first, act second. Step 1: propose a folder structure and a file-naming convention for this project — STOP and show me before touching anything. After my approval: rename and organize all files (never delete; move ambiguous items to /_review), draft alt text for each image into alt-text.md, build QA-CHECKLIST.md for client handoff, and write CHANGELOG.md logging every action and anything you were unsure about.

**Stage 3 — the checkpoint moment.** When it proposes the plan, REJECT one element out loud ("client name goes first in the convention — fix that") and approve the rest. This 20 seconds is the whole week's thesis: **checkpoints are where you stay the director.**

**Stage 4 — audit the run.** Open `CHANGELOG.md` and `/_review`. Find its uncertainty notes. Ask the room: "What did it decide that I never told it? Which of those was fine, and which would have hurt on a real client job?"

**Planned failure:** it will misclassify at least one ambiguous file or invent a slightly-wrong alt text — the changelog/`_review` folder catches it. If the run is flawless, show the prepared recording of one that wasn't.
**Students should notice:** plan-then-act; never-delete + review-folder as safety rails; the changelog as accountability; alt text still needs human verification against the actual images.
**Adapt:** their own (copied!) project folder in the lab, or the paper version: write the agent brief + checkpoint plan without running it.
**Verify/reject:** ALWAYS run agents on copies in class; reject any workflow without a human checkpoint before irreversible steps.

---

## Week 13 — Case Study Rewrite: Generic to Yours

**Artifact:** One project written up twice — AI-voice vs. human-voice with honest process disclosure.
**Time:** 30 min. **Tool:** Chat model + prepared diff page (`demos/week-13/`).

**Stage 1 — generate the generic version (knowingly).** Paste:
> Write a portfolio case study (150 words) for this project: [2-line description of a real project — use your own]. 

Read it aloud in a flat voice. Ask the room to call out the stock phrases ("seamless user experience," "passionate about," "stunning visuals"). Highlight them live.

**Stage 2 — the extraction interview (the real technique).** Paste:
> Don't write anything yet. Interview me about this project, one question at a time, hunting for: the constraint that hurt, the decision I'd defend in a fight, the thing I cut that I loved, what the client/audience actually said, and what I'd do differently. Max 6 questions.

Answer honestly, with specifics. THEN:
> Now write the 150-word case study using ONLY material from my answers. My phrasing where possible. No adjectives I didn't earn. End with one line disclosing how AI was used in the project and in this write-up.

**Stage 3 — side-by-side.** Show both. The room names the differences: specifics, stakes, voice, the disclosure line as a *trust* feature.

**Planned failure:** version 2 will still smuggle in 1–2 stock phrases. Find them, replace them with your own words by hand, on screen.
**Students should notice:** AI's best résumé/portfolio role is *interviewer and editor*, not author; specifics are non-extractable from a vague prompt — they live in the human; disclosure reads as confidence.
**Adapt:** lab = same two-stage process on a real project of theirs; works for CV bullets and cover letters identically.
**Verify/reject:** every factual claim about their own project (dates, results, role) — AI will inflate; deflate it.

---

## Week 14 — Three Capstone Shapes (Worked Examples)

**Artifact:** Three finished mini-capstones shown end-to-end, then live scoping of a student's idea.
**Time:** 30 min show + ongoing clinic. **Tools:** Prepared gallery (`demos/week-14/`) + chat model.

**Stage 1 — walk the gallery (15 min).** Three real shapes, each shown as friction → AI role → human role → time saved:
1. **Motion workflow:** brief → boards → shot list → AE checklist chain (Week 5 artifacts, assembled).
2. **UX prompt system:** the five Week 8 prompts, tuned to a student's recurring client type, as a reusable kit.
3. **Tiny coded tool:** the Week 11 generator, now with the Week 12 changelog habit.

For each: "What would make this capstone FAIL the quality bar?" (No real friction; no documented decisions; no disclosure; couldn't demo it to an employer.)

**Stage 2 — live scoping (one volunteer).** Paste:
> Act as a capstone advisor. My project idea: [student's idea verbatim]. Interview me briefly, then output a one-week build plan: scope cut to what's achievable in 6 hours of work, the AI-role/human-role split, the riskiest assumption to test first, and what "done" looks like. Be ruthless about scope.

**Planned failure:** the model will overscope or underscope; correct it live against the "6 hours" reality — modelling the advisor relationship students should run on themselves.
**Students should notice:** capstones are small and real; the scoping prompt is reusable; "riskiest assumption first" beats "start at the beginning."
**Adapt:** every student runs the scoping prompt in the lab clinic.
**Verify/reject:** reject any capstone that automates the student's *art* rather than their *friction* — redirect in person.

---

## Week 15 — The Instructor's Real AI Operating System

**Artifact:** Your genuine working system, shown honestly. Not aspirational.
**Time:** 20 min (Demo Day owns the session). **Tool:** Your actual setup + `demos/week-15/ai-os.html`.

**Show, in order:**
1. **Tools you actually pay for** and why (and what you cancelled — the cancellations are the credibility).
2. **Folder/naming system** for AI work: prompts library, process screenshots, iteration archives.
3. **Your 5 most-used prompts** (real ones, with the wear showing — the critique loop, the brief template, the extraction interview).
4. **One automation/agent workflow** you trust, and the checkpoint it must pass.
5. **Your refusals:** what you keep fully human, said plainly.
6. **Your review rhythm:** how you check what's changed (monthly tool check, one source you trust, what you ignore).

**Then the handoff line:** "Sora's consumer app died in April. Tools die. Systems survive. Your manifesto v2 and tool tracker are the system. Maintain those and you'll never be behind again."

**Students should notice:** the honesty (cancelled tools, refusals); the small number of prompts that matter; rhythm beats doom-scrolling.
**Adapt:** their AI OS Checklist deliverable mirrors these six headings.
**Verify/reject:** n/a — but if any claim in your own OS is aspirational rather than true, cut it before class. They can tell.
