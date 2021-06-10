import React from 'react';
import styles from './CountryTable.module.css';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const CountryTable = ({ data }) => {
  //LOADING
  if (!data.data) {
    return 'Loading...';
  } else {
    //CHART
    let countriesArray = [];
    data.data.map((country) => {
      let countryObj = {
        name: country.country,
        totalCases: country.cases,
        newCases: country.todayCases,
        totalDeaths: country.deaths,
        newDeaths: country.todayDeaths,
        totalRecovered: country.recovered,
        activeCases: country.active,
        criticalCases: country.critical,
        casesPerMillion: country.casesPerOneMillion,
        deathsPerMillion: country.deathsPerOneMillion,
        totalTests: country.tests,
        testsPerMillion: country.testsPerOneMillion,
        population: country.population,
      };
      countriesArray.push(countryObj);
      return countriesArray;
    });
    const columns = [
      { title: 'Country', field: 'name' },
      { title: 'Total Cases', field: 'totalCases' },
      { title: 'New Cases', field: 'newCases' },
      { title: 'Total Deaths', field: 'totalDeaths' },
      { title: 'New Deaths', field: 'newDeaths' },
      { title: 'Total Recovered', field: 'totalRecovered' },
      { title: 'Active Cases', field: 'activeCases' },
      { title: 'Critical Cases', field: 'criticalCases' },
      { title: 'Tot Cases / 1M pop', field: 'casesPerMillion' },
      { title: 'Tot Deaths / 1M pop', field: 'deathsPerMillion' },
      { title: 'Tests', field: 'totalTests' },
      { title: 'Tests / 1M pop', field: 'testsPerMillion' },
      { title: 'Population', field: 'population' },
    ];

    countriesArray = countriesArray.sort((a, b) => {
      return b.totalCases - a.totalCases;
    });
    return (
      <div className={styles.container}>
        <Paper>
          <TableContainer component={Paper} className={styles.table}>
            <Table aria-label='covid-table'>
              <TableHead>
                <TableRow>
                  {columns.map((e) => {
                    return <TableCell key={e.field}>{e.title}</TableCell>;
                  })}
                </TableRow>
              </TableHead>
              <TableBody>
                {countriesArray.map((e, i) => {
                  return (
                    <TableRow key={i}>
                      <TableCell key={e.name}>{e.name}</TableCell>
                      <TableCell>{e.totalCases}</TableCell>
                      <TableCell>{e.newCases}</TableCell>
                      <TableCell>{e.totalDeaths}</TableCell>
                      <TableCell>{e.newDeaths}</TableCell>
                      <TableCell>{e.totalRecovered}</TableCell>
                      <TableCell>{e.activeCases}</TableCell>
                      <TableCell>{e.criticalCases}</TableCell>
                      <TableCell>{e.casesPerMillion}</TableCell>
                      <TableCell>{e.deathsPerMillion}</TableCell>
                      <TableCell>{e.totalTests}</TableCell>
                      <TableCell>{e.testsPerMillion}</TableCell>
                      <TableCell>{e.population}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </div>
    );
  }
};

export default CountryTable;
