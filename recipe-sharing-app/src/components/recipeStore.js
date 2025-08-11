import { create } from 'zustand';
import { nanoid } from 'nanoid';

export const useRecipeStore = create((set) => ({
  recipes: [
    { id: '1', title: 'Pasta Carbonara', description: 'Creamy pasta with bacon.' },
    { id: '2', title: 'Chicken Curry', description: 'Spicy Indian-style curry.' },
    { id: '3', title: 'Fruit Salad', description: 'Fresh fruits mixed together.' },
  ],

  favorites: [],
  recommendations: [],

  searchTerm: '',
  filteredRecipes: [],

  // ✅ Fix: Add this to fix your error
  setRecipes: (newRecipes) =>
    set((state) => {
      const filtered = state.searchTerm
        ? newRecipes.filter((recipe) =>
            recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
            recipe.description.toLowerCase().includes(state.searchTerm.toLowerCase())
          )
        : newRecipes;

      return { recipes: newRecipes, filteredRecipes: filtered };
    }),

  setSearchTerm: (term) =>
    set((state) => {
      const filtered = state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(term.toLowerCase()) ||
        recipe.description.toLowerCase().includes(term.toLowerCase())
      );
      return { searchTerm: term, filteredRecipes: filtered };
    }),

  addRecipe: (title, description) =>
    set((state) => {
      const newRecipe = { id: nanoid(), title, description };
      const updatedRecipes = [...state.recipes, newRecipe];
      const filtered = state.searchTerm
        ? updatedRecipes.filter((r) =>
            r.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
            r.description.toLowerCase().includes(state.searchTerm.toLowerCase())
          )
        : updatedRecipes;
      return { recipes: updatedRecipes, filteredRecipes: filtered };
    }),

  updateRecipe: (id, updatedData) =>
    set((state) => {
      const updatedRecipes = state.recipes.map((r) =>
        r.id === id ? { ...r, ...updatedData } : r
      );
      const filtered = state.searchTerm
        ? updatedRecipes.filter((r) =>
            r.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
            r.description.toLowerCase().includes(state.searchTerm.toLowerCase())
          )
        : updatedRecipes;
      return { recipes: updatedRecipes, filteredRecipes: filtered };
    }),

  deleteRecipe: (id) =>
    set((state) => {
      const updatedRecipes = state.recipes.filter((r) => r.id !== id);
      const filtered = state.searchTerm
        ? updatedRecipes.filter((r) =>
            r.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
            r.description.toLowerCase().includes(state.searchTerm.toLowerCase())
          )
        : updatedRecipes;
      return { recipes: updatedRecipes, filteredRecipes: filtered };
    }),

  addFavorite: (id) =>
    set((state) => ({
      favorites: [...state.favorites, id],
    })),

  removeFavorite: (id) =>
    set((state) => ({
      favorites: state.favorites.filter((favId) => favId !== id),
    })),

  setRecommendations: (list) =>
    set(() => ({
      recommendations: list,
    })),
}));
