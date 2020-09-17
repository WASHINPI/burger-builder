import { LOAD_INGREDIENTS, INCREMENTS, DECREMENTS } from "../actionTypes";

const initialState = {
    ingredients: [],
    price: 5
}

const priceList = {
    cheese: 0.60,
    meat:  0.50,
    bacon: 0.30,
    salad: 0.70
}

const updateIncrements = (ingredients,data) => {

    const updatedIngredient = [...ingredients]

    updatedIngredient.map(item => {
        if(item.name === data) {
            item.value = item.value + 1
        }
        return item;
    })

    return updatedIngredient;

}

const updateDecrements = (ingredients,data) => {

    const updatedIngredient = [...ingredients]

    updatedIngredient.map(item => {
        if(item.name === data) {
            item.value = item.value - 1
        }
        return item;
    })

    return updatedIngredient;

}

const reducer = (state=initialState,action) => {

    switch (action.type) {
        case LOAD_INGREDIENTS:
            return {
                ...state,
                ingredients: action.payload
            }
        case INCREMENTS:
            return {
                ...state,
                ingredients: updateIncrements(state.ingredients,action.payload),
                 price: state.price + priceList[action.payload]
            }
        case DECREMENTS:
            return {
                ...state,
                ingredients: updateDecrements(state.ingredients,action.payload),
                price: state.price - priceList[action.payload]
            }
    }

    return state;
}

export default reducer;