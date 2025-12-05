import { useEffect, useState } from "react";
import { listOrders } from "../../api/ordersApi";
import { Link } from "react-router-dom";

export default function OrdersPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    listOrders().then(setOrders).catch(() => setOrders([]));
  }, []);

  return (
    <div>
      <h1 className="text-xl font-semibold mb-4">My Orders</h1>
      {orders.length === 0 ? (
        <p className="text-secondary">No orders yet.</p>
      ) : (
        <div className="space-y-3">
          {orders.map((o) => (
            <div key={o.id || o._id} className="rounded-xl border border-primary/10 bg-white p-4 flex items-center justify-between">
              <div>
                <div className="font-medium">Order #{o.code || (o._id || "").slice(-6)}</div>
                <div className="text-sm text-secondary">{o.status} • {new Date(o.createdAt).toLocaleString?.() || ""}</div>
              </div>
              <Link to={`/orders/${o.id || o._id}`} className="text-primary text-sm">View</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
