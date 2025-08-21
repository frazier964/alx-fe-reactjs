import { Link, Outlet } from "react-router-dom";

export default function Profile() {
  return (
    <div>
      <h1>Profile Page</h1>
      <nav className="flex gap-4">
        <Link to="details">Details</Link>
        <Link to="settings">Settings</Link>
      </nav>

      {/* Outlet renders child routes */}
      <Outlet />
    </div>
  );
}
