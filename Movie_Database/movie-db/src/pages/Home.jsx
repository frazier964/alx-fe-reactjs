import { useState } from "react";
import SearchBar from "../components/SearchBar";
import MovieCard from "../components/MovieCard";
import { searchMovies } from "../services/movieService";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSearch(q) {
    setError(""); setLoading(true);
    try {
      const data = await searchMovies(q);
      if (data.Response === "True") setMovies(data.Search);
      else { setMovies([]); setError(data.Error || "No movies found"); }
    } catch (err) {
      setError("Network or API error");
    }
    setLoading(false);
  }

  return (
    <div className="container mx-auto p-4">
      <SearchBar onSearch={handleSearch} />
      {loading && <p>Loading…</p>}
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        {movies.map(m => <MovieCard key={m.imdbID} movie={m} />)}
      </div>
    </div>
  );
}
