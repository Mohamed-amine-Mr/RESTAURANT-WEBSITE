import { IoLocationSharp, IoCall, IoTime, IoMail } from "react-icons/io5";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const Contact = () => {
  return (
    <section className="text-black py-24">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-serif text-[#bc906b] mb-16 text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Contactez-nous
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row items-stretch shadow-2xl rounded-2xl overflow-hidden bg-white"
        >
          <div className="w-full lg:w-1/2 h-[300px] sm:h-[400px] lg:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d41996.70688981254!2d2.28711313190175!3d48.862135027830654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fbf77bf3879%3A0x5c98bdcea603dee7!2sTo%20Restaurant%20Paris!5e0!3m2!1sfr!2sma!4v1724224892845!5m2!1sfr!2sma"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps"
            ></iframe>
          </div>
          <div className="w-full lg:w-1/2 bg-white p-8 lg:p-12 flex flex-col justify-center">
            <h3 className="text-3xl font-light text-black mb-8 text-center lg:text-left">
              Informations de contact
            </h3>
            <div className="space-y-8 flex flex-col items-center lg:items-start">
              <ContactItem
                icon={IoLocationSharp}
                title="Notre adresse"
                content="aurum R403, Khouribga"
                link="https://maps.app.goo.gl/dkeqpQN2vv2w4rni9"
              />
              <ContactItem
                icon={IoCall}
                title="Appelez-nous"
                content="+212000000"
                link="tel:+21200000"
              />
              <ContactItem
                icon={IoTime}
                title="Heures d'ouverture"
                content="Tous les jours de 9:00 à 23:00"
              />
              <ContactItem
                icon={IoMail}
                title="Contactez-nous"
                content="contact@park-aurum.ma"
                link="mailto:contact@park-aurum.ma"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ContactItem = ({ icon: Icon, title, content, link }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="flex flex-col items-center lg:flex-row lg:items-start space-y-2 lg:space-y-0 lg:space-x-4 text-center lg:text-left"
  >
    <Icon className="text-4xl text-[#e7c86e]" />
    <div>
      <h4 className="text-lg font-light text-black mb-1">{title}</h4>
      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#e7c86e] hover:text-black transition duration-300"
        >
          {content}
        </a>
      ) : (
        <p className="text-gray-600">{content}</p>
      )}
    </div>
  </motion.div>
);

ContactItem.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  link: PropTypes.string,
};

export default Contact;
