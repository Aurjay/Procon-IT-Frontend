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
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

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
    width: "125%", // Increase the width of the card
    margin: "20px auto", // Adjust the margin as needed
    padding: 10,
    },
  statusCritical: {
    color: "red",
    fontWeight: "bold",
  },
  statusNotCritical: {
    color: "green",
    fontWeight: "bold",
  },
  tableTitle: {
    fontWeight: "bold",
    fontSize: "1.2rem",
    marginBottom: "1rem",
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
            Model Results Demo
          </Typography>
          <Typography variant="body2" color="textSecondary" gutterBottom>
            The results are inferred from a model trained on Dataset from Transistor_3
          </Typography>
          <Button variant="contained" color="primary" onClick={fetchResults}>
            Fetch Results
          </Button>
        </CardContent>
      </Card>

      {results && (
        <Box className={classes.resultCard}>
          <Card>
            <CardContent>
              <Typography variant="h6" component="h3" gutterBottom>
                Overall Metrics
              </Typography>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <Typography variant="body1">Mean Absolute Error</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body1">{results.Overall_metrics.mean_absolute_error}</Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Typography variant="body1">Mean Squared Error</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body1">{results.Overall_metrics.mean_squared_error}</Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Typography variant="body1">R-squared</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body1">{results.Overall_metrics.r_squared}</Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Typography variant="body1">Root Mean Squared Error</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body1">{results.Overall_metrics.root_mean_squared_error}</Typography>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card className={classes.resultCard}>
            <CardContent>
              <Typography variant="h6" component="h3" gutterBottom>
                Test Set Samples
              </Typography>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Sample</TableCell>
                    <TableCell>Rainflow Counts</TableCell>
                    <TableCell>Test Label</TableCell>
                    <TableCell>Prediction</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Time to Failure</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {Object.keys(results.test_set_samples).map((sampleKey, index) => {
                    const sample = results.test_set_samples[sampleKey];
                    const isStatusCritical = sample.status === "Status Critical";
                    const statusClass = isStatusCritical ? classes.statusCritical : classes.statusNotCritical;
                    const rowHeading = index === 0 ? `${sampleKey} (First->smaller rainflow)` : index === 1 ? `${sampleKey} (Middle)` : `${sampleKey} (Last->higher rainflow)`;

                    return (
                      <TableRow key={sampleKey}>
                        <TableCell>{rowHeading}</TableCell>
                        <TableCell>{sample.rainflow_counts}</TableCell>
                        <TableCell>{sample.test_label}</TableCell>
                        <TableCell>{sample.prediction}</TableCell>
                        <TableCell className={statusClass}>{sample.status}</TableCell>
                        <TableCell>{sample.time_to_failure}</TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </Box>
      )}
    </Container>
  );
}
