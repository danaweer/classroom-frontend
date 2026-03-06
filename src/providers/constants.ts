import type { Subject } from "@/types";

export const API_URL = "https://api.fake-rest.refine.dev";

export const MOCK_SUBJECTS: Subject[] = [
  {
    id: 1,
    code: "CS101",
    name: "Introduction to Computer Science",
    department: "Computer Science",
    description: "Foundations of programming, algorithms, and computational thinking.",
    createdAt: "2026-03-01T08:00:00.000Z",
  },
  {
    id: 2,
    code: "MATH221",
    name: "Linear Algebra",
    department: "Mathematics",
    description: "Vector spaces, matrices, eigenvalues, and linear transformations.",
    createdAt: "2026-03-02T08:00:00.000Z",
  },
  {
    id: 3,
    code: "BIO150",
    name: "Principles of Biology",
    department: "Biology",
    description: "Cell structure, genetics, evolution, and biological systems.",
    createdAt: "2026-03-03T08:00:00.000Z",
  },
];
