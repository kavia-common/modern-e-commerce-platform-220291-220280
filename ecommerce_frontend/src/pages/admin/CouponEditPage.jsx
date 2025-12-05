import { useParams } from "react-router-dom";

export default function CouponEditPage() {
  const { id } = useParams();
  return (
    <div>
      <h1 className="text-xl font-semibold">{id === "new" ? "Create Coupon" : "Edit Coupon"}</h1>
      <p className="text-secondary">CRUD form placeholder.</p>
    </div>
  );
}
