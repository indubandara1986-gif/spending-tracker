// SRP: Renders the list of transactions or an empty-state placeholder.
// OCP: New list item types can be swapped by changing the item component passed — no edit needed here.

import TransactionItem from "./TransactionItem";

function EmptyState() {
  return (
    <div className="tx-empty">
      <span>📭</span>
      No transactions found.
    </div>
  );
}

export default function TransactionList({ transactions, onDelete }) {
  if (!transactions.length) return <EmptyState />;

  return (
    <div className="tx-list">
      {transactions.map((tx) => (
        <TransactionItem key={tx.id} tx={tx} onDelete={onDelete} />
      ))}
    </div>
  );
}
