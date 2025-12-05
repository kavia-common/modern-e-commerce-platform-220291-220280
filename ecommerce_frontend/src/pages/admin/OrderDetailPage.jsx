import { useParams } from "react-router-dom";

export default function OrderDetailPage() {
  const { id } = useParams();
  return (
    <div>
      <h1 className="text-xl font-semibold">Order #{id}</h1>
      <p className="text-secondary">Order details placeholder.</p>
    </div>
  );
}
