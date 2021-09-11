import React, { Component } from 'react';
import './Directory.scss';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectAllDirectory } from '../../Redux/Selectors/directory.selector';

import MenuItem from '../Menu-Item/Menu-Item';

class Directory extends Component {

    render() {
        return (
            <div className="directory-menu">
                {this.props.shopDirectory.map(({id,...otherProps}) => <MenuItem key={id} {...otherProps} />)}
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    shopDirectory : selectAllDirectory
})

export default  connect(mapStateToProps)(Directory);