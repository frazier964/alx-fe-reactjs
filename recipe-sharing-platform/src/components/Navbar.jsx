import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-green-600 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">🍲 Recipe Share</h1>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/add" className="hover:underline">Add Recipe</Link>
        </div>
      </div>
    </nav>
  );
}
