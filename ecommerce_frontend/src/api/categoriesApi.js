import { get, post, put, del } from "./client";

// PUBLIC_INTERFACE
export const listCategories = (params) => get("/categories", { params });

// PUBLIC_INTERFACE
export const getCategory = (id) => get(`/categories/${id}`);

// PUBLIC_INTERFACE
export const createCategory = (data) => post("/categories", data);

// PUBLIC_INTERFACE
export const updateCategory = (id, data) => put(`/categories/${id}`, data);

// PUBLIC_INTERFACE
export const deleteCategory = (id) => del(`/categories/${id}`);
