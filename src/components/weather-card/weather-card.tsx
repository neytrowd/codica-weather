import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import RefreshIcon from '@mui/icons-material/Refresh';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import styles from './weather-card.module.scss';
import { useNavigate } from 'react-router-dom';
import { WeatherCardProps } from './weather-card.props';

const WeatherCard: React.FC<WeatherCardProps> = ({ data, refreshHandler, deleteHandler }) => {
   const navigate = useNavigate();
   const { id, name, weather, main } = data;

   const handleClick = () => {
      navigate(`/info/${id}`);
   };

   const handleRefresh = (e: React.SyntheticEvent) => {
      e.stopPropagation();
      refreshHandler(id);
   };

   const handleDelete = (e: React.SyntheticEvent) => {
      e.stopPropagation();
      deleteHandler(id);
   };

   return (
      <Card className={styles.root} onClick={handleClick} data-testid="weather-card">
         <CardHeader avatar={<Avatar>U</Avatar>} title="Ukraine" subheader={name} />
         <CardContent>
            <Box
               component="img"
               className={styles.avatar}
               src={`http://openweathermap.org/img/wn/${weather[0]?.icon}@4x.png`}
               alt="weather"
            />
            <Box component="p" className={styles.degree}>
               {main.temp} &deg; C, {weather[0]?.main}
            </Box>
         </CardContent>
         <CardActions>
            <Box className={styles.actions}>
               <Button color="primary" startIcon={<RefreshIcon />} onClick={handleRefresh}>
                  Refresh
               </Button>
               <Button color="error" startIcon={<DeleteForeverIcon />} onClick={handleDelete}>
                  Delete
               </Button>
            </Box>
         </CardActions>
      </Card>
   );
};

export default WeatherCard;
