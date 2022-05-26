import React from "react";
import VideoItem from "./VideoItem";

// const VideoList = (props) => {
//   return <div>{props.videos.length}</div>;
// };//VAR 1

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        onVideoSelect={onVideoSelect}
        videoMy={video}
      />
    );
  });
  return <div className="ui relaxed divided list">{renderedList}</div>;
}; //VAR 2 ES2015

export default VideoList;
