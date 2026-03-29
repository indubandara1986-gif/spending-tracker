// ── Pure formatting utilities ─────────────────────────────────────────────────
// SRP: this module has exactly one job — formatting values for display.

export const formatCurrency = (amount) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  }).format(amount);

export const formatSign = (type) => (type === "income" ? "+" : "−");
