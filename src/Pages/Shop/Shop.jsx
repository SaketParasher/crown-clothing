import React, { Component } from 'react';
import SHOP_DATA from './Shop.data';

import Collection from '../../Components/Collection/Collection';

export default class Shop extends Component {

    constructor(){
        super();

        this.state = {
            collections:SHOP_DATA
        }
    }
    render() {
        const { collections } = this.state;
        return (
            <div className='shop-page'>
                {collections.map(({id,...otherProps}) => <Collection key={id} {...otherProps} />)}                
            </div>
        )
    }
}
