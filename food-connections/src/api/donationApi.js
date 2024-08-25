import axios from "axios";

const API_BASE_URL = process.env.ALGO_API_URL || "http://localhost:8001/api";

export const submitDonationForm = async (data) => {
  const accessToken = localStorage.getItem("accessToken");

  if (!accessToken) {
    return { error: "No access token found. Please log in again." };
  }

  try {
    // Try to read donor information
    const response = await axios.post(`${API_BASE_URL}/donations/me`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error submitting donation information", error);
    throw error;
  }
};

export const getDonations = async () => {
  const accessToken = localStorage.getItem("accessToken");

  if (!accessToken) {
    return { error: "No access token found. Please log in again." };
  }

  try {
    // Try to read donor information
    const response = await axios.get(`${API_BASE_URL}/donations/me`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error getting donations", error);
    throw error;
  }
};
