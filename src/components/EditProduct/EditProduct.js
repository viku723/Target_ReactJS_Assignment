import React, { Component } from 'react';
import  { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import NavBar from '../NavBar/NavBar';
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import { editProduct } from '../../store/actions/products'


class EditProduct extends Component {

    state = {
        product_name: this.props.location.state.product_name,
        product_description: this.props.location.state.product_description,
        is_active: this.props.location.state.is_active,
        price: this.props.location.state.price,
        offer_price: this.props.location.state.offer_price,
        offer_start_at: this.props.location.state.offer_start_at,
        offer_end_at: this.props.location.state.offer_end_at,
    }

    handleProductName = (event) => {
        this.setState({
            product_name: event.target.value
        })
    }
    handleProductDescription = (event) => {
        this.setState({
            product_description: event.target.value
        })
    }
    handlePrice= (event) => {
        this.setState({
            price: event.target.value
        })
    }
    handleOfferPrice = (event) => {
        this.setState({
            offer_price: event.target.value
        })
    }
    handleActive = (event) => {
        this.setState({
            is_active: event.target.checked 
        })
    }
    handleOfferStart = (event) => {
        this.setState({
            offer_start_at: event.target.value 
        })
    }
    handleOfferEnd = (event) => {
        this.setState({
            offer_end_at: event.target.value 
        })
    }
    handleSubmit = (event) => {
        this.props.onProductUpdate({
            ...this.state,
            id: this.props.location.state.id
        });
        this.props.history.push('/')
        event.preventDefault();
    }
    render() {
        return (
            <div>
                <NavBar props={this.props}></NavBar>
                <div style={{textAlign: 'center'}}>
                    <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
                        <div>
                            <TextField margin="normal" size="small"
                                variant="outlined" id="standard-basic" label="Product Name"
                                onChange={this.handleProductName.bind(this)}
                                defaultValue={this.props.location.state.product_name} />
                        </div>
                        <div>
                            <TextField margin="normal"
                                variant="outlined"
                                placeholder="Description"
                                multiline={true}
                                rows={2}
                                rowsMax={4}
                                onChange={this.handleProductDescription.bind(this)}
                                defaultValue={this.props.location.state.product_description}
                            />
                        </div>
                        <div>
                        <FormControlLabel
                            control={<Switch color="primary" checked={this.state.is_active} onChange={this.handleActive} />}
                            label="Active"
                        />
                        </div>
                        <div>
                        <TextField margin="normal"
                                size="small" variant="outlined" id="standard-basic" label="Price"
                                onChange={this.handlePrice.bind(this)}
                                defaultValue={this.props.location.state.price}/>
                        </div>
                        <div>
                        <TextField margin="normal"
                                size="small" variant="outlined" id="standard-basic" label="Offer Price"
                                onChange={this.handleOfferPrice.bind(this)}
                                defaultValue={this.props.location.state.offer_price} />
                        </div>
                        <div style={{margin: '10px'}}>
                        <TextField
                            id="datetime-local"
                            label="Offer starts at"
                            type="datetime-local"
                            InputLabelProps={{
                            shrink: true,
                            }}
                            onChange={this.handleOfferStart.bind(this)}
                            defaultValue={new Date(this.props.location.state.offer_start_at).toISOString().split('.').shift()}
                        />
                        </div>
                        <div style={{margin: '10px'}}>
                        <TextField
                            id="datetime"
                            label="Offer starts at"
                            type="datetime-local"
                            InputLabelProps={{
                            shrink: true,
                            }}
                            onChange={this.handleOfferEnd.bind(this)}
                            defaultValue={new Date(this.props.location.state.offer_end_at).toISOString().split('.').shift()}
                        />
                        </div>
                        <div style={{marginTop: '30px'}}>
                        <Button  type="submit" variant="contained" color="primary">Update</Button>
                        </div>

                    </form>
                </div>

            </div>
        );
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        onProductUpdate: (productData) => {
            dispatch(editProduct(productData))
        }
    }
}

export default connect(null, mapDispatchToProps)(EditProduct);
