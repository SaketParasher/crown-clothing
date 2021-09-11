import React from 'react'
import { connect } from 'react-redux';
import { getCollectionFromId } from '../../Redux/Selectors/collection.selector';
import CollectionItem from '../../Components/Collection-Item/CollectionItem';

import './Category.scss';

const Category = ({categoryCollection}) => {
    const { title, items } = categoryCollection;
    return (
        <div className='collection-page'>
            <h2 className='title'>{title}</h2>
            <div className='items'>
                {
                    items.map(item => (
                        <CollectionItem key={item.id} item={item} />
                    ))
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state,ownProps) => {
    console.log("OWN PROPS : - ",ownProps)
    return {
        categoryCollection : getCollectionFromId(ownProps.match.params.categoryId)(state)
    }
}

export default connect(mapStateToProps)(Category);
