import PropTypes from "prop-types";
import "./NavLinks.css";

const NavLink = ({ href, children }) => {
  return (
    <a
      href={href}
      className="text-[#c6a84b] hover:text-[#ffcc00] transition-colors duration-300 font-catamaran"
    >
      {children}
    </a>
  );
};

NavLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default NavLink;
