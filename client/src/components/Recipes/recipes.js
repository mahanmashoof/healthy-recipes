import React from "react";
import Recipe from "./Recipe/recipe";
import useStyles from './styles'

function Recipes() {
  const classes = useStyles();
  return (
    <div>
      <h1>RECIPES</h1>
      <Recipe />
      <Recipe />
    </div>
  );
}

export default Recipes;
