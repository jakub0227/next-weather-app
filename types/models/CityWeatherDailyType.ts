export interface CityWeatherDailyType {
  hourly: {
    dt: number;
    temp: number;
    feels_like: number;
    humidity: number;
    wind_speed: number;
    weather: [
      {
        id: number;
        main: string;
        description: string;
        icon: string;
      }
    ];
  }[];
  daily: {
    clouds: number;
    dt: number;
    temp: {
      min: number;
      max: number;
      night: number;
    };
    weather: [
      {
        id: number;
        main: string;
        description: string;
        icon: string;
      }
    ];
  }[];
  timezone: string;
  timezone_offset: number;
}
