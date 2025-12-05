import { useState } from "react";
import { useAuthStore } from "../../store/authStore";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, loading, error } = useAuthStore();
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      await login({ email, password });
      navigate("/");
    } catch {}
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-xl font-semibold mb-4">Login</h1>
      <form onSubmit={submit} className="space-y-3">
        <input className="w-full rounded-lg border border-primary/30 px-3 py-2" placeholder="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} aria-label="Email" />
        <input className="w-full rounded-lg border border-primary/30 px-3 py-2" placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} aria-label="Password" />
        {error && <p className="text-error text-sm">{error}</p>}
        <button disabled={loading} className="w-full rounded-xl bg-primary px-4 py-2 text-white">{loading ? "Signing in..." : "Login"}</button>
      </form>
    </div>
  );
}
