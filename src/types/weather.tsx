interface ICoord {
   lon: number;
   lat: number;
}

interface ISys {
   country: string;
   timezone: number;
   sunrise: number;
   sunset: number;
}

interface IMain {
   temp: number;
   feels_like: number;
   temp_min: number;
   temp_max: number;
   pressure: number;
   sea_level: number;
   grnd_level: number;
   humidity: number;
}

interface IState {
   id: number;
   main: string;
   description: string;
   icon: string;
}

interface IWind {
   speed: number;
   deg: number;
}

interface ICloud {
   all: number;
}

export interface IWeather {
   coord: ICoord;
   sys: ISys;
   main: IMain;
   visibility: number;
   weather: IState[];
   wind: IWind;
   clouds: ICloud;
   dt: number;
   id: number;
   name: string;
}
