import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { cities } from '../../constants/cities';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import styles from './add-city.module.scss';
import { AddCityProps } from './add-city.props';
import { ICity } from '../../types/city';

const initial: ICity = { id: 0, name: '' };

const AddCity: React.FC<AddCityProps> = ({ addHandler }) => {
   const [newCity, setNewCity] = useState(initial);

   const [keyValueToClear, setKeyValueToClear] = useState('');

   const handleChange = (val: ICity) => {
      setNewCity(val);
   };

   const handleAdd = () => {
      if (newCity.name) {
         addHandler(newCity.id);
         setNewCity(initial);
         setKeyValueToClear(`${Math.random()}`);
      }
   };

   return (
      <Box className={styles.root}>
         <Grid container spacing={2}>
            <Grid item xs={12} lg={9}>
               <Autocomplete
                  data-testid="autocomplete"
                  key={keyValueToClear}
                  disableClearable
                  disablePortal
                  options={cities}
                  getOptionLabel={(option) => option.name}
                  onChange={(event, value) => {
                     handleChange(value);
                  }}
                  renderOption={(props, option) => (
                     <li {...props} key={option.id}>
                        {option.name}
                     </li>
                  )}
                  renderInput={(params) => (
                     <TextField
                        {...params}
                        size="small"
                        fullWidth
                        placeholder="City name..."
                        InputProps={{ ...params.InputProps, type: 'search' }}
                     />
                  )}
               />
            </Grid>
            <Grid item xs={12} lg={3}>
               <Button variant="contained" onClick={handleAdd}>
                  Add City
               </Button>
            </Grid>
         </Grid>
      </Box>
   );
};

export default AddCity;
