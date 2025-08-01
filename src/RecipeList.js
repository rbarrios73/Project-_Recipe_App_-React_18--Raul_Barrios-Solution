import React from "react";

// Component to render a single row in the recipe table
function RecipeRow({ recipe, index, onDelete }) {
    return (
      <tr>
        <td>{recipe.name}</td>
        <td>{recipe.cuisine}</td>
        <td>
          <img src={recipe.photo} alt={recipe.name} style={{ width: '100px' }} />
        </td>
        <td className="content_td"><p>{recipe.ingredients}</p></td>
        <td className="content_td"><p>{recipe.preparation}</p></td>
       <td>
        <button name="delete" onClick={() => onDelete(index)}>Delete</button>
      </td>
      </tr>
    );
  }

// Component to render the full list of recipes in a table
function RecipeList({ recipes, deleteRecipe }) {
  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Recipe Name</th>
            <th>Actions</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
          </tr>
        </thead>
        <tbody>
           {/* Map over the recipes array and render each row using RecipeRow */}
           {recipes.map((recipe, index) => (
            <RecipeRow
              key={index}
              recipe={recipe}
              index={index}
              onDelete={deleteRecipe} 
            />
        ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
