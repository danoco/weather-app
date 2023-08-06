import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const tripSlice = createSlice({
  name: 'trip',
  initialState: {
    trips: [
      {
        citySelect: 'Berlin',
        startDate: '2023-08-24',
        endDate: '2023-08-30',
        id: nanoid(),
      },
    ],
  },
  reducers: {
    addTrip(state, action) {
      state.trips.push(action.payload);
    },
  },
});

export const selectTripById = (tripId) => (state) => {
  return state.trip.trips.find((trip) => trip.id === tripId);
};

export const { addTrip } = tripSlice.actions;
export const tripReducer = tripSlice.reducer;
