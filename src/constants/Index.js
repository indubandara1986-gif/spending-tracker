// ── Shared constants (Open/Closed: extend here, never scatter magic values) ──

export const CATEGORIES = [
  "Food",
  "Transport",
  "Housing",
  "Health",
  "Entertainment",
  "Shopping",
  "Salary",
  "Freelance",
  "Other",
];

export const CAT_ICONS = {
  Food: "🍜",
  Transport: "🚌",
  Housing: "🏠",
  Health: "💊",
  Entertainment: "🎮",
  Shopping: "🛍️",
  Salary: "💰",
  Freelance: "💻",
  Other: "📦",
};

export const SEED_TRANSACTIONS = [
  {
    id: 1,
    desc: "Monthly Salary",
    amount: 3500,
    type: "income",
    category: "Salary",
    date: "2026-03-01",
  },
  {
    id: 2,
    desc: "Rent payment",
    amount: 950,
    type: "expense",
    category: "Housing",
    date: "2026-03-02",
  },
  {
    id: 3,
    desc: "Grocery store",
    amount: 87.5,
    type: "expense",
    category: "Food",
    date: "2026-03-05",
  },
  {
    id: 4,
    desc: "Freelance gig",
    amount: 420,
    type: "income",
    category: "Freelance",
    date: "2026-03-10",
  },
  {
    id: 5,
    desc: "Netflix & Spotify",
    amount: 28,
    type: "expense",
    category: "Entertainment",
    date: "2026-03-12",
  },
];

export const DEFAULT_FILTER = { search: "", type: "all", category: "all" };
