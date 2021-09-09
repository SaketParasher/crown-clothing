import React from 'react';
import './CheckoutItem.scss';

import { removeItemFromCart } from '../../Redux/Actions/cart.action';
import { connect } from 'react-redux';

import { addCartItem, decreaseItemFromCart } from '../../Redux/Actions/cart.action';

const CheckoutItem = ({cartItem:{name,price,quantity,imageUrl,id}, removeItem,addItemInCart,decreaseItemInCart}) => {
    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img alt='item' src={imageUrl}/>
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={e => decreaseItemInCart({name,price,quantity,imageUrl,id})}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={() => addItemInCart({name,price,quantity,imageUrl,id})}>&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={() => removeItem(id)}>&#10005;</div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    removeItem : id => dispatch(removeItemFromCart(id)),
    addItemInCart : item => dispatch(addCartItem(item)),
    decreaseItemInCart : item => dispatch(decreaseItemFromCart(item))
})



export default connect(null,mapDispatchToProps)(CheckoutItem);
