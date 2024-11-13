// components/Reservation.js
import React from 'react';

const Reservation = ({ bookingLink }) => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Make a Reservation
        </h2>
        <p className="mt-4 text-lg text-gray-500">
          Book your stay at our hotel on Booking.com.
        </p>
        
          href={bookingLink}
          className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 mt-8"
        >
          Book Now on Booking.com
        </a>
      </div>
    </div>
  );
};

export default Reservation;
