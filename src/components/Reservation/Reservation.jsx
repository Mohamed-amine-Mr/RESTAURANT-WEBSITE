const Reservation = ({ bookingLink }) => {
  return (
    <div className="bg-gray-100 py-20 px-4 sm:px-6 lg:px-8 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl animate-fade-in">
          Make a Reservation
        </h2>
        <p className="mt-6 text-lg text-gray-600 animate-fade-in-delay">
          Book your stay at our hotel on Booking.com and enjoy a luxurious
          getaway.
        </p>
        <a
          href={bookingLink}
          className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-md text-white bg-amber-500 hover:bg-amber-600 mt-10 animate-fade-in-delay-2"
        >
          Book Now on Booking.com
        </a>
      </div>
    </div>
  );
};

export default Reservation;
