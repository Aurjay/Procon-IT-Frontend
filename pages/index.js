import React from "react";

import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Link,
  Button,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    background: "linear-gradient(to bottom, #000000, #2196F3)", // Replace with your desired gradient colors
    minHeight: "100vh",
    padding: "20px",
  },
  heading: {
    margin: "0 auto",
    marginBottom: "40px",
    width: "fit-content",
    padding: "10px 20px",
    background: "linear-gradient(to right, #2196F3, #000000)", // Replace with your desired gradient colors
    borderRadius: "5px",
    color: "white",
  },
  card: {
    maxWidth: 345,
  },
  cardGrid: {
    marginTop: "40px",
  },
});

const Dashboard = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.heading}>
        <Typography variant="h4" component="h1" gutterBottom>
          Main Dashboard
        </Typography>
      </div>
      <Grid
        container
        spacing={2}
        justifyContent="center"
        className={classes.cardGrid}
      >
        <Grid item xs={4}>
          <Card className={classes.card}>
            <CardMedia
              component="img"
              height="140"
              image="https://quickchart.io/chart?c=%7B%0A%20%20type%3A%20%27line%27%2C%0A%20%20data%3A%20%7B%0A%20%20%20%20labels%3A%20%5B%27January%27%2C%20%27February%27%2C%20%27March%27%2C%20%27April%27%2C%20%27May%27%2C%20%27June%27%2C%20%27July%27%5D%2C%0A%20%20%20%20datasets%3A%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20label%3A%20%27My%20First%20dataset%27%2C%0A%20%20%20%20%20%20%20%20data%3A%20%5B73%2C%20-40%2C%20-49%2C%20-47%2C%2021%2C%20-64%2C%20-84%5D%2C%0A%20%20%20%20%20%20%20%20backgroundColor%3A%20%27rgba(255%2C%2099%2C%20132%2C%200.5)%27%2C%0A%20%20%20%20%20%20%20%20borderColor%3A%20%27rgb(255%2C%2099%2C%20132)%27%2C%0A%20%20%20%20%20%20%20%20borderWidth%3A%201%2C%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%5D%2C%0A%20%20%7D%2C%0A%20%20options%3A%20%7B%0A%20%20%20%20legend%3A%20%7B%0A%20%20%20%20%20%20position%3A%20%27top%27%2C%0A%20%20%20%20%7D%2C%0A%20%20%20%20title%3A%20%7B%0A%20%20%20%20%20%20display%3A%20true%2C%0A%20%20%20%20%20%20text%3A%20%27Legend%20Position%3A%20top%27%2C%0A%20%20%20%20%7D%2C%0A%20%20%7D%2C%0A%7D%0A" // Replace with your desired image URL
              alt="Image 1"
            />
            <CardContent>
              <Button
                variant="contained"
                color="primary"
                onClick={() => (window.location.href = "./graphs")}
                style={{ width: "100%" }}
              >
                <Typography variant="h5" component="div">
                  Graphs
                </Typography>
              </Button>
              <Typography variant="body2" color="text.secondary">
                Sample content for Graphs
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card className={classes.card}>
            <CardMedia
              component="img"
              height="140"
              image="https://quickchart.io/chart?c=%7B%0A%20%20type%3A%20%27line%27%2C%0A%20%20data%3A%20%7B%0A%20%20%20%20labels%3A%20%5B%27January%27%2C%20%27February%27%2C%20%27March%27%2C%20%27April%27%2C%20%27May%27%2C%20%27June%27%2C%20%27July%27%5D%2C%0A%20%20%20%20datasets%3A%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20label%3A%20%27My%20First%20dataset%27%2C%0A%20%20%20%20%20%20%20%20data%3A%20%5B92%2C%2032%2C%2074%2C%20-98%2C%2084%2C%2045%2C%20-21%5D%2C%0A%20%20%20%20%20%20%20%20backgroundColor%3A%20%27rgba(255%2C%20205%2C%2086%2C%200.5)%27%2C%0A%20%20%20%20%20%20%20%20borderColor%3A%20%27rgb(255%2C%20205%2C%2086)%27%2C%0A%20%20%20%20%20%20%20%20borderWidth%3A%201%2C%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%5D%2C%0A%20%20%7D%2C%0A%20%20options%3A%20%7B%0A%20%20%20%20legend%3A%20%7B%0A%20%20%20%20%20%20position%3A%20%27left%27%2C%0A%20%20%20%20%7D%2C%0A%20%20%20%20title%3A%20%7B%0A%20%20%20%20%20%20display%3A%20true%2C%0A%20%20%20%20%20%20text%3A%20%27Legend%20Position%3A%20left%27%2C%0A%20%20%20%20%7D%2C%0A%20%20%7D%2C%0A%7D%0A" // Replace with your desired image URL
              alt="Image 2"
            />
            <CardContent>
              <Typography variant="h5" component="div">
                Visualize Rainflow matrices
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Sample content for Card 2.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card className={classes.card}>
            <CardMedia
              component="img"
              height="140"
              image="https://quickchart.io/chart?c=%7B%0A%20%20type%3A%20%27line%27%2C%0A%20%20data%3A%20%7B%0A%20%20%20%20labels%3A%20%5B%27January%27%2C%20%27February%27%2C%20%27March%27%2C%20%27April%27%2C%20%27May%27%2C%20%27June%27%2C%20%27July%27%5D%2C%0A%20%20%20%20datasets%3A%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20label%3A%20%27dataset%20-%20big%20points%27%2C%0A%20%20%20%20%20%20%20%20data%3A%20%5B-15%2C%20-80%2C%2079%2C%20-11%2C%20-5%2C%2033%2C%20-57%5D%2C%0A%20%20%20%20%20%20%20%20backgroundColor%3A%20%27rgb(255%2C%2099%2C%20132)%27%2C%0A%20%20%20%20%20%20%20%20borderColor%3A%20%27rgb(255%2C%2099%2C%20132)%27%2C%0A%20%20%20%20%20%20%20%20fill%3A%20false%2C%0A%20%20%20%20%20%20%20%20borderDash%3A%20%5B5%2C%205%5D%2C%0A%20%20%20%20%20%20%20%20pointRadius%3A%2015%2C%0A%20%20%20%20%20%20%20%20pointHoverRadius%3A%2010%2C%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20label%3A%20%27dataset%20-%20individual%20point%20sizes%27%2C%0A%20%20%20%20%20%20%20%20data%3A%20%5B-86%2C%2059%2C%20-70%2C%20-40%2C%2040%2C%2033%2C%2016%5D%2C%0A%20%20%20%20%20%20%20%20backgroundColor%3A%20%27rgb(54%2C%20162%2C%20235)%27%2C%0A%20%20%20%20%20%20%20%20borderColor%3A%20%27rgb(54%2C%20162%2C%20235)%27%2C%0A%20%20%20%20%20%20%20%20fill%3A%20false%2C%0A%20%20%20%20%20%20%20%20borderDash%3A%20%5B5%2C%205%5D%2C%0A%20%20%20%20%20%20%20%20pointRadius%3A%20%5B2%2C%204%2C%206%2C%2018%2C%200%2C%2012%2C%2020%5D%2C%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20label%3A%20%27dataset%20-%20large%20pointHoverRadius%27%2C%0A%20%20%20%20%20%20%20%20data%3A%20%5B59%2C%20-65%2C%20-33%2C%200%2C%20-79%2C%2095%2C%20-53%5D%2C%0A%20%20%20%20%20%20%20%20backgroundColor%3A%20%27rgb(75%2C%20192%2C%20192)%27%2C%0A%20%20%20%20%20%20%20%20borderColor%3A%20%27rgb(75%2C%20192%2C%20192)%27%2C%0A%20%20%20%20%20%20%20%20fill%3A%20false%2C%0A%20%20%20%20%20%20%20%20pointHoverRadius%3A%2030%2C%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20label%3A%20%27dataset%20-%20large%20pointHitRadius%27%2C%0A%20%20%20%20%20%20%20%20data%3A%20%5B73%2C%2083%2C%20-19%2C%2074%2C%2016%2C%20-12%2C%208%5D%2C%0A%20%20%20%20%20%20%20%20backgroundColor%3A%20%27rgb(255%2C%20205%2C%2086)%27%2C%0A%20%20%20%20%20%20%20%20borderColor%3A%20%27rgb(255%2C%20205%2C%2086)%27%2C%0A%20%20%20%20%20%20%20%20fill%3A%20false%2C%0A%20%20%20%20%20%20%20%20pointHitRadius%3A%2020%2C%0A%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%5D%2C%0A%20%20%7D%2C%0A%20%20options%3A%20%7B%0A%20%20%20%20legend%3A%20%7B%0A%20%20%20%20%20%20position%3A%20%27bottom%27%2C%0A%20%20%20%20%7D%2C%0A%20%20%20%20title%3A%20%7B%0A%20%20%20%20%20%20display%3A%20true%2C%0A%20%20%20%20%20%20text%3A%20%27Chart.js%20Line%20Chart%20-%20Different%20point%20sizes%27%2C%0A%20%20%20%20%7D%2C%0A%20%20%7D%2C%0A%7D%0A" // Replace with your desired image URL
              alt="Image 3"
            />
            <CardContent>
              <Typography variant="h5" component="div">
                Analytics page
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Sample content for Card 3.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
