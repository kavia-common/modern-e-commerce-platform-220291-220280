import { get, put } from "./client";

// PUBLIC_INTERFACE
export const listUsers = (params) => get("/users", { params });

// PUBLIC_INTERFACE
export const getUser = (id) => get(`/users/${id}`);

// PUBLIC_INTERFACE
export const updateProfile = (data) => put("/users/me", data);

// PUBLIC_INTERFACE
export const listAddresses = () => get("/users/me/addresses");
