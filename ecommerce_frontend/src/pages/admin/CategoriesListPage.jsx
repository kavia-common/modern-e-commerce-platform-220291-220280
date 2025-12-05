import DataTable from "../../components/admin/DataTable";
import { useEffect, useState } from "react";
import { listCategories } from "../../api/categoriesApi";
import { Link } from "react-router-dom";

export default function CategoriesListPage() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    listCategories().then((res) => setRows(res.items || res)).catch(() => setRows([]));
  }, []);

  const columns = [
    { key: "name", title: "Name" },
    {
      key: "id",
      title: "Actions",
      render: (_v, r) => (
        <Link className="text-primary text-sm" to={`/admin/categories/${r._id || r.id}`}>Edit</Link>
      )
    },
  ];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Categories</h1>
        <Link to="/admin/categories/new" className="rounded-lg bg-primary px-3 py-1.5 text-white">New</Link>
      </div>
      <DataTable columns={columns} data={rows} />
    </div>
  );
}
