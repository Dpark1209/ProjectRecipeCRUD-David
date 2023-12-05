import React from "react";

function RecipeList({ recipes, onDeleteRecipe }) {
  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Photo</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((recipe, index) => (
            <tr key={index} className="recipe-row">
              <td>{recipe.name}</td>
              <td>{recipe.cuisine}</td>
              <td className="predefinedcontent_td"><p>{recipe.ingredients}</p></td>
              <td className="predefinedcontent_td"><p>{recipe.preparation}</p></td>
              <td>
                <img src={recipe.photo} alt={recipe.name} style={{ width: "100px", height: "100px" }} />
              </td>
              <td>
                <button name="delete" onClick={() => onDeleteRecipe(index)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
