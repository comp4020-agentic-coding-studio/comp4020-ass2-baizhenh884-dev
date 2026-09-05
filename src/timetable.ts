// The recurring weekly timetable. Timeslots are course-wide operational
// facts, not dated content nodes, so they live in this small typed module
// rather than in a content collection or a session's frontmatter — no week
// runs in more than one timeslot, so nothing here needs a date.
//
// `convenor` and `tutor` are `people` collection ids, not display names:
// resolve them with `getEntry("people", id)` at render time (see
// components/Timetable.astro) so a renamed or deleted person breaks the
// build instead of leaving a stale name on this page.

export interface Lecture {
  day: string;
  time: string;
  convenor: string;
}

export interface TutorialTimeslot {
  code: string;
  day: string;
  time: string;
  tutor: string;
}

export const lecture: Lecture = {
  day: "Monday",
  time: "10:00–12:00",
  convenor: "elena-marsh",
};

// Three tutors across four timeslots — Jonah runs two of the four, Anika and
// Femi one each. All four cover the same weekly session content.
export const tutorialTimeslots: TutorialTimeslot[] = [
  { code: "T1", day: "Tuesday", time: "10:00–12:00", tutor: "jonah-petrescu" },
  { code: "T2", day: "Tuesday", time: "14:00–16:00", tutor: "anika-solberg" },
  { code: "T3", day: "Wednesday", time: "11:00–13:00", tutor: "femi-adeyemi" },
  { code: "T4", day: "Thursday", time: "09:00–11:00", tutor: "jonah-petrescu" },
];
