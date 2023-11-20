import axios from "axios";

const LIKES_API = "http://localhost:4000/api";

export const findAllLikes = async () => {
  const response = await axios.get(`${LIKES_API}/likes`);
  return response.data;
};
export const createUserLikesAlbum = (userId, albumId) => {
  const response = axios.post(`${LIKES_API}/users/${userId}/likes/${albumId}`);
  return response.data;
};
export const findAlbumsUserLikes = () => {};
export const findUsersWhoLikeAlbum = () => {};
