import './App.css';
import React from 'react';

import Homepage from './Pages/Homepage/Homepage';
import Shoppage from './Pages/Shop/Shop';
import Checkout from './Pages/Checkout/Checkout';

import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './Components/Header/Header';
import Authenticate from './Pages/Authentication/Authenticate';
//import SignIn from './Components/SignIn/SignIn';

//import { getAuth } from 'firebase/auth';
import { auth, createUserProfileDocument } from './Firebase/firebase.utils';

import { connect } from 'react-redux';
import { setCurrentUser } from './Redux/Actions/user.action';

class App extends React.Component {


  unsubscribeFromAuth = null;

  componentDidMount() {

    const { setUser } = this.props;
    // this is a subscription which we store in class variable
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      //this.setState({ user: user });

      if (userAuth) {
        const userSnap = await createUserProfileDocument(userAuth);

        setUser(
          {
            id: userSnap.id,
            ...userSnap.data()
          }
        );

        //console.log("Inside on auth state changed with user ", userAuth);
      } else {
        setUser(userAuth)
      }
    });
  }

  componentWillUnmount() {
    // unsubscribe the subscription when this component get unmounted
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={Shoppage} />
          <Route exact path='/checkout' component={Checkout} />
          <Route excat path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<Authenticate />)} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
