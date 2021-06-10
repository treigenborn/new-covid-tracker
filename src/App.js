import styles from './App.module.css';
import React, { useEffect, useState } from 'react';
import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';
import CountryTable from './components/Table/CountryTable';
import { fetchDataAll, fetchDataCountries } from './api';

function App() {
  const [dataAll, setDataAll] = useState({});
  const [dataCountries, setDataCountries] = useState({});

  const getDataAll = async () => {
    const dataAll = await fetchDataAll();
    setDataAll(dataAll);
  };
  const getDataCountries = async () => {
    const dataCountries = await fetchDataCountries();
    setDataCountries(dataCountries);
  };
  useEffect(() => {
    getDataAll();
    getDataCountries();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Current World data of covid-19</h1>
      <Cards data={dataAll} />
      <CountryPicker dataCountries={dataCountries} dataAll={dataAll} />
      <Chart data={dataCountries} />
      <CountryTable data={dataCountries} />
    </div>
  );
}

export default App;
