import { Navigate, Outlet } from "react-router-dom";

// Fake auth state (later we can improve with useState or context)
const isAuthenticated = false;
useAuth
export default function ProtectedRoute() {
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}
