import React from 'react';
import './Checkout.scss';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../Redux/Selectors/cart.selector';
import StripeCheckout from '../../Components/StripeButton/StripeButton';


import CheckoutItem from '../../Components/CheckoutItem/CheckoutItem';

const Checkout = ({cartItems,cartTotal}) => {
    return (
        <div className='checkout-page'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {cartItems.map(item => <CheckoutItem key={item.id} cartItem={item} />)}

            <div className='total'>TOTAL: ${cartTotal}</div>
            <div className='test-warning' style={{margin:'20px auto',color:'red'}}>
                *Please use the following test credit card for payment*
                <br/>
                4242 4242 4242 4242 Exp:01/24 CVV - 123 
            </div>
            <StripeCheckout price={cartTotal} />
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems,
    cartTotal : selectCartTotal
});



export default connect(mapStateToProps)(Checkout)
