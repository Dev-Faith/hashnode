import React from 'react'
import { AiOutlineStar } from "react-icons/ai";
import { VscWand } from "react-icons/vsc";
import { MdOutlineViewQuilt } from "react-icons/md";
import './body.css';
const Body = () => {
  return (
    <div className="just">
      <div className="body-container">
        <div className="body-header">
          <div className="body-header-personalised">
            <VscWand />
            <h3>Personalised</h3>
          </div>
          <div className="body-header-featured">
            <AiOutlineStar />
            <h3>Featured</h3>
          </div>
          <div className="body-header-view">
            <MdOutlineViewQuilt />
          </div>
        </div>
        <div className="body-content"></div>
      </div>
    </div>
  );
}

export default Body;
