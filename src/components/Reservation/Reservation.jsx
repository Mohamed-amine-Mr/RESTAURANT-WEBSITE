import React from 'react';

const Reservation = ({ bookingLink }) => {
  return (
    <div>
      <h2>Make a Reservation</h2>
      <a href={bookingLink}>Book Now on Booking.com</a>
    </div>
  );
};

export default Reservation;
