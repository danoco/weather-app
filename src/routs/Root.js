import React, { useState, useMemo, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { removeUser } from '../store/slice/userSlice';

import TripItem from '../components/TripItem';
import RootForm from '../components/RootForm';

function Root() {
  const [query, setQuery] = useState('');

  const [formOpen, setFormOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { email } = useSelector((state) => state.user);

  useEffect(() => {
    if (!email) {
      return navigate('/login');
    }
  }, [email, navigate]);

  const tripItems = useSelector((state) => {
    return state.trip.trips;
  });

  const filteredItems = useMemo(() => {
    return tripItems.filter((item) => {
      return item.citySelect.toLowerCase().includes(query.toLowerCase());
    });
  }, [tripItems, query]);

  const renderedProducts = filteredItems?.map((tripItem, i) => {
    return <TripItem key={i} tripItem={tripItem} />;
  });

  const handleFormOpen = (e) => {
    e.preventDefault();
    setFormOpen((formOpen) => !formOpen);
  };

  return (
    <div className='rootPage '>
      <div className='main '>
        <h1>
          <span>Weather</span> Forecast
        </h1>
        <input
          className='searchTrip-input'
          placeholder='Search your trip'
          type='search'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div className='trips-inner'>
          <div>{renderedProducts}</div>
          <button className='addTrip-btn' onClick={handleFormOpen}>
            +<br />
            Add Trip
          </button>
        </div>
        <RootForm
          formOpen={formOpen}
          handleFormOpen={handleFormOpen}
          setFormOpen={setFormOpen}
        />
        <div className='logout'>
          <p>{email}</p>
          <button onClick={() => dispatch(removeUser())}>Log out </button>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Root;
