import { get, post, del } from "./client";

// PUBLIC_INTERFACE
export const getCart = () => get("/cart");

// PUBLIC_INTERFACE
export const addToCart = (productId, qty = 1) =>
  post("/cart/add", { productId, qty });

// PUBLIC_INTERFACE
export const updateCartItem = (productId, qty) =>
  post("/cart/update", { productId, qty });

// PUBLIC_INTERFACE
export const removeCartItem = (productId) =>
  post("/cart/remove", { productId });

// PUBLIC_INTERFACE
export const applyCoupon = (code) => post("/cart/apply-coupon", { code });

// PUBLIC_INTERFACE
export const clearCart = () => del("/cart");
