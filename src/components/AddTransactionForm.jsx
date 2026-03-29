// SRP: Manages local form state and delegates validation/building to utilities.
// DIP: Depends on onAdd abstraction — doesn't know how transactions are stored.

import { useState } from "react";
import TypeToggle from "./TypeToggle";
import { CATEGORIES } from "../constants/Index";

const INITIAL_STATE = {
  desc: "",
  amount: "",
  type: "expense",
  category: "Food",
  date: new Date().toISOString().split("T")[0],
};

export default function AddTransactionForm({ onAdd }) {
  const [form, setForm] = useState(INITIAL_STATE);

  const set = (key) => (e) =>
    setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const handleSubmit = () => {
    const success = onAdd(form);
    if (success) setForm((prev) => ({ ...prev, desc: "", amount: "" }));
  };

  return (
    <div className="form-panel">
      <h2>+ Add Transaction</h2>
      <div className="form-grid">
        <div className="field full">
          <label>Description</label>
          <input
            value={form.desc}
            onChange={set("desc")}
            placeholder="e.g. Grocery run"
          />
        </div>

        <div className="field">
          <label>Amount (USD)</label>
          <input
            type="number"
            min="0"
            value={form.amount}
            onChange={set("amount")}
            placeholder="0.00"
          />
        </div>

        <div className="field">
          <label>Date</label>
          <input type="date" value={form.date} onChange={set("date")} />
        </div>

        <div className="field">
          <label>Type</label>
          <TypeToggle
            value={form.type}
            onChange={(type) => setForm((prev) => ({ ...prev, type }))}
          />
        </div>

        <div className="field">
          <label>Category</label>
          <select value={form.category} onChange={set("category")}>
            {CATEGORIES.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </div>

        <div className="field full">
          <button className="add-btn" onClick={handleSubmit}>
            Add Transaction
          </button>
        </div>
      </div>
    </div>
  );
}
