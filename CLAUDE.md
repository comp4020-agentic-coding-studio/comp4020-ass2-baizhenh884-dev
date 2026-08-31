# Your harness

This file is yours, and it arrives with no rules in it on purpose --- this note
is all there is, and it goes when you write your own. The rules you hold the
agent to are part of what gets marked, so they should be rules you decided on.

Nothing about the starter is recorded here. The platform under you is fixed and
documented in `README.md`, and the
[course website](https://comp.anu.edu.au/courses/comp4020-agentic-coding-studio/)
publishes this deliverable's brief and spec. Read both before you plan or build;
what the agent needs to carry from either is your call.

## How to work in here

- Keep the dev server running (`pnpm dev`) so you see changes as you make them.
- Run `pnpm check` before you push.
- Open the page in a browser and look at it. The rendered page is the truth;
  your mental model of it isn't.
- When a check fails, read its output before you change anything.
- Never commit a red state.

## This file is yours

A starting point, not a rulebook: what you add to it is the harness, and the
harness is assessed. This file and the sensors you wire into `check` carry
across the course. `spec/README.md` draws the line between what's fixed
platform and what's yours to build and test.

## Harness maintenance protocol

When we hit a repeated correction, a failed test, an incorrect assumption, an
issue caught in manual review, or a decision to throw out an implementation ---
pause before moving on. Ask whether it reveals a reusable working rule, not
just a one-off mistake.

If it does, propose one of:

- a change to an existing rule in this file, or
- a new automated check (a test, a lint rule, a script).

The proposal must state three things: the specific problem that triggered it
(what happened, where), the rule being proposed, and how we'll know the rule
is working (a check that fails if it's violated, or a concrete situation to
watch for next time).

Never edit this file to add or change a rule without my approval first --- show
the proposed diff and wait, every time, for every future change. This file can
hold both durable working constraints and current-project facts or contracts
--- a project-specific rule belongs here when it's explicit, testable, and
useful for directing the agent. It must not hold task lists or page-by-page
implementation plans; those live elsewhere. Because the course carries this
harness forward into next week's deliverable, review every project-specific
rule at that point --- update it, generalize it, or remove it if it no longer
applies --- rather than letting it silently persist. Once a change is
approved, commit it on its own, separate from unrelated work, so it can be
cited individually in `PROCESS.md`.

There are no project-specific contracts yet for this deliverable --- they'll be
added here as they're approved.
