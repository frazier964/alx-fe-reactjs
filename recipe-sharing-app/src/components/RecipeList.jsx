import { useRecipeStore } from '../store/recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const recipes = useRecipeStore(state =>
    state.filteredRecipes.length > 0 || state.searchTerm
      ? state.filteredRecipes
      : state.recipes
  );

  const favorites = useRecipeStore(state => state.favorites);
  const addFavorite = useRecipeStore(state => state.addFavorite);
  const removeFavorite = useRecipeStore(state => state.removeFavorite);

  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      removeFavorite(id);
    } else {
      addFavorite(id);
    }
  };

  return (
    <div>
      <h2>Recipe List</h2>
      {recipes.length === 0 ? (
        <p>No recipes found.</p>
      ) : (
        recipes.map(recipe => (
          <div
            key={recipe.id}
            style={{
              border: '1px solid #ccc',
              padding: '10px',
              marginBottom: '10px',
              borderRadius: '8px',
              background: '#f9f9f9'
            }}
          >
            <h3>
              {recipe.title}{' '}
              {favorites.includes(recipe.id) && <span style={{ color: 'gold' }}>⭐</span>}
            </h3>
            <p>{recipe.description}</p>
            <Link to={`/recipe/${recipe.id}`}>View Details</Link>
            <br />
            <button
              onClick={() => toggleFavorite(recipe.id)}
              style={{
                marginTop: '5px',
                padding: '5px 10px',
                backgroundColor: favorites.includes(recipe.id) ? '#ffcccc' : '#ccffcc',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer'
              }}
            >
              {favorites.includes(recipe.id) ? 'Remove from Favorites' : 'Add to Favorites'}
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
