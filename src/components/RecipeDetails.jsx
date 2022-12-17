import "./RecipeDetails.css";
import RecipeDetailsContext from "../globalState/RecipeDetailsContext";
import { useContext, useState, useEffect } from "react";
import NutritionTable from "./NutritionTable";
import Axios from 'axios'
import Tiles from "./Tiles";
import Taste from "./Taste"
import RecipeInstructions from "./RecipeInstructions";
import Ingredients from "./Ingredients";

const RecipeDetails = () => {

    const details = useContext(RecipeDetailsContext);
    const { id, title, imageUrl, triggerAxios } = details;
    const [recipeNutrients, setRecipeNutrients] = useState();
    const [recipeTaste, setRecipeTaste] = useState();
    const [similarRecipes, setSimilarRecipes] = useState();
    const [ingredients, setIngredients] = useState();
    const [recipeInstruction, setRecipeInstruction] = useState();

    const [showNutritionTab, setShowNutritions] = useState(false);
    const [showTasteTab, setShowTasteTab] = useState(false);
    const [showIngredientTab, setShowIngredientTab] = useState(false);
    const [showRecipeInstructionTab, setShowRecipeInstructionTab] = useState(false);

    const getNutritions = async () => {
        let api_url =
            process.env.REACT_APP_URL +
            `recipes/${id}/nutritionWidget.json?apiKey=${process.env.REACT_APP_API}`;

        let api_url1 =
            process.env.REACT_APP_URL +
            `recipes/${id}/nutritionWidget.json?apiKey=${process.env.REACT_APP_API1}`;

        let result = await triggerAxios(api_url)
        if (result.message && result.message.includes('Request failed')) {
            result = await triggerAxios(api_url1)
        }

        setRecipeNutrients(result)
    };

    const getTaste = async () => {
        let api_url =
            process.env.REACT_APP_URL +
            `recipes/${id}/tasteWidget.json?apiKey=${process.env.REACT_APP_API}`;

        let api_url1 =
            process.env.REACT_APP_URL +
            `recipes/${id}/tasteWidget.json?apiKey=${process.env.REACT_APP_API1}`;

        let result = await triggerAxios(api_url)
        if (result.message && result.message.includes('Request failed')) {
            result = await triggerAxios(api_url1)
        }

        setRecipeTaste(result)
    };

    const getSimilarRecipes = async () => {
        let api_url =
            process.env.REACT_APP_URL +
            `recipes/${id}/similar?apiKey=${process.env.REACT_APP_API}`;

        let api_url1 =
            process.env.REACT_APP_URL +
            `recipes/${id}/similar?apiKey=${process.env.REACT_APP_API1}`;

        let result = await triggerAxios(api_url)
        if (result.message && result.message.includes('Request failed')) {
            result = await triggerAxios(api_url1)
        }
        setSimilarRecipes(result)
    };

    const getIngredients = async () => {
        let api_url =
            process.env.REACT_APP_URL +
            `recipes/${id}/ingredientWidget.json?apiKey=${process.env.REACT_APP_API}`;

        let api_url1 =
            process.env.REACT_APP_URL +
            `recipes/${id}/ingredientWidget.json?apiKey=${process.env.REACT_APP_API1}`;


        let result = await triggerAxios(api_url)
        if (result.message && result.message.includes('Request failed')) {
            result = await triggerAxios(api_url1)
        }

        setIngredients(result)

    }

    const getRecipeInstruction = async () => {
        let api_url =
            process.env.REACT_APP_URL +
            `recipes/${id}/analyzedInstructions?apiKey=${process.env.REACT_APP_API}`;

        let api_url1 =
            process.env.REACT_APP_URL +
            `recipes/${id}/analyzedInstructions?apiKey=${process.env.REACT_APP_API1}`;


        let result = await triggerAxios(api_url)
        if (result.message && result.message.includes('Request failed')) {
            result = await triggerAxios(api_url1)
        }

        setRecipeInstruction(result)

    }

    const toggleTabs = (tab) => {

        switch (tab) {
            case 1:
                console.log("Nutritions");
              
                setShowNutritions(true)
                setShowTasteTab(false)
                setShowIngredientTab(false)
                setShowRecipeInstructionTab(false)
                break;
            case 2:
                console.log("Taste");
              
                setShowNutritions(false)
                setShowTasteTab(true)
                setShowIngredientTab(false)
                setShowRecipeInstructionTab(false)
                break;
            case 3:
                console.log("Ingredients");
              
                setShowNutritions(false)
                setShowTasteTab(false)
                setShowIngredientTab(true)
                setShowRecipeInstructionTab(false)
                break;
            case 4:
                console.log("Intructions");
              
                setShowNutritions(false)
                setShowTasteTab(false)
                setShowIngredientTab(false)
                setShowRecipeInstructionTab(true)
                break;
            default:
                console.log("Tab not found");
                break;
        }

    }


    useEffect(
        () => {
            getNutritions();
            getTaste();
            getSimilarRecipes();
            getIngredients();
            getRecipeInstruction();

        }
        , []);


    return <>
        <h1>Recipe</h1>
        <h2>Name:{title}</h2>
        <img src={imageUrl} alt={title} />

        <div id="recipe-detail-container" className="flex"> 
            <div id="buttons-here">
              <p><button onClick={() => { toggleTabs(1) }}>Nutritions</button></p>  
              <p><button onClick={() => { toggleTabs(2) }}>Taste</button></p> 
              <p><button onClick={() => { toggleTabs(3) }}>Ingredients</button></p> 
              <p><button onClick={() => { toggleTabs(4) }}>Recipe instructions</button></p> 
            </div>
            <div id="button-related-content-here">
                {showNutritionTab && recipeNutrients && <NutritionTable nutrients={recipeNutrients} /> }
                {showTasteTab && recipeTaste && <Taste details={recipeTaste} /> } 
                {showRecipeInstructionTab && recipeInstruction && <RecipeInstructions details={recipeInstruction[0]} />}
                {showIngredientTab && ingredients && <Ingredients details={ingredients.ingredients} /> }
            </div>
        </div>

      


        {/* <h1>Similar Recipes</h1>

        <div className="flex-container">
            {similarRecipes && similarRecipes.map((element, index) => { return <Tiles key={index} details={element} /> })}
        </div> */}
    </>
}

export default RecipeDetails;