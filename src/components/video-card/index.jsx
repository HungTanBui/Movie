import React from "react";
import "./index.scss";
import { MdPauseCircleOutline } from "react-icons/md";

function VideoCard({ id, name, url }) {
  return (
    <div className="video-card">
      <a href={url} target="_blank">
        <div className="video-card__thumbnail">
          <img
            className="video-card__thumbnail--image"
            src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`}
            alt=""
          />
          <span className="video-card__thumbnail--icon">
            <MdPauseCircleOutline />
          </span>
        </div>

        <p className="video-card__name">{name}</p>
      </a>
    </div>
  );
}

export default VideoCard;
