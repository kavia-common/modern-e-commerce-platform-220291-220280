import { get, post, put, del } from "./client";

// PUBLIC_INTERFACE
export const listProducts = (params) => get("/products", { params });

// PUBLIC_INTERFACE
export const getProduct = (id) => get(`/products/${id}`);

// PUBLIC_INTERFACE
export const createProduct = (data) => post("/products", data);

// PUBLIC_INTERFACE
export const updateProduct = (id, data) => put(`/products/${id}`, data);

// PUBLIC_INTERFACE
export const deleteProduct = (id) => del(`/products/${id}`);

// PUBLIC_INTERFACE
export const featuredProducts = () => get("/products/featured");
