import { get, post, put, del } from "./client";

// PUBLIC_INTERFACE
export const listCoupons = (params) => get("/coupons", { params });

// PUBLIC_INTERFACE
export const getCoupon = (id) => get(`/coupons/${id}`);

// PUBLIC_INTERFACE
export const createCoupon = (data) => post("/coupons", data);

// PUBLIC_INTERFACE
export const updateCoupon = (id, data) => put(`/coupons/${id}`, data);

// PUBLIC_INTERFACE
export const deleteCoupon = (id) => del(`/coupons/${id}`);
