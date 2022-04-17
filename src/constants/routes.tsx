import React from 'react';
import CityList from '../pages/city-list';
import CityInfo from '../pages/city-info';

const routes = [
   {
      path: '/',
      component: <CityList />,
   },
   {
      path: '/info/:id',
      component: <CityInfo />,
   },
   {
      path: '*',
      component: <CityList />,
   },
];

export default routes;
