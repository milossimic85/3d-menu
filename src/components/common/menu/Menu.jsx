import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./menu.scss";
import { FaHome, FaUser } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const Menu = ({ active, setActive }) => {
  const location = useLocation();

  useEffect(() => {
    setActive(false);
  }, [location]);

  return (
    <ul className={`menu ${active ? "active" : ""}`}>
      <li className="n3">
        <Link to="/">
          <FaHome />
          &nbsp; Home
        </Link>
      </li>
      <li className="n2">
        <Link to="/service">
          <span>
            <FaUser />
          </span>
          &nbsp; About
        </Link>
      </li>
      <li className="n1">
        <Link to="/contact">
          <FiMail />
          &nbsp; Contact
        </Link>
      </li>
    </ul>
  );
};

export default Menu;
