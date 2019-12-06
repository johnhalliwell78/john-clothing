import React from 'react';

import './checkout-item.styles.scss';
import {connect} from "react-redux";
import {addItem, clearItemFromCart, removeItem} from "../../redux/cart/cart.actions";


const CheckoutItem = ({cartItem, clearItem, addItem, removeItem}) => (
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={cartItem.imageUrl} alt='item'/>
        </div>
        <span className='name'>{cartItem.name}</span>
        <span className='quantity'>
            <div className='arrow' onClick={() => removeItem(cartItem)}>&#10094;</div>
            <span className='value'>{cartItem.quantity}</span>
            <div className='arrow' onClick={() => addItem(cartItem)}>&#10095;</div>
        </span>
        <span className='price'>{cartItem.price}</span>
        <span className='remove-button' onClick={() => clearItem(cartItem)}>&#10005;</span>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    clearItem: (cartItem) => dispatch(clearItemFromCart(cartItem)),
    addItem: (cartItem) => dispatch(addItem(cartItem)),
    removeItem: (cartItem) => dispatch(removeItem(cartItem))

});

export default connect(null, mapDispatchToProps)(CheckoutItem);
