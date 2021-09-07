import React from 'react';
import './Header.scss';

import { auth } from '../../Firebase/firebase.utils';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo} from '../../assets/crown.svg';

import { connect } from 'react-redux';

const Header = ({currentUser}) => {
    return (
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo' />
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>SHOP</Link>
                <Link className='option' to='/contact'>CONTACT</Link>
                {
                currentUser ? 
                <div className='option' onClick={() => auth.signOut()}>{`LOGOUT, ${currentUser.displayName}`}</div> :
                 <Link className='option' to='/signin'>LOGIN</Link>
                 }
                
            </div>
        </div>
    )
}

const mapStatetoProps = state => ({
    currentUser:state.user.currentUser
})

export default connect(mapStatetoProps)(Header);
