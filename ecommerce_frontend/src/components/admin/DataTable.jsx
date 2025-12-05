export default function DataTable({ columns = [], data = [] }) {
  return (
    <div className="overflow-auto rounded-xl border border-primary/10 bg-white">
      <table className="min-w-full text-sm">
        <thead className="bg-primary/5">
          <tr>
            {columns.map((c) => (
              <th key={c.key} className="text-left px-3 py-2 text-secondary font-medium">{c.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={row.id || idx} className="border-t border-primary/10">
              {columns.map((c) => (
                <td key={c.key} className="px-3 py-2">{c.render ? c.render(row[c.key], row) : row[c.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
