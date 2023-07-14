import { useState } from "react";
import axios from "axios";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import CircularProgress from "@material-ui/core/CircularProgress";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    margin: "auto",
    marginTop: 40,
    padding: 20,
    textAlign: "center",
  },
  loading: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  resultCard: {
    marginTop: 20,
  },
});

export default function Home() {
  const classes = useStyles();
  const [results, setResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchResults = async () => {
    try {
      setIsLoading(true);
      const response = await axios.post("https://procon-it-image-v6-4t2r2e6xka-uc.a.run.app/predict");
      const data = response.data;
      setResults(data);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container maxWidth="sm">
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="h5" component="h2" gutterBottom>
            Model results Demo
          </Typography>
          <Typography variant="body2" color="textSecondary" gutterBottom>
            The results are inferenced on a Model trained on Dataset from Transistor_3
          </Typography>
          <Button variant="contained" color="primary" onClick={fetchResults}>
            Fetch Results
          </Button>
        </CardContent>
      </Card>

      <Card className={classes.resultCard}>
        <CardContent>
          {isLoading ? (
            <Box className={classes.loading}>
              <CircularProgress />
            </Box>
          ) : (
            results && (
              <Box>
                <Typography variant="h6" component="h3" gutterBottom>
                  Results:
                </Typography>
                <Typography gutterBottom>
                  Mean Absolute Error: {results.mean_absolute_error}
                </Typography>
                <Typography gutterBottom>
                  Mean Squared Error: {results.mean_squared_error}
                </Typography>
                <Typography gutterBottom>
                  R-squared: {results.r_squared}
                </Typography>
                <Typography gutterBottom>
                  Root Mean Squared Error: {results.root_mean_squared_error}
                </Typography>
              </Box>
            )
          )}
        </CardContent>
      </Card>
    </Container>
  );
}
