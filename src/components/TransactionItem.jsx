// SRP: Renders exactly one transaction row.
// LSP: Any object satisfying the transaction shape can be passed in safely.

import { CAT_ICONS } from "../constants/Index";
import { formatCurrency, formatSign } from "../utils/formatters";

export default function TransactionItem({ tx, onDelete }) {
  return (
    <div className="tx-item">
      <div className={`tx-icon ${tx.type}`}>
        {CAT_ICONS[tx.category] ?? "📦"}
      </div>

      <div className="tx-info">
        <div className="tx-desc">{tx.desc}</div>
        <div className="tx-meta">
          <span className="tx-cat">{tx.category}</span>
          {tx.date}
        </div>
      </div>

      <div className={`tx-amount ${tx.type}`}>
        {formatSign(tx.type)}
        {formatCurrency(tx.amount)}
      </div>

      <button
        className="tx-delete"
        onClick={() => onDelete(tx.id)}
        title="Delete"
      >
        ✕
      </button>
    </div>
  );
}
