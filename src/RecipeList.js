import React from "react";

function RecipeList() {
  
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked.
// Child component
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

  function RecipeList() {
    const [recipes, setRecipes] = useState(initialRecipes);

    const handleDelete = (indexToRemove) => {
      setRecipes(recipes.filter((_, index) => index !== indexToRemove));
    };


  return (
    <div className="recipe-list">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Cuisine</th>
                <th>Photo</th>
                <th>Ingredients</th>
                <th>Preparation</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {recipes.map((recipe, index) => (
                <RecipeRow
                  key={index}
                  index={index}
                  recipe={recipe}
                  onDelete={handleDelete}
                />
              ))}
            </tbody>
          </table>
        </div>
  );
}

export default RecipeList;
