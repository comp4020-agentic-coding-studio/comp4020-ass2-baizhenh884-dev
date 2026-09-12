# Process overview

## What I built

**Back of the Envelope** (`SLOP2896`) asks how wrong you can be and still be
useful. It treats the chain of assumptions behind a number, not the number, as
the deliverable: twelve weeks, each introducing a different way an estimate
fails, assessed by a calibration diary and one estimate cross-examined in
front of the room.

## How I got here

Generating twelve weeks of plausible content is what an agent does easily. The
work was deciding in advance what counts as right, and where a machine can
settle that and where it cannot.

So the first thing I committed was a check that failed.
[`2746297`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-baizhenh884-dev/commit/2746297)
encodes only what needs no interpretation: my assigned course-code digits, a
session in each of twelve weeks, weights totalling 100, one lecture linked to
a real deck. It reads the built API, testing the shipped contract rather than
my intentions. The repo then held two starter sessions and a placeholder deck,
so it was red until the twelfth week landed. It has not changed since: a
constraint set before the scale-up, not a test fitted to the finished
artefact.

The harder call was what to keep out. What makes the course good — whether a
week earns its place, whether its anchor is a real case, whether two weeks
genuinely differ — became `CLAUDE.md` guardrails marked *Human review*
[`cdec7c6`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-baizhenh884-dev/commit/cdec7c6).
The obvious alternative was a frontmatter flag and a test asserting it,
rejected in the file itself: a field invented to make quality machine-testable
"proves only that someone typed it", and a green check there would replace the
reading rather than corroborate it. With both boundaries fixed I built one
week end to end — lecture, session, deck — and read it before scaling
[`3ac9feb`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-baizhenh884-dev/commit/3ac9feb).

Two episodes tested that split. A guardrail required that any artefact a later
week consumes be confirmed in the implemented page first
[`8c84316...3b5117b`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-baizhenh884-dev/compare/8c84316...3b5117b).
My own next assessment breached it: the Calibration Diary claimed seven
course-supplied entries, but the implemented weeks did not produce all seven,
and one conflicted with the Diary's own precommitment rule. The mandated
review cut the requirement to four and added the missing Week 8 connection. A
plan that an artefact exists is not evidence that it does.

The second was sharper because nothing failed. Every check passed while the
calendar put the teaching break in the wrong place: dates in range, twelve
weeks present, weights summing. Only comparison with the real ANU 2027
calendar caught it
[`8122054`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-baizhenh884-dev/commit/8122054),
and the fix propagated — moving Week 12 later pushed the session producing a
required submission item past the Diary's deadline, so that moved too.
Structural validity is not domain truth. Fluent prose needed the same
treatment against primary sources, and some of it did not survive
[`6fc32cf`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-baizhenh884-dev/commit/6fc32cf).

I also changed the working contract so the agent argued from evidence instead
of complying quietly
[`b75d144`](https://github.com/comp4020-agentic-coding-studio/comp4020-ass2-baizhenh884-dev/commit/b75d144).
Adding a "Home" nav item sounded trivial; under the Pages base path it would
have marked every page current. The rule surfaced that before I accepted the
change, and the comment left in `src/site-config.ts` records why the nav uses
`/.` instead of `/`. Bounded disagreement, not autonomy: each disputed item
waited for my approval.

If I redrew the line now, one thing would cross it. I treated feasibility
between dated artefacts as review work, but "an assessment must remain
completable after the activity it depends on" is an objective relation over
data I already hold. Encode the invariants that are stable and checkable;
reserve review for the judgments that would only be pretending to be tests.
