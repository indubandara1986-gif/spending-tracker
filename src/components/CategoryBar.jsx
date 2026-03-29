// SRP: Renders a single horizontal bar row in the category chart.

import { formatCurrency } from "../utils/formatters";

export default function CategoryBar({ label, amount, type, maxAmount }) {
  const pct = (amount / maxAmount) * 100;
  return (
    <div className="bar-row">
      <div className="bar-label">{label}</div>
      <div className="bar-track">
        <div className={`bar-fill ${type}`} style={{ width: `${pct}%` }}>
          {pct > 18 ? type : ""}
        </div>
      </div>
      <div className={`bar-val ${type}`}>{formatCurrency(amount)}</div>
    </div>
  );
}
