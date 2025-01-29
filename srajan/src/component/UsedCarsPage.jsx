import React from 'react';
import "./UsedCarsPage.css"

const CarOverview = () => {
  return (
    <div className="Background">
      <h2 className="big">Car Overview</h2>
      <div className="grid">
        <div className="container">
          <div className='title'><img src='calendar.png'/>Registration Year</div>
          <div className='title'><img src='drop.png'/>Fuel type</div>
          <div className='title'><img src='speed.png'/>Kms Driven</div>
          <div className='title'><img src='person.png'/>OwnerShip</div>
          <div className='title'><img src='transmission.png'/>Transmission</div>
        </div>
        <div className="container">
          <div className='title1'>Apr 2023</div>
          <div className='title1'>Petrol</div>
          <div className='title1'>5,846 Kms</div>
          <div className='title1'>First Owner</div>
          <div className='title1'>Manual</div>
        </div>
        <div className="container">
          <div className='title'><img src='shield.png'/>Insurance</div>
          <div className='title'><img src='seats.png'/>Seats</div>
          <div className='title'><img src='apartment.png'/>RTO</div>
          <div className='title'><img src='page.png'/>Engine Displacement</div>
          <div className='title'><img src='schedule.png'/>Year of Manufacture</div>
        </div>
        <div className="container">
          <div className='title1'>Comprehensive</div>
          <div className='title1'>5 Seats</div>
          <div className='title1'>Bangalore</div>
          <div className='title1'>998 cc</div>
          <div className='title1'>2023</div>
        </div>
      </div>
    </div>
  );
};

export default CarOverview;