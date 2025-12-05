import { useState } from "react";
import { useAuthStore } from "../../store/authStore";
import { useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const { register, loading, error } = useAuthStore();
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      await register(form);
      navigate("/");
    } catch {}
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-xl font-semibold mb-4">Create account</h1>
      <form onSubmit={submit} className="space-y-3">
        <input className="w-full rounded-lg border border-primary/30 px-3 py-2" placeholder="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} aria-label="Name"/>
        <input className="w-full rounded-lg border border-primary/30 px-3 py-2" placeholder="Email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} aria-label="Email"/>
        <input className="w-full rounded-lg border border-primary/30 px-3 py-2" placeholder="Password" type="password" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} aria-label="Password"/>
        {error && <p className="text-error text-sm">{error}</p>}
        <button disabled={loading} className="w-full rounded-xl bg-primary px-4 py-2 text-white">{loading ? "Creating..." : "Register"}</button>
      </form>
    </div>
  );
}
