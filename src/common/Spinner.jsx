import React from 'react';
import './spinner.css';

const Spinner = ({ showPercentage = false }) => {
  return (
    <div className='spinner-overlay'>
      <div className='spinner-container'>
        <div className='spinner'></div>
        {showPercentage && <span>20%</span>}
      </div>
    </div>
  );
};

export default Spinner;
