import axios from "axios";

const API_BASE_URL = process.env.ALGO_API_URL || "http://localhost:8001/api";

export const getDonorInformation = async (data) => {
  const accessToken = localStorage.getItem("accessToken");

  if (!accessToken) {
    return { error: "No access token found. Please log in again." };
  }

  try {
    // Try to read donor information
    const response = await axios.get(`${API_BASE_URL}/donors/me`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      console.log("Donor not found. Creating new donor...");

      try {
        const createResponse = await axios.post(
          `${API_BASE_URL}/donors`,
          data,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        return createResponse.data;
      } catch (createError) {
        console.error("Error creating donor:", createError);
        throw createError;
      }
    } else {
      console.error("Error retrieving donor information:", error);
      throw error;
    }
  }
};
