import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieById } from "../services/movieService";

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const res = await getMovieById(id);
        if (mounted) {
          if (res.Response === "True") setMovie(res);
          else setError(res.Error || "Not found");
        }
      } catch {
        setError("Network error");
      }
    })();
    return () => (mounted = false);
  }, [id]);

  if (error) return <div className="p-4 text-red-500">{error}</div>;
  if (!movie) return <div className="p-4">Loading…</div>;

  return (
    <div className="container mx-auto p-4 max-w-3xl bg-white rounded shadow">
      <div className="flex flex-col md:flex-row gap-6">
        <img src={movie.Poster !== "N/A" ? movie.Poster : "/placeholder.png"} alt={movie.Title} className="w-full md:w-1/3 object-cover rounded" />
        <div>
          <h1 className="text-2xl font-bold">{movie.Title} ({movie.Year})</h1>
          <p className="text-sm text-gray-600">{movie.Genre} • {movie.Runtime}</p>
          <p className="mt-4">{movie.Plot}</p>
          <p className="mt-4"><strong>Cast:</strong> {movie.Actors}</p>
          <p className="mt-2"><strong>Director:</strong> {movie.Director}</p>
          <div className="mt-4">
            <h3 className="font-semibold">Ratings</h3>
            <ul className="list-disc list-inside">
              {movie.Ratings?.map((r, i) => <li key={i}>{r.Source}: {r.Value}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
