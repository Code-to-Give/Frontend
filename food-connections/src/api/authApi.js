import axios from "axios";

const API_BASE_URL = process.env.AUTH_API_URL || "http://localhost:8000/api";

export const login = async (data) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/users/login`, data);
    localStorage.setItem("accessToken", response.data.access_token);
    // debugging
    console.log("Login response:", response);
    return response ? response.data : null;
  } catch (error) {
    if (error.response) {
      // Request made and server responded with a status other than 2xx
      console.error("Error response:", error.response);
      return null; // or handle the error response as needed
    } else if (error.request) {
      // Request was made but no response was received
      console.error("Error request:", error.request);
      return null;
    } else {
      // Something happened while setting up the request
      console.error("Error:", error.message);
      return null;
    }
  }
};

export const register = async (data) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/users`, data);
    return response.data;
  } catch (error) {
    if (error.response) {
      // Server responded with a status other than 2xx
      console.error("Error response:", error.response.data);
      return null; // Handle error accordingly
    } else if (error.request) {
      // Request was made but no response was received
      console.error("Error request:", error.request);
      return null;
    } else {
      // Something happened in setting up the request
      console.error("Error:", error.message);
      return null;
    }
  }
};

export const getCurrentUser = async () => {
  const token = localStorage.getItem("accessToken");
  if (token === "" || !token) return null;
  const accessToken = token ;

  try {
    const response = await axios.get(`${API_BASE_URL}/users/me`, {
      headers: {
        Authorization: `Bearer ${accessToken}`, // Add the Bearer token here
      },
    });

    console.log("User data:", response.data);
    return response.data;
  } catch (err) {
    // Handle any errors
    console.error("Error fetching user data:", err);
    throw err;
  }
};
