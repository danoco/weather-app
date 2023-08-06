import React, { useState } from 'react';

import { useActions } from '../hooks/useActions';

import { nanoid } from 'nanoid';

function RootForm({ formOpen, handleFormOpen, setFormOpen }) {
  const [citySelect, setCitySelect] = useState('DEFAULT');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const [inputType, setInputType] = useState('text');

  const { addTrip } = useActions();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!citySelect || !startDate || !endDate) {
      return;
    }

    const data = {
      citySelect,
      startDate,
      endDate,
      id: nanoid(),
    };

    addTrip(data);

    setCitySelect('DEFAULT');
    setStartDate('');
    setEndDate('');
    setFormOpen(!formOpen);
  };

  const handleFocus = () => {
    setInputType('date');
  };

  const handleBlur = () => {
    setInputType('text');
  };

  const getMinDate = () => {
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 1);
    return currentDate.toISOString().split('T')[0];
  };

  const getMaxDate = () => {
    const maxDaysAhead = 15;
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + maxDaysAhead);
    return currentDate.toISOString().split('T')[0];
  };

  return (
    <form
      className={`addTrip-form ${!formOpen ? 'hidden' : ''}`}
      onSubmit={handleSubmit}
    >
      <p className='addTrip-form-title'>Create Trip</p>
      <div className='addTrip-form-inner'>
        <label>City</label>
        <select
          className={`citySelect ${
            citySelect === 'DEFAULT' ? 'inputValid' : ''
          }`}
          value={citySelect}
          onChange={(e) => setCitySelect(e.target.value)}
        >
          <option value='DEFAULT' disabled>
            Select a city
          </option>
          <option value='Berlin'>Berlin</option>
          <option value='London'>London</option>
          <option value='Paris'>Paris</option>
        </select>
        <label className=''>Start Date</label>
        <input
          className={`date-input ${!startDate ? 'inputValid' : ''}`}
          placeholder='Select date'
          type={inputType}
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          max={getMaxDate()}
          min={getMinDate()}
        />
        <label className=''>End Date</label>
        <input
          className={`date-input ${!endDate ? 'inputValid' : ''}`}
          placeholder='Select date'
          type={inputType}
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          max={getMaxDate()}
          min={getMinDate()}
        />
      </div>
      <div className='form-inner-btn'>
        <button onClick={(e) => handleFormOpen(e)}>Cancel</button>
        <button type='submit'>Save</button>
      </div>
    </form>
  );
}

export default RootForm;
