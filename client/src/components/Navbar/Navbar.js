import React, {useState, useEffect} from "react";
import { AppBar, Avatar, Button, Toolbar, Typography } from "@material-ui/core";
import recipes from "../images/recipes.jpg";
import useStyles from "./styles";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch } from 'react-redux';

const Navbar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  useEffect(() => {
    //const token = user?.token

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]); //set the user when location changes
  const logout = () => {
    dispatch({type: 'LOGOUT'})
    history.push('/')
    setUser(null)
  }

  return (
    <div>
      <AppBar className={classes.appBar} position="static" color="inherit">
        <div className={classes.brandContainer}>
          <Typography
            component={Link}
            to="/"
            className={classes.heading}
            variant="h2"
            align="center"
          >
            Healthy Recipes
          </Typography>
          <img
            className={classes.image}
            src={recipes}
            alt="recipes"
            height="60"
          />
          <Toolbar className={classes.toolbar}>
              {user ? (
                <div className= {classes.profile}>
                    <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                    <Typography className={classes.userName} variant='h6'>{user.result.name}</Typography>
                    <Button className={classes.logout} variant='contained' color='secondary' onClick={logout}>Logout</Button>
                </div>
              ) : (
                <Button component={Link} to='/auth' variant='contained' color='primary'>Sign In</Button>
              )}
          </Toolbar>
        </div>
      </AppBar>
    </div>
  );
};

export default Navbar;
