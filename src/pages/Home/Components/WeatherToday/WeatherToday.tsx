import React from 'react';
import './weatherToday.scss';
import WeatherHour from './WeatherHour/WeatherHour';

export default function WeatherToday(): React.ReactElement {
  const polygon =
    'https://raw.githubusercontent.com/KNIDZE/Sunny/f6c249cc4381b1441e9cd545cc5ab7125bc2d570/src/images/Component%201.svg';
  const swipe =
    'https://raw.githubusercontent.com/KNIDZE/Sunny/f6c249cc4381b1441e9cd545cc5ab7125bc2d570/src/images/swipe_icon.svg';
  const hourlyWeather = [
    { hour: 9, weather: 'cloudy', temp: 16 },
    { hour: 12, weather: 'sunny', temp: 19 },
    { hour: 15, weather: 'cloudSun', temp: 23 },
    { hour: 18, weather: 'storm', temp: 2 },
  ];

  return (
    <div className="weather_today">
      <img src={swipe} alt="swipe.svg" className="swipe_line" />
      <img src={polygon} alt="polygon.svg" className="polygon" />
      <h1>Weather Today</h1>
      <div className="hourly_weather">
        {hourlyWeather.map((elem) => (
          <WeatherHour key={elem.hour} weather={elem.weather} time={elem.hour} temp={elem.temp} />
        ))}
      </div>
    </div>
  );
}
