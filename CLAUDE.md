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

## Course facts

**Back of the Envelope** (`SLOP2896`). Central question: *"How wrong can you
be, and still be useful?"* Thesis: *"This course teaches quantitative judgment
by treating the chain of assumptions and uncertainty --- not numerical
precision alone --- as the real deliverable."*

Arc: Weeks 1--4 method, Weeks 5--8 evidence and other people, Weeks 9--12
consequence and accountability. Assessments: Calibration Diary (45%), Client
Estimate & Estimate Court (55%). Week 1 is currently the preferred
lecture-deck week --- open to revision if content review shows another week
would make a stronger deck.

## Back of the Envelope: guardrails

1. **Every week earns its place in the argument.** Each session must make a
   substantive, recognisable contribution to the central question, in its own
   language --- not restate it verbatim, not merely gesture at it. *Human
   review.*

2. **Method discipline across the semester.** No week may drift into
   Statistics 101 as its method, judged against the course's plain-language
   approach as a whole --- not by keyword. Week 2 is the only week whose core
   mechanic is a from-scratch Fermi/decomposition exercise. Every later week
   must introduce a genuinely different source of uncertainty, evidence,
   disagreement, stakes, time, or accountability. *Human review.*

3. **Assumptions and uncertainty stay visible, without a fixed template.**
   Every estimation activity (week content and both assessments) must make its
   assumptions visible and individually justified; the form --- list, prose,
   table --- is each week's choice. *Human review.*

4. **Concrete anchors, not generic filler.** Every week must rest on a
   concrete, checkable real-world anchor. A simulation or role-play --- the
   Week 7 negotiation, the Week 11 Estimate Court --- is fine when it is
   explicitly derived from or constrained by a real case, dataset, document,
   event, or realistic external constraint. What is not fine is an invented
   generic scenario that could be swapped into any other week without loss.
   *Human review* --- whether an anchor is substantive is a judgment, and no
   field's presence would prove it, so no check is proposed.

5. **Periodically compare weeks side by side.** Before treating a batch of
   weeks as done, open two contrast sets and confirm each differs in purpose
   and activity, not just terminology: Weeks 1, 6 and 11 for broad semester
   progression, and Weeks 5, 6 and 8, which are the weeks most at risk of
   blurring into "reason about numbers other people produced". *Human review.*

6. **Assessments visibly grow from specific weeks.** Each assessment must
   declare `related` references to the teaching weeks it draws on --- the
   field ships with the content schema and drives the site's graph edges ---
   and must read as growing from those weeks rather than as a generic
   assignment brief. *Human review* for whether the alignment is substantive;
   *possible future spec check* that each assessment declares such references
   and that they resolve. The 100%-weight total is already covered by the
   existing `course-structure.test.ts` check.

7. **Cross-week and cross-assessment dependencies must be verified, not
   assumed.** Before a later week or assessment is designed to consume an
   artifact from an earlier week --- a range, a ledger, a retained record ---
   confirm the artifact actually exists in the implemented page, by citing the
   line. A planning note that an artifact exists is not evidence that it does.
   *Verified by citation at design time, not by a test.*

None of the above may be replaced by a keyword check or a proxy metric.
Additional frontmatter fields are permitted by the schemas, but a field
invented to make quality machine-testable --- a `form` string, an `anchor`
flag --- proves only that someone typed it, so don't add one. Whether a week
sounds generic, whether an assumption is defensible, and whether two weeks
genuinely differ are judgments for review, not tests.

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

The project-specific contracts for this deliverable are the course facts and
the six guardrails above.
