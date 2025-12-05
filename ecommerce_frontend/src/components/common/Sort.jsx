export default function Sort({ value, onChange }) {
  return (
    <select
      aria-label="Sort products"
      value={value || ""}
      onChange={(e) => onChange?.(e.target.value)}
      className="rounded-lg border border-primary/30 px-3 py-2"
    >
      <option value="">Sort by</option>
      <option value="price_asc">Price: Low to High</option>
      <option value="price_desc">Price: High to Low</option>
      <option value="newest">Newest</option>
      <option value="popular">Popularity</option>
    </select>
  );
}
