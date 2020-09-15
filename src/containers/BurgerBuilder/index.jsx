import React, { Fragment, useEffect, useState } from "react";
import { connect } from 'react-redux'
import axios from 'axios';
import './style.css'

import { loadIngredients } from './../../store/actions/index';

import Burger from "../../components/Burger";
import Controls from "../../components/Controls";
import Example from "../../components/Modal";

const BurgerBuilder = props => {

    const [ingredients, setIngredients] = useState([]);

    const[price, setPrice] = useState(4)

    const [ingPrice, setIngPrice] = useState({
        cheese: 0.60,
          meat: 0.50,
         bacon:0.30,
         salad: .70
    })

    const [show, setShow] = useState(false);

    useEffect(() => {
        props.onLoadIngredient();
        // axios.get('/ingredients.json')
        //     .then(res =>{
        //         let data = [];
        //         for(let key in res.data) {
        //             data.push({
        //                 name: key,
        //                 value: res.data[key]
        //             })
        //         }
        //         setIngredients(data);
        //     })
        //     .catch(err => console.log(err))
        //eslint-disable-next-line
    },[]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const incrementIng = (ing) => {

        let newIng = ingredients.map(item => {
            if(item.name === ing ) {
                item.value = item.value + 1;
            }
            return item;
        })
        const totalPrice = price + ingPrice[ing]
        setPrice(totalPrice)
        setIngredients(newIng)
    }

    const decrementIng = (ing) => {

        let newIng = ingredients.map(item => {
            if(item.name === ing ) {
                item.value = item.value - 1;
            }
            return item;
        })

        const totalPrice = price - ingPrice[ing]
        setPrice(totalPrice)
        setIngredients(newIng)
    }

    const checkQty = (ing) => {
       return !ingredients.some(item => item.name === ing && item.value >= 1)
    }

    const validateOrder = () => {
       return !ingredients.some(item => item.value !== 0);
    }

    return (

        <Fragment>

            <Burger ingredients={ ingredients }/>

            <div className="BurgerControl">
                <p>Current Price <b>{price.toFixed(2)}</b></p>

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
                    ingredients={ingredients}
                    price={price.toFixed(2)}
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
    userName: state
});

const mapDispatchToProps = dispatch => ({
    onLoadIngredient: () => dispatch(loadIngredients())
})


export default connect(mapStateToProps,mapDispatchToProps)(BurgerBuilder);