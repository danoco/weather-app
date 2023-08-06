import React from 'react';

import { NavLink } from 'react-router-dom';

function TripItem({ tripItem }) {
  return (
    <NavLink
      className={({ isActive }) => `tripItem ${isActive ? 'active' : ''}`}
      to={`trips/:${tripItem.id}`}
    >
      <img
        src={`/images/city/${tripItem.citySelect}.jpg`}
        alt={tripItem.citySelect}
      />
      <h2>{tripItem.citySelect}</h2>
      <p>
        {tripItem.startDate} - {tripItem.endDate}
      </p>
    </NavLink>
  );
}

export default TripItem;
