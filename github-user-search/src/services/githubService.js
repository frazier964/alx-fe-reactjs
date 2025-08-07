import axios from 'axios';


const BASE_URL = import.meta.env.VITE_GITHUB_API_URL || 'https://api.github.com/search/users';

/**
 * Fetch detailed data for a single GitHub user by username
 */
export const fetchUserData = async (username) => {
  const response = await axios.get(`${BASE_URL}/users/${username}`);
  return response.data;
};

/**
 * Advanced search for GitHub users
 * @param {Object} params - Search parameters
 * @param {string} params.username - GitHub username or keyword
 * @param {string} [params.location] - User location
 * @param {number} [params.minRepos] - Minimum number of public repositories
 */
// export const searchUsers = async ({ username, location, minRepos }) => {
//   let query = '';

//   if (username) query += `${username} in:login`;
//   if (location) query += ` location:${location}`;
//   if (minRepos) query += ` repos:>=${minRepos}`;

//   if (!query.trim()) throw new Error('Please provide at least one search criteria.');

//   const response = await axios.get(`${BASE_URL}/search/users?q=${encodeURIComponent(query)}`);
//   console.log('Search query:', query);
//   console.log('API response:', response.data);
//   return response.data;
// };


export async function searchUsers({ username, location, minRepos }) {
  try {
    let query = '';

    if (username) query += `${username}`;
    if (location) query += `+location:${location}`;
    if (minRepos) query += `+minRepos:>=${minRepos}`;

    console.log('Query:', query); // Optional: for debugging

    const response = await axios.get(BASE_URL, {
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