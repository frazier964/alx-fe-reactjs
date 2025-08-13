import { useState } from "react";

export default function SearchBar({ onSearch, initial = "" }) {
  const [q, setQ] = useState(initial);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (q.trim()) onSearch(q.trim());
  };
  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        className="flex-1 p-2 border rounded"
        placeholder="Search movies..."
        aria-label="Search movies"
      />
      <button className="px-4 py-2 bg-blue-600 text-white rounded">Search</button>
    </form>
  );
}
