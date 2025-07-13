import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import BackgroundVideo from "./BackgroundVideo";
import useNowPlayingMovie from "../hooks/useNowPlayingMovie";

const MainContainer = () => {
  const movieList = useSelector((store) => store.movies.nowPlayingMovie);

  useNowPlayingMovie();

  if (!movieList) return;

  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
      }}
    >
      <VideoTitle title={movieList[0].title} overview={movieList[0].overview} />
      <BackgroundVideo videoId={movieList[0].id} />

      {/* Netflix-style gradient overlay at bottom */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "200px",
          background:
            "linear-gradient(to top, rgb(0,0,0,1) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0) 100%)",
          zIndex: 10,
        }}
      ></div>
    </div>
  );
};

export default MainContainer;
