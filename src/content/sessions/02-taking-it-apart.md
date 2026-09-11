---
title: Taking It Apart
description:
  The one week you build a number out of nothing — and then discover that your
  number and the official one were counting different things
week: 2
date: 2027-03-01
tags:
  - decomposition
  - definitions
spec:
  - every link in your chain is written down as a number with a reason beside it
  - someone else has audited your units, and whatever they found is marked or repaired on the page
  - you can say what your number was a number of, precisely enough to disagree with
links:
  - label: ACT Government Open Data — Bus_Stops_July_2017
    url: https://www.data.act.gov.au/d/4wpr-6t4f
---

Phones away for this one. You will want to look something up about twenty
minutes in, and not being able to is the exercise.

## The target

**How many bus stops are there in the ACT network?**

That is the whole brief, and it is deliberately underspecified. You will not be
told what counts as a stop. Notice, later, when that starts to matter.

This is the only week of the semester whose central activity is building a
number from scratch. Every week after this one works on estimates that already
exist --- yours, somebody else's, or an institution's. So take the chance to
find out what you actually do when nobody hands you a starting figure.

## Three passes

**Pass one --- build the chain.** In groups, get from something you know to the
thing you don't, in as few steps as you can manage. There is no prescribed
route. Suburbs, routes per suburb, stops per route is one chain; kilometres of
road and stops per kilometre is another; buses in the fleet and stops per bus's
run is a third. Whichever you pick, every link is a number **and** a reason,
written where a stranger can read both.

The smallest set of sub-quantities that gets you there is usually smaller than
the first one you write. Try to delete a link.

**Pass two --- audit somebody else's units.** Swap chains with another group.
Your job is not to argue with their numbers; it is to check that each
multiplication produces the unit it claims to. Stops-per-route times routes
gives stops. Stops-per-route times suburbs gives nothing at all --- and a chain
that quietly produces "stops per suburb per route" has a bug in it that no
amount of better guessing will fix.

This is the cheapest structural check in the course and almost nobody runs it
unprompted. It is also only a necessary condition, not a sufficient one:
stops-per-route times routes is dimensionally impeccable and still counts a
stop served by four routes four times. Units passing tells you the chain is
not nonsense. It does not tell you the chain is right.

**Pass three --- mark the weak link.** Circle the one number in your own chain
you would least like to defend if someone pushed. Don't fix it. Just mark it.
We come back to exactly this instinct next week, and sharpen it into something
more useful than a hunch.

## What the record actually says

The ACT Government publishes a bus stop dataset on its open data portal. The
counts below were not read off the portal page; they come from querying the
linked file directly while this session was being prepared. That is all the
record says:

- **2,581 rows.**
- **2,581 distinct `stop_id` values** --- so every row carries its own
  identifier.
- **2,570 distinct `stop_name` values** --- eleven fewer than there are rows,
  which tells you some names repeat, not how many names or how often.
- Each row carries a name, an id, and a latitude and longitude.

Two things that figure is not.

It is not a 2027 count. The dataset is a **July 2017 snapshot**, and it is the
most recent bus stop extract the portal publishes openly; the current stop list
lives in Transport Canberra's GTFS feed, which needs an access key. You
estimated the network you can see out the window. The record describes the
network of a decade ago.

And it is not, on its own evidence, a count of physical stops. It is a count of
**stop records**. Whether two records at the same intersection are two stops or
one stop with two sides, whether a shelter and an unsheltered pole both count,
whether a stop served by four routes is one thing or four --- the dataset does
not say. That shortfall of eleven is a hint that something is going on, not an
answer.

## Comparing definitions, not just numbers

So don't ask yet whether you were close. Ask, in your group:

- What were **you** counting? Write it as a sentence someone could disagree
  with. "Places a bus stops" and "poles you could stand at" are different
  sentences and different numbers.
- What is the **dataset** counting? Say what you can support from what is above,
  and say where you would have to guess.
- If your number and 2,581 differ, how much of the gap is ten years of network
  change, how much is the two of you counting different things, and how much is
  your chain being wrong?

That third question usually cannot be settled, and saying so is the correct
answer rather than a failure. Two careful people can produce different honest
numbers for the same question because they were answering different questions.
An estimate whose target is undefined is not precise enough to be wrong.

## What you hand in

One page from each group: the chain, the units audit somebody else wrote on it,
the circled weak link, and the sentence saying what your number was a number
of. Bring it back in week 3 --- we will be reading someone else's estimate then,
and it helps to remember what your own looked like from the inside.
