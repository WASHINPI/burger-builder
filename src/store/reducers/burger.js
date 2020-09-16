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

const reducer = (state=initialState,action) => {

    switch (action.type) {
        case LOAD_INGREDIENTS:
            return {
                ...state,
                ingredients: action.payload
            }
        case INCREMENTS:
            const data = [...state.ingredients]
            return {
                ...state,
                // ingredients: {
                //     ...state.ingredients,
                //     [action.payload]: state.ingredients[action.payload] + 1
                // },
                // price: state.price + priceList[action.payload]
            }
        case DECREMENTS:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.payload]: state.ingredients[action.payload] - 1
                },
                price: state.price - priceList[action.payload]
            }
    }

    return state;
}

export default reducer;