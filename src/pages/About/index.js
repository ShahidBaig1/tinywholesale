import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  aboutContainer: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    height: "100vh",
  },
  title: {
    textAlign: "center", // Center align the title
    marginBottom: theme.spacing(2), // Add some space below the title
  },
}));

const AboutUs = () => {
  const classes = useStyles();

  return (
    <Container className={classes.aboutContainer}>
      <Typography variant="h2" className={classes.title} gutterBottom>
        About Us
      </Typography>
      <Typography variant="body1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pretium
        arcu id ante mattis aliquam. Sed faucibus feugiat turpis, vitae ultrices
        justo blandit a. Proin ac purus scelerisque, fermentum purus sed,
        posuere eros. Phasellus tristique, arcu id finibus eleifend, metus eros
        mollis leo, vitae vestibulum lacus odio ut nisi. Duis posuere libero id
        risus mollis, ut dictum lacus lacinia. Fusce elementum velit sed libero
        congue, ac posuere ipsum interdum.
      </Typography>
      <Typography variant="body1">
        Nam vestibulum odio ut eros malesuada, et rutrum ligula blandit. Nullam
        in dui id lacus tristique mattis ut ac odio. Mauris malesuada libero et
        semper efficitur. Nullam fermentum diam ut vehicula venenatis. Phasellus
        eget augue sit amet odio hendrerit sagittis vel ut justo. Ut malesuada
        dui a nisi ultrices, sit amet vestibulum justo ultrices. Quisque
        sollicitudin rutrum velit, sed fringilla felis hendrerit ut.
      </Typography>
    </Container>
  );
};

export default AboutUs;
