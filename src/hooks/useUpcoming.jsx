import { useDispatch } from "react-redux";
import { MOVIES_OPTIONS } from "../utils/const";
import { addUpComingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useUpcoming = () => {
  const dispatch = useDispatch();
  const getUpcomingMovies = async () => {
    const upComingMoviesList = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      MOVIES_OPTIONS
    );
    const json = await upComingMoviesList.json();
    dispatch(addUpComingMovies(json.results));
  };
  useEffect(() => {
    getUpcomingMovies();
  }, []);
};

export default useUpcoming;
