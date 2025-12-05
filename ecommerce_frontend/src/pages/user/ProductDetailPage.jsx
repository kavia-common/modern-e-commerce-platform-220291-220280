import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../api/productsApi";
import { useCartStore } from "../../store/cartStore";
import Rating from "../../components/common/Rating";

export default function ProductDetailPage() {
  const { id } = useParams();
  const [p, setP] = useState(null);
  const { add } = useCartStore();

  useEffect(() => {
    getProduct(id).then(setP).catch(() => setP(null));
  }, [id]);

  if (!p) return <p className="text-secondary">Loading product...</p>;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="aspect-square rounded-xl bg-gradient-to-br from-royal-start to-royal-end" />
      <div>
        <h1 className="text-2xl font-semibold">{p.name}</h1>
        <div className="mt-1 text-secondary">{p.brand}</div>
        <div className="mt-2">
          <Rating value={p.rating || 0} />
        </div>
        <div className="mt-4 text-primary text-2xl font-semibold">
          ${p.price?.toFixed?.(2) ?? p.price}
        </div>
        <p className="mt-3 text-secondary">{p.description || "—"}</p>
        <div className="mt-5">
          <button
            className="rounded-xl bg-primary px-5 py-2 text-white hover:opacity-90"
            onClick={() => add(p._id || p.id, 1)}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
