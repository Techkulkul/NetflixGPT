import { useDispatch } from "react-redux";
import { MOVIES_OPTIONS } from "../utils/const";
import { addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const usePopular = () => {
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    const popularMovieList = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      MOVIES_OPTIONS
    );
    const json = await popularMovieList.json();
    dispatch(addPopularMovies(json.results));
  };
  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopular;
