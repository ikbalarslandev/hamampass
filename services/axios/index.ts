import axios from "axios";

// const baseURL = "https://hp-backend-90q9.onrender.com/api";
const baseURL = "http://localhost:3003/api";

const axiosInstance = axios.create({
  baseURL,
  withCredentials: false,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

const request = (credentials: {
  type: "get" | "put" | "post" | "delete";
  endpoint: string;
  payload?: any;
  params?: any; // Add the params property
}) => {
  const config = {
    method: credentials.type,
    url: `/${credentials.endpoint}`,
    data: credentials.payload,
    params: credentials.params,
  };

  return axiosInstance.request(config);
};

export { request };
