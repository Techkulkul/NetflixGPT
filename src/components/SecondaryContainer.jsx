import MovieList from "./MovieList";
import { useSelector } from "react-redux";
import usePopular from "../hooks/usePopular";
import useTopRated from "../hooks/useTopRated";
import useUpcoming from "../hooks/useUpcoming";

const SecondaryContainer = () => {
  usePopular();
  useTopRated();
  useUpcoming();
  const nowPlayingmovie = useSelector((store) => store.movies.nowPlayingMovie);
  const popularMovies = useSelector((store) => store.movies.popularMovies);
  const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);
  const upComingMovies = useSelector((store) => store.movies.upcomingMovies);

  if (nowPlayingmovie === null) return;

  return (
    <div
      style={{
        position: "relative",
        backgroundColor: "#141414", // Netflix dark background
        width: "100vw",
        minHeight: "100vh",
        paddingTop: "40px",
        paddingBottom: "60px",
        zIndex: 30,
      }}
    >
      <div
        style={{
          paddingLeft: "60px",
          paddingRight: "60px",
          marginTop: "-200px",
        }}
      >
        <MovieList title={"New On Netflix"} videoData={nowPlayingmovie} />
        <MovieList title={"Top rated movies"} videoData={topRatedMovies} />
        <MovieList title={"Popular"} videoData={popularMovies} />
        <MovieList title={"Upcoming"} videoData={upComingMovies} />
        <MovieList title={"New On Netflix"} videoData={nowPlayingmovie} />
        <MovieList title={"New On Netflix"} videoData={nowPlayingmovie} />
        <MovieList title={"New On Netflix"} videoData={nowPlayingmovie} />
        <MovieList title={"New On Netflix"} videoData={nowPlayingmovie} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
