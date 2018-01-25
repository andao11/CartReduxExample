import {combineReducers} from 'redux';

import {DATA_AVAILABLE, DATA_COUNT} from '../actions/';

let dataState = {
    username: '',
    password: '',
    count: 0,
    cart: []
};

function cloneJSON(json){return JSON.parse(JSON.stringify(json))}

const dataReducer = (state = dataState, action) => {
    console.log(action);
    switch (action.type) {
        case 'DATA_COUNT':
            console.log("DATA_COUNT", state);
            return Object.assign({}, state, {count: (action.count+1)});
        break;
        case 'GET_DATA_COUNT':
            return state;
        break;

        //Cart
        case 'ADD_CART':
            console.log("ADD CART", action);
            let stateCloned = cloneJSON(state);
            stateCloned.cart.push({name: action.name, price: action.price});
            stateCloned.count = stateCloned.cart.length;
            return stateCloned;
        break;

        default:
            return state;
            break;
    }
}

const rootReducer = combineReducers({
    dataReducer
})

export default rootReducer;