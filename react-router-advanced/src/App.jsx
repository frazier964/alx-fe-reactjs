import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import ProfileDetails from "./pages/ProfileDetails";
import ProfileSettings from "./pages/ProfileSettings";
import BlogPost from "./pages/BlogPost";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <div>
      {/* Navigation */}
      <nav className="p-4 bg-gray-200 flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/blog/1">Blog Post #1</Link>
        <Link to="/login">Login</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* Protected Route for Profile */}
        <Route element={<ProtectedRoute />}>
          <Route path="/profile" element={<Profile />}>
            <Route path="details" element={<ProfileDetails />} />
            <Route path="settings" element={<ProfileSettings />} />
          </Route>
        </Route>

        {/* Dynamic Route */}
        <Route path="/blog/:id" element={<BlogPost />} />

        <Route path="/login" element={<Login />} />
      </Routes>
      BrowserRouter
    </div>
  );
}

export default App;
