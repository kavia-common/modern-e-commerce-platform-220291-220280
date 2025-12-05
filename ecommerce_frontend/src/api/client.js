import axios from "axios";
import { ENV } from "../config/env";
import { useAuthStore } from "../store/authStore";

// Create axios instance
const api = axios.create({
  baseURL: ENV.API_BASE_URL,
  withCredentials: true, // enable cookies if backend uses them
  headers: {
    "Content-Type": "application/json",
  },
});

// Attach auth token from store if present
api.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Simple response interceptor for error normalization
api.interceptors.response.use(
  (res) => res,
  (error) => {
    const message =
      error?.response?.data?.message ||
      error?.message ||
      "Unexpected error occurred";
    return Promise.reject({ ...error, message });
  }
);

// PUBLIC_INTERFACE
export const get = (url, config) => api.get(url, config).then((r) => r.data);

// PUBLIC_INTERFACE
export const post = (url, data, config) =>
  api.post(url, data, config).then((r) => r.data);

// PUBLIC_INTERFACE
export const put = (url, data, config) =>
  api.put(url, data, config).then((r) => r.data);

// PUBLIC_INTERFACE
export const del = (url, config) => api.delete(url, config).then((r) => r.data);

export default api;
