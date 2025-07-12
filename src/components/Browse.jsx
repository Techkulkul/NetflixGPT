import React from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { useSelector } from "react-redux";
import GptSearchPage from "./GptSearchPage";

const Browse = () => {
  const isShowGPTPage = useSelector((store) => store.gpt.isShowGPTSearchPage);

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
