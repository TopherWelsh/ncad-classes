# Course Glossary

Plain-language definitions tied to creative practice. Each weekly handout repeats the 6–12 terms that matter that week — this is the full reference.

**How to read a definition here:** first sentence = what it is. Second sentence = why an artist should care.

---

## How the Machines Work

**LLM (Large Language Model)** — A system trained on enormous amounts of text to predict likely next words, which turns out to produce useful writing, analysis, and conversation. It predicts plausibility, not truth — which is why it needs your verification.

**Token** — The chunk-of-text unit a model actually reads and writes (roughly ¾ of a word in English). Pricing, speed, and length limits are all counted in tokens.

**Context window** — The model's working memory: everything it can "see" in the current conversation, including your uploads. When a long chat starts forgetting your brief, you've outgrown the window — restate or restart.

**Training data / dataset** — The collection of text/images/audio a model learned from. For artists this is the ethical centre of gravity: much of it was scraped without consent, which is why provenance and tool choice matter.

**Weights / model** — The learned numbers that store everything a model "knows." When people say a model was "trained on" something, they mean it adjusted these numbers — it does not store or collage your images directly.

**Multimodal model** — A model that handles more than text: it can look at images, hear audio, sometimes watch video, and generate them back. This is why you can screenshot your layout and ask for critique.

**Diffusion model** — The dominant image/video generation approach: it learns to turn noise into images step by step, steered by your prompt. Understanding "steered denoising" explains both the magic and the mush.

**Latent space** — The compressed map of visual concepts inside a generative model, where "moody," "Bauhaus," and "underwater" are directions you can move in. Prompting is navigation, not search — nothing is retrieved, everything is synthesized.

**Hallucination** — When a model confidently invents facts, sources, artists, or details that don't exist. Not lying — it has no concept of truth, only plausibility. Treat all names, dates, quotes, and citations as unverified until checked.

**Model bias** — Patterns and defaults a model inherits from its training data: who gets pictured as a "CEO," what "beautiful" defaults to, whose art history is overrepresented. Your counter-move is specific direction and diverse references.

**Reasoning model / chain of thought** — Models that "think out loud" through steps before answering. Better at planning and logic; the visible reasoning *looks* rigorous but can still be confidently wrong — judge the answer, not the performance.

**Temperature** — A setting for how predictable vs. adventurous outputs are. Low = consistent and safe; high = varied and weird. Some tools expose it, some hide it.

**Seed** — The random starting number behind a generation. Same seed + same prompt ≈ same image, which is how you make controlled variations instead of rerolling everything.

**Fine-tuning** — Additional training that specializes a model on a narrower set of examples (a brand voice, a character, a style). Powerful and ethically loaded when the examples aren't yours.

**Model collapse / drift** — Quality degradation when models train on AI-generated content, and the general tendency of outputs toward the average. The internet filling with slop makes *distinctive human work more valuable*, not less.

## Talking to the Machines

**Prompt** — Everything you give the model: instruction, context, references, constraints, examples. The output quality ceiling is set by the brief quality — same as briefing a junior designer.

**System prompt** — Standing instructions that frame every response (role, tone, rules) before your message arrives. Custom instructions/projects features let you set your own — like giving a collaborator a persistent job description.

**Constraints** — The limits you set: format, length, palette, audience, what to avoid. Constraints are where creative direction lives; prompts without constraints produce averages.

**Style reference** — A description (or uploaded image) defining the visual qualities you want — named as qualities ("flat colour, heavy grain, 1970s print misregistration"), not as a living artist's name. The consent line of this course.

**Negative prompt / "avoid" list** — Explicitly stating what you don't want. Often the fastest fix for generic output.

**Critique loop** — Feeding work (yours or the model's) back with specific criteria and asking for structured criticism, then deciding what to act on. The single highest-value AI skill for artists — it works even if you never generate an image.

**Iteration** — Generating multiple versions, rejecting most, refining survivors. The reps are cheap now; the *selection* is the skill.

**Few-shot / examples** — Showing the model 1–3 examples of what good looks like instead of describing it. The fastest way to transfer your taste into the output.

**Deep research mode** — Assistant features that browse, gather, and synthesize sources into a cited report. Great for territory-mapping; every citation still gets clicked and checked.

## Image, Video, and Audio Generation

**Text-to-image** — Generating images from a written description. Best understood as a sketching and exploration tool, not a finished-art machine.

**Image-to-image** — Generating from an existing image plus instructions: your rough becomes the structure, the model adds rendering. The "strength" control decides how much of your original survives.

**Inpainting** — Regenerating a selected region inside an image (Photoshop's Generative Fill is inpainting). Production use: fixes, extensions, object removal — with your hand choosing what changes.

**Outpainting** — Extending an image beyond its original edges (Generative Expand). Useful for reformatting one key visual across campaign sizes.

**Upscaling** — Increasing resolution with a model that invents plausible detail. Inspect the invented detail before print — it can hallucinate texture exactly where it matters.

**Structure control (ControlNet-style)** — Steering generation with a pose, sketch, depth map, or layout so composition obeys you while rendering varies. The bridge between "rolling dice" and "directing."

**Text-to-video / image-to-video** — Generating moving footage from prompts or stills. Currently strongest for previs, mood, and pitch material; weakest at continuity and art direction — plan accordingly.

**Continuity (in generative video/character work)** — Keeping characters, costumes, props, and lighting consistent across shots/views. The classic failure mode of generative pipelines, and why character sheets and shot bibles matter more with AI, not less.

**Voice synthesis / voice cloning** — Generating speech, optionally in a specific person's voice. Temp VO and accessibility are legitimate; cloning real people without documented consent is not — ever.

**Transcription (Whisper-class)** — Speech-to-text. The quiet workhorse: captions, interview notes, edit-by-text, searchable footage.

**Synthetic media** — Any AI-generated or AI-altered image/video/audio. The EU is phasing in labelling obligations — disclosure is becoming law, not just courtesy.

**Watermarking / Content Credentials (C2PA)** — Embedded metadata recording how media was made and edited (Adobe's Content Credentials is the big one). Provenance infrastructure you'll meet in client and platform requirements.

## Retrieval, Agents, and Automation

**Retrieval / RAG (Retrieval-Augmented Generation)** — Giving a model a specific set of documents to ground its answers in, instead of relying on training memory (NotebookLM is RAG you can see). Grounding shrinks hallucination; it doesn't eliminate it.

**Grounding / citation** — Tying model claims to checkable sources. The difference between "the model said" and "this source says, and I checked."

**Agent** — An AI system that doesn't just answer but *acts*: breaks a goal into steps, uses tools, reads/writes files, checks results, and continues. Think extremely fast intern with no judgment and no stake in the outcome.

**Tool use** — An agent's ability to operate other software: run code, search, edit files, call services. Capability and risk both come from here.

**Workflow automation** — Wiring repeatable multi-step processes to run with minimal supervision. The artist's question is always: which steps are friction (automate) and which are judgment (never).

**Human-in-the-loop / checkpoint** — Designed pause points where a person reviews before the process continues. The difference between delegating and abdicating.

**Vibe coding** — Building software by describing what you want and letting AI write the code, inspecting results as you go. Legitimate for tiny tools and prototypes; reckless for anything handling other people's data or money.

**Script** — A small program that does one job (rename these files, build this scene). The unit of artist-useful code — small enough to read, test, and trust.

**API** — A doorway that lets programs talk to each other (your tiny tool calling a model, for instance). Metered by tokens; keep keys secret.

## Craft and Pipeline Words (the human side)

**Creative brief** — The structured statement of project, audience, goal, constraints, references, and success criteria. This course's core move: AI quality is downstream of brief quality.

**Moodboard** — A curated collection of references defining a visual direction. With AI: generate wide, curate hard, and keep provenance of what's real vs. synthetic.

**Visual territory** — A named, specific aesthetic direction with qualities, references, and exclusions ("Soviet space-race optimism," not "retro"). Three strong territories beat thirty vague images.

**Storyboard** — Sequential frames planning narrative/motion work. AI can rough them fast; timing and acting choices remain the artist's.

**Shot list** — The production table of every shot: duration, action, camera, assets. Prime AI territory — structured, tedious, checkable.

**Style frame** — A single fully-resolved frame establishing the look of a motion piece. AI gets you to candidate looks faster; the pick and the polish are taste.

**Animatic** — Storyboard frames cut to time with scratch audio. The cheapest place to find timing problems — AI temp VO and roughs make animatics nearly free.

**Model sheet / character sheet** — Reference views and details that keep a character consistent across shots and artists. With generative tools these become *more* critical (see Continuity).

**Wireframe** — A deliberately low-fidelity screen layout showing structure before styling. Keep AI wireframes grey and ugly on purpose — polish hides thinking.

**Persona (UX)** — A sketch of a user type. AI-invented personas are *hypotheses wearing name tags* — label them as assumptions until real research exists.

**Task flow** — The step-by-step path a user takes to accomplish a goal. AI is good at drafting them and great at finding the unhappy paths you forgot.

**Design system** — Reusable rules and components (type, colour, spacing, parts) that keep design coherent at scale. AI can draft tokens and audit consistency; the system's *opinions* are yours.

**Design tokens** — Named values (colour, spacing, type sizes) that carry a design system into code. AI translates between design intent and tokens well — verify the contrast maths.

**Retopology** — Rebuilding a 3D mesh with clean geometry so it deforms and renders properly. AI-generated meshes almost always need it — "free model" usually means "paid in cleanup."

**Topology** — The structure/flow of a 3D mesh's polygons. The thing AI mesh generators get wrong, and the first thing a professional checks.

**PBR material** — Physically-based rendering material (how surfaces respond to light). AI writes plausible material setups and render checklists; your eye judges the result.

**Alt text** — Written descriptions of images for screen-reader users. AI drafts them fast; humans verify accuracy and tone. Accessibility is a deliverable, not a favour.

**Captions / SRT** — Timed text for video. Auto-generated, human-corrected: names, terms, and line breaks are where machines fail and audiences notice.

**Case study** — The portfolio write-up of a project: problem, process, decisions, outcome. The artifact employers actually read — and the place AI-voice genericness does the most damage.

**Versioning** — Systematic naming/saving of iterations so the process is recoverable and provable. Boring, automatable, and the backbone of process documentation.

**QA checklist** — The pre-delivery verification list (specs, spelling, contrast, exports). Perfect agent territory — with a human signature at the bottom.

## Ethics, Rights, and Disclosure

**Copyright** — Legal ownership of creative work. Two live questions for AI: was the training lawful (contested, jurisdiction-dependent), and is the output protectable (purely AI-generated work generally isn't; your substantial human authorship is what makes it yours).

**Fair dealing / exceptions (EU/Ireland)** — Narrow legal carve-outs for uses like quotation, parody, and research. Note: EU text-and-data-mining exceptions are part of how training is argued to be lawful — with opt-outs for rightsholders. The law is moving; the habit of checking is permanent.

**Licence** — The permission terms attached to an asset, font, model output, or tool. "The tool let me generate it" ≠ "I can use it commercially." Read the tier you're on.

**Consent (in creative AI)** — Permission from the human whose style, face, voice, or work is being used. The workshop's bright line: living people require consent, full stop.

**Provenance** — The traceable origin story of an asset: where it came from, what made it, what changed it. Increasingly machine-readable (see Content Credentials) and increasingly demanded by clients and platforms.

**Disclosure** — Telling viewers/clients/assessors specifically what AI did in the work. Specific beats vague: "textures generated, then repainted by hand" earns trust; "AI-assisted" invites suspicion.

**Portfolio disclosure** — The disclosure habit applied to your own presentation: honest process notes that show your judgment. Done well, it's a *differentiator* — it proves you know where your value is.

**Slop** — Low-effort, high-volume AI content flooding feeds and stock sites. The market consequence: generic output is free now, so distinctiveness and trust command the premium.

**Style theft (colloquial)** — Prompting a system to imitate a specific living artist's signature look without consent. Legal status varies; community status doesn't — it's the fastest way to lose peers' respect.

**Deepfake** — Synthetic media presenting a real person doing/saying things they didn't. Beyond this course's bright line except as a critical literacy topic.

**Data hygiene** — Knowing what you upload, where it goes, and what the tool may retain or train on. Client work, classmates' art, and personal data of others stay out of tools without explicit permission.

**Opt-out** — Settings/registries that exclude your data or art from training. Know where the switches are — for your own work, and as a professional courtesy when handling others'.
