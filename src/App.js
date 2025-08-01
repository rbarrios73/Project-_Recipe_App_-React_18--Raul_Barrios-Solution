import React, { useState } from "react";
import "./App.css";
// Component to create a new recipe
import RecipeCreate from "./RecipeCreate";

// Component to list existing recipes
import RecipeList from "./RecipeList";

// Initial recipe data
import RecipeData from "./RecipeData"

function App() {

  // State to store the list of recipes, initialized with sample data
  const [recipes, setRecipes] = useState(RecipeData);

   // Function to add a new recipe to the list
  const addRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };

  // Function to delete a recipe by its index
  const onDelete = (indexToDelete) => {
    setRecipes(recipes.filter((_, index) => index !== indexToDelete));
  };

  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} deleteRecipe={onDelete} />
      <RecipeCreate addRecipe={addRecipe} />
    </div>
  );
}

export default App;