import { USER_NAME } from "../actionTypes";

const initialState = {
    user: "washi"
}

function todoApp(state=initialState,action) {

    switch (action.type) {
        case USER_NAME:
            return state;
    }

    return state;
}

export default todoApp;