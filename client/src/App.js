import React, {useEffect, useState} from 'react';
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import recipes from './components/images/recipes.jpg'
import Recipes from './components/Recipes/recipes';
import Form from './components/Form/form';
import useStyles from './styles'
import {useDispatch} from 'react-redux';
//import actions to dispatch them:
import {getRecipes} from './actions/recipes';

const App = () => {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRecipes());
    }, [currentId, dispatch]);

    return(
        <Container>
            <AppBar className={classes.appBar} position='static' color='inherit'>
                <Typography className={classes.heading} variant='h2' align='center' >Healthy Recipes</Typography>
                <img className={classes.image} src={recipes} alt='recipes' height='60' />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid className={classes.mainContainer} container justify='space-between' alignItems='stretch' spacing={3} >
                        <Grid item xs={12} sm={7}>
                            <Recipes setCurrentId={setCurrentId} />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId}/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;