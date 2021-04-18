import React from "react";
import useStyles from "./styles";
import {
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import moment from "moment";
import {useDispatch} from 'react-redux';
import {deleteRecipe, likeRecipe} from '../../../actions/recipes'

function Recipe({ recipe, setCurrentId }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={recipe.selectedFile}
        title={recipe.title}
      />
      <div className={classes.overlay}>
        <Typography variant="h6">{recipe.name}</Typography>
        <Typography variant="body2">
          {moment(recipe.createdAt).fromNow()}
        </Typography>
      </div>
      <div className={classes.overlay2}>
        <Button style={{ color: "white" }} size="small" onClick={() => setCurrentId(recipe._id)}>
          <MoreHorizIcon fontSize="default" />
        </Button>
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary">
          {recipe.ingredients.map((ingredient) => `-${ingredient} `)}
        </Typography>
      </div>
      <Typography className={classes.title} variant="h5" gutterBottom>
          {recipe.title}
        </Typography>
      <CardContent>
        <Typography variant="body2" color='textSecondary' component='p'>
          {recipe.description}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
          <Button size='small' color='primary' onClick={() => dispatch(likeRecipe(recipe._id))}>
              <ThumbUpAltIcon fontSize='small' />
              &nbsp; Like &nbsp;
              {recipe.likeCount}
          </Button>
          <Button size='small' color='primary' onClick={() => dispatch(deleteRecipe(recipe._id))}>
              <DeleteIcon fontSize='small' />
              &nbsp; Delete &nbsp;
          </Button>
      </CardActions>
    </Card>
  );
}

export default Recipe;
