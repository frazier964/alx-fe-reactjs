import React, { useState, useEffect } from "react";

const API_KEY = "350ac5f0"; // Your OMDb API key
const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}&s=`;

export default function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("Avengers");

  // Fetch movies from API
  const fetchMovies = async (query) => {
    try {
      const res = await fetch(`${API_URL}${query}`);
      const data = await res.json();
      if (data.Search) {
        setMovies(data.Search);
      } else {
        setMovies([]);
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    fetchMovies(searchTerm);
  }, []);

  // Handle search submit
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      fetchMovies(searchTerm);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold text-center mb-6">🎬 Movie Database</h1>

      {/* Search Bar */}
      <form
        onSubmit={handleSearch}
        className="flex justify-center mb-8 gap-2"
      >
        <input
          type="text"
          placeholder="Search for movies..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 rounded-lg text-black w-64"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {/* Movie List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div
              key={movie.imdbID}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300"}
                alt={movie.Title}
                className="w-full h-80 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold">{movie.Title}</h2>
                <p className="text-gray-400">{movie.Year}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-400">
            No movies found.
          </p>
        )}
      </div>
    </div>
  );
}
