import React from 'react';
import './home.scss';
import { MdRoom } from 'react-icons/md';
import image from '../../images/upscaled_morning.png';
import WeatherToday from './Components/WeatherToday/WeatherToday';
import menuIcon from '../../images/menu.svg';

export function Home(): React.ReactElement {
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
