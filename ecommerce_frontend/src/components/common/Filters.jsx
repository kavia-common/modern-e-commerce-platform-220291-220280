export default function Filters({ onChange, values = {} }) {
  const handle = (e) => {
    onChange?.({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <aside aria-label="Filters" className="space-y-3">
      <div>
        <label className="block text-sm text-secondary mb-1">Price max</label>
        <input
          type="number"
          name="price_lte"
          onChange={handle}
          value={values.price_lte || ""}
          className="w-full rounded-lg border border-primary/30 px-3 py-2"
        />
      </div>
      <div>
        <label className="block text-sm text-secondary mb-1">Brand</label>
        <input
          type="text"
          name="brand"
          onChange={handle}
          value={values.brand || ""}
          className="w-full rounded-lg border border-primary/30 px-3 py-2"
        />
      </div>
      <div>
        <label className="block text-sm text-secondary mb-1">Rating >=</label>
        <input
          type="number"
          min="0"
          max="5"
          step="0.5"
          name="rating_gte"
          onChange={handle}
          value={values.rating_gte || ""}
          className="w-full rounded-lg border border-primary/30 px-3 py-2"
        />
      </div>
    </aside>
  );
}
