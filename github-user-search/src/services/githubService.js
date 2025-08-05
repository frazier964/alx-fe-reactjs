import axios from 'axios';

const BASE_URL = import.meta.env.VITE_GITHUB_API_URL || 'https://api.github.com';

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
export const searchUsers = async ({ username, location, minRepos }) => {
  let query = '';

  if (username) query += `${username} in:login`;
  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>=${minRepos}`;

  if (!query.trim()) throw new Error('Please provide at least one search criteria.');

  const response = await axios.get(`${BASE_URL}/search/users?q=${encodeURIComponent(query)}`);
  return response.data;
};
