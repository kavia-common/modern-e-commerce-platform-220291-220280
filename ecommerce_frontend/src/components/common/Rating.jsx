export default function Rating({ value = 0 }) {
  const stars = Math.round(value);
  return (
    <div aria-label={`Rating ${value} out of 5`} className="text-primary">
      {"★".repeat(stars)}
      <span className="text-secondary">{"★".repeat(5 - stars)}</span>
    </div>
  );
}
