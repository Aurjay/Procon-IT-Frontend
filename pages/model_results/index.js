import { useState } from "react";
import axios from "axios";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import CircularProgress from "@material-ui/core/CircularProgress";
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
});

export default function Home() {
  const classes = useStyles();
  const [file, setFile] = useState(null);
  const [results, setResults] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!file) {
      console.error("No file selected");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("file", file);

      console.log("Data being sent to server:", formData);

      setIsLoading(true);

      const response = await axios.post("http://127.0.0.1:5000/predict", formData);

      const data = response.data;
      console.log("Data received from server:", data);
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
            Predictions
          </Typography>
          <form onSubmit={handleSubmit}>
            <input
              type="file"
              accept=".csv"
              onChange={handleFileChange}
              multiple={false}
            />
            <button type="submit">Submit</button>
          </form>

          {isLoading ? (
            <Box className={classes.loading}>
              <CircularProgress />
            </Box>
          ) : (
            results && Object.keys(results).length > 0 && (
              <Box mt={4}>
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
                {results.predictions && (
                  <>
                    <Typography variant="h6" component="h3" gutterBottom>
                      Predictions:
                    </Typography>
                    <ul>
                      {results.predictions.map((prediction, index) => (
                        <li key={index}>{prediction}</li>
                      ))}
                    </ul>
                  </>
                )}
              </Box>
            )
          )}
        </CardContent>
      </Card>
    </Container>
  );
}
