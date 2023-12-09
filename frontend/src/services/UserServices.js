import axios from "axios";

export const loginUser = async (data) => {
  const res = await axios.post("http://localhost:5000/api/user/sign-in", data);
  return res.data;
};
