import React from 'react';
import './weatherHour.scss';
import clouds from '../../../../../images/cloud.svg';
import cloudSun from '../../../../../images/cloud with sun.svg';
import storm from '../../../../../images/storm.svg';
import sun from '../../../../../images/sun.svg';

interface WeatherHourProps {
  time: number;
  temp: number;
  weather: string;
}
function setWeatherIcon(weather: string): string {
  switch (weather) {
    case 'cloudy':
      return clouds;
    case 'sun':
      return sun;
    case 'cloudSun':
      return cloudSun;
    case 'storm':
      return storm;
    default:
      return sun;
  }
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
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
