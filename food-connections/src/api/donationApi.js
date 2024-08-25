import axios from "axios";

const API_BASE_URL = process.env.ALGO_API_URL || "http://localhost:8001/api";

export const submitDonationForm = async (data) => {
  // {
  //     "food_type": "vegetarian",
  //     "quantity": 2,
  //     "location": [1.3521, 103.8198],
  //     "status": "Ready",
  //     "expiry_time": "2023-09-01T14:30:45.123456+00:00"
  // }
  const accessToken = localStorage.getItem("accessToken");

  if (!accessToken) {
    return { error: "No access token found. Please log in again." };
  }

  try {
    // Try to read donor information
    const response = await axios.post(`${API_BASE_URL}/donations/me`, data, {
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
