import { useEffect, useState } from "react";
import { MOVIES_OPTIONS } from "../utils/const";

const BackgroundVideo = ({ videoId }) => {
  const [trailerVideo, setTrailerVideo] = useState(null);
  const getTrailerVideo = async () => {
    const videoData = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        videoId +
        "/videos?language=en-US",
      MOVIES_OPTIONS
    );
    const json = await videoData.json();

    const filterVideo = json.results.filter(
      (video) => video.type === "Trailer"
    );
    setTrailerVideo(filterVideo[0].key);
  };

  useEffect(() => {
    getTrailerVideo();
  }, []);
  if (!trailerVideo) return;

  return (
    <div style={{ position: "absolute", width: "100vw", height: "100vh" }}>
      <iframe
        style={{ width: "100%", height: "100%" }}
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo +
          "?&autoplay=1&mute=1&showinfo=0&controls=0&autohide=0&showinfo=0&loop=0&rel=0"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; "
      ></iframe>
    </div>
  );
};

export default BackgroundVideo;
