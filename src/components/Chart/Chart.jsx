import React from 'react';
import { Pie } from 'react-chartjs-2';
import styles from './Chart.module.css';

const Chart = ({ data }) => {
  if (!data.data) {
    return 'Loading...';
  } else {
    const barChart = data.data[0].cases ? (
      <Pie
        className={styles.pieChart}
        data={{
          labels: [
            `Active Cases ${(
              Math.round(
                ((data.data[7].active * 100) / data.data[7].cases) * 100
              ) / 100
            ).toFixed(2)}%  `,
            `Recovered ${(
              Math.round(
                ((data.data[7].recovered * 100) / data.data[7].cases) * 100
              ) / 100
            ).toFixed(2)}%  `,
            `Deaths ${(
              Math.round(
                ((data.data[7].deaths * 100) / data.data[7].cases) * 100
              ) / 100
            ).toFixed(2)}%  `,
          ],
          datasets: [
            {
              label: 'People',
              backgroundColor: [
                'rgba(0,0,255,0.5)',
                'rgba(0,255,0,0.5)',
                'rgba(255,0,0,0.5)',
              ],
              data: [
                data.data[7].active,
                data.data[7].recovered,
                data.data[7].deaths,
              ],
            },
          ],
        }}
        options={{
          legend: { display: false },
          title: {
            display: true,
            text: `Current state in ${data.data[7].country}`,
          },
        }}
      />
    ) : null;
    return (
      <div className={styles.container}>
        <h1>{data.data[7].country}</h1>
        <div>{barChart}</div>
      </div>
    );
  }
};

export default Chart;
