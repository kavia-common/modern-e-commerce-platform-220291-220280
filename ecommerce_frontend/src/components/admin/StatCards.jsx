export function StatCard({ title, value, hint }) {
  return (
    <div className="rounded-xl border border-primary/10 bg-white p-4 shadow-soft">
      <div className="text-sm text-secondary">{title}</div>
      <div className="mt-2 text-2xl font-semibold text-text">{value}</div>
      {hint && <div className="text-xs text-secondary mt-1">{hint}</div>}
    </div>
  );
}

export default function StatCards() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <StatCard title="Sales Today" value="$0" hint="Placeholder" />
      <StatCard title="Orders" value="0" hint="Pending: 0" />
      <StatCard title="Top Product" value="—" />
      <StatCard title="Low Stock" value="0" />
    </div>
  );
}
