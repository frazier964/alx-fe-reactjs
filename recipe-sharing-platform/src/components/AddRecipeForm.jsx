// src/components/AddRecipeForm.jsx
import { useState } from "react";

export default function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = "Recipe title is required.";
    if (!ingredients.trim()) {
      newErrors.ingredients = "Ingredients are required.";
    } else if (ingredients.split("\n").length < 2) {
      newErrors.ingredients = "Please provide at least two ingredients.";
    }
    if (!steps.trim()) newErrors.steps = "Preparation steps are required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const newRecipe = {
      title,
      ingredients: ingredients.split("\n"),
      steps: steps.split("\n"),
    };
    console.log("New Recipe Submitted:", newRecipe);

    // Reset form
    setTitle("");
    setIngredients("");
    setSteps("");
    setErrors({});
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Add a New Recipe</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <div>
          <label className="block text-gray-700 font-semibold mb-1">
            Recipe Title
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
        </div>

        {/* Ingredients */}
        <div>
          <label className="block text-gray-700 font-semibold mb-1">
            Ingredients (one per line)
          </label>
          <textarea
            className="w-full border border-gray-300 rounded p-2 h-28 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          />
          {errors.ingredients && (
            <p className="text-red-500 text-sm">{errors.ingredients}</p>
          )}
        </div>

        {/* Preparation Steps */}
        <div>
          <label className="block text-gray-700 font-semibold mb-1">
            Preparation Steps (one per line)
          </label>
          <textarea
            className="w-full border border-gray-300 rounded p-2 h-28 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
          />
          {errors.steps && (
            <p className="text-red-500 text-sm">{errors.steps}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded shadow"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}
