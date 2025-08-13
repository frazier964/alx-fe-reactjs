import axios from "axios";

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const BASE = "https://www.omdbapi.com/";

export async function searchMovies(q, page = 1) {
  const res = await axios.get(BASE, { params: { apikey: API_KEY, s: q, page } });
  return res.data;
}

export async function getMovieById(id) {
  const res = await axios.get(BASE, { params: { apikey: API_KEY, i: id, plot: "full" } });
  return res.data;
}
