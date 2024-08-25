import axios from "axios";

const API_BASE_URL = process.env.ALGO_API_URL || "http://localhost:8001/api";

export const getAgencyInformation = async (data) => {
  const accessToken = localStorage.getItem("accessToken");

  if (!accessToken) {
    return { error: "No access token found. Please log in again." };
  }

  try {
    // Try to read agency information
    const response = await axios.get(`${API_BASE_URL}/agencies/me`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      console.log("Agency not found. Creating new agency...");

      try {
        const createResponse = await axios.post(
          `${API_BASE_URL}/agencies`,
          data,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        return createResponse.data;
      } catch (createError) {
        console.error("Error creating agency:", createError);
        throw createError;
      }
    } else {
      console.error("Error retrieving agency information:", error);
      throw error;
    }
  }
};
