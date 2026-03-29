import { useState } from "react";
import { SEED_TRANSACTIONS } from "../constants/Index";
import {
  buildTransaction,
  isValidTransaction,
} from "../utils/transactionHelpers";

// ── Custom hook: owns all transaction state & mutations ───────────────────────
// SRP: state management lives here — completely decoupled from UI components.
// ISP: consumers only get the slice of the interface they need.

export function useTransactions() {
  const [transactions, setTransactions] = useState(SEED_TRANSACTIONS);

  const addTransaction = (formValues) => {
    if (!isValidTransaction(formValues)) return false;
    setTransactions((prev) => [buildTransaction(formValues), ...prev]);
    return true; // signals success to the form
  };

  const deleteTransaction = (id) =>
    setTransactions((prev) => prev.filter((t) => t.id !== id));

  return { transactions, addTransaction, deleteTransaction };
}
