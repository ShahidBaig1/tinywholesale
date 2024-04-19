import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid, Container } from "@material-ui/core";
import StoreIcon from "@material-ui/icons/Store";
import PublicIcon from "@material-ui/icons/Public";
import PaletteIcon from "@material-ui/icons/Palette";

const MyComponent = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <div
              className={classes.section}
              style={{ backgroundColor: "#ffcccc" }}>
              <StoreIcon className={classes.icon} />
              <Typography variant="h5">Online Shopping</Typography>
              <Typography variant="body1">
                Dive into a world of convenience and choice with our extensive
                collection of bags, kids' essentials, jewelry pieces, and
                stationery items, all just a click away.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div
              className={classes.section}
              style={{ backgroundColor: "#ccffcc" }}>
              <PublicIcon className={classes.icon} />
              <Typography variant="h5">Worldwide</Typography>
              <Typography variant="body1">
                Explore the global appeal of our products, curated to reflect
                diverse cultures and trends, offering you a passport to style
                and functionality from every corner of the world.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div
              className={classes.section}
              style={{ backgroundColor: "#ccccff" }}>
              <PaletteIcon className={classes.icon} />
              <Typography variant="h5">Creativity</Typography>
              <Typography variant="body1">
                Embrace your artistic side with our unique range of accessories,
                encouraging you to express your individuality and add a touch of
                creativity to your everyday life.
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default MyComponent;

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#f0f0f0",
    padding: theme.spacing(4),
    height: "100%",
    [theme.breakpoints.down("sm")]: {
      height: "auto",
    },
  },
  section: {
    height: "500px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      height: "300px",
    },
  },
  icon: {
    fontSize: "4rem",
    marginBottom: theme.spacing(2),
  },
}));
