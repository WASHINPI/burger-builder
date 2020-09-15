import { USER_NAME } from "../actionTypes";

const initialState = {
    ingredients: []
}

const priceList = {
    cheese: 0.60,
    meat:  0.50,
    bacon: 0.30,
    salad: 0.70
}

function todoApp(state=initialState,action) {

    switch (action.type) {
        case USER_NAME:
            return state;
    }

    return state;
}

export default todoApp;