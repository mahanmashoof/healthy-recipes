import * as api from "../api";

//Action creators
export const getRecipes = () => async (dispatch) => {
  try {
    const { data } = await api.fetchRecipes();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createRecipe = (recipe) => async (dispatch) => {
  try {
    const {data} = await api.createRecipe(recipe);
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error);
  }
}

export const updateRecipe = (id, recipe) => async (dispatch) => {
  try {
    const {data} = await api.updateRecipe(id, recipe);
    dispatch({ type: "UPDATE", payload: data });
  } catch (error) {
    console.log(error);
  }
}

export const deleteRecipe = (id) => async (dispatch) => {
  try {
    await api.deleteRecipe(id);
    dispatch({type: 'DELETE', payload: id});
  } catch (error) {
    console.log(error);
  }
}
