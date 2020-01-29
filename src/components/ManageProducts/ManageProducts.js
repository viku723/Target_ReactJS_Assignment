import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import { connect } from 'react-redux';

import * as productActions from '../../store/actions/products'
import * as actionTypes from '../../store/actions/actionTypes'

import EnhancedTable from '../Table/Table';
class ManageProducts extends Component {
    componentDidMount() {
        console.log('ManageProduct-componentDidMount')
        if (!this.props.isProductFetched) {
            this.props.onFetchProducts();
        }
    }
    render() {
        return (
            <div>
                <NavBar props={this.props}></NavBar>
                <EnhancedTable products={this.props.products} deleteProduct={this.props.onDeleteProduct} props={this.props}></EnhancedTable>
            </div>
        );
    }
}

const mapStatesToProps = state => {
    return {
        products: state.products,
        isProductFetched: state.isProductFetched
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDeleteProduct: (ids) => dispatch({ type: 'DELETE_PRODUCT', payload: ids }),
        onFetchProducts: () => {
            return dispatch(productActions.fetchProducts())
        }
    }
}

export default connect(mapStatesToProps, mapDispatchToProps)(ManageProducts);
