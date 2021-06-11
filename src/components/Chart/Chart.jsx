import React from 'react';
import { Pie } from 'react-chartjs-2';
import styles from './Chart.module.css';

const Chart = ({ dataAll, dataCountries, countryPicked }) => {
  if (!dataCountries.data) {
    return 'Loading...';
  } else {
    let chartData = countryPicked
      ? {
          country: dataCountries.data[countryPicked].country,
          cases: dataCountries.data[countryPicked].cases,
          deaths: dataCountries.data[countryPicked].deaths,
          recovered: dataCountries.data[countryPicked].recovered,
          active: dataCountries.data[countryPicked].active,
          flag: dataCountries.data[countryPicked].countryInfo.flag,
        }
      : {
          cases: dataAll.cases,
          deaths: dataAll.deaths,
          recovered: dataAll.recovered,
          active: dataAll.active,
        };

    const barChart = dataCountries.data[0].cases ? (
      <Pie
        className={styles.pieChart}
        data={{
          labels: [
            `Active Cases ${(
              Math.round(((chartData.active * 100) / chartData.cases) * 100) /
              100
            ).toFixed(2)}%  `,
            `Recovered ${(
              Math.round(
                ((chartData.recovered * 100) / chartData.cases) * 100
              ) / 100
            ).toFixed(2)}%  `,
            `Deaths ${(
              Math.round(((chartData.deaths * 100) / chartData.cases) * 100) /
              100
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
              data: [chartData.active, chartData.recovered, chartData.deaths],
            },
          ],
        }}
        options={{
          legend: { display: false },
          title: {
            display: true,
            text: `Current state in ${chartData.country}`,
          },
        }}
      />
    ) : null;
    return (
      <div className={styles.container}>
        {countryPicked ? (
          <div className={styles.titleDiv}>
            <h1>{chartData.country}</h1>
            <img src={chartData.flag} alt='country flag' />
          </div>
        ) : (
          <div className={styles.titleDiv}>
            <h1>World Info</h1>
          </div>
        )}
        <div>{barChart}</div>
      </div>
    );
  }
};

export default Chart;
