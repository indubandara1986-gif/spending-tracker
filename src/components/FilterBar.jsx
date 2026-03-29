// SRP: Renders search + filter controls — delegates all logic to the parent / hook.
// ISP: only receives the slice of the filter interface it actually uses.

import { CATEGORIES } from "../constants/Index";

export default function FilterBar({ filter, onFilterChange, onClear }) {
  const set = (key) => (e) => onFilterChange({ [key]: e.target.value });

  return (
    <div className="filter-bar">
      <input
        type="text"
        placeholder="🔍  Search…"
        value={filter.search}
        onChange={set("search")}
        style={{ minWidth: 140 }}
      />

      <select value={filter.type} onChange={set("type")}>
        <option value="all">All types</option>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>

      <select value={filter.category} onChange={set("category")}>
        <option value="all">All categories</option>
        {CATEGORIES.map((c) => (
          <option key={c}>{c}</option>
        ))}
      </select>

      <div className="spacer" />

      <button className="clear-btn" onClick={onClear}>
        Clear
      </button>
    </div>
  );
}
