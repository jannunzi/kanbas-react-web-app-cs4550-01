import axios from "axios";

const KEY = process.env.REACT_APP_NAPSTER_API_KEY;
const NAPSTER_API = "https://api.napster.com/v2.2";
const NAPSTER_IMAGE_URL = "https://api.napster.com/imageserver/v2";

export const albumImageUrl = (album) =>
  `${NAPSTER_IMAGE_URL}/albums/${album.id}
/images/300x300.jpg`;

export const fullTextSearch = async (text) => {
  const response = await axios.get(
    `${NAPSTER_API}/search/verbose?query=${text}&apikey=${KEY}&type=albums`
  );
  return response.data;
};

export const fetchAlbumById = async (albumId) => {
  const response = await axios.get(
    `${NAPSTER_API}/albums/${albumId}?apikey=${KEY}`
  );
  return response.data;
};

export const fetchTracksByAlbumId = async (albumId) => {
  const response = await axios.get(
    `${NAPSTER_API}/albums/${albumId}/tracks?apikey=${KEY}`
  );
  return response.data;
};
