import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar-custom">
      <div className="navbar-inner">

        <Link className="brand" to="/">
          <span className="brand-icon">🏠</span>
          Real Estate
        </Link>

        <div className="nav-actions">
          <Link to="/" className="nav-link-btn">
            Home
          </Link>
          <Link to="/add" className="nav-link-btn primary">
            + Add property
          </Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;