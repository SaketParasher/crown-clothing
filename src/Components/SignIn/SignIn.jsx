import React, { Component } from 'react';
import './SignIn.scss';

import FormInput from '../Input/Input';
import Button from '../Button/Button';
import { signInWithGoogle } from '../../Firebase/firebase.utils';

export default class SignIn extends Component {

    constructor(){
        super();
        this.state = {
            email:'',
            password:''
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        this.setState({email:'',password:''});
    }

    handleChange = e =>{
        const { name,value} = e.target;
        this.setState({[name]:value})
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' type='email' 
                    value={this.state.email} required
                    handleChange={this.handleChange} label="Email"/>
                    
                    <FormInput name='password' type='password'
                     value={this.state.password} required
                      handleChange={this.handleChange} label="Password" />
                    
                    <div className='buttons'>
                        <Button type='submit'>Sign In</Button>
                        <Button type="button" isGoogleSignIn onClick={signInWithGoogle}>Sign In with Google</Button>
                    </div>
                </form>
                
            </div>
        )
    }
}
