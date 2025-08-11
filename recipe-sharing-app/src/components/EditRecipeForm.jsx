import { useState } from 'react';
import { useRecipeStore } from '../store/recipeStore';

const EditRecipeForm = ({ recipe }) => {
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);

  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateRecipe(recipe.id, { title, description });
    alert('Recipe updated!');
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <h3>Edit Recipe</h3>

      <label htmlFor="title">Title:</label>
      <input
        id="title"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter title"
        required
        style={inputStyle}
      />

      <label htmlFor="description">Description:</label>
      <textarea
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter description"
        required
        rows="4"
        style={textareaStyle}
      />

      <button type="submit" style={buttonStyle}>Update Recipe</button>
    </form>
  );
};

export default EditRecipeForm;


const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '400px',
  margin: '0 auto',
  padding: '1rem',
  border: '1px solid #ccc',
  borderRadius: '8px',
};

const inputStyle = {
  marginBottom: '1rem',
  padding: '0.5rem',
  fontSize: '1rem',
};

const textareaStyle = {
  marginBottom: '1rem',
  padding: '0.5rem',
  fontSize: '1rem',
};

const buttonStyle = {
  padding: '0.5rem',
  fontSize: '1rem',
  backgroundColor: '#4caf50',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
};

