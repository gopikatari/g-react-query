import React from 'react';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';
import { useGlobalContext } from '../context/context';

const ThemeToggle = () => {
  const { isDarkTheme, ToggleDarkTheme } = useGlobalContext();
  return (
    <section className='toggle-container'>
      <button className='dark-toggle' onClick={ToggleDarkTheme}>
        {isDarkTheme ? (
          <BsFillMoonFill className='toggle-icon icon-white' />
        ) : (
          <BsFillSunFill className='toggle-icon' />
        )}
      </button>
    </section>
  );
};

export default ThemeToggle;
