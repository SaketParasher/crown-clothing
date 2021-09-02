import React from 'react';
import { withRouter } from 'react-router-dom';
import './Menu-Item.scss';

const MenuItem = ({title, imageUrl, size, match, history, linkUrl}) => {
    console.log(match);
    console.log(linkUrl);
    console.log(`${match.url}/${linkUrl}`);
    return (
        <div className={`menu-item ${size}`}  onClick={e=> history.push(`${match.url}${linkUrl}`)}>

            <div className='background-image' style={{
                background:`url(${imageUrl})`
            }} />
            <div className='content'>
                <h1 className='title'>{title.toUpperCase()}</h1>
                <span className='subtitle'> SHOP NOW</span>
            </div>
        </div>
    )
}

export default withRouter(MenuItem)
