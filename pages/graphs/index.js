import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const GraphPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      const newData = [
        { x: 6471, y: 305.0301567850639 },
        { x: 6478, y: 302.53607956209834 },
        { x: 6492, y: 305.216294204459 },
        { x: 6496, y: 303.5317962884949 },
        { x: 6540, y: 307.6625841820582 },
        { x: 6545, y: 305.77220694042023 },
        { x: 6548, y: 307.68369266457347 },
        { x: 6556, y: 304.4596881469232 },
        { x: 6505, y: 307.71416900647404 },
        { x: 6528, y: 303.9604864515565 },
        { x: 6566, y: 308.8471214287545 },
        { x: 6590, y: 301.1826756651734 },
      ];
      setData(newData);
      console.log(newData.map(item => `x: ${item.x}, y: ${item.y}`));
    };

    fetchData();
  }, []);

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Graph Card</Typography>
        <div style={{ width: '100%', height: '300px' }}>
          <LineChart width={500} height={300} data={data}>
            <XAxis dataKey="x" />
            <YAxis />
            <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
            <Line type="monotone" dataKey="y" stroke="#8884d8" />
            <Tooltip />
          </LineChart>
        </div>
      </CardContent>
    </Card>
  );
};

export default GraphPage;
