import axios from "axios";

const baseURL = "https://hp-backend-bieq.onrender.com/api";

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
}) => {
  return axiosInstance[credentials.type](
    `/${credentials.endpoint}`,
    credentials.payload
  );
};

export { request };
