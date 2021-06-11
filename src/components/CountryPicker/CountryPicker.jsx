import React from 'react';
import styles from './CountryPicker.module.css';
import { NativeSelect, FormControl } from '@material-ui/core';

const CountryPicker = ({ dataCountries, dataAll, handleCountryChange }) => {
  if (!dataCountries.data || !dataAll.cases) {
    return null;
  } else {
    return (
      <div className={styles.container}>
        <FormControl className={styles.formControl}>
          <NativeSelect
            defaultValue=''
            onChange={(e) => {
              handleCountryChange(e.target.value);
            }}
          >
            <option value=''>Global</option>
            {dataCountries.data.map((e, i) => {
              return (
                <option key={i} value={i}>
                  {e.country}
                </option>
              );
            })}
          </NativeSelect>
        </FormControl>
      </div>
    );
  }
};

export default CountryPicker;
