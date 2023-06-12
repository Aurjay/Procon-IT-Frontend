import React from "react";
import { Typography, Card, CardContent, Grid, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(to bottom, #000000, #2196F3)",
    minHeight: "100vh",
    padding: "20px",
  },
  heading: {
    margin: "0 auto",
    marginBottom: "40px",
    width: "fit-content",
    padding: "10px 20px",
    background: "linear-gradient(to right, #2196F3, #000000)",
    borderRadius: "5px",
    color: "white",
    fontSize: "24px",
  },
  card: {
    height: "200px", // Set a fixed height for all the cards
    maxWidth: 345,
    borderRadius: "5px",
    color: "white",
    background: "linear-gradient(to bottom, #000000, #2196F3)", // Gradient of blue and black
    transition: "transform 0.3s",
    "&:hover": {
      transform: "scale(1.05)",
    },
  },
  button: {
    width: "100%",
    fontSize: "18px",
    marginTop: "10px",
    background: "linear-gradient(to bottom, #2196F3, #000000)",
  },
  cardContent: {
    textAlign: "center",
  },
});

const Dashboard = () => {
  const classes = useStyles();

  const redirectToGraphResults = () => {
    window.location.href = "./graphs"; // Replace "xyz" with the URL for graph results
  };

  const redirectToAnotherPage = () => {
    window.location.href = "./model_results"; // Replace "abc" with the URL for the other page
  };

  return (
    <div className={classes.root}>
      <div className={classes.heading}>
        <Typography variant="h4" component="h1" gutterBottom>
          Main Dashboard
        </Typography>
      </div>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={4}>
          <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
              <Typography variant="h5" component="div">
                Graphs
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Page for visualzing Rain Flow Graphs.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={redirectToGraphResults}
              >
                Graph Results
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
              <Typography variant="h5" component="div">
                Inference Results
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Page for Inferencing the deployed model
              </Typography>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={redirectToAnotherPage}
              >
                Model Results
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
