import React from 'react';

import CustomButton from "../custom-button/custom-button.component";
import './cart-dropdown.styles.scss';
import {connect} from "react-redux";
import CartItem from "../cart-item/cart-item.component";


const CartDropDown = ({cartItems}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.map((value) => (<CartItem key={value.id} item={value}/>))
            }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps = (state) => ({
    cartItems: state.cart.cartItems
});
export default connect(mapStateToProps, null)(CartDropDown);

