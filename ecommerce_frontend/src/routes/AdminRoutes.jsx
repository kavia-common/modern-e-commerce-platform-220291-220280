import { Route } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import ProtectedRoute from "./ProtectedRoute";
import DashboardPage from "../pages/admin/DashboardPage";
import ProductsListPage from "../pages/admin/ProductsListPage";
import ProductEditPage from "../pages/admin/ProductEditPage";
import CategoriesListPage from "../pages/admin/CategoriesListPage";
import CategoryEditPage from "../pages/admin/CategoryEditPage";
import OrdersListPage from "../pages/admin/OrdersListPage";
import OrderDetailPage from "../pages/admin/OrderDetailPage";
import UsersListPage from "../pages/admin/UsersListPage";
import CouponsListPage from "../pages/admin/CouponsListPage";
import CouponEditPage from "../pages/admin/CouponEditPage";
import BannersPage from "../pages/admin/BannersPage";
import SettingsPage from "../pages/admin/SettingsPage";

export const adminRoutes = (
  <Route element={<ProtectedRoute role="admin" />}>
    <Route element={<AdminLayout />}>
      <Route index path="/admin" element={<DashboardPage />} />
      <Route path="/admin/products" element={<ProductsListPage />} />
      <Route path="/admin/products/:id" element={<ProductEditPage />} />
      <Route path="/admin/categories" element={<CategoriesListPage />} />
      <Route path="/admin/categories/:id" element={<CategoryEditPage />} />
      <Route path="/admin/orders" element={<OrdersListPage />} />
      <Route path="/admin/orders/:id" element={<OrderDetailPage />} />
      <Route path="/admin/users" element={<UsersListPage />} />
      <Route path="/admin/coupons" element={<CouponsListPage />} />
      <Route path="/admin/coupons/:id" element={<CouponEditPage />} />
      <Route path="/admin/banners" element={<BannersPage />} />
      <Route path="/admin/settings" element={<SettingsPage />} />
    </Route>
  </Route>
);
