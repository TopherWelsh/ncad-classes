# Tiny Tool Spec

Week 11's deliverable; the input to any AI build. A tool you can't spec is a tool you can't trust. Keep it tiny: one user (you), one problem, one file if possible.

**Scope rule:** if it needs accounts, payments, or other people's data — it's not a tiny tool. Stop and rethink.

---

## Tool Name
Functional, not cute (okay, slightly cute).

## User
Usually: you, on deadline, tired. Write that down — it shapes every decision.

## Problem (the friction)
The recurring annoyance, with honest frequency. "Every time I start a moodboard I rewrite the same prompt scaffold from memory. ~3×/week, 10 minutes each."

## Inputs
What the user types/selects/pastes. Keep it under 6 fields.

## Outputs
Exactly what comes out, in what format, and what the user does with it next (copy? download? print?).

## UI Sketch (in words or a drawing)
Top to bottom: what's on the screen. Include the exact button labels and the empty-state text. Microcopy is design.

## What It Does NOT Do
The feature-creep fence. ("Does not save anything. Does not connect to the internet. Does not have settings.")

## Acceptance Checks
3–5 testable sentences. "When I fill the fields and press Generate, a structured brief appears with a working Copy button. It works on my phone. Nothing is sent anywhere."

## Build Prompt (assembled from the above)

> Build this as a single self-contained HTML file, no frameworks, no build step, mobile-friendly, pleasant typography. [PASTE SPEC]. When done, tell me how to open it and list 3 things you'd improve with more time.

## Inspection Questions (run after the build — Week 11 habit)

> Walk me through this file like I'm an artist, not a programmer: what are the three main parts, where does my data go when I type it, and does anything leave my computer?

## Honest Ledger
Time to spec: ___ Time to build: ___ Time saved per week once real: ___
