import React from 'react'
import { ItemListContainer } from './components/Container/ItemListContainer';
import { ItemDetailContainer } from './components/Container/ItemDetailContainer';
import { HomeView } from './components/HomeView/HomeView';
import { NavBar } from './components/NavBar/NavBar';
import { CartScreen } from './components/CartScreen/CartScreen';
import { ContextProvider } from './components/Context/AppContext';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { UIProvider } from './components/Context/UIContext';

function App() {

  return (
    <div className="components">
     <UIProvider>
      <ContextProvider>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <HomeView />
            </Route>
            <Route exact path="/products/:categoryId">
              <ItemListContainer />
            </Route>
            <Route exact path="/products/">
              <ItemListContainer />
            </Route>
            <Route exact path="/detail/:itemId">
              <ItemDetailContainer />
            </Route>
            <Route exact path="/cart">
              <CartScreen />
            </Route>
            <Route path="*">
              <Redirect to="/" />
            </Route>
          </Switch>
        </Router>
      </ContextProvider>
      </UIProvider>
    </div>
  );
}

export default App;
