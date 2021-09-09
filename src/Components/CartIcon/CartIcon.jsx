import React from 'react';
import './CartIcon.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import { connect } from 'react-redux';

// Memoized Selector for cart Items Count
import { selectCartItemsCount } from '../../Redux/Selectors/cart.selector';

const CartIcon = ({handleClick,cartCount}) => {
    return (
        <div className='cart-icon' onClick={handleClick}>
            {console.log("Cart ICON gets rerendered")}
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>{cartCount}</span>
        </div>
    )
}

const mapStateToProps = (state) => ({
    //cartCount : cart.reduce((acc,item) => acc + item.quantity,0)
    cartCount : selectCartItemsCount(state)
})

export default connect(mapStateToProps)(CartIcon);
