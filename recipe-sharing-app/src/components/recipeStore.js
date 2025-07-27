import { create } from 'zustand';
import { nanoid } from 'nanoid';

export const useRecipeStore = create((set) => ({
  recipes: [
    { id: '1', title: 'Pasta Carbonara', description: 'Creamy pasta with bacon.' },
  ],

  addRecipe: (title, description) =>
    set((state) => ({
      recipes: [...state.recipes, { id: nanoid(), title, description }],
    })),

  updateRecipe: (id, updatedData) =>
    set((state) => ({
      recipes: state.recipes.map((r) =>
        r.id === id ? { ...r, ...updatedData } : r
      ),
    })),

  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((r) => r.id !== id),
    })),
}));
