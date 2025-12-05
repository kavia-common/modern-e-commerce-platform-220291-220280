import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import Toasts from "../components/common/Toast";
import { Outlet } from "react-router-dom";

export default function UserLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-6">
          <Outlet />
        </div>
      </main>
      <Footer />
      <Toasts />
    </div>
  );
}
