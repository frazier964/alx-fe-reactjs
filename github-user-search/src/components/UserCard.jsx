function UserCard({ user }) {
  return (
    <div style={{ marginTop: '2rem', border: '1px solid #ccc', padding: '1rem' }}>
      <img src={user.avatar_url} alt={user.login} width={100} />
      <h2>{user.name || user.login}</h2>
      <p>{user.bio}</p>
      <a href={user.html_url} target="_blank">View Profile</a>
    </div>
  );
}

export default UserCard;
