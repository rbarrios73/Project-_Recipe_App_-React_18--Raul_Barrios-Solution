import React from "react";

import { useState } from "react";

// RecipeCreate component is responsible for rendering the form
// to create a new recipe and manage its state
function RecipeCreate({ addRecipe }) {

  // Initialize form data state with empty values for each field
  const [formData, setFormData] = useState({
    name: "",
    cuisine:"",
    photo:"",
    ingredients: "",
    preparation: ""
  });
  
  // Handler for input changes: updates the corresponding form field
  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value
    });
  };

  // Handler for form submission: prevents default behavior,
  const handleSubmit = (event) => {
    event.preventDefault();
    addRecipe(formData);         
    setFormData({                
      name: "",
      cuisine:"",
      photo:"",
      ingredients: "",
      preparation: ""
    });
  };
  
  return (
    // Form for creating a new recipe, submitting calls handleSubmit
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
        <tr>
          <td>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </td>
          <td>
            <input
              type="text"
              name="cuisine"
              value={formData.cuisine}
              onChange={handleChange}
              required
            />
          </td>
          <td>
            <input
              type="text"
              name="photo"
              value={formData.photo}
              onChange={handleChange}
              required
            />
          </td>
          <td>
            <textarea
              name="ingredients"
              value={formData.ingredients}
              onChange={handleChange}
              required
            />
          </td>
          <td>
            <textarea
              name="preparation"
              value={formData.preparation}
              onChange={handleChange}
              required
            />
          </td>
          <td>
            <button type="submit" name="create">Create</button>
          </td>
        </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;