import React, { useEffect } from 'react';
import styles from './city-list.module.scss';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import BackButton from '../../components/back-button';
import { useAppDispatch, useAppSelector } from '../../lib/hooks/redux';
import { useParams } from 'react-router-dom';
import { loadInfo } from '../../store/thunks/infoThunk';

const CityInfo = () => {
   const { id } = useParams();
   const dispatch = useAppDispatch();
   const { city, isLoading, error } = useAppSelector((store) => store.info);

   useEffect(() => {
      if (id) {
         dispatch(loadInfo({ id: Number(id) }));
      }
   }, []);

   return (
      <Box className={styles.root} data-testid="info-page">
         <BackButton />
         <Box className={styles.wrapper}>
            {isLoading && (
               <Typography variant="h6" className={styles.message}>
                  Loading...
               </Typography>
            )}

            {!isLoading && city && (
               <>
                  <Typography variant="h5">City: {city?.name}</Typography>
                  <Box className={styles.divider} />
                  <Grid container spacing={6}>
                     <Grid item xs={6}>
                        <Box className={styles.info}>Wind speed: {city?.wind?.speed} m/s E</Box>
                        <Box className={styles.info}>Wind degree: {city?.wind?.deg} &deg;</Box>
                        <Box className={styles.info}>Humidity: {city?.main?.humidity} %</Box>
                        <Box className={styles.info}>Timezone: {city?.sys?.timezone}</Box>
                        <Box className={styles.info}>Visibility: {city?.visibility} km</Box>
                     </Grid>
                     <Grid item xs={6}>
                        <Box
                           component="img"
                           className={styles.avatar}
                           src={`http://openweathermap.org/img/wn/${city?.weather[0]?.icon}@4x.png`}
                           alt="weather"
                        />
                        <Box component="p" className={styles.degree}>
                           {city?.main?.temp} &deg; C, {city?.weather[0]?.main}
                        </Box>
                     </Grid>
                  </Grid>
               </>
            )}

            {!isLoading && error && (
               <Typography variant="h6" className={styles.message}>
                  {error}
               </Typography>
            )}
         </Box>
      </Box>
   );
};

export default CityInfo;
