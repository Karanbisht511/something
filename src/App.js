import "./App.css";
import Homepage from "./components/Homepage";
import RecipeDetails from "./components/RecipeDetails";
import SearchResults from "./components/SearchResults";
import SearchBar from "./components/SearchBar"
import NotFound from "./components/NotFound";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { useState } from "react";
import RecipeDetailsContext from "./globalState/RecipeDetailsContext";
import Axios from "axios"

function App() {

  const [id, setId] = useState();
  const [imageUrl, setImageUrl] = useState();
  const [title, setTitle] = useState();
  const [foodResults,setFoodResults]=useState();

  const updateFoodResults=(results)=>{
    setFoodResults(results);
  }

  const updateId = (newId) => {
    setId(newId);
  }
  const updateImageUrl = (newImageUrl) => { setImageUrl(newImageUrl) }
  const updateTitle = (newTitle) => { setTitle(newTitle) }

  const triggerAxios=(api_url)=>{
    return Axios({
         method: 'GET',
         url: api_url
     }).then((response) => {
      console.log(response.data);
         return response.data
     }).catch((error) => {
         return error
     })
 }

  const details = {
    id, imageUrl, title,foodResults,
    updateId,
    updateImageUrl,
    updateTitle,
    triggerAxios,
    updateFoodResults
  }

  return (
    <div className="App">
      <RecipeDetailsContext.Provider value={details} >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} >
            <Route path="searchBar" element={<SearchBar />} />
            <Route path="searchResults" element={<SearchResults />} />
            <Route path="RecipeDetails" element={<RecipeDetails />} />
            <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>

      </RecipeDetailsContext.Provider>
    </div>
  );
}

export default App;
