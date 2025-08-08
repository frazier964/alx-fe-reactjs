import React from 'react';
import { useUserStore } from '../store/userStore';

const Search = () => {
  const {
    username, location, minRepos,
    setUsername, setLocation, setMinRepos, searchUsers
  } = useUserStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    searchUsers();
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 flex flex-col gap-3 bg-gray-100 rounded-lg shadow">
      <input
        type="text"
        placeholder="GitHub Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="p-2 border rounded"
      />
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="p-2 border rounded"
      />
      <input
        type="number"
        placeholder="Min Repos"
        value={minRepos}
        onChange={(e) => setMinRepos(e.target.value)}
        className="p-2 border rounded"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Search
      </button>
    </form>
  );
};

export default Search;
