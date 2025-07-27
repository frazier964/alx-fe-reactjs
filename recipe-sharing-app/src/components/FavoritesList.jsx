import { useRecipeStore } from '../store/recipeStore';

const FavoritesList = () => {
  const recipes = useRecipeStore(state => state.recipes);
  const favorites = useRecipeStore(state => state.favorites);

  const favoriteRecipes = recipes.filter(recipe =>
    favorites.includes(recipe.id)
  );

  return (
    <div>
      <h2>My Favorite Recipes</h2>
      {favoriteRecipes.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        favoriteRecipes.map(recipe => (
          <div key={recipe.id} style={{ border: '1px solid green', padding: '10px', marginBottom: '10px' }}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default FavoritesList;
