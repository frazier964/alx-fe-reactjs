// src/components/Search.jsx
import React, { useState } from 'react';

const Search = ({ onSearch }) => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ username, location, minRepos });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-2xl mx-auto mt-8 space-y-4"
    >
      <h2 className="text-2xl font-semibold text-center mb-4">GitHub Advanced User Search</h2>

      <div>
        <label htmlFor="username" className="block text-gray-700 font-bold mb-2">Username</label>
        <input
          id="username"
          type="text"
          placeholder="e.g., dan"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor="location" className="block text-gray-700 font-bold mb-2">Location</label>
        <input
          id="location"
          type="text"
          placeholder="e.g., Kenya"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label htmlFor="minRepos" className="block text-gray-700 font-bold mb-2">Minimum Repositories</label>
        <input
          id="minRepos"
          type="number"
          min="0"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default Search;
