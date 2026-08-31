import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

interface ApiNode {
  id: string;
  type: string;
  meta?: Record<string, unknown>;
}

interface CourseApi {
  course: { code: string };
  nodes: ApiNode[];
}

const api = JSON.parse(readFileSync(resolve("dist/api/index.json"), "utf8")) as CourseApi;
const nodesOfType = (type: string) => api.nodes.filter((node) => node.type === type);

describe("course structure", () => {
  it("keeps the three digits this repo was provisioned with", () => {
    expect(api.course.code).toMatch(/896$/);
  });

  it("runs a session in every one of the twelve teaching weeks", () => {
    const weeks = nodesOfType("sessions")
      .map((node) => node.meta?.week)
      .sort((a, b) => (a as number) - (b as number));
    expect(weeks).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  });

  it("weighs its assessments to 100%", () => {
    const total = nodesOfType("assessments").reduce(
      (sum, node) => sum + (node.meta?.weight as number),
      0,
    );
    expect(total).toBe(100);
  });

  it("links at least one lecture to a real, non-placeholder deck", () => {
    const decked = nodesOfType("lectures").filter((node) => typeof node.meta?.slides === "string");
    expect(decked.length, "no lecture has a slides: link").toBeGreaterThan(0);

    const realDecks = decked.filter((node) => {
      const slug = (node.meta!.slides as string).match(/^\/decks\/([a-z0-9-]+)\/$/)?.[1];
      const path = resolve(`src/decks/${slug}.deck.mdx`);
      return existsSync(path) && !readFileSync(path, "utf8").includes("STARTER_CONTENT");
    });
    expect(realDecks.length, "every linked deck is still the placeholder").toBeGreaterThan(0);
  });
});
