import * as actionTypes from './actionTypes'
import axios from 'axios';

export const fetchingProducts = () => {
    return {
        type: actionTypes.FETCHING_PRODUCTS
    }
}
export const addProduct = (productData) => {
    return { 
        type: actionTypes.ADD_PRODUCT,
        payload: productData
    }
}
export const editProduct = (productData) => {
    return { 
        type: actionTypes.UPDATE_PRODUCT,
        payload: productData
    }
}

export const fetchProducts = () => {
    return dispatch => {
        dispatch(fetchingProducts())
        axios.get('./ProductsData.json').then(
            (response) => {
                console.log('response', response)
                const fetchedProducts = [];
                for (let key in response.data) {
                    fetchedProducts.push({
                        ...response.data[key],
                        id: key
                    });
                }
                dispatch(fetchProductsSuccess(fetchedProducts));
            }
        )
    }
}

export const fetchProductsSuccess = (fetchedProducts) => {
    return {
        type: actionTypes.FETCH_PRODUCTS,
        fetchedProducts: fetchedProducts
    }
}