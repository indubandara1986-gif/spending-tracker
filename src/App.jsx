// DIP: App depends on abstractions (hooks, components) — never on concrete implementations.
// SRP: App's only job is to compose the layout and wire state to UI.

import { GLOBAL_STYLES } from "./styles/globalStyles";
import { useTransactions } from "./hooks/useTransactions";
import { useFilter } from "./hooks/useFilter";

import AppHeader from "./components/AppHeader";
import SummaryCards from "./components/SummaryCards";
import AddTransactionForm from "./components/AddTransactionForm";
import CategoryChart from "./components/CategoryChart";
import FilterBar from "./components/FilterBar";
import TransactionList from "./components/TransactionList";

export default function App() {
  const { transactions, addTransaction, deleteTransaction } = useTransactions();
  const { filter, updateFilter, clearFilter, filtered } =
    useFilter(transactions);

  return (
    <>
      <style>{GLOBAL_STYLES}</style>
      <div className="app">
        <AppHeader />
        <SummaryCards transactions={transactions} />
        <AddTransactionForm onAdd={addTransaction} />
        <CategoryChart transactions={transactions} />
        <FilterBar
          filter={filter}
          onFilterChange={updateFilter}
          onClear={clearFilter}
        />
        <TransactionList transactions={filtered} onDelete={deleteTransaction} />
      </div>
    </>
  );
}
