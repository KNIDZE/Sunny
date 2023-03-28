import React from 'react';
import './weatherHour.scss';

interface WeatherHourProps {
  time: number;
  temp: number;
  weather: string;
}
function setWeatherIcon(weather: string): string {
  switch (weather) {
    case 'cloudy':
      return 'https://raw.githubusercontent.com/KNIDZE/Sunny/f6c249cc4381b1441e9cd545cc5ab7125bc2d570/src/images/cloud%20with%20sun.svg';
    case 'sun':
      return 'https://raw.githubusercontent.com/KNIDZE/Sunny/f6c249cc4381b1441e9cd545cc5ab7125bc2d570/src/images/sun.svg';
    case 'cloudSun':
      return 'https://raw.githubusercontent.com/KNIDZE/Sunny/f6c249cc4381b1441e9cd545cc5ab7125bc2d570/src/images/cloud.svg';
    case 'storm':
      return 'https://raw.githubusercontent.com/KNIDZE/Sunny/f6c249cc4381b1441e9cd545cc5ab7125bc2d570/src/images/storm.svg';
    default:
      return 'https://raw.githubusercontent.com/KNIDZE/Sunny/f6c249cc4381b1441e9cd545cc5ab7125bc2d570/src/images/sun.svg';
  }
}
export default function WeatherHour({ time, temp, weather }: WeatherHourProps): React.ReactElement {
  return (
    <div className="weather_hour">
      <img src={setWeatherIcon(weather)} alt="weather.svg" className="weather_icon" />
      <p>{time}:00</p>
      <h4>
        {temp}
        <span>°</span>
      </h4>
    </div>
  );
}
