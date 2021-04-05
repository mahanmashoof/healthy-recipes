import React, {useState, useEffect} from "react";
import { Container, Grow, Grid } from "@material-ui/core";
import Recipes from "../Recipes/recipes";
import Form from "../Form/form";
import {useDispatch} from 'react-redux';
//import actions to dispatch them:
import {getRecipes} from '../../actions/recipes';

const Home = () => {
  const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecipes());
  }, [currentId, dispatch]);

  return (
    <div>
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Recipes setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </div>
  );
};

export default Home;
