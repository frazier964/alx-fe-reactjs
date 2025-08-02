import { useState } from 'react';
import { searchUsers } from '../services/githubService';

function Search() {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setResults([]);

    try {
      const queryParts = [];

      if (username) queryParts.push(`${username} in:login`);
      if (location) queryParts.push(`location:${location}`);
      if (minRepos) queryParts.push(`repos:>=${minRepos}`);

      const query = queryParts.join(' ');
      const data = await searchUsers(query);
      setResults(data.items || []);
    } catch (err) {
      setError("Looks like we can't find the user.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: '1rem' }}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ padding: '0.5rem', marginRight: '0.5rem' }}
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          style={{ padding: '0.5rem', marginRight: '0.5rem' }}
        />
        <input
          type="number"
          placeholder="Min Repos"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          style={{ padding: '0.5rem', marginRight: '0.5rem', width: '100px' }}
        />
        <button type="submit" style={{ padding: '0.5rem' }}>
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      <div style={{ marginTop: '1rem' }}>
        {results.map((user) => (
          <div
            key={user.id}
            style={{
              border: '1px solid #ccc',
              padding: '1rem',
              marginBottom: '1rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
            }}
          >
            <img src={user.avatar_url} alt="avatar" width="80" height="80" />
            <div>
              <h3>{user.login}</h3>
              <a href={user.html_url} target="_blank" rel="noreferrer">
                Visit GitHub Profile
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
