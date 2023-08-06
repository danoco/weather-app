import React from 'react';
import { calcDegree } from '../components/calcDegree';

function DayItem({ dayItem }) {
  return (
    <div className='slider-item'>
      <img src={`images/icons/${dayItem.icon}.svg`} alt='week-icon' />
      <p>
        {calcDegree(dayItem.tempmax)}℃ / {calcDegree(dayItem.tempmin)}℃
      </p>
    </div>
  );
}

export default DayItem;
