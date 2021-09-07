import React from 'react';

import Input from '../Input/Input';
import Button from '../Button/Button';
import { createUserWithEmailAndPassword } from 'firebase/auth';

import { auth, createUserProfileDocument } from '../../Firebase/firebase.utils';
import './SignUp.scss';

class SignUp extends React.Component{
    
    constructor(){
        super();

        this.state = {
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;
        if(password !== confirmPassword){
            alert("Password do not match");
            return;
        }

        try {
            
            const { user } = await createUserWithEmailAndPassword(auth,email,password);
            console.log("User Signed Up ",user);
            await createUserProfileDocument(user,{displayName});
            this.setState({
                displayName:'',
                email:'',
                password:'',
                confirmPassword:''
            })
        } catch (error) {
            console.log(error);
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render(){
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have a account</h2>
                <span>Sign Up with Email and Password</span>

                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <Input type="text" name="displayName" handleChange={this.handleChange} value={displayName} label="Display Name" required/>
                    <Input type="email" name="email" handleChange={this.handleChange} value={email} label="Email" required/>
                    <Input type="password" name="password" handleChange={this.handleChange} value={password} label="Password" required/>
                    <Input type="text" name="confirmPassword" handleChange={this.handleChange} value={confirmPassword} label="Confirm Password" required/>

                    <Button type="submit" >SIGN UP</Button>
                </form>
            </div>
        
        )
    }
}

export default SignUp;
