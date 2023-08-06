import React, { useRef } from 'react';
import DayItem from './DayItem';

import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

function DaysSlider({ data }) {
  const renderedDays = data.map((dayItem, i) => {
    return <DayItem key={i} dayItem={dayItem} />;
  });
  const inputElement = useRef(null);

  const nextSlide = () => {
    inputElement.current.scrollLeft += 150;
  };

  const prevSlide = () => {
    inputElement.current.scrollLeft -= 150;
  };

  return (
    <div className='slider-component'>
      <h2>Week</h2>
      <div className='slider'>
        <MdChevronLeft
          className='slide-btn slide-btn--left'
          onClick={prevSlide}
          size={40}
        />
        <div className='slider-inner' ref={inputElement}>
          {renderedDays}
        </div>
        <MdChevronRight
          className='slide-btn slide-btn--right'
          onClick={nextSlide}
          size={40}
        />
      </div>
    </div>
  );
}

export default DaysSlider;
