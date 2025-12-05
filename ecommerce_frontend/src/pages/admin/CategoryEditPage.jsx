import { useParams } from "react-router-dom";

export default function CategoryEditPage() {
  const { id } = useParams();
  return (
    <div>
      <h1 className="text-xl font-semibold">{id === "new" ? "Create Category" : "Edit Category"}</h1>
      <p className="text-secondary">CRUD form placeholder.</p>
    </div>
  );
}
