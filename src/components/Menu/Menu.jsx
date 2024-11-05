import { useState } from "react";
import { motion } from "framer-motion";
import chef from "./2_SLIDER-7-400x400.jpg";
import {
  FaCoffee,
  FaBeer,
  FaIceCream,
  FaLeaf,
  FaCocktail,
  FaGlassWhiskey,
  FaBreadSlice,
} from "react-icons/fa";
import { GiNoodles, GiCook, GiCakeSlice, GiChocolateBar } from "react-icons/gi";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const menuItems = [
    {
      category: "Boissons Chaudes",
      icon: <FaCoffee />,

      items: [
        { name: "EXPRESSO+EAU", price: "09 MAD" },
        { name: "CAFÉ CRÈME+EAU", price: "11 MAD" },
        { name: "AMÉRICAIN+EAU", price: "12 MAD" },
        { name: "MACCHIATO+EAU (CARAMEL,VANILLE,NOISETTE)", price: "14 MAD" },
        { name: "MOITIÉ MOITIÉ+EAU", price: "11 MAD" },
        { name: "LAIT SEPARÉ+EAU", price: "11 MAD" },
        { name: "CAFÉ CASSÉ+EAU", price: "11 MAD" },
        { name: "CAPPUCCINO+EAU", price: "13 MAD" },
        { name: "CAPPUCCINO VIENNOIS", price: "15 MAD" },
        { name: "MOCACCINO", price: "15 MAD" },
        { name: "LAIT AU CHOCOLAT+EAU", price: "15 MAD" },
        { name: "CHOCOLAT FONDU", price: "18 MAD" },
        { name: "CHOCOLAT VIENNOIS", price: "20 MAD" },
        { name: "NESPRESSO CAPSULE+EAU", price: "12 MAD" },
        { name: "THÉ MAROCAIN+EAU", price: "11 MAD" },
        { name: "THÉ NOIR+EAU", price: "11 MAD" },
        { name: "INFUSION+EAU", price: "11 MAD" },
        { name: "LAIT AROMATISÉ+EAU", price: "12 MAD" },
      ],
    },
    {
      category: "Brewages",
      icon: <FaBeer />,

      items: [
        { name: "OULMÈS MINI 25 CL", price: "09 MAD" },
        { name: "OULMÈS AROMATISÉ 25 CL", price: "12 MAD" },
        { name: "SODA CANETTE", price: "12 MAD" },
        { name: "EAU 33 CL", price: "03 MAD" },
        { name: "EAU 50 CL", price: "07 MAD" },
        { name: "RED BULL", price: "25 MAD" },
        { name: "ICE TEA", price: "12 MAD" },
      ],
    },
    {
      category: "Boissons Fraîches",
      icon: <FaIceCream />,

      items: [
        { name: "JUS D'ORANGE", price: "15 MAD" },
        { name: "JUS DE CITRON", price: "15 MAD" },
        { name: "JUS DE GINGEMBRE", price: "15 MAD" },
        { name: "JUS CITRON & GINGEMBRE", price: "15 MAD" },
        { name: "JUS DE BANANE", price: "15 MAD" },
        { name: "JUS DE POMME", price: "15 MAD" },
        { name: "AVOCAT", price: "18 MAD" },
        { name: "MANGUE", price: "18 MAD" },
        { name: "ANANAS", price: "18 MAD" },
        { name: "FRAISE", price: "18 MAD" },
        { name: "ANACHÉ", price: "20 MAD" },
        { name: "JUS FRUIT DE SAISON", price: "20 MAD" },
        { name: "JUS BARISTA", price: "25 MAD" },
      ],
    },
    {
      category: "Détox",
      icon: <FaLeaf />,

      items: [
        { name: "JUS DE CAROTTE", price: "16 MAD" },
        { name: "JUS DE BETTERAVE", price: "16 MAD" },
        { name: "JUS DE CONCOMBRE", price: "16 MAD" },
      ],
    },
    {
      category: "Crêpes Sucrée",
      icon: <GiChocolateBar />,

      items: [
        { name: "CRÊPE NUTELLA (2 PIÈCES)", price: "18 MAD" },
        { name: "CRÊPE MIEL & AMANDE (2 PIÈCES)", price: "20 MAD" },
        { name: "CRÊPE NUTELLA & BANANE (2 PIÈCES)", price: "20 MAD" },
        { name: "CRÊPE FRUIT & NUTELLA (2 PIÈCES)", price: "22 MAD" },
      ],
    },
    {
      category: "Crêpes Salée",
      icon: <GiChocolateBar />,

      items: [
        { name: "CRÊPE AU FROMAGE (2 PIÈCES)", price: "19 MAD" },
        { name: "CRÊPE AU CHAMPIGNON (2 PIÈCES)", price: "24 MAD" },
        { name: "CRÊPE AU FROMAGE & DINDE FUMÉE (2 PIÈCES)", price: "23 MAD" },
      ],
    },
    {
      category: "Omelettes & Toasts",
      icon: <GiCook />,

      items: [
        { name: "OEUFS AU PLAT + PAIN", price: "10 MAD" },
        { name: "OMELETTE VÉGÉTARIENNE + PAIN", price: "12 MAD" },
        { name: "OMELETTE KHALIJA+PAIN", price: "19 MAD" },
      ],
    },
    {
      category: "Toasts",
      icon: <FaBreadSlice />,

      items: [
        { name: "TOAST AU FROMAGE", price: "08 MAD" },
        { name: "TOAST AU OEUF & FROMAGE", price: "12 MAD" },
        { name: "TOAST AU FILET DE DINDE FUMÉE", price: "14 MAD" },
      ],
    },
    {
      category: "Mojito",
      icon: <FaCocktail />,
      items: [
        { name: "MOJITO CLASSIC", price: "17 MAD" },
        { name: "MOJITO FRAISE", price: "19 MAD" },
        { name: "MOJITO MANGUE", price: "19 MAD" },
        { name: "MOJITO FRUIT DE PASSION", price: "19 MAD" },
        { name: "COCKTAIL ENERGIA", price: "20 MAD" },
      ],
    },
    {
      category: "Milkshakes & Frappucino",
      icon: <FaGlassWhiskey />,

      items: [
        { name: "MILKSHAKES VANILLE", price: "22 MAD" },
        { name: "MILKSHAKES FRAISE", price: "22 MAD" },
        { name: "MILKSHAKES CHOCOLAT", price: "22 MAD" },
        { name: "MILKSHAKES KITCAT", price: "22 MAD" },
        { name: "MILKSHAKES OREO", price: "22 MAD" },
        { name: "MILKSHAKES KINDER", price: "22 MAD" },
        { name: "MILKSHAKES MANGUE", price: "22 MAD" },
        { name: "MILKSHAKES BLUE BERRY", price: "22 MAD" },
        { name: "MILKSHAKES TROPICAL", price: "22 MAD" },
        { name: "FRAPPÉ CARAMEL", price: "25 MAD" },
        { name: "FRAPPÉ VANILLE", price: "25 MAD" },
        { name: "FRAPPÉ CHOCOLAT", price: "25 MAD" },
        { name: "FRAPPÉ MIXTE XL", price: "30 MAD" },
      ],
    },
    {
      category: "Formules",
      icon: <GiNoodles />,

      items: [
        { name: "ASSORTIMENT BRIOUATE (CREVETTE, POULET)", price: "24 MAD" },
        { name: "BRIOUATE+HARIRA+DATTES", price: "32 MAD" },
        { name: "CRÊPES (2 PIÈCES 20 CM)", price: "24 MAD" },
        { name: "AU CONFITURES AV BOISSON CHAUDE", price: "24 MAD" },
        { name: "CUPCAKE + JUS (ORANGE,BANANE,POMME)", price: "19 MAD" },
        { name: "HARIRA+DATTES", price: "16 MAD" },
        { name: "SOUPE MAISON", price: "10 MAD" },
      ],
    },
    {
      category: "Dessert",
      icon: <GiCakeSlice />,
      items: [
        { name: "PÂTISSERIE MINI AU CHOIX", price: "12 MAD" },
        { name: "SALADE FRUITS", price: "15 MAD" },
        { name: "DESSERT DE LA MAISON", price: "17 MAD" },
      ],
    },
  ];
  return (
    <div className="menu-container relative text-[#232323] bg-white min-h-screen font-serif">
      <div className="absolute inset-0 bg-[#f8f4f1] opacity-50 z-0"></div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-2/5 mb-12 lg:mb-0"
          >
            <img
              src={chef}
              alt="Chef"
              className="w-full h-auto object-cover object-center rounded-2xl shadow-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full lg:w-1/2"
          >
            <h1 className="text-center lg:text-start text-5xl lg:text-7xl font-extrabold text-[#bc906b] mb-6 leading-tight">
              Notre Menu
            </h1>
            <p className="text-xl text-gray-700 mb-10 leading-relaxed text-center lg:text-start">
              Découvrez notre sélection de plats exquis et de boissons
              rafraîchissantes, préparés avec passion par notre chef.
            </p>

            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              {menuItems.map((category, index) => (
                <motion.button
                  key={index}
                  className={`flex  items-center px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 shadow-md ${
                    activeCategory === category.category
                      ? "bg-[#bc906b] text-white"
                      : "bg-white text-[#bc906b] border-2 border-[#bc906b] hover:bg-[#bc906b] hover:text-white"
                  }`}
                  onClick={() => setActiveCategory(category.category)}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="mr-2 text-lg text-center">
                    {category.icon}
                  </span>
                  {category.category}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 "
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          {menuItems
            .filter(
              (category) =>
                !activeCategory || category.category === activeCategory
            )
            .map((category, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  visible: { y: 0, opacity: 1 },
                }}
              >
                <div className="bg-[#bc906b] py-4 px-6">
                  <h2 className="text-2xl font-bold text-white flex items-center">
                    <span className="mr-3 text-3xl">{category.icon}</span>
                    {category.category}
                  </h2>
                </div>
                <div className="py-6 space-y-4">
                  {category.items.map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex justify-between items-center py-3 border-b border-gray-200 last:border-b-0"
                      whileHover={{ scale: 1.02 }}
                    >
                      <span className="text-lg font-medium text-gray-800 pl-2">
                        {item.name}
                      </span>
                      <span className="text-base font-semibold bg-[#bc906b] text-white px-4 py-1 rounded-full text-center text-nowrap mr-1">
                        {item.price}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Menu;
