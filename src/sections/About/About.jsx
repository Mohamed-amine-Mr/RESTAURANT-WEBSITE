import { motion } from "framer-motion";
import parkImage from "./5-650x650.png";
import { ServicesAndAmenities } from "../sections";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <>
      <section className="py-10 relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-opacity-5 bg-gray-200 pattern-diagonal-lines pattern-gray-300 pattern-size-2 pattern-opacity-5"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="flex flex-col lg:flex-row items-center"
            transition={{ duration: 0.8 }}
          >
            <div className="lg:w-1/2 mb-10 lg:mb-0 w-full">
              <motion.div
                className="relative  overflow-hidden shadow-2xl"
                transition={{ duration: 0.3 }}
              >
                <img
                  src={parkImage}
                  alt="Park Alakhawin"
                  className="w-full h-[300px] lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
              </motion.div>
            </div>
            <div className="md:w-1/2 md:pl-12 text-center lg:text-start">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[#bc906b] mb-4 ">
                AURUM
              </h2>

              <motion.p
                className="text-base lg:text-lg mb-6 leading-relaxed text-[#4a4a4ace] font-lora "
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Molestias, consequuntur sunt voluptatum illum quaerat commodi
                eum quisquam fuga a ea. Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Molestias, consequuntur sunt voluptatum illum
                quaerat commodi eum quisquam fuga a ea. Lorem, ipsum dolor sit
                amet consectetur adipisicing elit. Molestias, consequuntur sunt
                voluptatum illum quaerat commodi eum quisquam fuga a ea.
              </motion.p>

              <div className="flex space-x-4 justify-center lg:justify-start">
                <Link to="/menu">
                  <button className="bg-white text-[#bc906b] px-6 py-2 rounded-md font-sans text-sm uppercase tracking-wider hover:text-white hover:bg-[#bc906b] transition duration-300 border border-[#bc906b]">
                    Menu Aurum
                  </button>
                </Link>
                <Link to="/reservation">
                  <button className="bg-white text-[#bc906b] px-6 py-2 rounded-md font-sans text-sm uppercase tracking-wider hover:text-white hover:bg-[#bc906b] transition duration-300 border border-[#bc906b]">
                    Réservations
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <ServicesAndAmenities />
    </>
  );
};

export default About;
