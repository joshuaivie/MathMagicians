import React from 'react';
import NavBar from './NavBar';
import '../../styles/header.scss';

function Header() {
  return (
    <div className="header">
      <div className="logo">Math Magcians</div>
      <NavBar />
    </div>
  );
}

export default Header;
