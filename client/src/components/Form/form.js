import React, { useState, useEffect } from "react";
import useStyles from "./styles";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { createRecipe, updateRecipe } from "../../actions/recipes";
import {useSelector} from 'react-redux';

function Form({ currentId, setCurrentId }) {
  const [recipeData, setRecipeData] = useState({
    title: "",
    description: "",
    ingredients: "",
    selectedFile: "",
  });

  const recipe = useSelector((state) => currentId ? state.recipes.find((r) => r._id === currentId) : null);

  const classes = useStyles();
  const dispatch = useDispatch();

  const user = JSON.parse(localStorage.getItem('profile'));

  useEffect(() => {
    if(recipe) setRecipeData(recipe);
  }, [recipe]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentId) {
      dispatch(updateRecipe(currentId, {...recipeData, name: user?.result?.name}));
    } else {
      dispatch(createRecipe({...recipeData, name: user?.result?.name}));
    }
    clear();
  };

  const clear = () => {
    setCurrentId(null);
    setRecipeData({
      title: "",
      description: "",
      ingredients: "",
      selectedFile: "",
    })
  };

  if(!user?.result?.name) {
    return(
      <Paper className={classes.paper}>
        <Typography variant='h6' align='center'>To create and like other recipes, please log in first</Typography>
      </Paper>
    )
  }

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">{currentId ? 'Editing' : 'Creating'} a Recipe</Typography>
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={recipeData.title}
          onChange={(e) =>
            setRecipeData({ ...recipeData, title: e.target.value })
          }
        />
        <TextField
          name="ingredients"
          variant="outlined"
          label="Ingredients"
          fullWidth
          value={recipeData.ingredients}
          onChange={(e) =>
            setRecipeData({ ...recipeData, ingredients: e.target.value.split(',') })
          }
        />
        <TextField
          name="description"
          variant="outlined"
          label="Description"
          fullWidth
          value={recipeData.description}
          onChange={(e) =>
            setRecipeData({ ...recipeData, description: e.target.value })
          }
        />
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setRecipeData({ ...recipeData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
}

export default Form;
