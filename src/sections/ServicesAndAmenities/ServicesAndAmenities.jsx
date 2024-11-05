import { motion } from "framer-motion";
import PropTypes from "prop-types";
import {
  FaCoffee,
  FaHotel,
  FaChild,
  FaDumbbell,
  FaCarAlt,
  FaUtensils,
} from "react-icons/fa";
import {
  MdOutdoorGrill,
  MdTakeoutDining,
  MdCreditCard,
  MdLocalShipping,
  MdEventAvailable,
  MdAccessible,
} from "react-icons/md";

// ServiceItem component
const ServiceItem = ({ icon, name, index }) => {
  return (
    <motion.li
      className="flex items-center space-x-4"
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
    >
      <motion.div
        className="text-[#bc906b] text-2xl"
        whileHover={{ scale: 1.2, rotate: 360 }}
        transition={{ duration: 0.3 }}
      >
        {icon}
      </motion.div>
      <span className="text-[#4a4a4a] font-lora">{name}</span>
    </motion.li>
  );
};

ServiceItem.propTypes = {
  icon: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

// ServiceSection component
const ServiceSection = ({ title, items }) => {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-2xl overflow-hidden"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      <motion.h3
        className="text-2xl font-playfair text-white bg-[#bc906b] py-4 px-6"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        {title}
      </motion.h3>
      <ul className="p-6 space-y-4">
        {items.map((item, index) => (
          <ServiceItem
            key={index}
            icon={item.icon}
            name={item.name}
            index={index}
          />
        ))}
      </ul>
    </motion.div>
  );
};

ServiceSection.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.node.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};

// Main ServicesAndAmenities component
const ServicesAndAmenities = () => {
  const services = [
    { icon: <FaCarAlt />, name: "STATION SERVICE" },
    { icon: <FaCoffee />, name: "CAFE" },
    { icon: <FaUtensils />, name: "RESTAURANT" },
    { icon: <FaHotel />, name: "HOTEL" },
    { icon: <FaChild />, name: "ESPACE D'ENFANT" },
    { icon: <FaDumbbell />, name: "FITNESS & SPA" },
  ];

  const amenities = [
    { icon: <MdOutdoorGrill />, name: "Terrasse extérieure" },
    { icon: <MdTakeoutDining />, name: "À emporter" },
    { icon: <MdCreditCard />, name: "Cartes de crédit acceptées" },
    { icon: <MdLocalShipping />, name: "Livraison" },
    { icon: <MdEventAvailable />, name: "Réservation" },
    { icon: <MdAccessible />, name: "Accès personnes handicapées" },
  ];

  return (
    <motion.section
      className="py-20 bg-gradient-to-b from-white to-[#f8f5f1]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-serif text-[#bc906b]  mb-16 text-center"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
        >
          Nos Services et Commodités
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <ServiceSection title="Nos Services" items={services} />
          <ServiceSection title="Nos Commodités" items={amenities} />
        </div>
      </div>
    </motion.section>
  );
};

export default ServicesAndAmenities;
