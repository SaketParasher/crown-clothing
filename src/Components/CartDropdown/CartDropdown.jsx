import React from 'react';
import './CartDropdown.scss';

import { connect } from 'react-redux';
import CartItem from '../CartItem/CartItem';
import { selectCartItems } from '../../Redux/Selectors/cart.selector';
import { withRouter } from 'react-router-dom';

import { toggleCartDropdown } from '../../Redux/Actions/cart.action';
import CustomButton from '../Button/Button';

const CartDropdown = ({cart,history,dispatch}) => {
    return (
        <div className='cart-dropdown'>
            {   cart.length ? 
                cart.map(item => <CartItem key={item.id} item={item}/>) :
                <span className='empty-cart'>Cart is Empty.</span>
            }
            <CustomButton onClick={() => { 
                history.push('/checkout');
                dispatch(toggleCartDropdown())
            }}
                >GO TO CHECKOUT</CustomButton>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cart : selectCartItems(state)
    }
}

// here we are not passing mapDispatchToProps as second parameter to connect so dispatch will pe passed as props in component
export default withRouter(connect(mapStateToProps)(CartDropdown))
