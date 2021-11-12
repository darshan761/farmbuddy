import './App.css';
import { Route, Switch, HashRouter } from 'react-router-dom';
import SignUpPage from './Components/SignUpPage/SignUpPage';
import LoginPage from './Components/LoginPage/LoginPage';
import Home from './Components/LandingPage/LandingPage';
import MarketPlace from './Components/MarketPlace/MarketPlace';
import ProductDetailPage from './Components/AdminPage/ProductDetailPage';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      <HashRouter>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/login" component={LoginPage}/>
            <Route exact path="/signup" component={SignUpPage}/>
            <Route exact path="/home" component={Home}/>
            <Route exact path="/marketplace" component={MarketPlace}/>
            <Route exact path="/product/:id" component={ProductDetailPage}/>
          </Switch>
      </HashRouter>
      {/* </header> */}
    </div>
  );
}

export default App;