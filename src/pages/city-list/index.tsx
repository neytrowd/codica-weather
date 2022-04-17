import React, { useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import AddCity from '../../components/add-city';
import WeatherCard from '../../components/weather-card';
import styles from './city-list.module.scss';
import { useAppDispatch, useAppSelector } from '../../lib/hooks/redux';
import { addNewCity, loadCities, refreshCity } from '../../store/thunks/weatherThunk';
import Typography from '@mui/material/Typography';
import { getFromStorage, setToStorage } from '../../lib/helpers/storage';
import { activeCities } from '../../constants/cities';
import { deleteCity } from '../../store/reducers/weatherSlice';

const CityList: React.FC = () => {
   const dispatch = useAppDispatch();
   const { cities, isLoading, error } = useAppSelector((store) => store.weather);

   useEffect(() => {
      const id = getFromStorage();
      if (id.length) {
         dispatch(loadCities({ id }));
         return;
      }
      setToStorage(activeCities);
      dispatch(loadCities({ id: activeCities }));
   }, []);

   const handleRefresh = (id: number) => {
      dispatch(refreshCity({ id }));
   };

   const handleDelete = (idx: number) => {
      const id = getFromStorage();
      const res = id.filter((item: number) => item !== idx);
      setToStorage(res);
      dispatch(deleteCity(idx));
   };

   const handleAdd = (idx: number) => {
      const id = getFromStorage();
      id.push(idx);
      setToStorage(id);
      dispatch(addNewCity({ id: idx }));
   };

   return (
      <Container className={styles.root} data-testid="list-page">
         <AddCity addHandler={handleAdd} />

         {isLoading && (
            <Typography variant="h6" className={styles.message}>
               Loading...
            </Typography>
         )}

         {!isLoading && cities && (
            <Grid container spacing={4}>
               {cities.map((item) => (
                  <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
                     <WeatherCard data={item} refreshHandler={handleRefresh} deleteHandler={handleDelete} />
                  </Grid>
               ))}
            </Grid>
         )}

         {error && (
            <Typography variant="h6" className={styles.message}>
               {error}
            </Typography>
         )}
      </Container>
   );
};

export default CityList;
