const Ingredients = (props) => {

    const { details } = props;
    console.log(details);
    return <>
        {details.map(element => {
            const { name, amount } = element;
            return <>
                <h2>{name}</h2>
                <p>{amount.metric.value}{amount.metric.unit}</p>

            </>;
        })}
    </>
}

export default Ingredients;