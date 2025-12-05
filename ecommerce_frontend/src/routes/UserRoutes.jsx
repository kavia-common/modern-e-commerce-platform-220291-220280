import { Route } from "react-router-dom";
import UserLayout from "../layouts/UserLayout";
import HomePage from "../pages/user/HomePage";
import CategoryPage from "../pages/user/CategoryPage";
import ProductDetailPage from "../pages/user/ProductDetailPage";
import CartPage from "../pages/user/CartPage";
import CheckoutPage from "../pages/user/CheckoutPage";
import OrdersPage from "../pages/user/OrdersPage";
import OrderDetailPage from "../pages/user/OrderDetailPage";
import LoginPage from "../pages/user/LoginPage";
import RegisterPage from "../pages/user/RegisterPage";
import ProfilePage from "../pages/user/ProfilePage";
import AddressesPage from "../pages/user/AddressesPage";
import WishlistPage from "../pages/user/WishlistPage";
import PaymentResultPage from "../pages/user/PaymentResultPage";

export const userRoutes = (
  <Route element={<UserLayout />}>
    <Route index element={<HomePage />} />
    <Route path="c" element={<CategoryPage />} />
    <Route path="p/:id" element={<ProductDetailPage />} />
    <Route path="cart" element={<CartPage />} />
    <Route path="checkout" element={<CheckoutPage />} />
    <Route path="orders" element={<OrdersPage />} />
    <Route path="orders/:id" element={<OrderDetailPage />} />
    <Route path="login" element={<LoginPage />} />
    <Route path="register" element={<RegisterPage />} />
    <Route path="profile" element={<ProfilePage />} />
    <Route path="addresses" element={<AddressesPage />} />
    <Route path="wishlist" element={<WishlistPage />} />
    <Route path="payment-result" element={<PaymentResultPage />} />
  </Route>
);
