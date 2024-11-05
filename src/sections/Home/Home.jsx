import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import restauImg from "./restau.jpg";
import logo from "./logo-removebg.png";
import backgroundVideo from "./video.mp4"; // Ensure this path is correct
import { About, Gallery, Contact } from "../sections";
import { Link } from "react-router-dom";

const Home = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 250]);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    document.body.style.overflowX = "hidden";
    return () => {
      document.body.style.overflowX = "auto";
    };
  }, []);

  const handleVideoLoad = () => {
    console.log("Video loaded successfully");
    setVideoLoaded(true);
  };

  const handleVideoError = (error) => {
    console.error("Error loading video:", error);
    setVideoError(true);
  };

  return (
    <>
      <motion.section
        id="accueil"
        className="relative h-screen overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        {!videoError && (
          <motion.video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            onLoadedData={handleVideoLoad}
            onError={handleVideoError}
            style={{ y }}
          >
            <source src={backgroundVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </motion.video>
        )}
        {(!videoLoaded || videoError) && (
          <motion.div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${restauImg})`,
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              y,
            }}
          />
        )}
        <div className="absolute inset-0 bg-black opacity-60" />
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="bg-black/30 backdrop-blur-sm py-8 sm:py-12 px-6 sm:px-16 rounded-lg max-w-3xl w-full mx-auto my-auto
              landscape:mt-16 landscape:mb-4
              portrait:my-auto
              iphone678-landscape:mt-24
              iphone678plus-landscape:mt-20
              iphonex-landscape:mt-16"
          >
            <motion.img
              src={logo}
              alt="Mariposa Logo"
              className="w-24 sm:w-28 md:w-32 lg:w-40 mx-auto 
             landscape:w-60 h-32 
             portrait:w-60"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: 0.2,
              }}
            />

            <motion.div
              className="w-16 sm:w-20 md:w-24 lg:w-24 h-1 bg-[#e7c86e] mx-auto my-4 sm:my-6
                landscape:w-16 landscape:my-3
                portrait:w-20 portrait:my-6"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 2 }}
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5, duration: 0.5 }}
            >
              <Link
                to="/menu"
                className="inline-flex font-cinzel items-center px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 text-sm sm:text-base md:text-lg font-medium text-white border-2 border-[#e7c86e] rounded-none hover:bg-[#e7c86e] hover:text-black transition-all duration-300 ease-in-out uppercase tracking-wider
                  landscape:text-sm landscape:px-4 landscape:py-2
                  portrait:text-base portrait:px-6 portrait:py-3"
              >
                Découvrez notre menu
                <motion.svg
                  className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 ml-2 sm:ml-3
                    landscape:w-4 landscape:h-4
                    portrait:w-5 portrait:h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  initial={{ x: -5, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 3, duration: 0.5 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </motion.svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <About />
      <Gallery />

      <Contact />
    </>
  );
};

export default Home;
