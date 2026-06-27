import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/properties",
});

// Get All
export const getProperties = (params) =>
  API.get("/", { params });

// Get One
export const getProperty = (id) =>
  API.get(`/${id}`);

// Add
export const addProperty = (data) =>
  API.post("/", data);

// Update
export const updateProperty = (id, data) =>
  API.put(`/${id}`, data);

// Delete
export const deleteProperty = (id) =>
  API.delete(`/${id}`);