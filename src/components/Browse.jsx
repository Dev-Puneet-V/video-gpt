import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import PrimaryContainer from "./PrimaryContainer";
import SecondaryContainer from "./SecondaryContainer";
import GptSearch from "./GptSearch";

const Browser = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      {
        showGptSearch ? (<GptSearch />) :
        <>
          <PrimaryContainer />
          <SecondaryContainer />
        </>
      }
    </div>
  );
};

export default Browser;
