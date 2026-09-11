const longDate = new Intl.DateTimeFormat("en-AU", {
  dateStyle: "long",
  timeZone: "UTC",
});

const dayOnly = new Intl.DateTimeFormat("en-AU", {
  day: "numeric",
  timeZone: "UTC",
});

const dayAndMonth = new Intl.DateTimeFormat("en-AU", {
  day: "numeric",
  month: "long",
  timeZone: "UTC",
});

const DAY_MS = 86_400_000;

/** Format a date-only value without letting the viewer's timezone move it. */
export function formatCourseDate(value: Date | string): string {
  const date = typeof value === "string" ? new Date(`${value}T00:00:00Z`) : value;
  return longDate.format(date);
}

/**
 * Format an inclusive span, collapsing whatever the two ends share:
 * "5–18 April 2027" within one month, "29 March – 11 April 2027" across two.
 */
export function formatCourseDateRange(start: Date, end: Date): string {
  const sameYear = start.getUTCFullYear() === end.getUTCFullYear();
  const sameMonth = sameYear && start.getUTCMonth() === end.getUTCMonth();
  if (sameMonth) return `${dayOnly.format(start)}–${longDate.format(end)}`;
  if (sameYear) return `${dayAndMonth.format(start)} – ${longDate.format(end)}`;
  return `${longDate.format(start)} – ${longDate.format(end)}`;
}

export interface TeachingBreak {
  /** The first teaching week after the break. */
  beforeWeek: number;
  /** The last teaching week before the break. */
  afterWeek: number;
  /** Monday of the first non-teaching week. */
  start: Date;
  /** The day before teaching resumes. */
  end: Date;
  /** How many whole weeks the break covers. */
  weeks: number;
}

/**
 * Locate the teaching break from the teaching weeks' own dates.
 *
 * The break is not a stored fact anywhere in the content: it is whatever gap
 * the dated weeks leave, so it cannot drift out of step with them. Callers
 * pass the weeks; any gap wider than a single week is the break, and its
 * length in weeks is derived rather than asserted.
 */
export function findTeachingBreak(
  entries: readonly { week: number; date: Date }[],
): TeachingBreak | undefined {
  const sorted = [...entries].sort((a, b) => a.week - b.week);
  for (let i = 1; i < sorted.length; i++) {
    const previous = sorted[i - 1];
    const next = sorted[i];
    const gapDays = (next.date.getTime() - previous.date.getTime()) / DAY_MS;
    if (gapDays > 7) {
      return {
        beforeWeek: next.week,
        afterWeek: previous.week,
        start: new Date(previous.date.getTime() + 7 * DAY_MS),
        end: new Date(next.date.getTime() - DAY_MS),
        weeks: Math.round(gapDays / 7) - 1,
      };
    }
  }
  return undefined;
}

const NUMBER_WORDS = ["zero", "one", "two", "three", "four", "five", "six"];

/** Spell small counts out, so prose reads "a two-week break", not "a 2-week break". */
export function spellCount(value: number): string {
  return NUMBER_WORDS[value] ?? String(value);
}
