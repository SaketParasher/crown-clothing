import React from 'react';
import './Header.scss';

import { auth } from '../../Firebase/firebase.utils';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo} from '../../assets/crown.svg';

import CartIcon from '../CartIcon/CartIcon';
import CartDropdown from '../CartDropdown/CartDropdown';

import { toggleCartDropdown } from '../../Redux/Actions/cart.action';

import { connect } from 'react-redux';

const Header = ({currentUser,cartDropdownHidden,toggleDropdown}) => {
    return (
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo' />
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>SHOP</Link>
                <Link className='option' to='/contact'>CONTACT</Link>
                {
                currentUser ? 
                <div className='option' onClick={() => auth.signOut()}>{`LOGOUT`}</div> :
                 <Link className='option' to='/signin'>LOGIN</Link>
                 }
                 <CartIcon handleClick={toggleDropdown}/>
            </div>
            {!cartDropdownHidden ? <CartDropdown /> : null }
        </div>
    )
}

const mapStatetoProps = ({user,cart}) => ({
    currentUser:user.currentUser,
    cartDropdownHidden:cart.dropdownHidden
});

const mapDispatchToProps = dispatch => ({
    toggleDropdown : () => dispatch(toggleCartDropdown())
})

export default connect(mapStatetoProps,mapDispatchToProps)(Header);
