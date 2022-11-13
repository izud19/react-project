import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/anya.png";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand bg-light shadow">
        <div className="container">
          <ul className="nav">
            <img src={logo} alt="logo anya" style={{ height: "40px" }} />
            <li>
              <Link to="/" className="nav-link">
                Beranda
              </Link>
            </li>
            <li>
              <Link to="/manajemen-buku" className="nav-link">
                Manajemen Buku
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
