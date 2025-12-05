import DataTable from "../../components/admin/DataTable";
import { useEffect, useState } from "react";
import { listProducts } from "../../api/productsApi";
import { Link } from "react-router-dom";

export default function ProductsListPage() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    listProducts().then((res) => setRows(res.items || res)).catch(() => setRows([]));
  }, []);

  const columns = [
    { key: "name", title: "Name" },
    { key: "price", title: "Price" },
    {
      key: "id",
      title: "Actions",
      render: (_v, r) => (
        <Link className="text-primary text-sm" to={`/admin/products/${r._id || r.id}`}>Edit</Link>
      )
    },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Products</h1>
        <Link to="/admin/products/new" className="rounded-lg bg-primary px-3 py-1.5 text-white">New</Link>
      </div>
      <DataTable columns={columns} data={rows} />
    </div>
  );
}
