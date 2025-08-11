export default function UserList({ users }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {users.map((user) => (
        <div key={user.id} className="bg-white p-4 shadow rounded">
          <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full mx-auto" />
          <h3 className="text-center mt-2 font-bold">{user.login}</h3>
          <p className="text-center">
            <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
              View Profile
            </a>
          </p>
        </div>
      ))}
    </div>
  );
}
