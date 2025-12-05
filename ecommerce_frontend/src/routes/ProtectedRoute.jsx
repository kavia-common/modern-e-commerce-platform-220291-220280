import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

// PUBLIC_INTERFACE
export default function ProtectedRoute({ role }) {
  const { user, role: userRole } = useAuthStore();
  if (!user) return <Navigate to="/login" replace />;
  if (role && userRole !== role) return <Navigate to="/" replace />;
  return <Outlet />;
}
