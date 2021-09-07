import React from 'react';

import SignIn from '../../Components/SignIn/SignIn';
import SignUp from '../../Components/SignUp/SignUp';

import './Authenticate.scss';

const Authenticate = () => {
    return (
        <div className='authenticate'>
            <SignIn />
            <SignUp />
        </div>
    )
}

export default Authenticate
