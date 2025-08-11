import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  return (
    <div className="bg-white rounded shadow hover:shadow-lg transform hover:scale-105 transition">
      <img src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.png"} alt={movie.Title} className="w-full h-64 object-cover rounded-t" />
      <div className="p-3">
        <h3 className="font-semibold">{movie.Title}</h3>
        <p className="text-sm text-gray-600">{movie.Year} • {movie.Type}</p>
        <Link to={`/movie/${movie.imdbID}`} className="text-blue-500 mt-2 inline-block">Details →</Link>
      </div>
    </div>
  );
}
