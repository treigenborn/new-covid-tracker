import React from 'react';
import styles from './CountryPicker.module.css';
import { NativeSelect, FormControl } from '@material-ui/core';

const CountryPicker = (props) => {
  if (!props.dataCountries.data || !props.dataAll.cases) {
    return null;
  } else {
    console.log(props.dataAll);
    console.log(props.dataCountries.data[7].country);
    return (
      <div className={styles.container}>
        <FormControl className={styles.formControl}>
          <NativeSelect>
            <option value=''>Global</option>
            {props.dataCountries.data.map((e) => {
              return <option value={e.country}>{e.country}</option>;
            })}
          </NativeSelect>
        </FormControl>
      </div>
    );
  }
};

export default CountryPicker;
