import { useEffect } from "react";
import { useUIStore } from "../../store/uiStore";

export default function Toasts() {
  const { toasts, removeToast } = useUIStore();

  useEffect(() => {
    const timers = toasts.map((t) =>
      setTimeout(() => removeToast(t.id), t.duration || 3000)
    );
    return () => timers.forEach(clearTimeout);
  }, [toasts, removeToast]);

  return (
    <div className="fixed bottom-4 right-4 space-y-2 z-50">
      {toasts.map((t) => (
        <div key={t.id} role="status" className="rounded-xl bg-white border border-primary/20 px-4 py-2 shadow-soft">
          <p className="text-sm">{t.message}</p>
        </div>
      ))}
    </div>
  );
}
