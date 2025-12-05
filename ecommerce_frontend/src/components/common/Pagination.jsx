export default function Pagination({ page = 1, totalPages = 1, onPage }) {
  const prev = () => page > 1 && onPage?.(page - 1);
  const next = () => page < totalPages && onPage?.(page + 1);
  return (
    <div className="flex items-center gap-2">
      <button onClick={prev} className="px-3 py-1.5 rounded-lg border border-primary/30 disabled:opacity-50" disabled={page <= 1}>
        Prev
      </button>
      <span className="text-sm text-secondary">Page {page} of {totalPages}</span>
      <button onClick={next} className="px-3 py-1.5 rounded-lg border border-primary/30 disabled:opacity-50" disabled={page >= totalPages}>
        Next
      </button>
    </div>
  );
}
