import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import ai from "../utils/geminiapi";
import { MOVIES_OPTIONS } from "../utils/const";
import MovieList from "./MovieList";
import { addSearchMovieResult } from "../utils/gptSlice";

const GptSearchPage = () => {
  const searchQuery = useRef(null);
  const dispatch = useDispatch();
  const searchMovie = useSelector((store) => store.gpt.searchMovie);
  const searchMovieResult = useSelector((store) => store.gpt.searchMovieResult);

  const getSearchMovieData = async (movieName) => {
    const movieData = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movieName +
        "&include_adult=true&language=en-US&page=1",
      MOVIES_OPTIONS
    );
    const json = await movieData.json();
    return json.results;
  };

  const handleSearchButton = async () => {
    const gptQuery =
      " You are a movie recommendation AI for a Netflix-like platform.Respond ONLY array of strings, where each string is a movie title. Do not include any other text, explanations, or formatting.Example input: Today I am feeling low, suggest some comforting movies. Example output: [The Shawshank Redemption, Forrest Gump, Amelie, Paddington 2, Chef].Now, for the user's input:" +
      searchQuery.current.value;

    async function main() {
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: gptQuery,
        config: {
          thinkingConfig: {
            thinkingBudget: 0,
            // Turn off thinking:
            // thinkingBudget: 0
            // Turn on dynamic thinking:
            // thinkingBudget: -1
          },
        },
      });
      const searchResult = response.text;
      const splitData = searchResult.split(",");

      const data = splitData.map((video) => getSearchMovieData(video));
      const jsonData = await Promise.all(data);
      dispatch(
        addSearchMovieResult({
          search: splitData,
          value: jsonData,
        })
      );
    }

    main();
  };

  return (
    <div
      style={{
        padding: "150px",
        paddingLeft: "460px",
        // height: "100vh",
      }}
    >
      <div
        style={{
          width: "50vw",
          border: "1px solid black",
          height: "7vh",
          display: "flex",
          alignItems: "center",
          padding: "5px",
          backgroundColor: "black",
        }}
      >
        <img
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: "-1",
            backgroundSize: "cover",
          }}
          alt="bgc-image"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/05e91faa-6f6d-4325-934e-5418dcc2567b/web/IN-en-20250630-TRIFECTA-perspective_159086b1-425f-435b-bcd5-1ed8039cdef9_large.jpg"
        />

        <input
          ref={searchQuery}
          type="text"
          placeholder="What Kind of movies you want to watch today..."
          style={{
            width: "80%",
            height: "70%",
            fontSize: "17px",
            paddingLeft: "10px",
          }}
        ></input>
        <button
          style={{
            backgroundColor: "#e50914",
            color: "white",
            border: "none",
            padding: "8px 16px",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "14px",
            fontWeight: "500",
            marginLeft: "20px",
            transition: "background-color 0.3s ease",
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = "#34a5eb";
          }}
          onClick={handleSearchButton}
        >
          Search
        </button>
      </div>
      <div style={{}}>
        {searchMovieResult &&
          searchMovieResult.map((item, index) => (
            <MovieList title={searchMovie[index]} videoData={item} />
          ))}
      </div>
    </div>
  );
};

export default GptSearchPage;

('```json\n[\n  "The Shawshank Redemption",\n  "The Godfather",\n  "The Dark Knight",\n  "Pulp Fiction",\n  "Forrest Gump",\n  "Inception",\n  "The Matrix",\n  "Interstellar",\n  "Gladiator",\n  "Titanic"\n]\n```');
