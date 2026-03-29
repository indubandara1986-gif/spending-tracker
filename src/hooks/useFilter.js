import { useState, useMemo } from "react";
import { DEFAULT_FILTER } from "../constants/Index";
import { applyFilters } from "../utils/transactionHelpers";

// ── Custom hook: owns filter state & derived filtered list ────────────────────
// SRP: only responsible for filtering concerns.

export function useFilter(transactions) {
  const [filter, setFilter] = useState(DEFAULT_FILTER);

  const updateFilter = (patch) => setFilter((prev) => ({ ...prev, ...patch }));
  const clearFilter = () => setFilter(DEFAULT_FILTER);

  const filtered = useMemo(
    () => applyFilters(transactions, filter),
    [transactions, filter],
  );

  return { filter, updateFilter, clearFilter, filtered };
}
