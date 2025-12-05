import { get, post } from "./client";

// PUBLIC_INTERFACE
export const fetchMe = () => get("/auth/me");

// PUBLIC_INTERFACE
export const login = (payload) => post("/auth/login", payload);

// PUBLIC_INTERFACE
export const register = (payload) => post("/auth/register", payload);

// PUBLIC_INTERFACE
export const logout = () => post("/auth/logout");
