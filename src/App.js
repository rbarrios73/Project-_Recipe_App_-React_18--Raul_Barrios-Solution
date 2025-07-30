import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

   const addRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };

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