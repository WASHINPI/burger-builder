import axios from "axios";
import {DECREMENTS, INCREMENTS, LOAD_INGREDIENTS} from "../actionTypes";

const dispatchIngredients = data => ({
    type: LOAD_INGREDIENTS,
    payload: data
});

const dispatchIncrements = data => ({
    type: INCREMENTS,
    payload: data
})

const dispatchDecrements = data => ({
    type: DECREMENTS,
    payload: data
})

export const loadIngredients = () => dispatch => {

    axios.get('/ingredients.json')
        .then(res => {

            let data = [];

            for(let key in res.data) {
                data.push({
                    name: key,
                    value: res.data[key]
                })
            }

            dispatch(dispatchIngredients(data))

        })
        .catch(err => console.log(err))
}

export const incrementsIngredients = data => dispatch => {
   dispatch(dispatchIncrements(data))
}

export const decrementsIngredients = data => dispatch => {
    dispatch(dispatchDecrements(data))
}
