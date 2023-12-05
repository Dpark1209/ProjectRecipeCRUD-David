import React, { useState } from "react";

function RecipeCreate({ onAddRecipe }) {
  const [recipe, setRecipe] = useState({
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddRecipe({ ...recipe });
    setRecipe({
      name: "",
      cuisine: "",
      photo: "",
      ingredients: "",
      preparation: ""
    });
  };

  return (
    <form name="create" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={recipe.name} onChange={handleInputChange} required />
      </label>
      <label>
        Cuisine:
        <input type="text" name="cuisine" value={recipe.cuisine} onChange={handleInputChange} required />
      </label>
      <label>
        Photo URL:
        <input type="url" name="photo" value={recipe.photo} onChange={handleInputChange} required />
      </label>
      <label>
        Ingredients:
        <textarea name="ingredients" value={recipe.ingredients} onChange={handleInputChange} required />
      </label>
      <label>
        Preparation:
        <textarea name="preparation" value={recipe.preparation} onChange={handleInputChange} required />
      </label>
      <button type="submit">Create</button>
    </form>
  );
}

export default RecipeCreate;

