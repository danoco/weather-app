import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState('');

  const getTimeRemaining = (endDate) => {
    const total = Date.parse(endDate) - Date.now();
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft(getTimeRemaining(targetDate));
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [targetDate]);

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  return (
    <div className='weather-timer'>
      <div>
        <p className='weather-timer-data'>{timeLeft.days}</p>
        <p className='weather-timer-title'>DAYS</p>
      </div>
      <div>
        <p className='weather-timer-data'>{formatTime(timeLeft.hours)}</p>
        <p className='weather-timer-title'>HOURS</p>
      </div>
      <div>
        <p className='weather-timer-data'>{formatTime(timeLeft.minutes)}</p>
        <p className='weather-timer-title'>MINUTES</p>
      </div>
      <div>
        <p className='weather-timer-data'>{formatTime(timeLeft.seconds)}</p>
        <p className='weather-timer-title'>SECONDS</p>
      </div>
    </div>
  );
};

export default CountdownTimer;
