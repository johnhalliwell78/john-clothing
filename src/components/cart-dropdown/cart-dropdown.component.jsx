import React from 'react';

import CustomButton from "../custom-button/custom-button.component";
import './cart-dropdown.styles.scss';
import {connect} from "react-redux";
import CartItem from "../cart-item/cart-item.component";
import {selectCartItems} from "../../redux/cart/cart.selectors";
import {createStructuredSelector} from "reselect";
import {withRouter} from 'react-router-dom';

const CartDropDown = ({cartItems, history}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.length ?
                    cartItems.map((value) => (<CartItem key={value.id} item={value}/>)) :
                    <span className='empty-message'>Your Cart Is Empty</span>
            }
        </div>
        <CustomButton onClick={() => history.push('/checkout')}>GO TO CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});
export default withRouter(connect(mapStateToProps, null)(CartDropDown));

