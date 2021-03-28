import React from "react";
import Recipe from "./Recipe/recipe";
import useStyles from './styles'
import {useSelector} from 'react-redux';

function Recipes() {
  const classes = useStyles();
  const recipes = useSelector((state) => state.recipes);

  console.log(recipes);

  return (
    <div>
      <h1>RECIPES</h1>
      <Recipe />
      <Recipe />
    </div>
  );
}

export default Recipes;
