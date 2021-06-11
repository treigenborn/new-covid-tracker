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
  const [countryPicked, setCountryPicked] = useState('');

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

  const handleCountryChange = async (country) => {
    const countryPicked = await country;
    setCountryPicked(countryPicked);
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Current World data of covid-19</h1>
      <Cards
        data={dataAll}
        dataCountries={dataCountries}
        countryPicked={countryPicked}
      />
      <CountryPicker
        dataCountries={dataCountries}
        dataAll={dataAll}
        handleCountryChange={handleCountryChange}
      />
      <Chart
        dataAll={dataAll}
        dataCountries={dataCountries}
        countryPicked={countryPicked}
      />
      <CountryTable data={dataCountries} />
    </div>
  );
}

export default App;
