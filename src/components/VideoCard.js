// VideoCard.js
import React from 'react';
import Share from './Share';


const VideoCard = ({ videoSrc, title, date, className }) => {
  return (
    <div className={`carousel-item ${className}`}>
      <div className="card video-card">
        <div className="img-wrapper">
          <video src={videoSrc} controls className="d-block w-100" />
        </div>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text"><strong>Date</strong>: {date}</p>
          <Share
            description={`I am sharing this interesting event happened !! Check out the details and join us here:`}
          />
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
