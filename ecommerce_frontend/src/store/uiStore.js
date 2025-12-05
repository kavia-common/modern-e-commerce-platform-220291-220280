import { create } from "zustand";

export const useUIStore = create((set) => ({
  loading: false,
  toasts: [],
  // PUBLIC_INTERFACE
  setLoading: (v) => set({ loading: v }),
  // PUBLIC_INTERFACE
  addToast: (toast) =>
    set((s) => ({
      toasts: [
        ...s.toasts,
        { id: crypto.randomUUID(), ...toast, createdAt: Date.now() },
      ],
    })),
  // PUBLIC_INTERFACE
  removeToast: (id) =>
    set((s) => ({ toasts: s.toasts.filter((t) => t.id !== id) })),
}));
