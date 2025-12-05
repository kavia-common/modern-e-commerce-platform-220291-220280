import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOrder } from "../../api/ordersApi";

export default function OrderDetailPage() {
  const { id } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    getOrder(id).then(setOrder).catch(() => setOrder(null));
  }, [id]);

  if (!order) return <p className="text-secondary">Loading...</p>;
  return (
    <div>
      <h1 className="text-xl font-semibold mb-4">Order Details</h1>
      <div className="rounded-xl border border-primary/10 bg-white p-4">
        <div className="text-sm text-secondary">Order ID</div>
        <div className="font-medium">{order.id || order._id}</div>
        <div className="mt-3 text-sm text-secondary">Status</div>
        <div className="font-medium">{order.status}</div>
      </div>
    </div>
  );
}
