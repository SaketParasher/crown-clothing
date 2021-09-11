import React, { Component } from 'react';

import CollectionPreview from '../../Components/CollectionPreview/CollectionPreview';
import CategoryPage from '../Category/Category';

import {  Route } from 'react-router-dom';

export default class Shop extends Component {

    
    render() {
        console.log(this.props.match)
        return (
            <div className='shop-page'>
                <Route exact path={this.props.match.path} component={CollectionPreview} />
                <Route exact path={this.props.match.path+'/:categoryId'} component={CategoryPage} />
            
            </div>
        )
    }
}
