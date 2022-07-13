import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/nav-bar.scss';

function NavBar() {
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <Link to="/MathMagicians">Home</Link>
        </li>
        <li>
          <Link to="/calculator">Calculator</Link>
        </li>
        <li>
          <Link to="/quote">Quote</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
