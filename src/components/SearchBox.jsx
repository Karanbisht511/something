import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import RecipeDetailsContext from "../globalState/RecipeDetailsContext";
import SearchIcon from '@mui/icons-material/Search';

const SearchBox = () => {
    const navigate = useNavigate()
    const globalContext = useContext(RecipeDetailsContext);
    const { triggerAxios, updateFoodResults } = globalContext;

    const [query, setQuery] = useState("");

    const handleSearch = (e) => {
        setQuery(e.target.value);
    }

    const search = async () => {

        let api_url = process.env.REACT_APP_URL + `recipes/complexSearch?apiKey=${process.env.REACT_APP_API}&query=` + query
        let api_url1 = process.env.REACT_APP_URL + `recipes/complexSearch?apiKey=${process.env.REACT_APP_API1}&query=` + query

        let result = await triggerAxios(api_url)

        if (result.message && result.message.includes('Request failed')) {
            result = await triggerAxios(api_url1)
        }
        updateFoodResults(result.results);

        navigate('/searchResults');
    }

    return <>
       
        <div>
            <div className="search-wrapper">
            <SearchIcon />
                <input id="search-food" type='text' onChange={handleSearch} />
            </div>
            <input className="search-btn search-button-color" type="submit" value="Search" onClick={search} />
        </div>
    </>
}

export default SearchBox;