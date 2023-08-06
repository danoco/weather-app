import React from 'react';

import { AiOutlineLoading3Quarters } from 'react-icons/ai';

import { selectTripById } from '../store/slice/tripSlice';

import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  useGetWeatherQuery,
  useGetWeatherTodayQuery,
} from '../store/api/charactersApi';

import CountdownTimer from '../components/CountdownTimer';
import DaysSlider from '../components/DaysSlider';
import { getDayOfWeek } from '../components/getDayOfWeek';
import { calcDegree } from '../components/calcDegree';

function WeatherPage() {
  const { tripsID } = useParams();
  const trip = useSelector(selectTripById(tripsID.slice(1)));
  const { data: weekData } = useGetWeatherQuery(trip);
  const { data: todayData, isLoading } = useGetWeatherTodayQuery(trip);

  return (
    <div className='weatherPage'>
      {isLoading ? (
        <AiOutlineLoading3Quarters className='loading-icon' />
      ) : todayData ? (
        <div className='weatherPage-info'>
          <h3 className='weatherPage-info-day'>
            {getDayOfWeek(todayData.days[0].datetime)}
          </h3>
          <div className='weatherPage-info--inner'>
            <img
              src={`/images/icons/${todayData.days[0].icon}.svg`}
              alt='icon'
            />
            <p>{calcDegree(todayData.days[0].temp)}℃</p>
          </div>
          <p className='weatherPage-info-city'>{todayData.address}</p>
          <CountdownTimer targetDate={trip.startDate} />
          {weekData ? <DaysSlider data={weekData.days} /> : null}
        </div>
      ) : null}
    </div>
  );
}

export default WeatherPage;
