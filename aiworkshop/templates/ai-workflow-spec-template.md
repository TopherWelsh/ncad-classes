# AI Workflow Spec

For any repeatable AI-assisted process — especially agent workflows (Week 12) and capstones (Week 14). If you can't fill this in, the workflow isn't ready to automate.

**Litmus test:** automate **friction**, never **judgment**. Every judgment moment below should appear as a human checkpoint.

---

## Workflow Name
Short, functional. ("Client handoff packager," not "AI magic helper.")

## Problem It Solves
The specific friction, with honest frequency. ("Every project ends with 90 minutes of renaming, exporting, and checklist-writing. Twice a month.")

## Trigger
When does this run? (End of project / every Friday / when a folder appears.)

## Inputs
Exactly what goes in: files, folders, text, formats. Note anything sensitive — client material, other people's work, personal data — and the permission status for each.

## AI Steps
Numbered. Each step: what the model/agent does, with what tool access (read files? write files? run commands? internet?). Smallest access that works.

## Human Checkpoints
Where the process STOPS for review. Minimum one before anything irreversible (sending, deleting, publishing). For each checkpoint: what you check, and what would make you reject.

## Outputs
Exactly what comes out, where it lands, how it's named.

## Risks
What could go wrong, ranked: wrong-but-obvious (annoying) vs. wrong-but-plausible (dangerous). Plausible-wrong items need a verification step, not just a glance.

## Safety Rails
Non-negotiables: never delete (move to `/_review`); run on copies until trusted; changelog every action; uncertainty gets flagged, not guessed.

## Disclosure Needed?
Does anyone downstream (client, collaborator, assessor) need to know AI was involved? What will you say? (See `portfolio-ai-disclosure-language.md`.)

## Verification Method
How you'll confirm it worked — per run, not per month. (Spot-check 3 files? Diff the checklist against the deliverables? Read the changelog?)

## Time Honesty
Time the manual version once. Estimated time saved per run: ___ . Setup + supervision cost: ___ . If saved < cost after a month, kill the workflow — that's success too, you learned where judgment lives.
