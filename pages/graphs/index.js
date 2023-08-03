import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Grid, Select, MenuItem } from '@material-ui/core';

const GraphPage = () => {
  const [plotImage1, setPlotImage1] = useState('');
  const [plotImage2, setPlotImage2] = useState('');
  const [configuration, setConfiguration] = useState(33);
  const [transistor, setTransistor] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response1 = await fetch(`/api/plot?configuration=${configuration}&transistor=${transistor}`);
        const blob1 = await response1.blob();
        const objectURL1 = URL.createObjectURL(blob1);
        setPlotImage1(objectURL1);

        // Fetch the second plot
        const response2 = await fetch(`/api/plot?configuration=${configuration}&transistor=${transistor}&plot=2`);
        const blob2 = await response2.blob();
        const objectURL2 = URL.createObjectURL(blob2);
        setPlotImage2(objectURL2);
      } catch (error) {
        console.error('Error fetching plot image:', error);
      }
    };

    fetchData();
  }, [configuration, transistor]);

  return (
    <Card>
      <CardContent>
        <Grid container justifyContent="center" spacing={2}>
          <Grid item>
            <Typography variant="h6" component="h2">
              Configuration
            </Typography>
            <Select
              value={configuration}
              onChange={(event) => setConfiguration(event.target.value)}
            >
              <MenuItem value={33}>33</MenuItem>
              <MenuItem value={34}>34</MenuItem>
              <MenuItem value={35}>35</MenuItem>
              <MenuItem value={37}>37</MenuItem>
              <MenuItem value={39}>39</MenuItem>
            </Select>
          </Grid>
          <Grid item>
            <Typography variant="h6" component="h2">
              Transistor
            </Typography>
            <Select
              value={transistor}
              onChange={(event) => setTransistor(event.target.value)}
            >
              <MenuItem value={0}>0</MenuItem>
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
            </Select>
          </Grid>
        </Grid>
        {plotImage1 && (
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <img src={plotImage1} alt="Plot 1" style={{ display: 'block', margin: '0 auto' }} />
          </div>
        )}
        {plotImage2 && (
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <img src={plotImage2} alt="Plot 2" style={{ display: 'block', margin: '0 auto' }} />
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default GraphPage;
