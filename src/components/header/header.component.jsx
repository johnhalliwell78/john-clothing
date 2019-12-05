import React from 'react';
import {Link} from "react-router-dom";
import {ReactComponent as Logo} from '../../assets/crown-icon.svg';
import {auth} from "../../firebase/firebase.utils";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";

import './header.styles.scss';
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";
import {selectCurrentUser} from "../../redux/user/user.selectors";
import {selectCartHidden} from "../../redux/cart/cart.selectors";

const Header = ({currentUser, hiddenCart}) => (
    <div className='header'>
        <Link to='/' className='logo-container'>
            <Logo className='logo'/>
        </Link>
        <div className='options'>
            <Link to='/shop' className='option'>SHOP</Link>
            <Link to='/shop' className='option'>CONTACT</Link>
            {
                currentUser
                    ? <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                    : <Link className='option' to='/signin'>SIGN IN</Link>
            }
            <CartIcon/>
        </div>
        {hiddenCart ? null : <CartDropDown/>}

    </div>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hiddenCart: selectCartHidden
});

export default connect(mapStateToProps, null)(Header);
