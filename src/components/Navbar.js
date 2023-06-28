import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/cart">My Cart</NavLink>
    </div>
  );
};

export default Navbar;