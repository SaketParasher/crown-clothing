import './App.css';
import Homepage from './Pages/Homepage/Homepage';
import Shoppage from './Pages/Shop/Shop';
import { Route, Switch } from 'react-router-dom';
import Header from './Components/Header/Header';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={Shoppage} />
      </Switch>
    </div>
  );
}

export default App;
