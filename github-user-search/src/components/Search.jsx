import { useState } from 'react';
import { searchUsers, fetchUserData } from '../services/githubService.js';
import '../index.css';

function GitHubSearch() {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [users, setUsers] = useState([]); // changed from user -> users
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!username) return;

    setLoading(true);
    setError(false);
    setUsers([]); // clear previous users

    try {
      const data = await searchUsers({ username, location, minRepos });
      setUsers(data || []); // Ensure compatibility with GitHub API structure
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">GitHub User Search</h2>

      <form
        onSubmit={handleSearch}
        className="flex flex-col gap-4 bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto"
      >
        <input
          type="text"
          placeholder="GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="text"
          placeholder="Location (optional)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="number"
          placeholder="Minimum Repositories (optional)"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          min={0}
        />

        <button
          type="submit"
          className="w-full sm:w-auto bg-blue-600 text-black font-semibold py-2 px-6 rounded-md hover:bg-blue-700 transition duration-200"
        >
          Search
        </button>
      </form>

      {loading && <p className="text-center text-blue-600 mt-4">Loading...</p>}
      {error && <p className="text-center text-red-600 mt-4">User not found or API error.</p>}

      {users.length > 0 && (
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {users.map((user) => (
            <div
              key={user.id}
              className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-md transition duration-200"
            >
              <img
                src={user.avatar_url}
                alt="Avatar"
                className="w-20 h-20 rounded-full mx-auto mb-3"
              />
              <h3 className="text-lg font-semibold text-center">{user.login}</h3>
              <div className="text-center mt-2">
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Visit GitHub Profile
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default GitHubSearch;
