// DIP: depends on sumByType (abstraction) not raw array logic.
// SRP: only job is to compose the three summary stat cards.

import StatCard from "./StatCard";
import { sumByType } from "../utils/transactionHelpers";
import { formatCurrency } from "../utils/formatters";

export default function SummaryCards({ transactions }) {
  const income = sumByType(transactions, "income");
  const expense = sumByType(transactions, "expense");
  const balance = income - expense;

  return (
    <div className="summary">
      <StatCard
        label="Total Income"
        value={formatCurrency(income)}
        variant="income"
      />
      <StatCard
        label="Total Expense"
        value={formatCurrency(expense)}
        variant="expense"
      />
      <StatCard
        label="Balance"
        value={formatCurrency(balance)}
        variant="balance"
      />
    </div>
  );
}
