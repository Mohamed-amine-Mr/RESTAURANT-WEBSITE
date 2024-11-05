import { useState, useEffect } from "react";
import hoteil2 from "./HOTEL.avif";
import hoteil3 from "./HOTEL2.avif";
import hoteil5 from "./HOTEIL3.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGasPump,
  faCoffee,
  faUtensils,
  faHotel,
  faChild,
  faDumbbell,
  faWifi,
  faSwimmingPool,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Hotel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [hoteil2, hoteil3, hoteil5];

  const services = [
    { icon: faGasPump, text: "Station Service" },
    { icon: faCoffee, text: "Café" },
    { icon: faUtensils, text: "Restaurant" },
    { icon: faHotel, text: "Hotel" },
    { icon: faChild, text: "Espace d'Enfant" },
    { icon: faDumbbell, text: "Fitness & Spa" },
  ];

  const amenities = [
    { icon: faWifi, text: "Free WiFi" },
    { icon: faSwimmingPool, text: "Pool" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gradient-to-b from-gray-100 to-white py-20 lg:py-36  ">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-stretch">
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0 relative overflow-hidden rounded-xl shadow-2xl h-64 lg:h-auto order-1">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Luxury Hotel ${index + 1}`}
                className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
                  index === currentImageIndex ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white font-serif text-center lg:text-start">
              <h3 className="text-2xl font-bold mb-1">Luxe Redéfini</h3>
              <p className="text-base">Découvrez un confort inédit</p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 lg:pl-12 order-2 text-center lg:text-left flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-gray-800 font-serif">
                Votre Destination Ultime
              </h2>
              <p className="text-gray-600 mb-6 text-base leading-relaxed">
                Les clients choisissent notre hôtel pour son confort inégalé et
                son service exceptionnel. Profitez d &apos;une escapade sereine
                dans un cadre élégant, loin du tumulte urbain.
              </p>
              <div className="grid grid-cols-3 gap-3 mb-6">
                {services.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="bg-indigo-100 rounded-full p-2 mb-1">
                      <FontAwesomeIcon
                        icon={item.icon}
                        className="text-[#e7c86e] text-base"
                      />
                    </div>
                    <span className="text-gray-800 font-medium text-base">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap justify-center  mb-6">
                {amenities.map((item, index) => (
                  <div key={index} className="flex items-center mr-4 mb-2">
                    <FontAwesomeIcon
                      icon={item.icon}
                      className="text-[#e7c86e] mr-1 text-base"
                    />
                    <span className="text-gray-700 text-base">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <a
              href="tel:+212523564851"
              className="inline-flex items-center justify-center w-full sm:w-auto bg-[#e7c86e] text-white py-2 px-6 rounded-lg hover:bg-[#e7c96eac] transition duration-300 ease-in-out shadow-md hover:shadow-lg text-base"
            >
              <FontAwesomeIcon icon={faPhone} className="mr-2" />
              Appelez maintenant : +212 5 00 00 00 00
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hotel;
