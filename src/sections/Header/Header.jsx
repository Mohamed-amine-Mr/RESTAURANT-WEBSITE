import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { debounce } from "lodash";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = debounce(() => {
      setIsScrolled(window.scrollY > 50);
    }, 10);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    "ACCUEIL",
    "MENU",
    "RESERVATION",
    "HOTEL",
    "FITNESS & SPA",

    "CONTACT",
  ];

  const getRoute = (item) => {
    switch (item) {
      case "ACCUEIL":
        return "/";
      case "FITNESS & SPA":
        return "/Fitness";

      default:
        return `/${item.toLowerCase().replace(/ & /g, "-")}`;
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled || !isHomePage
          ? "bg-white shadow-md text-[#e7c86e]"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <motion.h1 className="text-3xl font-cinzel tracking-widest bg-clip-text text-transparent bg-gradient-to-r from-[#c59d5f] to-[#f1c40f]">
              AURUM
            </motion.h1>
          </Link>

          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <motion.div key={item} className="relative" whileHover="hover">
                <Link
                  to={getRoute(item)}
                  className="block py-2 text-[#e7c86e] hover:text-[#f1c40f] transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </Link>
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#f1c40f]"
                  initial={{ scaleX: 0 }}
                  variants={{
                    hover: { scaleX: 1 },
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>

          <motion.button
            className="md:hidden text-[#e7c86e] focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </motion.button>
        </div>
      </div>

      {/* Bottom border with smooth transition */}
      <div
        className={`h-[1px] w-full transition-all duration-300 ${
          isScrolled || !isHomePage ? "bg-transparent" : "bg-[#e7c86e]/30"
        }`}
      />

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white overflow-hidden"
          >
            <motion.div
              className="container mx-auto px-4 py-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, delay: 0.1 }}
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -20, opacity: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={getRoute(item)}
                    className="block py-2 text-[#bea55a] hover:text-[#bea55a8f] transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Header;
