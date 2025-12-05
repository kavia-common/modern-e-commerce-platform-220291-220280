import { NavLink } from "react-router-dom";

const items = [
  { to: "/admin", label: "Dashboard" },
  { to: "/admin/products", label: "Products" },
  { to: "/admin/categories", label: "Categories" },
  { to: "/admin/orders", label: "Orders" },
  { to: "/admin/users", label: "Users" },
  { to: "/admin/coupons", label: "Coupons" },
  { to: "/admin/banners", label: "Banners" },
  { to: "/admin/settings", label: "Settings" },
];

export default function Sidebar() {
  return (
    <aside className="w-60 shrink-0 border-r border-primary/10 bg-white">
      <div className="p-4 font-semibold text-primary">Admin</div>
      <nav className="px-2 pb-4 space-y-1">
        {items.map((it) => (
          <NavLink
            key={it.to}
            to={it.to}
            end={it.to === "/admin"}
            className={({ isActive }) =>
              `block rounded-lg px-3 py-2 text-sm ${isActive ? "bg-primary/10 text-primary" : "text-secondary hover:bg-primary/5"}`
            }
          >
            {it.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
