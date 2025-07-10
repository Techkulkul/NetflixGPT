import { useDispatch } from "react-redux";
import { MOVIES_OPTIONS } from "../utils/const";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTopRated = () => {
  const dispatch = useDispatch();
  const getTopRatedMovies = async () => {
    const topRatedMovieList = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      MOVIES_OPTIONS
    );
    const json = await topRatedMovieList.json();
    dispatch(addTopRatedMovies(json.results));
  };
  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useTopRated;
