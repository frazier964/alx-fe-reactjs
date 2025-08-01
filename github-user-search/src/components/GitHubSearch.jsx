import { useState } from 'react';
import { fetchUserData } from '../services/githubService';

function GitHubSearch() {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!username) return;

    setLoading(true);
    setError(false);
    setUser(null);

    try {
      const data = await fetchUserData(username);
      setUser(data);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>GitHub User Search</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>Looks like we cant find the user</p>}
      {user && (
        <div style={{ marginTop: '1rem', border: '1px solid #ccc', padding: '1rem' }}>
          <img src={user.avatar_url} alt="Avatar" width="100" />
          <h3>{user.name || user.login}</h3>
          <p>{user.bio}</p>
          <a href={user.html_url} target="_blank" rel="noreferrer">
            Visit GitHub
          </a>
        </div>
      )}
    </div>
  );
}

export default GitHubSearch;
