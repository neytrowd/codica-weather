const key = 'weather_cities';

export const setToStorage = (data: any) => {
   localStorage.setItem(key, JSON.stringify(data));
};

export const getFromStorage = () => {
   return JSON.parse(localStorage.getItem(key) || '[]');
};
