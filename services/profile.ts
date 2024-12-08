import axios from "axios";
const BASE_URL = "https://afshar.pythonanywhere.com/accounts/admin/";

export const createProfile = async (profile: any) => {
  try {
    const token = localStorage.getItem("authToken");
    if (!token) {
      throw new Error("توکن احراز هویت یافت نشد.");
    }

    const res = await axios.post(
      `${BASE_URL}create/`, 
      profile,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return res.data;
  } catch (error) {
    console.error("Error creating profile:", error);
    throw error; 
  }
};

export const updateProfile = async (updatedData: any) => {
  try {
    const token = localStorage.getItem("authToken");
    if (!token) {
      throw new Error("توکن احراز هویت یافت نشد.");
    }

    const response = await axios.put(`${BASE_URL}update/`, updatedData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error updating profile:", error);
    throw error; 
  }
};
