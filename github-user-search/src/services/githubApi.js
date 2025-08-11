import axios from 'axios';

const API_URL = import.meta.env.VITE_GITHUB_API_URL;
const API_KEY = import.meta.env.VITE_GITHUB_API_KEY;

const headers = API_KEY ? { Authorization: `token ${API_KEY}` } : {};

export const fetchUser = async (username) => {
  const response = await axios.get(`${API_URL}/users/${username}`, {
    headers,
  });
  return response.data;
};
