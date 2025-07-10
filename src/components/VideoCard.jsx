import React from "react";

const VideoCard = ({ poster_path }) => {
  //   if (!nowPlayingmovies) return;
  //   console.log(nowPlayingmovies);

  return (
    <div style={{ display: "flex", margin: "18px" }}>
      <img
        style={{
          width: "11vw",
          transition: "transform 0.3s ease",
          cursor: "pointer",
          borderRadius: "4px",
        }}
        alt="movie-img"
        src={"https://image.tmdb.org/t/p/w400/" + poster_path}
        onMouseEnter={(e) => (e.target.style.transform = "scale(1.4)")}
        onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
      />
    </div>
  );
};

export default VideoCard;
