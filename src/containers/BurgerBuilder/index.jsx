import React, { Fragment, useEffect, useState } from "react";
import { connect } from 'react-redux'
import './style.css'

import {decrementsIngredients, incrementsIngredients, loadIngredients} from './../../store/actions/index';

import Burger from "../../components/Burger";
import Controls from "../../components/Controls";
import Example from "../../components/Modal";

const BurgerBuilder = props => {

   // const[price, setPrice] = useState(4)

    const [ingPrice, setIngPrice] = useState({
        cheese: 0.60,
          meat: 0.50,
         bacon:0.30,
         salad: .70
    })

    const [show, setShow] = useState(false);

    useEffect(() => {
        props.onLoadIngredient();
        //eslint-disable-next-line
    },[]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const incrementIng = (ing) => {

        props.increments(ing);

        // let newIng = props.ingredients.map(item => {
        //     if(item.name === ing ) {
        //         item.value = item.value + 1;
        //     }
        //     return item;
        // })

       // const totalPrice = props.price + ingPrice[ing]
       // setPrice(totalPrice)
       // setIngredients(newIng)
    }

    const decrementIng = (ing) => {

        props.decrements(ing);

        // let newIng = props.ingredients.map(item => {
        //     if(item.name === ing ) {
        //         item.value = item.value - 1;
        //     }
        //     return item;
        // })
        //
        // const totalPrice = props.price - ingPrice[ing]
      //  setPrice(totalPrice)
      //  setIngredients(newIng)
    }

    const checkQty = (ing) => {
      // return !props.ingredients.some(item => item.name === ing && item.value >= 1)
        return false
    }

    const validateOrder = () => {
      // return !props.ingredients.some(item => item.value !== 0);
        return false;
    }

    console.log("this is props",props.ingredients )

    return (

        <Fragment>

            <Burger ingredients={ props.ingredients }/>

            <div className="BurgerControl">
                <p>Current Price <b>{props.price.toFixed(2)}</b></p>

                <Controls
                    label="Cheese"
                    less={() => decrementIng('cheese')}
                    more={() => incrementIng('cheese')}
                    disable={checkQty('cheese')}
                />

                <Controls
                    label="Meat"
                    less={() => decrementIng('meat')}
                    more={() => incrementIng('meat')}
                    disable={checkQty('meat')}
                />

                <Controls
                    label="Bacon"
                    less={() => decrementIng('bacon')}
                    more={() => incrementIng('bacon')}
                    disable={checkQty('bacon')}
                />

                <Controls
                    label="Salad"
                    less={() => decrementIng('salad')}
                    more={() => incrementIng('salad')}
                    disable={checkQty('salad')}
                />
                <Example
                    show={show}
                    handleClose={handleClose}
                    ingredients={props.ingredients}
                    price={props.price.toFixed(2)}
                />

                <button
                    className="OrderNowBtn"
                    onClick={handleShow}
                    disabled={validateOrder()}>Order Now</button>
            </div>
        </Fragment>
    )
}

const mapStateToProps = state =>({
    ingredients: state.ingredients,
    price: state.price
});

const mapDispatchToProps = dispatch => ({
    onLoadIngredient: () => dispatch(loadIngredients()),
    increments: (data) => dispatch(incrementsIngredients(data)),
    decrements: data => dispatch(decrementsIngredients(data))
})


export default connect(mapStateToProps,mapDispatchToProps)(BurgerBuilder);