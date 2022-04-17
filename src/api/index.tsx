import axios from 'axios';
import { appId, baseUrl } from '../constants/baseUrl';

const params = {
   appid: appId,
   units: 'metric',
};

export const api = axios.create({
   baseURL: baseUrl,
   params,
});

export const getCities = async (id: number[]) => {
   const res = await api.get('/group', { params: { id: id.join(',') } });
   return res.data.list;
};

export const getCity = async (id: number) => {
   const res = await api.get('/weather', { params: { id } });
   return res.data;
};
