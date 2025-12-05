import Sidebar from "../components/admin/Sidebar";
import Toasts from "../components/common/Toast";
import { Outlet, Link } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="min-h-screen flex bg-background">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <header className="h-14 border-b border-primary/10 bg-white flex items-center justify-between px-4">
          <h1 className="font-semibold text-text">Admin Panel</h1>
          <Link to="/" className="text-sm text-primary">Back to store</Link>
        </header>
        <main className="flex-1 p-4">
          <Outlet />
        </main>
      </div>
      <Toasts />
    </div>
  );
}
