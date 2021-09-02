import './App.css';
import Homepage from './Pages/Homepage/Homepage';
import Shoppage from './Pages/Shop/Shop';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Homepage} />
      <Route path='/shop' component={Shoppage} />
    </Switch>
  );
}

export default App;
