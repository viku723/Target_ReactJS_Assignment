import * as actionTypes from './actions/actionTypes';

const initialState = {
    isProductFetched: false,
    products: []
};

const reducer = (state = initialState, action) => {
    if (action.type === 'DELETE_PRODUCT') {
        return {
            ...state,
            //isProductFetched: false,
            products: state.products.filter((item) => {
                return action.payload.indexOf(item.id) === -1;
            })
        }
    }
    if (action.type === 'ADD_PRODUCT') {
        return {
            ...state,
            //isProductFetched: true,
            products: [
                ...state.products,
                action.payload
            ]       
        } 
    }
    if (action.type === 'UPDATE_PRODUCT') {
        console.log('action', action)
        return {
            ...state,
            products: state.products.map((product) => {
                if (product.id == action.payload.id) {
                    return action.payload
                }
                return product
            })      
        } 
    }
    if (action.type === actionTypes.FETCH_PRODUCTS) {
        return {
            ...state,
            isProductFetched: true,
            products: action.fetchedProducts
        };
    }
    return state
}

export default reducer;
