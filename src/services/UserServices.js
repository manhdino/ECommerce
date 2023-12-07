import axios from "axios";

const baseAPI = axios.create({
  baseURL: "http://localhost:3000/api/user",
});

export const SignInUser = async (data) => {
  return await axios.post(`/sign-in`, data);
};

export default baseAPI;
