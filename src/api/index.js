import axios from 'axios';

const url = 'https://disease.sh/v3/covid-19';

export const fetchDataAll = async () => {
  try {
    const {
      data: { cases, recovered, deaths, active },
    } = await axios.get(`${url}/all`);
    return { cases, recovered, deaths, active };
  } catch (error) {
    console.log(error);
  }
};

export const fetchDataCountries = async () => {
  try {
    const countriesData = await axios.get(`${url}/countries`);
    return countriesData;
  } catch (error) {
    console.log(error);
  }
};
