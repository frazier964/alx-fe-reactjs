import { Link, Outlet } from "react-router-dom";

export default function Profile() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Profile Page</h1>
      <p className="mb-4">Welcome to your profile! Choose a section:</p>

      {/* Links to nested routes */}
      <nav className="flex gap-4 mb-6">
        <Link to="details" className="text-blue-600 hover:underline">
          Profile Details
        </Link>
        <Link to="settings" className="text-blue-600 hover:underline">
          Profile Settings
        </Link>
      </nav>

      {/* Outlet renders nested routes */}
      <div className="border p-4 rounded bg-gray-50">
        Routes
        Route
        ProfileDetails
        ProfileSettings
 <Outlet />
      </div>
    </div>
  );
}
