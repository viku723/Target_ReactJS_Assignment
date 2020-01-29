import React, { Component } from 'react';
import  { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import NavBar from '../NavBar/NavBar';
import Switch from '@material-ui/core/Switch';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import { addProduct } from '../../store/actions/products'



const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));
class AddProduct extends Component {

    state = {
        product_name: "",
        product_description: "",
        is_active: true,
        price: "",
        offer_price: "",
        offer_start_at: new Date(),
        offer_end_at: new Date(),
        created_at: new Date(),
        updated_at: new Date()
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
        const productData = {
            ...this.state,
            id: Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36)
        }
        this.props.onAddProduct(productData);
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
                                onChange={this.handleProductName.bind(this)} />
                        </div>
                        <div>
                            <TextField margin="normal"
                                variant="outlined"
                                placeholder="Description"
                                multiline={true}
                                rows={2}
                                rowsMax={4}
                                onChange={this.handleProductDescription.bind(this)}
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
                                onChange={this.handlePrice.bind(this)} />
                        </div>
                        <div>
                        <TextField margin="normal"
                                size="small" variant="outlined" id="standard-basic" label="Offer Price"
                                onChange={this.handleOfferPrice.bind(this)} />
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
                        />
                        </div>
                        <div style={{margin: '10px'}}>
                        <TextField
                            id="datetime-local"
                            label="Offer starts at"
                            type="datetime-local"
                            InputLabelProps={{
                            shrink: true,
                            }}
                            onChange={this.handleOfferEnd.bind(this)}
                        />
                        </div>
                        <div style={{marginTop: '30px'}}>
                        <Button  type="submit" variant="contained" color="primary">Add Product</Button>
                        </div>

                    </form>
                </div>

            </div>
        );
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddProduct: (productData) => {
            dispatch(addProduct(productData))
        }
    }
}

export default connect(null, mapDispatchToProps)(AddProduct);
