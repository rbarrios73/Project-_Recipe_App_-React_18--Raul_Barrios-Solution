# Delicious Food Recipes

A simple React application that allows users to view, create, and delete their favorite food recipes.

Description

This application displays a list of recipes and provides a form to add new recipes to the list. Users can input information such as the name of the dish, cuisine type, image URL, ingredients, and preparation steps. Each recipe entry can be individually deleted.

This project was built using React with functional components and state management via the `useState` hook.

---

Features

- View a list of pre-loaded recipes
- Add a new recipe using the recipe creation form
- Delete existing recipes from the list
- Responsive table layout for displaying recipes

---

Components

App.js
- Root component.
- Manages the list of recipes using `useState`.
- Passes props to `RecipeList` and `RecipeCreate` for displaying and adding recipes.

RecipeList.js
- Displays the recipe data in a tabular format.
- Includes a "Delete" button to remove a recipe by index.

RecipeCreate.js
- Renders a form for adding new recipes.
- Uses `useState` to manage form inputs.
- Submits new recipe data to the parent component via a callback (`addRecipe`).

RecipeData.js
- Contains sample recipe data in an array of objects.
- Used to initialize the recipe list on first load.

---

Technologies Used

- React
- JavaScript (ES6+)
- HTML5
- CSS3

---

Project Structure
├── public/
│ └── index.html # HTML container with root div
├── src/
│ ├── App.js # Main App component
│ ├── App.css # Optional styling for the App
│ ├── RecipeCreate.js # Component for the recipe creation form
│ ├── RecipeList.js # Component to display recipes in a table
│ ├── RecipeData.js # Initial recipe data
│ ├── index.js # Entry point that renders App component
├── package.json # Project metadata and dependencies
└── README.md # Project documentation


