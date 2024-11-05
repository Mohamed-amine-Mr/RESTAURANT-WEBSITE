// import { FaPhone, FaClock, FaTruck, FaUtensils } from "react-icons/fa";
// import { motion } from "framer-motion";
// import PropTypes from "prop-types";

// import logo from "./logo.png";

// const Reservation = () => {
//   const logoColor = "#e7c86e";
//   const phoneNumber = "+212523564851";

//   const sections = [
//     {
//       title: "Réservation",
//       icon: FaUtensils,
//       items: [
//         {
//           icon: FaClock,
//           title: "Heures de Réservation",
//           content: "De 11h00 à 21h00",
//         },
//       ],
//       experienceText:
//         "Pour une expérience gastronomique inoubliable, n'hésitez pas à nous contacter.",
//     },
//     {
//       title: "Livraison",
//       icon: FaTruck,
//       items: [
//         {
//           icon: FaClock,
//           title: "Heures de Livraison",
//           content: "De 11h00 à 22h00",
//         },
//       ],
//       experienceText:
//         "Pour une expérience culinaire à domicile, n'hésitez pas à nous contacter.",
//     },
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0 },
//   };

//   return (
//     <section className="relative bg-cover bg-center min-h-screen flex items-center justify-center py-24 px-4">
//       <div className="absolute inset-0 bg-white"></div>
//       <div
//         className="absolute inset-0 opacity-10 bg-no-repeat bg-center bg-contain filter blur-sm"
//         style={{ backgroundImage: `url(${logo})` }}
//       ></div>
//       <motion.div
//         className="relative z-10 flex flex-col md:flex-row gap-8 w-full max-w-4xl"
//         variants={containerVariants}
//         initial="hidden"
//         animate="visible"
//       >
//         {sections.map((section, sectionIndex) => (
//           <SectionCard
//             key={sectionIndex}
//             section={section}
//             logoColor={logoColor}
//             itemVariants={itemVariants}
//           />
//         ))}
//       </motion.div>

//       <motion.div
//         variants={itemVariants}
//         className="absolute bottom-9 left-0 right-0 text-center "
//       >
//         <CallButton phoneNumber={phoneNumber} />
//       </motion.div>
//     </section>
//   );
// };

// const SectionCard = ({ section, logoColor, itemVariants }) => (
//   <motion.div
//     variants={itemVariants}
//     className="bg-white bg-opacity-95 pb-2 rounded-lg shadow-xl w-full"
//   >
//     <motion.div
//       initial={{ scale: 0 }}
//       animate={{ scale: 1 }}
//       transition={{ type: "spring", stiffness: 260, damping: 20 }}
//       className="w-24 h-24 sm:w-32 sm:h-32 mx-auto mb-4"
//     >
//       <section.icon className="w-full h-full" style={{ color: logoColor }} />
//     </motion.div>

//     <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-black">
//       {section.title}
//     </h1>

//     <div className="space-y-6">
//       {section.items.map((item, index) => (
//         <InfoItem
//           key={index}
//           item={item}
//           logoColor={logoColor}
//           itemVariants={itemVariants}
//         />
//       ))}
//     </div>

//     <motion.div
//       className="mt-6 sm:mt-8 text-center"
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       transition={{ delay: 0.5, duration: 0.8 }}
//     >
//       <p className="text-xs sm:text-sm text-black mb-2">
//         {section.experienceText}
//       </p>
//       <p className="text-xs sm:text-sm text-black">
//         Nous avons hâte de vous servir!
//       </p>
//     </motion.div>
//   </motion.div>
// );

// const InfoItem = ({ item, logoColor, itemVariants }) => (
//   <motion.div
//     className="text-center"
//     whileHover={{ scale: 1.05 }}
//     transition={{ type: "spring", stiffness: 400, damping: 10 }}
//     variants={itemVariants}
//   >
//     <item.icon
//       className="mx-auto text-3xl sm:text-4xl mb-2"
//       style={{ color: logoColor }}
//     />
//     <p className="text-sm sm:text-base text-black">{item.title}</p>
//     <p className="font-semibold text-base sm:text-lg text-black">
//       {item.content}
//     </p>
//   </motion.div>
// );

// const CallButton = ({ phoneNumber }) => (
//   <a
//     href={`tel:${phoneNumber}`}
//     className="inline-flex items-center justify-center bg-[#e7c86e] text-black py-3 px-6 rounded-lg hover:bg-[#e7c96ecd] transition duration-300 ease-in-out shadow-md hover:shadow-lg text-lg"
//   >
//     <FaPhone className="mr-2" />
//     Appelez-nous: {phoneNumber}
//   </a>
// );
// SectionCard.propTypes = {
//   section: PropTypes.shape({
//     icon: PropTypes.elementType.isRequired,
//     title: PropTypes.string.isRequired,
//     items: PropTypes.array.isRequired,
//     experienceText: PropTypes.string.isRequired,
//   }).isRequired,
//   logoColor: PropTypes.string.isRequired,
//   itemVariants: PropTypes.object.isRequired,
// };

// InfoItem.propTypes = {
//   item: PropTypes.shape({
//     icon: PropTypes.elementType.isRequired,
//     title: PropTypes.string.isRequired,
//     content: PropTypes.string.isRequired,
//   }).isRequired,
//   logoColor: PropTypes.string.isRequired,
//   itemVariants: PropTypes.object.isRequired,
// };

// CallButton.propTypes = {
//   phoneNumber: PropTypes.string.isRequired,
// };

// export default Reservation;
import { useState, useEffect } from "react";
import { format, addDays, isPast } from "date-fns";
import {
  CalendarIcon,
  ClockIcon,
  UserGroupIcon,
  EnvelopeIcon,
  PhoneIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";
const Reservation = () => {
  // State for form data
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    partySize: 1,
    name: "",
    email: "",
    phone: "",
    specialRequests: "",
  });

  // State for available time slots
  const [availableTimes, setAvailableTimes] = useState([]);

  // State for form errors
  const [errors, setErrors] = useState({});

  // State for submission status
  const [isSubmitting, setIsSubmitting] = useState(false);

  // State for submission message (success or error)
  const [submitMessage, setSubmitMessage] = useState("");

  // Effect hook to fetch available times when date changes
  useEffect(() => {
    const fetchAvailableTimes = async () => {
      // Simulating API call to fetch available times
      await new Promise((resolve) => setTimeout(resolve, 500));
      const times = ["17:00", "18:00", "19:00", "20:00", "21:00"];
      setAvailableTimes(times);
    };

    if (formData.date) {
      fetchAvailableTimes();
    }
  }, [formData.date]);

  // Handler for input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // Form validation function
  const validateForm = () => {
    let newErrors = {};
    if (!formData.date) newErrors.date = "Date is required";
    if (isPast(new Date(formData.date)))
      newErrors.date = "Date must be in the future";
    if (!formData.time) newErrors.time = "Time is required";
    if (formData.partySize < 1 || formData.partySize > 10)
      newErrors.partySize = "Party size must be between 1 and 10";
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!/^\S+@\S+\.\S+$/.test(formData.email))
      newErrors.email = "Invalid email format";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      // Simulating API call to submit reservation
      await new Promise((resolve) => setTimeout(resolve, 1500));

      console.log("Reservation submitted:", formData);

      setSubmitMessage(
        "Reservation successful! We look forward to seeing you."
      );
      // Reset form after successful submission
      setFormData({
        date: "",
        time: "",
        partySize: 1,
        name: "",
        email: "",
        phone: "",
        specialRequests: "",
      });
    } catch (error) {
      console.error("Error submitting reservation:", error);
      setSubmitMessage("Failed to submit reservation. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Format the selected date for display
  const formattedDate = formData.date
    ? format(new Date(formData.date), "MMMM d, yyyy")
    : "No date selected";

  return (
    <div className="max-w-md mx-auto mt-10 p-8 bg-white rounded-xl shadow-2xl">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
        Make a Reservation
      </h2>

      {/* Display selected date */}
      <p className="mb-6 text-sm text-gray-600 flex items-center">
        <CalendarIcon className="h-5 w-5 mr-2 text-indigo-500" />
        {formattedDate}
      </p>

      {/* Display submission message */}
      {submitMessage && (
        <div
          className={`mb-6 p-4 rounded-md ${
            submitMessage.includes("successful")
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {submitMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Date Input */}
        <div>
          <label
            htmlFor="date"
            className="block text-sm font-medium text-gray-700"
          >
            Date
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <CalendarIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              min={format(addDays(new Date(), 1), "yyyy-MM-dd")}
              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
              required
            />
          </div>
          {errors.date && (
            <p className="mt-2 text-sm text-red-600">{errors.date}</p>
          )}
        </div>

        {/* Time Select */}
        <div>
          <label
            htmlFor="time"
            className="block text-sm font-medium text-gray-700"
          >
            Time
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <ClockIcon className="h-5 w-5 text-gray-400" />
            </div>
            <select
              id="time"
              name="time"
              value={formData.time}
              onChange={handleInputChange}
              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
              required
            >
              <option value="">Select a time</option>
              {availableTimes.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>
          {errors.time && (
            <p className="mt-2 text-sm text-red-600">{errors.time}</p>
          )}
        </div>

        {/* Party Size Input */}
        <div>
          <label
            htmlFor="partySize"
            className="block text-sm font-medium text-gray-700"
          >
            Party Size
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <UserGroupIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="number"
              id="partySize"
              name="partySize"
              min="1"
              max="10"
              value={formData.partySize}
              onChange={handleInputChange}
              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
              required
            />
          </div>
          {errors.partySize && (
            <p className="mt-2 text-sm text-red-600">{errors.partySize}</p>
          )}
        </div>

        {/* Name Input */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            required
          />
          {errors.name && (
            <p className="mt-2 text-sm text-red-600">{errors.name}</p>
          )}
        </div>

        {/* Email Input */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <EnvelopeIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
              required
            />
          </div>
          {errors.email && (
            <p className="mt-2 text-sm text-red-600">{errors.email}</p>
          )}
        </div>

        {/* Phone Input */}
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            Phone
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <PhoneIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
              required
            />
          </div>
          {errors.phone && (
            <p className="mt-2 text-sm text-red-600">{errors.phone}</p>
          )}
        </div>

        {/* Special Requests Textarea */}
        <div>
          <label
            htmlFor="specialRequests"
            className="block text-sm font-medium text-gray-700"
          >
            Special Requests
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 pt-3 flex items-start pointer-events-none">
              <PencilSquareIcon className="h-5 w-5 text-gray-400" />
            </div>
            <textarea
              id="specialRequests"
              name="specialRequests"
              rows="3"
              value={formData.specialRequests}
              onChange={handleInputChange}
              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
              placeholder="Any special requests or notes?"
            ></textarea>
          </div>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Submitting..." : "Make Reservation"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Reservation;
