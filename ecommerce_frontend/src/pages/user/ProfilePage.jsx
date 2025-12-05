import { useAuthStore } from "../../store/authStore";

export default function ProfilePage() {
  const { user } = useAuthStore();
  if (!user) return <p className="text-secondary">Please log in.</p>;
  return (
    <div>
      <h1 className="text-xl font-semibold mb-2">Profile</h1>
      <div className="rounded-xl border border-primary/10 bg-white p-4">
        <div className="text-sm text-secondary">Name</div>
        <div className="font-medium">{user.name}</div>
        <div className="mt-2 text-sm text-secondary">Email</div>
        <div className="font-medium">{user.email}</div>
      </div>
    </div>
  );
}
