import React, { Fragment, useEffect, useState } from "react";
import { connect } from 'react-redux'
import './style.css'

import {decrementsIngredients, incrementsIngredients, loadIngredients} from './../../store/actions/index';

import Burger from "../../components/Burger";
import Controls from "../../components/Controls";
import Example from "../../components/Modal";

const BurgerBuilder = props => {

    const [show, setShow] = useState(false);

    useEffect(() => {
        props.onLoadIngredient();
        //eslint-disable-next-line
    },[]);

    const handleClose = () => setShow(false);

    const handleShow = () => setShow(true);

    const checkQty = (ing) => {
       return !props.ingredients.some(item => item.name === ing && item.value >= 1)
    }

    const validateOrder = () => {
       return !props.ingredients.some(item => item.value !== 0);
    }

    return (

        <Fragment>

            <Burger ingredients={ props.ingredients }/>

            <div className="BurgerControl">
                <p>Current Price <b>{props.price.toFixed(2)}</b></p>

                <Controls
                    label="Cheese"
                    less={() => props.decrements('cheese')}
                    more={() => props.increments('cheese')}
                    disable={checkQty('cheese')}
                />

                <Controls
                    label="Meat"
                    less={() => props.decrements('meat')}
                    more={() => props.increments('meat')}
                    disable={checkQty('meat')}
                />

                <Controls
                    label="Bacon"
                    less={() => props.decrements('bacon')}
                    more={() => props.increments('bacon')}
                    disable={checkQty('bacon')}
                />

                <Controls
                    label="Salad"
                    less={() => props.decrements('salad')}
                    more={() => props.increments('salad')}
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
    increments: data => dispatch(incrementsIngredients(data)),
    decrements: data => dispatch(decrementsIngredients(data))
})


export default connect(mapStateToProps,mapDispatchToProps)(BurgerBuilder);