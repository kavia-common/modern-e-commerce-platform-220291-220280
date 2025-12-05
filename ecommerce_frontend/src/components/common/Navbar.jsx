import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";
import { useCartStore } from "../../store/cartStore";
import { useEffect, useState } from "react";
import { MagnifyingGlassIcon, ShoppingCartIcon, UserCircleIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const navigate = useNavigate();
  const { user, role, logout, initialize } = useAuthStore();
  const { items, refresh } = useCartStore();
  const [query, setQuery] = useState("");

  useEffect(() => {
    initialize();
    refresh();
    // eslint-disable-next-line
  }, []);

  const onSearch = (e) => {
    e.preventDefault();
    navigate(`/c?q=${encodeURIComponent(query)}`);
  };

  const cartCount = items.reduce((a, c) => a + (c.qty || 1), 0);

  return (
    <header className="bg-surface shadow-soft sticky top-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="text-primary font-semibold text-xl">
            RoyalShop
          </Link>
          <form onSubmit={onSearch} className="hidden md:flex items-center gap-2 w-1/2">
            <input
              aria-label="Search products"
              placeholder="Search products..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 rounded-xl border border-primary/30 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <button className="inline-flex items-center gap-1 rounded-xl bg-primary px-4 py-2 text-white hover:opacity-90">
              <MagnifyingGlassIcon className="h-5 w-5" />
              Search
            </button>
          </form>
          <nav className="flex items-center gap-4">
            <NavLink to="/cart" className="relative inline-flex items-center">
              <ShoppingCartIcon className="h-6 w-6 text-primary" aria-hidden="true" />
              <span className="sr-only">Cart</span>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 rounded-full bg-primary text-white text-xs px-1">
                  {cartCount}
                </span>
              )}
            </NavLink>
            {user ? (
              <div className="flex items-center gap-3">
                <NavLink to="/orders" className="text-sm text-secondary hover:text-primary">
                  Orders
                </NavLink>
                {role === "admin" && (
                  <NavLink to="/admin" className="text-sm text-secondary hover:text-primary">
                    Admin
                  </NavLink>
                )}
                <button
                  onClick={logout}
                  className="rounded-xl border border-primary/40 px-3 py-1.5 text-sm text-primary hover:bg-primary/10"
                >
                  Logout
                </button>
                <NavLink to="/profile" className="inline-flex">
                  <UserCircleIcon className="h-7 w-7 text-secondary" />
                  <span className="sr-only">Profile</span>
                </NavLink>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <NavLink to="/login" className="text-sm text-secondary hover:text-primary">
                  Login
                </NavLink>
                <NavLink
                  to="/register"
                  className="rounded-xl bg-primary px-3 py-1.5 text-sm text-white hover:opacity-90"
                >
                  Sign up
                </NavLink>
              </div>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
