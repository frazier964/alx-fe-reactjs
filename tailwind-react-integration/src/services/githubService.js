export const fetchUsers = async (username, location, minRepos) => {
  let query = '';

  if (username) query += `${username} in:login`;
  if (location) query += ` location:${location}`;
  if (minRepos) query += ` repos:>=${minRepos}`;

  const response = await fetch(
    `https://api.github.com/search/users?q=${encodeURIComponent(query)}`
  );

  if (!response.ok) {
    throw new Error(`GitHub API Error: ${response.status}`);
  }

  const data = await response.json();
  return data.items || [];
};
