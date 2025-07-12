import React from "react";
import VideoCard from "./VideoCard";

const MovieList = ({ title, videoData }) => {
  return (
    <div
      style={{
        display: "flex",
        overflow: "scroll",
        flexDirection: "column",
        scrollbarColor: "none",
      }}
    >
      <h1 style={{ fontSize: "30px", color: "white", marginBottom: "10px" }}>
        {title}
      </h1>
      {videoData && (
        <div style={{ display: "flex" }}>
          {videoData.map((video, index) => (
            <VideoCard key={index} poster_path={video.poster_path} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MovieList;
