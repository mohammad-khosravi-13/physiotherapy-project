import axios from "axios";
interface LoginResponse {
  token: string;
  user: {
    id: number;
    username: string;
  };
}
export const login = async (loginData: {
  username: string;
  password: string;
}): Promise<LoginResponse> => {
  try {
    const response = await axios.post(
      "https://afshar.pythonanywhere.com/accounts/login/password",
      loginData
    );
    return response.data;
  } catch (error: any) {
    console.error("Error during login:", error.response?.data || error.message);
    throw error;    
  }
};
