import axios from 'axios';


const BASE_URL = import.meta.env.VITE_GITHUB_API_URL || 'https://api.github.com/search/users?q';






export async function searchUsers({ username, location, minRepos }) {
  try {
    let query = '';

    if (username) query += `${username}`;
    if (location) query += `+location:${location}`;
    if (minRepos) query += `+minRepos:>=${minRepos}`;

    console.log('Query:', query); // Optional: for debugging

    const fullUrl =`${BASE_URL}=${encodeURIComponent(query)}`;
    const response = await axios.get(fullUrl, {
      params: {
        q: query,
      },
      headers: {
        Accept: 'application/vnd.github.v3+json',
      },
    });
console.log('API response:', response.data.items); // Optional: for debugging
    return response.data.items;
  } catch (error) {
    console.error('GitHub search failed:', error.response?.data || error.message);
    return [];
  }
}