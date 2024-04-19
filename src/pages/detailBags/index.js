import React from "react";
import { useParams } from "react-router-dom";
import data from "../../Component/cardBags/BagsCardData";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import StationaryCard from "../../Component/cardStationary";

const useStyles = makeStyles((theme) => ({
  mainCont: {
    color: "#fff",
    padding: theme.spacing(3),
    background: "#1A042D",
    fontFamily: "Ubuntu, sans-serif",
  },
  imgCont: {
    marginTop: theme.spacing(2),
  },
  forimg: {
    width: "100%",
    maxWidth: 400,
    height: "auto",
  },
}));

function DetailBags() {
  const classes = useStyles();
  const { id } = useParams();
  const product = data.find((p) => p.id === parseInt(id, 10));

  return (
    <>
      <div className={classes.mainCont}>
        {product && (
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <Typography variant="h4">Product ID: {product.id}</Typography>
              <Typography variant="h6">Price: {product.price}</Typography>
            </Grid>
            <Grid item xs={12} sm={6} className={classes.imgCont}>
              <img src={product.img} alt="Product" className={classes.forimg} />
            </Grid>
          </Grid>
        )}
      </div>
      <StationaryCard />
    </>
  );
}

export default DetailBags;
