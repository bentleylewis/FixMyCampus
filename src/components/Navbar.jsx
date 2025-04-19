import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-item">Home</NavLink>
      <NavLink to="/about" className="nav-item">About</NavLink>
      <NavLink to="/submit" className="nav-item">Submit Report</NavLink>
      <NavLink to="/reports" className="nav-item">View Reports</NavLink>
    </nav>
  );
}

export default Navbar;
