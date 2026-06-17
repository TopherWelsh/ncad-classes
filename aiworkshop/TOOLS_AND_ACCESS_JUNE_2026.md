# AI Tool Landscape — June 2026 Teaching Notes

**Check this list before the first class and lightly update during the term.** Tool names change, features move, models get retired (Sora's consumer app was retired in April 2026 — proof that nothing here is permanent), and pricing shifts. Capability *categories* are stable; product names are not.

**The instructor rule:** Never teach one tool as permanent. Teach the decision pattern: **problem → input → output → risk → verification.**

---

## Quick Reference: What We Actually Use Each Week

| Weeks | Primary tools | Backup if unavailable |
|---|---|---|
| 1–3 | ChatGPT or Claude (free tier OK) | Either one; paper fallback exists |
| 4 | Firefly/Photoshop generative, ChatGPT Images, Midjourney (demo) | Free-tier image gen, instructor demo + critique track |
| 5–6 | Chat model + image model + one video tool (demo only) | Prepared clips/screenshots |
| 7–8 | Chat model + Figma (existing student accounts) | Paper wireframes + chat model |
| 9 | Chat model + Blender (free) | Prepared scripts, screenshots |
| 10 | Transcription tool + chat model with image input | Phone voice memo + manual captions |
| 11–12 | Claude Code or Codex (instructor demo), free chat for specs | Spec-writing track needs no tools |
| 13–15 | Chat model | Paper + peer review |

One paid frontier-model subscription (~€20–25/month) covers a student for the whole course. Free tiers + pairing cover everyone else.

---

## Core Text and Multimodal Assistants

The "chat" models. All are multimodal (text, images in/out, file uploads); differences are in voice, reasoning depth, and ecosystem.

- **ChatGPT (OpenAI — GPT-5.5 family as of April 2026).** Broad default. Strong at briefs, critique, research planning, coding, and image generation (ChatGPT Images 2.0 leads on text rendering inside images — useful for design mockups). Free tier exists with rate limits; Plus tier is the workshop's recommended baseline.
- **Claude (Anthropic — Opus 4.8 / Fable 5 family).** Strong writing voice, long documents, careful structured thinking, critique, and coding. Currently the strongest coding model — relevant to Weeks 11–12. Free tier exists; Pro recommended.
- **Gemini (Google — 3.x family).** Strong Google ecosystem integration (Docs, Drive, NotebookLM), long context, good multimodal/video understanding. Free tier generous. NotebookLM is excellent for research-source grounding (Week 3).
- **Perplexity-style research tools.** Source-linked answers; better than raw chat for "find me real references" — but links still require verification. Week 3 staple.

**Classroom stance:** students pick ONE chat model and learn it properly rather than tool-hopping. Demos alternate between ChatGPT and Claude so both communities see their tool.

## Image Generation and Editing

- **Adobe Firefly + Photoshop generative features.** Safest classroom fit: trained on licensed/Adobe Stock content, lives inside production tools students already use, and NCAD students typically have Creative Cloud. Generative Fill/Expand are the Week 4 workhorses.
- **ChatGPT Images / Gemini image generation.** Strong instruction-following and text rendering; good for layout roughs, previs, and iteration inside a conversation.
- **Midjourney (v8).** Strongest stylized aesthetics; subscription-only, Discord/web. Use as instructor demo unless students already subscribe. Discuss its training-data controversies honestly — it's the canonical ethics case.
- **Krea / Leonardo / Reve-style tools.** Fast iteration, real-time canvas tools, layout-aware editing (Reve 2.0). Free tiers shift constantly — verify before teaching.
- **Upscalers (Topaz, Magnific-style).** Mention in Week 4/10 as finishing utilities; demo only.

**Rights note for all image tools:** policy on commercial use, training-data sourcing, and indemnification varies by tool and tier. Firefly is the conservative recommendation for client-facing work; this is itself a teachable decision pattern (Week 4, Week 7).

## Video Generation and AI-Assisted Video

- **Google Veo 3.x.** Current quality leader for text/image-to-video with audio. Access via Gemini tiers/Flow; limits change often — verify.
- **Runway (Gen-4 family).** The most production-oriented suite: motion control, references, plus practical post tools (green screen, inpainting). Runway Academy is good teaching material (Week 5).
- **Kling / Luma / Pika.** Fast iteration, image-to-video, effects. Free credits fluctuate. Sora 2's consumer app was retired April 2026 — use as the "tools die" case study (Week 15).
- **Classroom reality:** video generation is demo-territory, not lab-territory: credits are expensive, queues are slow, and the pedagogy (previs, boards, shot planning) works better with image + text tools anyway. Weeks 5–6 are built accordingly.

## Audio, Voice, and Music

- **Whisper-class transcription** (built into many editors; standalone apps; Descript). Captions, transcripts, edit-by-text. Week 10 workhorse — free options exist.
- **ElevenLabs-style voice synthesis.** Temp VO, accessibility reads, scratch narration. **Voice consent is a hard rule** — no cloning real people without documented permission (Week 10 ethics block).
- **Suno/Udio-style music generation.** Mention only: rights situation contested (ongoing label litigation); scratch tracks in private work only, never client deliverables. Flag as "verify legal state before any real use."

## 3D and Spatial

- **Blender + AI-written Python.** The reliable, free, genuinely useful combo: scene scaffolds, repetitive setup, material/render checklists (Week 9 core).
- **Meshy / Tripo-style mesh generators.** Image/text-to-3D. Outputs need retopology — that's the lesson, not a flaw to hide (Week 9's "Topology Reality Check").
- **Gaussian splat / NeRF capture tools (Luma, Polycam).** Phone-based capture for reference and previs; fun, accessible, free tiers.

## Coding and Agentic Tools

- **Claude Code (Anthropic) and Codex (OpenAI).** Terminal/IDE agents that read and edit real project files, run commands, and build small tools. Weeks 11–12 core demo tools. Instructor account is enough; students write specs and watch builds, or use free chat models to generate single-file tools.
- **Cursor / Windsurf-style AI editors.** For students already coding; mention, don't require.
- **Lovable / Bolt / v0-style app builders.** Chat-to-deployed-app. Fast prototypes; students must learn to inspect and revise the output, not just accept it (Week 11 caution block).

## Research and Organization

- **NotebookLM-style grounded notebooks.** Upload sources, get cited answers/audio summaries. The "RAG you can show" demo (Weeks 3, 12).
- **Built-in deep-research modes** (ChatGPT/Gemini/Claude). Long cited reports; good for Week 3 and Week 13 (job/market research). Always paired with verification habits.

---

## Account and Access Policy

**Recommended student kit (≈€20–25/month):**
- ONE of: ChatGPT Plus or Claude Pro. That covers Weeks 1–15.
- Optional for coding-curious students: Claude Code / Codex access (often included in the above tiers at limited rates — verify current bundling).

**The free-tier path (fully supported):**
- Free ChatGPT/Claude/Gemini covers most chat-based labs (rate limits = built-in iteration discipline).
- Image labs: Firefly via NCAD Creative Cloud where available; otherwise free tiers + pairing.
- Pairs/teams: one account per pair is always acceptable; labs are designed for it.
- Every lab has a zero-generation track (planning/critique/documentation) requiring at most a free text model.

**Institutional notes:**
- Check whether NCAD's Adobe licence includes Firefly generative credits (it usually does; quota varies).
- Students under 18: not expected at NCAD, but tool ToS minimum ages vary — flag if running outreach versions.
- **EU/Irish context:** GDPR applies to anything personal students upload; the EU AI Act's transparency obligations (synthetic-media labelling) are phasing in — disclosure habits taught here are about to be law, not just ethics. Useful framing for admin conversations.

**Data hygiene rules (post in classroom, repeat in Week 1 and Week 12):**
1. No client work, classmate artwork, or personal data of others into any tool without permission.
2. Assume anything uploaded may be retained — check each tool's training-data opt-out and use it.
3. Turn off chat-history training where the option exists; prefer business/edu tiers for sensitive work.
4. Generated content of real people (face/voice) requires documented consent. Always.

---

## When This Document Goes Stale

It will. Re-verify each term:
- [ ] Model names/versions in the Core Assistants section
- [ ] Free-tier limits (image counts, message caps)
- [ ] Video tool access routes and credit pricing
- [ ] Adobe/NCAD licence coverage
- [ ] Music-generation legal status
- [ ] EU AI Act implementation dates relevant to disclosure teaching
- [ ] Each weekly page's "Verify before teaching" resource flags (see `PRODUCTION_NOTES.md`)
