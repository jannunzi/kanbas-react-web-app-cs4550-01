import axios from "axios";

const USERS_API = "http://localhost:4000/api/users";

export const findAllUsers = async () => {
  const response = await axios.get(USERS_API);
  return response.data;
};

export const findUserById = async (id) => {
  const response = await axios.get(`${USERS_API}/${id}`);
  return response.data;
};

export const updateUser = async (id, user) => {
  const response = await axios.put(`${USERS_API}/${id}`, user);
  return response.data;
};

export const signIn = async (credentials) => {
  const response = await axios.post(`${USERS_API}/signin`, credentials);
  return response.data;
};

export const signUp = async (credentials) => {
  const response = await axios.post(`${USERS_API}/signup`, credentials);
  return response.data;
};

export const account = async () => {
  const response = await axios.post(`${USERS_API}/account`);
  return response.data;
};

export const signOut = async () => {
  const response = await axios.post(`${USERS_API}/signout`);
  return response.data;
};
