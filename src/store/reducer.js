import * as actionTypes from './actions/actionTypes';

const initialState = {
    isProductFetched: false,
    products: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'DELETE_PRODUCT': {
            return {
                ...state,
                products: state.products.filter((item) => {
                    return action.payload.indexOf(item.id) === -1;
                })
            }
        }
        case actionTypes.ADD_PRODUCT: {
            return {
                ...state,
                products: [
                    ...state.products,
                    action.payload
                ]
            }
        }
        case actionTypes.UPDATE_PRODUCT: {
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
        case actionTypes.FETCH_PRODUCTS: {
            return {
                ...state,
                isProductFetched: true,
                products: action.fetchedProducts
            };
        }
        default: {
            return state
        }
    }
}

export default reducer;
