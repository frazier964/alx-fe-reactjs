import { useState } from 'react';
import axios from 'axios';

function SearchBar({ setUser }) {
  const [username, setUsername] = useState('');

  const handleSearch = async () => {
    if (!username) return;

    try {
      const response = await axios.get(
        `${import.meta.env.VITE_GITHUB_API_URL}/users/${username}`
      );
      setUser(response.data);
    } catch (error) {
      alert('User not found');
      setUser(null);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search GitHub username..."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
