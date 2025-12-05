import { useCartStore } from "../../store/cartStore";
import { useState } from "react";

export default function CartPage() {
  const { items, totals, update, remove, apply } = useCartStore();
  const [coupon, setCoupon] = useState("");

  return (
    <div>
      <h1 className="text-xl font-semibold mb-4">Your Cart</h1>
      {items.length === 0 ? (
        <p className="text-secondary">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-[1fr,320px] gap-6">
          <div className="space-y-3">
            {items.map((it) => (
              <div key={it.productId} className="rounded-xl border border-primary/10 bg-white p-3 flex items-center justify-between">
                <div>
                  <div className="font-medium">{it.name}</div>
                  <div className="text-sm text-secondary">${it.price} × {it.qty}</div>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    min="1"
                    value={it.qty}
                    onChange={(e) => update(it.productId, Number(e.target.value))}
                    className="w-20 rounded-lg border border-primary/30 px-2 py-1"
                    aria-label={`Quantity for ${it.name}`}
                  />
                  <button onClick={() => remove(it.productId)} className="text-sm text-error">Remove</button>
                </div>
              </div>
            ))}
          </div>
          <aside className="rounded-xl border border-primary/10 bg-white p-4 h-fit">
            <h2 className="font-semibold mb-3">Order Summary</h2>
            <div className="text-sm text-secondary space-y-1">
              <div className="flex justify-between"><span>Subtotal</span><span>${totals.subTotal}</span></div>
              <div className="flex justify-between"><span>Discount</span><span>-${totals.discount}</span></div>
              <div className="flex justify-between font-semibold text-text"><span>Total</span><span>${totals.grandTotal}</span></div>
            </div>
            <div className="mt-4 flex gap-2">
              <input
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                placeholder="Coupon code"
                className="flex-1 rounded-lg border border-primary/30 px-3 py-2"
                aria-label="Coupon code"
              />
              <button onClick={() => apply(coupon)} className="rounded-lg border border-primary/30 px-3 py-2 text-sm">Apply</button>
            </div>
            <a href="/checkout" className="mt-4 block rounded-xl bg-primary px-4 py-2 text-center text-white hover:opacity-90">
              Proceed to Checkout
            </a>
          </aside>
        </div>
      )}
    </div>
  );
}
