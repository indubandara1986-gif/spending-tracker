// SRP: Renders the category chart — aggregation logic lives in transactionHelpers.
// DIP: Depends on aggregateByCategory abstraction, not raw transaction data.

import { useMemo } from "react";
import CategoryBar from "./CategoryBar";
import { aggregateByCategory } from "../utils/transactionHelpers";

export default function CategoryChart({ transactions }) {
  const data = useMemo(() => aggregateByCategory(transactions), [transactions]);

  if (!data.length) return null;

  const max = Math.max(...data.flatMap((d) => [d.income, d.expense]), 1);

  return (
    <div className="chart-panel">
      <h2>By Category</h2>
      <div className="bar-chart">
        {data.map((d) => (
          <div key={d.cat}>
            {d.income > 0 && (
              <CategoryBar
                label={d.cat}
                amount={d.income}
                type="income"
                maxAmount={max}
              />
            )}
            {d.expense > 0 && (
              <CategoryBar
                label={d.income > 0 ? "" : d.cat}
                amount={d.expense}
                type="expense"
                maxAmount={max}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
