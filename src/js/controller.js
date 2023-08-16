import * as model from "./model.js";
import recipeView from "./views/recipeView.js";

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const showRecipe = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;

    recipeView.renderSpinner();
    // Load recipe
    await model.loadRecipe(id);

    const { recipe } = model.state;

    // Rendering Recipe
    recipeView.render(recipe);
  } catch (err) {
    console.error(err);
  }
};

["hashchange", "load"].forEach((ev) => window.addEventListener(ev, showRecipe));
// window.addEventListener("hashchange", showRecipe);
// window.addEventListener("load", showRecipe);