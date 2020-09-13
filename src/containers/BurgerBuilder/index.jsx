import React, { Fragment, useEffect, useState } from "react";
import axios from 'axios';
import './style.css'
import Burger from "../../components/Burger";
import Controls from "../../components/Controls";

const BurgerBuilder = props => {

    const [ingredients, setIngredients] = useState([]);

    useEffect(() => {
        axios.get('https://todo-app-dev-by-washi.firebaseio.com/ingredients.json')
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
        //eslint-disable-next-line
    },[])

    return (

        <Fragment>

            <Burger/>

            <div className="BurgerControl">
                <p>Current Price <b>4.5</b></p>

                <Controls
                    label="Cheese"
                    less={() => console.log("Hello click on less")}
                    more={() => console.log("Hello click on more")}
                />

                <Controls
                    label="Meat"
                    less={() => console.log("Hello click on less")}
                    more={() => console.log("Hello click on more")}
                />

                <Controls
                    label="Bacon"
                    less={() => console.log("Hello click on less")}
                    more={() => console.log("Hello click on more")}
                />

                <Controls
                    label="Salad"
                    less={() => console.log("Hello click on less")}
                    more={() => console.log("Hello click on more")}
                />

                <button className="OrderNowBtn" disabled={true}>Order Now</button>
            </div>
        </Fragment>
    )
}

export default BurgerBuilder;