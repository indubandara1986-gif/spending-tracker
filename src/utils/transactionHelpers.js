// ── Transaction business logic ────────────────────────────────────────────────
// SRP: Pure functions that compute derived data — no UI, no state mutations.

/**
 * Sum all amounts for a given type ("income" | "expense")
 */
export const sumByType = (transactions, type) =>
  transactions
    .filter((t) => t.type === type)
    .reduce((acc, t) => acc + t.amount, 0);

/**
 * Apply search / type / category filters to a list of transactions.
 */
export const applyFilters = (transactions, { search, type, category }) =>
  transactions.filter((t) => {
    const matchSearch = t.desc.toLowerCase().includes(search.toLowerCase());
    const matchType = type === "all" || t.type === type;
    const matchCategory = category === "all" || t.category === category;
    return matchSearch && matchType && matchCategory;
  });

/**
 * Aggregate totals per category, sorted descending by combined total, top N.
 */
export const aggregateByCategory = (transactions, topN = 7) => {
  const map = {};
  transactions.forEach(({ category, type, amount }) => {
    if (!map[category]) map[category] = { income: 0, expense: 0 };
    map[category][type] += amount;
  });
  return Object.entries(map)
    .map(([cat, vals]) => ({ cat, ...vals, total: vals.income + vals.expense }))
    .sort((a, b) => b.total - a.total)
    .slice(0, topN);
};

/**
 * Create a new transaction object from raw form values.
 */
export const buildTransaction = ({ desc, amount, type, category, date }) => ({
  id: Date.now(),
  desc: desc.trim(),
  amount: parseFloat(amount),
  type,
  category,
  date,
});

/**
 * Validate raw form values before submission.
 * Returns true if the form is valid.
 */
export const isValidTransaction = ({ desc, amount }) =>
  desc.trim().length > 0 && !isNaN(amount) && Number(amount) > 0;
