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

function Recipe({ recipe }) {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={recipe.selectedFile}
        title={recipe.title}
      />
      <div className={classes.overlay}>
        <Typography variant="h6">{recipe.creator}</Typography>
        <Typography variant="body2">
          {moment(recipe.createdAt).fromNow()}
        </Typography>
      </div>
      <div className={classes.overlay2}>
        <Button style={{ color: "white" }} size="small" onClick={() => {}}>
          <MoreHorizIcon fontSize="default" />
        </Button>
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary">
          {recipe.ingredients.map((ingredient) => `-${ingredient} `)}
        </Typography>
      </div>
      <CardContent>
        <Typography className={classes.title} variant="h5" gutterBottom>
          {recipe.description}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
          <Button size='small' color='primary' onClick={() => {}}>
              <ThumbUpAltIcon fontSize='small' />
              Like
              {recipe.likeCount}
          </Button>
          <Button size='small' color='primary' onClick={() => {}}>
              <DeleteIcon fontSize='small' />
              Delete
          </Button>
      </CardActions>
    </Card>
  );
}

export default Recipe;
