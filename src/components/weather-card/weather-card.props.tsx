import React from 'react';
import { IWeather } from '../../types/weather';

export interface WeatherCardProps extends React.ComponentProps<'div'> {
   data: IWeather;
   refreshHandler: Function;
   deleteHandler: Function;
}
