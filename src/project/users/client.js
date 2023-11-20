import axios from "axios";

const request = axios.create({
  withCredentials: true,
});

const USERS_API = "http://localhost:4000/api/users";

export const findAllUsers = async () => {
  const response = await request.get(USERS_API);
  return response.data;
};

export const findUserById = async (id) => {
  const response = await request.get(`${USERS_API}/${id}`);
  return response.data;
};

export const updateUser = async (id, user) => {
  const response = await request.put(`${USERS_API}/${id}`, user);
  return response.data;
};

export const signIn = async (credentials) => {
  const response = await request.post(`${USERS_API}/signin`, credentials);
  return response.data;
};

export const signUp = async (credentials) => {
  const response = await request.post(`${USERS_API}/signup`, credentials);
  return response.data;
};

export const account = async () => {
  const response = await request.post(`${USERS_API}/account`);
  return response.data;
};

export const signOut = async () => {
  const response = await request.post(`${USERS_API}/signout`);
  return response.data;
};
