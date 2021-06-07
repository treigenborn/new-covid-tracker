import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';

const Cards = ({ data: { cases, recovered, deaths } }) => {
  console.log();
  if (!cases) {
    return 'Loading..';
  }

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify='center'>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.infected)}
        >
          <CardContent>
            <Typography color='textSecondary' gutterBottom>
              Infected
            </Typography>
            <Typography varaint='h5'>
              <CountUp start={0} end={cases} duration={2.5} separator=',' />
            </Typography>
            <Typography color='textSecondary'>
              {new Date().toDateString()}
            </Typography>
            <Typography varaint='body2'>
              Number of active cases of covid 19
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.recovered)}
        >
          <CardContent>
            <Typography color='textSecondary' gutterBottom>
              Recovered
            </Typography>
            <Typography varaint='h5'>
              <CountUp start={0} end={recovered} duration={2.5} separator=',' />
            </Typography>
            <Typography color='textSecondary'>
              {new Date().toDateString()}
            </Typography>
            <Typography varaint='body2'>
              Number of recovered cases of covid 19
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.deaths)}
        >
          <CardContent>
            <Typography color='textSecondary' gutterBottom>
              Deaths
            </Typography>
            <Typography varaint='h5'>
              <CountUp start={0} end={deaths} duration={2.5} separator=',' />
            </Typography>
            <Typography color='textSecondary'>
              {new Date().toDateString()}
            </Typography>
            <Typography varaint='body2'>
              Number of fatal cases of covid 19
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
