import DataTable from "../../components/admin/DataTable";
import { useEffect, useState } from "react";
import { listOrders } from "../../api/ordersApi";
import { Link } from "react-router-dom";

export default function OrdersListPage() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    listOrders().then((res) => setRows(res.items || res)).catch(() => setRows([]));
  }, []);

  const columns = [
    { key: "status", title: "Status" },
    { key: "grandTotal", title: "Total" },
    {
      key: "id",
      title: "Actions",
      render: (_v, r) => (
        <Link className="text-primary text-sm" to={`/admin/orders/${r._id || r.id}`}>View</Link>
      )
    },
  ];

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold">Orders</h1>
      <DataTable columns={columns} data={rows} />
    </div>
  );
}
