export const DATA_AVAILABLE = 'DATA_AVAILABLE';
export const DATA_COUNT = 'DATA_COUNT';
export const GET_DATA_COUNT = 'GET_DATA_COUNT';
export const ADD_CART = 'ADD_CART';

export function setCount(count){
    let action = {
        type: DATA_COUNT,
        count: count,
    };
    return (dispatch) => {
        dispatch(action);
    }
}

export function getCount() {
    let action = {
        type: DATA_COUNT,
        count: 0,
    };
    return (dispatch) => {
        dispatch(action);
    }
}

export function addCart(obj){
    let action = {
        type: ADD_CART,
        name: obj.name,
        price: obj.price
    }
    return (dispatch) => {
        dispatch(action);
    }
}