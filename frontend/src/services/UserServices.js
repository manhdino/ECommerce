import axios from "axios";
const BASE_URL = "http://localhost:3000/api/user";

export const loginUser = async (data) => {
  const res = await axios.post(`${BASE_URL}/sign-in`, data);
  return res.data;
};
export const signupUser = async (data) => {
  const res = await axios.post(`${BASE_URL}/sign-up`, data);
  return res.data;
};

export const getDetailsUser = async (id, access_token) => {
  const res = await axios.get(`${BASE_URL}/get-details/${id}`, {
    headers: {
      token: `Bearer ${access_token}`,
    },
  });
  return res.data;
};

export const logoutUser = async () => {
  const res = await axios.post(`${BASE_URL}/log-out`);
  return res.data;
};

export const updateUser = async (id, data, access_token) => {
  const res = await axios.put(`${BASE_URL}/update-user/${id}`, data, {
    headers: {
      token: `Bearer ${access_token}`,
    },
  });
  return res.data;
};
