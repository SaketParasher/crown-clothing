import './App.css';
import React from 'react';
import Homepage from './Pages/Homepage/Homepage';
import Shoppage from './Pages/Shop/Shop';
import { Route, Switch } from 'react-router-dom';
import Header from './Components/Header/Header';
import SignIn from './Components/SignIn/SignIn';

//import { getAuth } from 'firebase/auth';
import { auth } from './Firebase/firebase.utils';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      user: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {

    // this is a subscription which we store in class variable
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ user: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    // unsubscribe the subscription when this component get unmounted
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.user} />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={Shoppage} />
          <Route path='/signin' component={SignIn} />
        </Switch>
      </div>
    );
  }
}

export default App;
