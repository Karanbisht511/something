const NutritionTable = (props) => {

    const goodNutrients = props.nutrients.good
    const badNutrients = props.nutrients.bad
    // console.log(goodNutrients);


    return <>
        <h1>Good</h1>
        <table>
            <tr>
                <th>Nutrient</th>
                <th>Amount</th>
                <th>Percentage of Daily need</th>
            </tr>
            {
                goodNutrients && goodNutrients.map((element) => {
                    return <tr>
                        <td>{element.title}</td>
                        <td>{element.amount}</td>
                        <td>{element.percentOfDailyNeeds
                        }</td>
                    </tr>
                })
            }

        </table>

        <h1>Bad</h1>
        <table>
            <tr>
                <th>Nutrient</th>
                <th>Percentage of Daily need</th>
            </tr>
            {
                badNutrients && badNutrients.map((element) => {
                    return <tr>
                        <td>{element.title}</td>
                        <td>{element.amount}</td>
                        <td>{element.percentOfDailyNeeds
                        }</td>
                    </tr>
                })
            }

        </table>

    </>

}

export default NutritionTable;

