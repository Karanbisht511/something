const RecipeInstructions=(props)=>{
    const {steps}=props.details;
    
 console.log(steps);
    return <>
     {
        steps.map((element)=>{
        const {equipment,ingredients}=element;
            return <>
            <p> <b>{element.number}</b> -{element.step}</p>
            {/* <div>
               <h2>Equipments:</h2>{equipment && equipment.map(e=><>{e.name},</>)}
            </div> */}
           
            <div>
            <b>Ingredients:</b>  
               { ingredients && ingredients.map((e)=>{
                   const {name,image}=e;
                  return <>{name},
                  {/* <img src={image} alt={name} /> */}
                  </> 
                })}
            </div>
       </>
             })
     }
    </>
}

export default RecipeInstructions;