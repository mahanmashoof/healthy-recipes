import React from "react";
import Recipe from "./Recipe/recipe";
import useStyles from './styles'
import {useSelector} from 'react-redux';
import { Grid, CircularProgress } from '@material-ui/core';

function Recipes({setCurrentId}) {
  const classes = useStyles();
  const recipes = useSelector((state) => state.recipes);

  console.log(recipes);

  return (
    !recipes.length ? <CircularProgress /> : (
    <Grid className={classes.container} container alignItems='stretch' spacing={3} >
      {
        recipes.map((recipe) => (
          <Grid key={recipe._id} item xs={12} sm={6}>
            <Recipe recipe={recipe} setCurrentId={setCurrentId} />
          </Grid>
        ))
      }
    </Grid>
    )
  );
}

export default Recipes;
