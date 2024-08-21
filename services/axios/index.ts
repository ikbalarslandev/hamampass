import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.BASE_URL,
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
    url: `/api/${credentials.endpoint}`,
    data: credentials.payload,
    params: credentials.params,
  };

  return axiosInstance.request(config);
};

export { request };
