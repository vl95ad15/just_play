import axios from "axios";

const API_ROUTE = "http://localhost:3004";

const axiosInstance = axios.create({
  baseURL: API_ROUTE,
});

export const client = {
  signUp: async (payload) => axiosInstance.post("users", payload),
  checkPassword: async (email, password) => {
    const params = { email };
    const { data } = await axiosInstance.get("users", { params });
    const user = data.find((us) => us);
    return user?.password === password;
  },
  getUsernamByEmail: async (email) => {
    const params = { email };
    const { data } = await axiosInstance.get("users", { params });
    const user = data.find((us) => us);
    return user?.userName;
  },
  getLibraryByUsername: async (userName) => {
    const params = { userName };
    const { data } = await axiosInstance.get("users", { params });
    const user = data.find((us) => us);
    return user?.library ?? [];
  },
};