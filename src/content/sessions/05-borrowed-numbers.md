---
title: Borrowed Numbers
description:
  Almost every number you will use was collected to answer somebody else’s
  question — today you write down what stands between their question and yours
week: 5
date: 2027-03-22
tags:
  - proxies
  - evidence
spec:
  - you can state, in one sentence each, what a dataset measures and what you wanted it to measure
  - your bridge from proxy to target is written as separate claims, not as one leap
  - you have named a condition under which your bridge stops holding, and how you would notice
links:
  - label: AEMO — definitions of "Consumption", "Demand", "Operational", "As Generated" and "Sent Out"
    url: https://www.aemo.com.au/-/media/files/electricity/nem/planning_and_forecasting/demand-forecasts/operational-consumption-definition.pdf
  - label: AEMO — Quarterly Energy Dynamics, Q3 2025
    url: https://www.aemo.com.au/-/media/files/major-publications/qed/2025/qed-q3-2025.pdf
---

Three weeks of work on numbers, and we have not yet asked where any of them came
from. Today we do.

## Start with the definition

The Australian Energy Market Operator publishes a short document whose only job
is to say what its words mean. Here is part of it, exactly as AEMO writes it:

> "Operational refers to the electricity used by residential, commercial and
> large industrial consumers, as supplied by scheduled, semi-scheduled and
> significant non-scheduled generating units."

And, four lines later:

> "It does not include demand met by rooftop solar PV (i.e. Operational
> consumption decreases as rooftop PV generation increases)"

Read the second quote until it is uncomfortable. AEMO is telling you, in its own
definition sheet, that this number goes **down** when rooftop solar goes **up**
— and that this is the measure working correctly, not failing.

Operational demand is a well-defined quantity, measured carefully, published
regularly by the body responsible for it. Everything in this session assumes it
is right. The question is a different one: right about what?

## Build the bridge

Suppose the thing you want to know is how much electricity Australians actually
use. Operational demand is the number sitting in front of you. Between the two
there is a bridge, and today the whole exercise is to write it down.

In pairs, get from the published figure to your target one claim at a time.
Something like:

1. Operational demand measures electricity supplied through the grid by
   generators of a certain size and type.
2. Total consumption is that, plus everything supplied some other way.
3. In 2005, "everything supplied some other way" was small enough to ignore for
   most purposes.
4. Therefore, in 2005, operational demand was close to total consumption.

Four claims, and only the fourth is the one you wanted. Notice what step three
is doing: it is holding the whole bridge up, it is about the state of the world
rather than about the data, and nobody publishes it anywhere.

Now change the year to 2025 and read step three again.

AEMO itself keeps both quantities in view; its quarterly reporting refers to
**underlying demand** alongside operational demand precisely because the two
have come apart. The gap between them is not an error anybody made. It is
rooftop solar, doing what it does, on the far side of the meter where the
measurement does not reach.

## A number that will not let you ignore the difference

Here is the line from AEMO's report for the third quarter of 2025:

> "NEM-wide minimum operational demand reached a new Q3 low of 10,175 MW in the
> half-hour ending at 1300 hrs on 14 September 2025. This was driven by mild and
> sunny conditions in south-eastern Australia yielding high distributed PV
> output during a period of low underlying demand."

Same day, South Australia:

> "South Australia recorded new Q3 minimum operational demand at -14 MW"

Minus fourteen megawatts.

Nobody unconsumed any electricity in South Australia that afternoon. The state
was using power the entire time. What the negative sign records is that grid
supply, as AEMO defines and measures it, briefly went the other way while
rooftop systems carried the load — and AEMO's number reports that faithfully,
because that is the quantity AEMO set out to measure.

Treat the figure as neither a glitch nor a scandal. It is the clearest possible
demonstration of the thing your bridge was quietly assuming. A reading below
zero cannot be read as total consumption by anybody, under any interpretation.
On a mild sunny afternoon the distance between the two quantities has grown
large enough that the proxy stops being able to impersonate the target at all.

Which raises the question the rest of the session is about: on an ordinary
Tuesday in June, when operational demand reads like a perfectly plausible amount
of electricity, how would you have known?

## Your own borrowed numbers

Everyone has done this. Write down one number you have used, or seen used, as
though it were the thing itself:

- hours of screen time, standing in for attention;
- a mark, standing in for what somebody learned;
- downloads, standing in for readers;
- steps, standing in for exercise;
- tickets closed, standing in for work done.

Pick one. Write its bridge the way we wrote AEMO's — the claims in order, one
line each, with the load-bearing one marked. Then answer the question that makes
this a skill rather than an observation:

**Under what condition does your bridge stop holding, and what would you see
first?**

That second half matters more than the first. Every proxy in the list above is
fine under some conditions and useless under others, and the failure does not
announce itself. Screen time survived until people started reading on two
devices. Downloads survived until the thing doing the downloading stopped being
a person. In each case the number kept publishing, on schedule, looking exactly
as it had the year before.

## Taking it away

Swap bridges with another pair and try to break theirs — not by disputing the
data, which you have no grounds to dispute, but by finding a change in the world
that would leave the measurement correct and the conclusion wrong.

Keep your bridge. Next week there are two numbers instead of one, and they do
not agree.
