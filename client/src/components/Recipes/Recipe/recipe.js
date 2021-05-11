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
import ThumbUpAltOutlined from "@material-ui/icons/ThumbUpAltOutlined";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import moment from "moment";
import { useDispatch } from "react-redux";
import { deleteRecipe, likeRecipe } from "../../../actions/recipes";

function Recipe({ recipe, setCurrentId }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));

  const Likes = () => {
    if (recipe.likes.length > 0) {
      return recipe.likes.find(
        (like) => like === (user?.result?.googleId || user?.result?._id)
      ) ? (
        <>
          <ThumbUpAltIcon fontSize="small" />
          &nbsp;
          {recipe.likes.length > 2
            ? `You and ${recipe.likes.length - 1} others`
            : `${recipe.likes.length} like${
                recipe.likes.length > 1 ? "s" : ""
              }`}
        </>
      ) : (
        <>
          <ThumbUpAltOutlined fontSize="small" />
          &nbsp;{recipe.likes.length}{" "}
          {recipe.likes.length === 1 ? "Like" : "Likes"}
        </>
      );
    }

    return (
      <>
        <ThumbUpAltOutlined fontSize="small" />
        &nbsp;Like
      </>
    );
  };

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={recipe.selectedFile}
        title={recipe.title}
        src={''}
      />
      <div className={classes.overlay}>
        <Typography variant="h6">{recipe.name}</Typography>
        <Typography variant="body2">
          {moment(recipe.createdAt).fromNow()}
        </Typography>
      </div>
      {(user?.result?.googleId === recipe?.creator ||
        user?.result?._id === recipe?.creator) && (
        <div className={classes.overlay2}>
          <Button
            style={{ color: "white" }}
            size="small"
            onClick={() => setCurrentId(recipe._id)}
          >
            <MoreHorizIcon fontSize="default" />
          </Button>
        </div>
      )}
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary">
          {recipe.ingredients.map((ingredient) => `-${ingredient} `)}
        </Typography>
      </div>
      <Typography className={classes.title} variant="h5" gutterBottom>
        {recipe.title}
      </Typography>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {recipe.description}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button
          size="small"
          color="primary"
          disabled={!user?.result}
          onClick={() => dispatch(likeRecipe(recipe._id))}
        >
          <Likes />
        </Button>
        {(user?.result?.googleId === recipe?.creator ||
          user?.result?._id === recipe?.creator) && (
          <Button
            size="small"
            color="primary"
            onClick={() => dispatch(deleteRecipe(recipe._id))}
          >
            <DeleteIcon fontSize="small" />
            &nbsp; Delete &nbsp;
          </Button>
        )}
      </CardActions>
    </Card>
  );
}

export default Recipe;
