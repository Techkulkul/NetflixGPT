import React from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { useDispatch, useSelector } from "react-redux";
import GptSearchPage from "./GptSearchPage";
import { clearSearch } from "../utils/gptSlice";

const Browse = () => {
  const isShowGPTPage = useSelector((store) => store.gpt.isShowGPTSearchPage);
  const searchMovie = useSelector((store) => store.gpt.searchMovie);
  const dispatch = useDispatch();

  if (!isShowGPTPage) dispatch(clearSearch());

  return (
    <div>
      <Header />
      {!isShowGPTPage ? (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      ) : (
        <GptSearchPage />
      )}
    </div>
  );
};

export default Browse;
