import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  if (!product) return null;
  return (
    <div className="rounded-xl border border-primary/10 bg-white p-3 shadow-soft flex flex-col">
      <Link to={`/p/${product._id || product.id}`} className="block">
        <div className="aspect-square w-full rounded-lg bg-gradient-to-br from-royal-start to-royal-end" aria-label={`${product.name} image`} />
      </Link>
      <div className="mt-3 flex-1">
        <Link to={`/p/${product._id || product.id}`} className="font-medium text-text hover:text-primary">
          {product.name}
        </Link>
        <div className="mt-1 text-sm text-secondary line-clamp-2">
          {product.shortDescription || "—"}
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <span className="text-primary font-semibold">${product.price?.toFixed?.(2) ?? product.price}</span>
        <Link to={`/p/${product._id || product.id}`} className="text-sm text-primary hover:underline">View</Link>
      </div>
    </div>
  );
}
