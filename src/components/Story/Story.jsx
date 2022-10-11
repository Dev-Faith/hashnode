import React from 'react';
import { story01, story02, story03, story04, story05 } from "./imports";
import { TiStarFullOutline } from "react-icons/ti";
import './story.css';

const Story = () => {
  return (
    <div className="just">
      <div className="story-container">
        <div className="story-back">
          <div className="story story-active">
            <img src={story01} alt="story one" />
          </div>
        </div>
        <div className="story-back-inactive">
          <div className="story">
            <img src={story02} alt="story one" />
            <div className="wahala">
              <TiStarFullOutline className="star" />
            </div>
          </div>
        </div>
        <div className="story-back-inactive">
          <div className="story">
            <img src={story03} alt="story one" />
            <div className="wahala">
              <TiStarFullOutline className="star" />
            </div>
          </div>
        </div>
        <div className="story-back-inactive">
          <div className="story">
            <img src={story04} alt="story one" />
            <div className="wahala">
              <TiStarFullOutline className="star" />
            </div>
          </div>
        </div>
        <div className="story-back-inactive">
          <div className="story">
            <img src={story05} alt="story one" />
            <div className="wahala">
              <TiStarFullOutline className="star" />
            </div>
          </div>
        </div>
      </div>
      <div className="division">

      </div>
    </div>
  );
}

export default Story;


// ;