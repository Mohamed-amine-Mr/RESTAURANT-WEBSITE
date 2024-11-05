import { FaFacebookF, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" text-white bg-black py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-6">
          <h2 className="text-[#e7c86e] font-cinzel bg-clip-text bg-gradient-to-r from-[#c59d5f] to-[#f1c40f] text-2xl sm:text-3xl font-light tracking-widest mb-1">
            AURUM
          </h2>
        </div>

        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="https://www.facebook.com/"
            className="text-[#e7c86e] hover:text-white transition duration-300"
            target="_blank"
          >
            <FaFacebookF size={24} />
          </a>
          <a
            href="https://www.instagram.com/"
            className="text-[#e7c86e] hover:text-white transition duration-300"
            target="_blank"
          >
            <FaInstagram size={24} />
          </a>
        </div>

        <div className="flex justify-center items-center mb-6">
          <FaMapMarkerAlt size={20} className="mr-2 text-white" />
          <p className="text-white">AURUM R000?, Khouribga</p>
        </div>

        <div className="text-center text-sm">
          <p>&copy; {new Date().getFullYear()} AURUM. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
