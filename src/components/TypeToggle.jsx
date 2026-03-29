// SRP: Renders the income / expense toggle — nothing else.
// OCP: New types could be added by extending the types array without touching this component.

const TYPES = [
  { value: "income", label: "Income" },
  { value: "expense", label: "Expense" },
];

export default function TypeToggle({ value, onChange }) {
  return (
    <div className="type-toggle">
      {TYPES.map(({ value: v, label }) => (
        <button
          key={v}
          className={`type-btn ${value === v ? `active-${v}` : ""}`}
          onClick={() => onChange(v)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
