import Tiles from "./Tiles";
import RecipeDetailsContext from "../globalState/RecipeDetailsContext";
import { useEffect,useState,useContext } from "react";
import SearchBox from "./SearchBox";
import { Outlet } from "react-router-dom";

const SearchResults = () => {

    const globalContext = useContext(RecipeDetailsContext);
    const {foodResults}=globalContext;
    const [results, setResults] = useState([])

 useEffect(()=>{
    setResults(foodResults);
 },[foodResults]);


    return (
    <>
      <div>
        <SearchBox />
        <h1>Results</h1>
        <div className="flex-container">
          {results.map((element, index) => {
            return <Tiles key={index} details={element} />;
          })}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default SearchResults;
