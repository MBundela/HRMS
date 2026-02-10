// export const API = "https://hrms-backend.onrender.com/api";

export const API = import.meta.env.MODE === "development"
  ? "http://localhost:4500/api"
  : "https://hrms-backend.onrender.com/api";
