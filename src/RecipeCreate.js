import { useState } from "react";

function RecipeCreate({ addRecipe }) {
  const [formData, setFormData] = useState({
    name: "",
    ingredients: "",
    instructions: ""
  });

  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addRecipe(formData);         
    setFormData({                
      name: "",
      ingredients: "",
      instructions: ""
    });
  };

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>Name:</td>
            <td>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </td>
          </tr>
          <tr>
            <td>Cuisine:</td>
            <td>
              <input
                type="text"
                name="cuisine"
                value={formData.cuisine}
                onChange={handleChange}
                required
              />
            </td>
          </tr>
          <tr>
          <td>Photo URL:</td>
          <td>
            <input
              type="text"
              name="photo"
              value={formData.photo}
              onChange={handleChange}
              required
            />
          </td>
        </tr>
          <tr>
            <td>Ingredients:</td>
            <td>
              <textarea
                name="ingredients"
                value={formData.ingredients}
                onChange={handleChange}
                required
              />
            </td>
          </tr>
          <tr>
            <td>Instructions:</td>
            <td>
              <textarea
                name="preparation"
                value={formData.instructions}
                onChange={handleChange}
                required
              />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;