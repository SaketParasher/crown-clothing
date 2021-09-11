import React from 'react'
import Collection from '../Collection/Collection';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';

import { getCollectionsArray } from '../../Redux/Selectors/collection.selector'

const CollectionPreview = ({shopCollection}) => {
    console.log("SHOP COLLECTION ",shopCollection);
    return (
        <div>
            {shopCollection.map(({id,...otherProps}) => <Collection key={id} {...otherProps} />)}
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    shopCollection : getCollectionsArray
})

export default connect(mapStateToProps)(CollectionPreview)
