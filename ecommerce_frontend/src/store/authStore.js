import { create } from "zustand";
import { persist } from "zustand/middleware";
import { fetchMe, login as apiLogin, logout as apiLogout, register as apiRegister } from "../api/authApi";

export const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      token: null, // if using JWT
      role: null,
      loading: false,
      error: null,
      // PUBLIC_INTERFACE
      async initialize() {
        try {
          set({ loading: true, error: null });
          const me = await fetchMe();
          set({ user: me, role: me?.role || "user", loading: false });
        } catch {
          set({ user: null, role: null, loading: false });
        }
      },
      // PUBLIC_INTERFACE
      async login(credentials) {
        set({ loading: true, error: null });
        try {
          const data = await apiLogin(credentials);
          set({
            user: data.user || null,
            token: data.token || null,
            role: (data.user && data.user.role) || "user",
            loading: false,
          });
          return data;
        } catch (e) {
          set({ error: e.message, loading: false });
          throw e;
        }
      },
      // PUBLIC_INTERFACE
      async register(payload) {
        set({ loading: true, error: null });
        try {
          const data = await apiRegister(payload);
          set({
            user: data.user || null,
            token: data.token || null,
            role: (data.user && data.user.role) || "user",
            loading: false,
          });
          return data;
        } catch (e) {
          set({ error: e.message, loading: false });
          throw e;
        }
      },
      // PUBLIC_INTERFACE
      async logout() {
        try {
          await apiLogout();
        } catch {}
        set({ user: null, token: null, role: null });
      },
    }),
    {
      name: "auth",
      partialize: (state) => ({ token: state.token, user: state.user, role: state.role }),
    }
  )
);
