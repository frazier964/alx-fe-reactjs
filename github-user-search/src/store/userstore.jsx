import React, { useState } from 'react';
import Search from '../components/Search.jsx';
import { searchUsers } from '../services/githubService';

const App = () => {
  const [users, setUsers] = useState([]);

  const handleSearch = async ({ username, location, minRepos }) => {
    let query = username;

    if (location) query += `+location:${location}`;
    if (minRepos) query += `+repos:>=${minRepos}`;

    try {
      const results = await searchUsers(query);
      setUsers(results.items);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <Search onSearch={handleSearch} />
      <div className="max-w-4xl mx-auto">
        {users.length > 0 ? (
          <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-8">
            {users.map((user) => (
              <li key={user.id} className="bg-white p-4 rounded shadow text-center">
                <img src={user.avatar_url} alt={user.login} className="w-20 h-20 mx-auto rounded-full mb-2" />
                <p className="text-lg font-semibold">{user.login}</p>
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  View Profile
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-gray-600 mt-8">No users found.</p>
        )}
      </div>
    </div>
  );
};

export default App;
