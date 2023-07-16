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
    marginTop: 20,
  },
  statusMax: {
    color: "red",
    fontWeight: "bold",
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
            The results are inferred on a Model trained on Dataset from Transistor_3
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
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>
                        <Typography variant="subtitle1" className={classes.statusMax}>
                          Metric
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="subtitle1">Value</Typography>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>
                        <Typography variant="body1">Mean Absolute Error</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="body1">{results.metrics.mean_absolute_error}</Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Typography variant="body1">Mean Squared Error</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="body1">{results.metrics.mean_squared_error}</Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Typography variant="body1">R-squared</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="body1">{results.metrics.r_squared}</Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Typography variant="body1">Root Mean Squared Error</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="body1">{results.metrics.root_mean_squared_error}</Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Typography variant="body1" className={classes.statusMax}>
                          Status
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="body1" className={classes.statusMax}>
                          {results.status}
                        </Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <Typography variant="body1">Time to Failure (Days)</Typography>
                      </TableCell>
                      <TableCell>
                        <Typography variant="body1">{results.time_to_failure}</Typography>
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Box>
            )
          )}
        </CardContent>
      </Card>
    </Container>
  );
}
