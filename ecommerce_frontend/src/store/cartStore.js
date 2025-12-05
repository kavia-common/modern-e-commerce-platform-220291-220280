import { create } from "zustand";
import { persist } from "zustand/middleware";
import { addToCart, applyCoupon, getCart, removeCartItem, updateCartItem } from "../api/cartApi";

export const useCartStore = create(
  persist(
    (set, get) => ({
      items: [],
      coupon: null,
      totals: { subTotal: 0, discount: 0, grandTotal: 0 },
      loading: false,
      error: null,
      // PUBLIC_INTERFACE
      setFromServer(cart) {
        const items = cart?.items || [];
        const coupon = cart?.coupon || null;
        const totals = cart?.totals || { subTotal: 0, discount: 0, grandTotal: 0 };
        set({ items, coupon, totals });
      },
      // PUBLIC_INTERFACE
      async refresh() {
        set({ loading: true });
        try {
          const cart = await getCart();
          get().setFromServer(cart);
        } catch (e) {
          set({ error: e.message });
        } finally {
          set({ loading: false });
        }
      },
      // PUBLIC_INTERFACE
      async add(productId, qty = 1) {
        await addToCart(productId, qty);
        await get().refresh();
      },
      // PUBLIC_INTERFACE
      async update(productId, qty) {
        await updateCartItem(productId, qty);
        await get().refresh();
      },
      // PUBLIC_INTERFACE
      async remove(productId) {
        await removeCartItem(productId);
        await get().refresh();
      },
      // PUBLIC_INTERFACE
      async apply(code) {
        await applyCoupon(code);
        await get().refresh();
      },
    }),
    { name: "cart" }
  )
);
