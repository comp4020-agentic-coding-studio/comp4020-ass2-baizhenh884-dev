---
title: The assumption you didn’t notice you made
description:
  Week 3 — why an estimate’s fragility concentrates in a few inputs, why people
  audit the wrong ones, and why hindsight makes this look easier than it was
week: 3
date: 2027-03-08
related:
  - sessions/03-naming-your-assumptions
---

Last week you built a chain and circled the link you least wanted to defend.
That instinct is worth having and it is usually pointed at the wrong link.

## Fragility is not spread evenly

An estimate with a dozen assumptions is not a dozen small risks. Ordinarily one
or two of them carry the answer, and the rest could be substantially wrong
without moving the result enough to change any decision made on it. Finding
which is which requires no machinery: take an assumption, ask what happens to
the answer if it is off by a factor you would not be shocked by, and see whether
the conclusion survives.

Do that to every link and the estimate sorts itself into the ones that matter
and the ones you can stop arguing about.

## The wrong ones get audited

People do audit their assumptions. They just tend to audit:

- the **visible** ones --- the numbers written most prominently, or last;
- the **contested** ones --- whatever someone in the room already objected to;
- the **uncertain-feeling** ones --- the inputs that make the author
  uncomfortable.

None of those is the criterion. The criterion is consequence: **rank by
consequence before likelihood**, and expect the two orderings to be almost
unrelated.

An assumption you are ninety-nine per cent sure of can be the one carrying the
whole answer, in which case that remaining one per cent is the only risk in the
estimate worth your attention. An assumption you would put at even odds can move
the result by two per cent, in which case debating it is a way of feeling
rigorous without being rigorous. Comfort is not a measure of importance, and an
audit that follows discomfort will reliably miss the load-bearing input --- often
because a load-bearing assumption is invisible precisely because nobody thought
it needed stating.

## Hindsight makes this look easy

Today's case is a real estimate whose outcome is known, and that is a trap as
well as a teaching aid.

Once you know how something turned out, the assumption that failed acquires a
glow. It looks obvious. It looks like the people involved should have seen it,
and the case reads as a story about carelessness. That reading is comfortable
and mostly useless.

It is worth separating two things that hindsight welds together: assumptions
that were **knowable** at the time and simply not checked, and assumptions that
were **not knowable** --- open questions nobody had answered yet. The first is a
lesson you can act on. The second is a fact about working at the edge of what is
known, which is where interesting estimates live.

And the reason to be careful here is not fairness to the dead. It is that your
own estimates are full of load-bearing assumptions you cannot currently see, for
exactly the reasons that made theirs invisible. A story about other people's
negligence teaches you nothing about that. A story about which assumptions were
findable, and how, might.

## A note on what we will not do

The case comes with two famous figures attached, decades apart. We will not
divide one by the other. Different currencies, sixteen years of inflation,
changes of scope, changes of designer --- a ratio across all of that is a precise
number about nothing, which is the error week 1 spent its whole session on.

We are not here to measure how wrong the estimate was. We are here to ask what
it was standing on.

## Outline

- your circled link, and why it's probably the wrong one
- fragility concentrates
- consequence versus likelihood
- knowable and not knowable
- why we're not computing an overrun
- next week: how to say what you know
