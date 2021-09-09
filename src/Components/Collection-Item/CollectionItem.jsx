import React from 'react';
import './CollectionItem.scss';

import CustomButton from '../Button/Button';

import { connect } from 'react-redux';
import { addCartItem } from '../../Redux/Actions/cart.action';

const CollectionItem = ({item,addCartItem}) => {
    const {name,price,imageUrl} = item;

    return (
        <div className='collection-item'>
            <div className='image' style={{
                backgroundImage:`url(${imageUrl})`
            }} />
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <CustomButton inverted onClick={() => addCartItem(item)}>Add to Cart</CustomButton>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addCartItem : item => dispatch(addCartItem(item))
})

export default connect(null,mapDispatchToProps)(CollectionItem);
