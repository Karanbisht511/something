import "./Tiles.css";
import Axios from "axios";
import { useState, useContext, useEffect } from "react";
import NutritionTable from "./NutritionTable";
import { Link,useNavigate } from "react-router-dom";
import RecipeDetailsContext from "../globalState/RecipeDetailsContext";

const Tiles = (props) => {
  const navigate=useNavigate()
  const { id, title, image } = props.details;
//   console.log(props.details);
  const setRecipeDetails = useContext(RecipeDetailsContext);

 const updateContext=()=>{
    setRecipeDetails.updateId(id); //Updating the global context
    setRecipeDetails.updateImageUrl(image);
    setRecipeDetails.updateTitle(title);
    // console.log(setRecipeDetails);
    navigate("/RecipeDetails");
 }

  return (
    <div className="tile">
      <h2>{title}</h2>
      {/* <Link to="RecipeDetails" > */}
      
        <img src={image} alt={title} onClick={updateContext} />
      {/* </Link> */}
    </div>
  );
};

export default Tiles;
