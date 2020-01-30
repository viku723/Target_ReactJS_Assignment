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
    filter (event) {
        event.persist()
       this.props.onFilter(event.target.value)
    }
    onFilterClick() {
        console.log('onFilterClick');
        this.props.onFilterClick();
    }
    render() {
        return (
            <div>
                <NavBar props={this.props}></NavBar>
                <EnhancedTable filter={this.filter} products={this.props.products} deleteProduct={this.props.onDeleteProduct} props={this.props} onFilterClick={this.onFilterClick} ></EnhancedTable>
            </div>
        );
    }
}

const mapStatesToProps = state => {
    return {
        products: state.products,
        isProductFetched: state.isProductFetched,
        isFilter: state.isFilter,
        filterProducts: state.filterProducts
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDeleteProduct: (ids) => dispatch(productActions.deleteProduct(ids)),
        onFilter: (value) => dispatch({type: 'FILTER', payload: value}),
        onFetchProducts: () => {
            return dispatch(productActions.fetchProducts())
        },
        onFilterClick: () => dispatch({type: 'FILTER_CLICK'}),
    }
}

export default connect(mapStatesToProps, mapDispatchToProps)(ManageProducts);
