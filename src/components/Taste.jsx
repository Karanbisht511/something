const Taste = (props) => {

    const { bitterness, fattiness, saltiness, savoriness, sourness, spiciness, sweetness } = props.details;
    return <>
        <div>
            <h3>bitterness</h3>
            <input type="range" value={bitterness} />{bitterness}
        </div>
        <div>
            <h3>fattiness</h3>
            <input type="range" value={fattiness} name="fattiness" id="fattiness" />{fattiness}
        </div>

        <div>
            <h3>saltiness</h3>
            <input type="range" value={saltiness} name="saltiness" id="saltiness" />{saltiness}
        </div>

        <div>
            <h3>savoriness</h3>
            <input type="range" value={savoriness} name="savoriness" id="savoriness" />{savoriness}
        </div>

        <div>
            <h3>sourness</h3>
            <input type="range" value={sourness} name="sourness" id="sourness" />{sourness}
        </div>

        <div>
            <h3>spiciness</h3>
            <input type="range" value={spiciness} name="spiciness" id="spiciness" />{spiciness}
        </div>


        <div>
            <h3>sweetness</h3>
            <input type="range" value={sweetness} name="sweetness" id="sweetness" />{sweetness}
        </div>

    </>
}

export default Taste;