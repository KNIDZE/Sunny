import React from 'react';
import './weatherToday.scss';
import polygon from '../../../../images/Component 1.svg';
import swipe from '../../../../images/swipe_icon.svg';
import WeatherHour from './WeatherHour/WeatherHour';

export default function WeatherToday(): React.ReactElement {
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
