import { ItemListContainer } from './components/Container/ItemListContainer';
import { ItemDetailContainer } from './components/Container/ItemDetailContainer';
import { HomeView } from './components/HomeView/HomeView';
import { NavBar } from './components/NavBar/NavBar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  return (
    <div className="components">
      <Router>
        <NavBar />
        <Switch>
        <Route exact path="/">
            <HomeView />
        </Route>
        <Route exact path="/products/:categoryId">
            <ItemListContainer/>
        </Route>
        <Route exact path="/products/">
            <ItemListContainer/>
        </Route>
        <Route exact path="/detail/:itemId">
            <ItemDetailContainer/>
        </Route>
        <Route exact path="/cart">
            <h2>Pending development of shopping cart component</h2>
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
