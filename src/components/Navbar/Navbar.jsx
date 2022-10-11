import React, { useState } from 'react';
import { BiMenuAltRight, BiMoon } from 'react-icons/bi';
import { SiHashnode } from "react-icons/si";
import { RiCloseLine, RiMenuLine } from "react-icons/ri";
import { Profile }  from './imports';

import './navbar.css';

const Menu = () => (
  <>
  <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#blog">blog</a>
          </li>
          <li>
            <a href="#office">office</a>
          </li>
          <li>
            <a href="#about">about</a>
    </li>
    </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(true);

  return (
    <div className="just">
      <div className="navbar">
        <div className="nav-container">
          <div className="nav-container-left">
            <div className="menu-icon">
              {toggleMenu ? (
                <RiMenuLine onClick={() => setToggleMenu(false)} />
              ) : (
                <RiCloseLine onClick={() => setToggleMenu(true)} />
              )}
              {!toggleMenu && (
                <div className="menu">
                  <Menu />
                </div>
              )}
            </div>
            <div className="logo">
              <div>
                <SiHashnode />
              </div>
              <h1>hashnode</h1>
            </div>
          </div>
          <div className="nav-container-right">
            <div className="theme">
              <BiMoon />
            </div>
            <div className="profile-image">
              <img src={Profile} alt="profile" />
            </div>
            <div className="nav-items">
              <Menu />
            </div>
            {/* <div className="menu-icon">
            {toggleMenu ? (
              <BiMenuAltRight onClick={() => setToggleMenu(false)} />
            ) : (
              <RiCloseLine onClick={() => setToggleMenu(true)} />
            )}
            {!toggleMenu && (
              <div className="menu">
                <Menu />
              </div>
            )}
          </div> */}
          </div>
        </div>
      </div>
      <div className="division">
        
      </div>
    </div>
  );
}

export default Navbar;
