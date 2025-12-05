import { useEffect, useState } from "react";
import ProductCard from "../../components/common/ProductCard";
import ProductGrid from "../../components/common/ProductGrid";
import { featuredProducts } from "../../api/productsApi";
import { listCategories } from "../../api/categoriesApi";

export default function HomePage() {
  const [featured, setFeatured] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    featuredProducts().then(setFeatured).catch(() => setFeatured([]));
    listCategories().then(setCategories).catch(() => setCategories([]));
  }, []);

  return (
    <div>
      <section className="mb-8 rounded-xl bg-gradient-to-br from-royal-start to-royal-end p-8">
        <h1 className="text-2xl font-semibold text-text">Welcome to RoyalShop</h1>
        <p className="text-secondary">Elegant shopping experience with Royal Purple theme.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3">Featured Categories</h2>
        <div className="flex gap-3 overflow-auto">
          {categories.map((c) => (
            <div key={c.id || c._id} className="min-w-[140px] rounded-xl border border-primary/10 bg-white p-4 shadow-soft">
              <span className="font-medium">{c.name}</span>
            </div>
          ))}
          {categories.length === 0 && <p className="text-secondary">No categories</p>}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-3">Trending Products</h2>
        {featured.length === 0 ? (
          <p className="text-secondary">No featured products</p>
        ) : (
          <ProductGrid>
            {featured.map((p) => (
              <ProductCard key={p.id || p._id} product={p} />
            ))}
          </ProductGrid>
        )}
      </section>
    </div>
  );
}
