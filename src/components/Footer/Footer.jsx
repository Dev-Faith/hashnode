import React from 'react';
import { BsNewspaper, BsSearch } from "react-icons/bs";
import { FaPen } from "react-icons/fa";
import { RiBookMarkLine } from "react-icons/ri";
import { IoMdNotificationsOutline } from "react-icons/io";
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <BsNewspaper className="active"/>
      <BsSearch />
      <FaPen className="center" />
      <RiBookMarkLine />
      <IoMdNotificationsOutline />
    </footer>
  );
}

export default Footer;
