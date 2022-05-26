import React from "react";
import "./VideoItem.css";

const VideoItem = ({ videoMy, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(videoMy)} className="video-item item">
      <img
        className="ui image"
        src={videoMy.snippet.thumbnails.medium.url}
        alt={videoMy.snippet.title}
      />
      <div className="content">
        <div className="header">{videoMy.snippet.title}</div>
      </div>
    </div>
  );
};
export default VideoItem;
