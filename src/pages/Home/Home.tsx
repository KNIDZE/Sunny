import React from 'react';
import './home.scss';
import { MdRoom } from 'react-icons/md';
import WeatherToday from './Components/WeatherToday/WeatherToday';

export function Home(): React.ReactElement {
  const image = 'https://github.com/KNIDZE/Sunny/blob/main/src/images/upscaled_morning.png?raw=true';
  const menuIcon =
    'https://raw.githubusercontent.com/KNIDZE/Sunny/f6c249cc4381b1441e9cd545cc5ab7125bc2d570/src/images/menu.svg';
  const position = 'Kropyvnytskyi';
  const degrees = 10;
  return (
    <section className="home_page" style={{ backgroundImage: `url(${image})` }}>
      <div className="home_container">
        <div className="position_menu">
          <h3>
            <MdRoom />
            {position}
          </h3>
          <img src={menuIcon} alt="menu.svg" className="menu" />
        </div>
        <div className="degrees_part">
          <h2 className="degrees">
            {degrees}
            <span>°</span>
          </h2>
          <p>It's sunny</p>
        </div>
      </div>
      <WeatherToday />
    </section>
  );
}
