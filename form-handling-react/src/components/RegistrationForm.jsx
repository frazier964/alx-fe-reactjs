import React, { useState } from "react";

const RegistrationForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!username || !email || !password) {
      setError("All fields are required.");
      return;
    }
    setError("");

    const formData = { username, email, password };

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: { "Content-Type": "application/json" },
      });
      const data = await response.json();
      console.log("Registered:", data);
      alert("User registered successfully!");
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border rounded w-80 mx-auto mt-10">
      <h2 className="text-xl font-bold mb-4">Register (Controlled)</h2>
      {error && <p className="text-red-500">{error}</p>}

      <input
        type="text"
        name="username"
        placeholder="Username"
        value={username}     {/* ✅ now directly using username */}
        onChange={(e) => setUsername(e.target.value)}
        className="border p-2 w-full mb-2"
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={email}        {/* ✅ now directly using email */}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 w-full mb-2"
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={password}     {/* ✅ now directly using password */}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 w-full mb-2"
      />

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Register
      </button>
    </form>
  );
};

export default RegistrationForm;
