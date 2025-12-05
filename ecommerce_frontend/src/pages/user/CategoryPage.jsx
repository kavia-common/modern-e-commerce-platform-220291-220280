import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Filters from "../../components/common/Filters";
import Sort from "../../components/common/Sort";
import ProductGrid from "../../components/common/ProductGrid";
import ProductCard from "../../components/common/ProductCard";
import { listProducts } from "../../api/productsApi";

export default function CategoryPage() {
  const [params, setParams] = useSearchParams();
  const [data, setData] = useState({ items: [], totalPages: 1, page: 1 });
  const [filterValues, setFilterValues] = useState({
    price_lte: params.get("price_lte") || "",
    brand: params.get("brand") || "",
    rating_gte: params.get("rating_gte") || "",
  });
  const sort = params.get("sort") || "";
  const q = params.get("q") || "";

  const fetchProducts = () => {
    const page = Number(params.get("page") || 1);
    const payload = {
      q,
      sort,
      page,
      price_lte: filterValues.price_lte || undefined,
      brand: filterValues.brand || undefined,
      rating_gte: filterValues.rating_gte || undefined,
    };
    listProducts(payload)
      .then((res) => {
        setData({
          items: res.items || res,
          totalPages: res.totalPages || 1,
          page: res.page || page,
        });
      })
      .catch(() => setData({ items: [], totalPages: 1, page: 1 }));
  };

  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line
  }, [params.toString()]);

  const updateParams = (obj) => {
    const next = new URLSearchParams(params);
    Object.entries(obj).forEach(([k, v]) => {
      if (v === "" || v == null) next.delete(k);
      else next.set(k, v);
    });
    setParams(next);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-[220px,1fr] gap-6">
      <Filters
        values={filterValues}
        onChange={(v) => {
          setFilterValues(v);
          updateParams(v);
        }}
      />
      <div>
        <div className="flex items-center justify-between mb-3">
          <h1 className="text-xl font-semibold">Results {q && `for "${q}"`}</h1>
          <Sort value={sort} onChange={(v) => updateParams({ sort: v })} />
        </div>
        <ProductGrid>
          {data.items.map((p) => (
            <ProductCard key={p.id || p._id} product={p} />
          ))}
        </ProductGrid>
      </div>
    </div>
  );
}
