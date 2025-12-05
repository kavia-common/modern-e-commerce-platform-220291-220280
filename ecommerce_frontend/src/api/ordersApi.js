import { get, post } from "./client";

// PUBLIC_INTERFACE
export const createOrderCOD = (payload) => post("/orders", payload);

// PUBLIC_INTERFACE
export const listOrders = (params) => get("/orders", { params });

// PUBLIC_INTERFACE
export const getOrder = (id) => get(`/orders/${id}`);
