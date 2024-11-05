import { useSpring, animated } from "react-spring";
import { Phone, Clock, DollarSign, Users } from "lucide-react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useState } from "react";
const Fitness = () => {
  const fadeIn = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { duration: 1000 },
  });

  return (
    <div className="min-h-screen bg-white text-gray-800 px-8 pt-36 lg:pt-32 ">
      <animated.div style={fadeIn}>
        <header className="text-center mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight text-[#bc906b]">
            AURUM
          </h1>
          <h2 className="text-3xl font-bold mt-2 text-gray-600">FITNESS</h2>
        </header>

        <main className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold mb-8 text-center text-[#bc906b]">
            Tarif & Horaires
          </h3>
          <p className="text-xl lg:text-lg text-gray-600 my-4 text-center hover:text-[#bc906b] w-fit m-auto ">
            <Link to="tel:+212523564851">
              <Phone className="inline mr-2 text-[rgb(188,144,107)] text-nowrap " />
              +212 00 00 00 00
            </Link>
          </p>

          <div className="space-y-12">
            <Section
              title="Salle de Sport"
              icon={<DollarSign />}
              description="Cardio Musculation / Cross fit / Cours Collectifs"
            >
              <Table
                headers={["Pack", "1 Mois", "4 Mois", "8 Mois", "1 AN"]}
                data={[
                  [
                    "PACK ADULTES",
                    "250 dhs",
                    "900 dhs",
                    "1600 dhs",
                    "2300 dhs",
                  ],
                  ["PACK FAMILLE (Un Couple)", "-", "-", "-", "3600 dhs"],
                ]}
              />
            </Section>

            <Section
              title="Piscine"
              icon={<Users />}
              description="Aqua-Gym / Aqua Bike / Natation libre / Cours de natation"
            >
              <Table
                headers={["Pack", "1 Mois", "4 Mois", "8 Mois", "1 AN"]}
                data={[
                  [
                    "PACK ADULTES",
                    "300 dhs",
                    "950 dhs",
                    "1700 dhs",
                    "2500 dhs",
                  ],
                  [
                    "PACK ENFANTS",
                    "250 dhs",
                    "800 dhs",
                    "1450 dhs",
                    "1800 dhs",
                  ],
                ]}
              />
            </Section>

            <Section title="Piscine & Salle de sport" icon={<DollarSign />}>
              <Table
                headers={["Pack", "1 Mois", "4 Mois", "8 Mois", "1 AN"]}
                data={[
                  [
                    "PACK ADULTES",
                    "500 dhs",
                    "1700 dhs",
                    "3000 dhs",
                    "4000 dhs",
                  ],
                  [
                    "PACK FAMILLE (Un Couple + 2 Enfants)",
                    "-",
                    "-",
                    "-",
                    "6500 dhs",
                  ],
                ]}
              />
            </Section>

            <Section
              title="Frais d'Inscriptions & D'Assurance"
              icon={<DollarSign />}
            >
              <Table
                headers={["", "1 Mois", "4 Mois", "8 Mois", "1 AN"]}
                data={[
                  ["ADULTES", "100 dhs", "100 dhs", "100 dhs", "100 dhs"],
                  ["ENFANTS", "100 dhs", "100 dhs", "100 dhs", "100 dhs"],
                ]}
              />
            </Section>

            <Section title="Horaires d'ouvertures du Club" icon={<Clock />}>
              <Table
                headers={["Jour", "Horaires"]}
                data={[
                  ["Lundi / Mercredi", "De 08h00 à 20h00"],
                  ["Mardi (Piscine)", "De 18h30 à 22h00"],
                  ["Mercredi (Piscine)", "De 18h30 à 22h00 (Dames)"],
                  ["Jeudi / Dimanche", "De 08h00 à 20h00"],
                  ["Vendredi", "De 15h00 à 20h00"],
                  ["Samedi", "De 09h00 à 23h00"],
                ]}
              />
            </Section>
          </div>

          <footer className="mt-16 text-center"></footer>
        </main>
      </animated.div>
    </div>
  );
};

const Section = ({ title, description, children, icon }) => {
  const [isHovered, setIsHovered] = useState(false);
  const spring = useSpring({
    transform: isHovered ? "scale(1.02)" : "scale(1)",
    boxShadow: isHovered
      ? "0 10px 30px -5px rgba(0, 0, 0, 0.1)"
      : "0 0 0 0 rgba(0, 0, 0, 0)",
  });
  Section.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    children: PropTypes.node,
    icon: PropTypes.element,
  };
  return (
    <animated.div
      style={spring}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="border border-[#bc906b] rounded-lg p-6"
    >
      <h2 className="text-2xl font-semibold mb-2 text-[#bc906b] flex items-center">
        {icon && <span className="mr-2">{icon}</span>}
        {title}
      </h2>
      {description && <p className="mb-4 text-gray-600">{description}</p>}
      {children}
    </animated.div>
  );
};

const Table = ({ headers, data }) => (
  <div className="overflow-x-auto">
    <table className="w-full">
      <thead>
        <tr className="border-b-2 border-[#bc906b]">
          {headers.map((header, index) => (
            <th key={index} className="p-2 text-left text-[#bc906b]">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr
            key={rowIndex}
            className="border-b border-gray-200 hover:bg-gray-50"
          >
            {row.map((cell, cellIndex) => (
              <td key={cellIndex} className="p-2">
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
Table.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,
  data: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.any)).isRequired,
};
const ContactInfo = ({ icon, text }) => (
  <div className="flex items-center justify-center">
    <span className="text-[#bc906b] mr-2">{icon}</span>
    <span>{text}</span>
  </div>
);
ContactInfo.propTypes = {
  icon: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
};
export default Fitness;
