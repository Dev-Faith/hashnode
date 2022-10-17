import React from 'react'
import { AiOutlineStar } from "react-icons/ai";
import { VscWand } from "react-icons/vsc";
import { MdOutlineViewQuilt } from "react-icons/md";
import story01  from "../../assets/story01.jpg";
import SVG from "../../assets/dao.jpeg";
import { TiStarFullOutline } from "react-icons/ti";
import { HiOutlineBookOpen } from "react-icons/hi";
import { FiBox } from "react-icons/fi";
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
        <div className="body-content">
          <div className="main-top">
            <img src={story01} alt="dummy" />
            <h4>Krystal Lee</h4> <p>for</p>
            <div className="spec-img">
              <img src={SVG} alt="dummy" /> 
            </div>
            <h4>Developer DAO</h4>
          </div>
          <div className="featured-tag">
            <TiStarFullOutline className ="featured-star"/>
            <p>FEATURED</p>
          </div>
          <div className="message-container">
            <h2 className="heading">
              How to Build an NFT Viewer dApp using Ankr.js to fetch NFTs owned
              by wallet Address
            </h2>
            <div className="read-time">
              <HiOutlineBookOpen className="book"/>
              <p>8 min read</p>
            </div>
            <p className="message">
            What Are the Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Unde illum officia, perspiciatis veniam eaque ducimus.
            </p>
          </div>
        </div>
        <div className="hoverer">
          <FiBox/>
        </div>
      </div>
    </div>
  );
}

export default Body;
