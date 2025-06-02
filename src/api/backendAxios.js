import axios from "axios";

// Backend URL
const API_URL = "http://localhost:8080"; // Spring Boot backend'inizin çalıştığı URL

// Axios instance oluşturma
const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
