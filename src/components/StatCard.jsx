// SRP: Renders a single stat card.
// OCP: New card variants are added by passing different props — no code change needed.

export default function StatCard({ label, value, variant }) {
  return (
    <div className={`stat-card ${variant}`}>
      <div className="stat-label">{label}</div>
      <div className="stat-value">{value}</div>
    </div>
  );
}
