import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const weatherApi = createApi({
  reducerPath: 'api/weather',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://weather.visualcrossing.com/VisualCrossingWebServices',
  }),
  endpoints: (builder) => ({
    getWeather: builder.query({
      query: (tripItem) => ({
        url: `/rest/services/timeline/${tripItem.citySelect}/${tripItem.startDate}/${tripItem.endDate}/?key=${process.env.REACT_APP_WEATHER_API_KEY}`,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
    }),
    getWeatherToday: builder.query({
      query: (tripItem) => ({
        url: `/rest/services/timeline/${tripItem.citySelect}/today?key=${process.env.REACT_APP_WEATHER_API_KEY}`,
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }),
    }),
  }),
});

export const { useGetWeatherQuery, useGetWeatherTodayQuery } = weatherApi;
