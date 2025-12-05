import { useState } from "react";
import { createOrderCOD } from "../../api/ordersApi";

export default function CheckoutPage() {
  const [address, setAddress] = useState("");
  const [placing, setPlacing] = useState(false);
  const [result, setResult] = useState(null);

  const placeOrder = async () => {
    setPlacing(true);
    try {
      const res = await createOrderCOD({ address, paymentMethod: "COD" });
      setResult(res);
      window.location.href = "/orders";
    } catch (e) {
      setResult({ error: e.message });
    } finally {
      setPlacing(false);
    }
  };

  return (
    <div>
      <h1 className="text-xl font-semibold mb-4">Checkout</h1>
      <div className="space-y-3 max-w-lg">
        <label className="block">
          <span className="text-sm text-secondary">Delivery Address</span>
          <textarea
            className="mt-1 w-full rounded-lg border border-primary/30 p-3"
            rows={4}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            aria-label="Delivery address"
          />
        </label>
        <button
          disabled={placing || !address}
          onClick={placeOrder}
          className="rounded-xl bg-primary px-5 py-2 text-white disabled:opacity-50"
        >
          {placing ? "Placing..." : "Place Order (COD)"}
        </button>
        {result?.error && <p className="text-error">{result.error}</p>}
      </div>
    </div>
  );
}
