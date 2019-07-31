import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import { createStyles, makeStyles } from "@material-ui/core/styles";



const useStyles = makeStyles(
  createStyles({
    card: {
      width: 250,
      margin: 30
    },
    media: {
      height: 350
    }
  })
);

export default function MakeCards(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <CardMedia image={props.img} className={classes.media} />
      </CardContent>
    </Card>
  );
}
