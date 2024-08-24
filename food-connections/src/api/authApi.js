import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:8000";

export const login = async (data) => {
  const response = await axios.post(`${API_BASE_URL}/users/login`, data);
  return response.data;
};

export const register = async (data) => {
  await axios.post(`${API_BASE_URL}/users`, data);
};
