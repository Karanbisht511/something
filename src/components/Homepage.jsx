import SearchBox from "./SearchBox";
import "./Homepage.css"
import { Outlet,useNavigate } from "react-router-dom";
import { useEffect } from "react";


const Homepage = () => {

    const navigate=useNavigate();
    useEffect(()=>{
        navigate("searchBar");
    },[])
    
    
    return <>
    

        <Outlet />
       
    </>

}

export default Homepage 