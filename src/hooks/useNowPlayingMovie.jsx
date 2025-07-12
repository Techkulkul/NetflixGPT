import { useDispatch } from "react-redux";
import { MOVIES_OPTIONS } from "../utils/const";
import { addNowPlayingMovie } from "../utils/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMovie = () => {
  const dispatch = useDispatch();
  const getNowPlayingList = async () => {
    const movieList = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      MOVIES_OPTIONS
    );
    const json = await movieList.json();
    dispatch(addNowPlayingMovie(json.results));
  };

  useEffect(() => {
    getNowPlayingList();
  }, []);
};

export default useNowPlayingMovie;
