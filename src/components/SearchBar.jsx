import SearchBox from "./SearchBox";
import "./Homepage.css"

const SearchBar=()=>{

    return <>
        <div id="header-container">
            <div id="header" className="flex-container-spacebetween">
                <h1 id="logo">
                   <span className="color-blue">f</span> 
                   <span className="color-red">o</span> 
                   <span className="color-yellow">o</span>
                   <span className="color-blue">g</span> 
                   <span className="color-green">l</span>
                   <span className="color-red">e</span> </h1>
                <SearchBox />
            </div>
        </div>
    </>

}

export default SearchBar