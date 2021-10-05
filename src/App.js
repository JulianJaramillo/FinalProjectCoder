import { ItemListContainer } from './components/Container/ItemListContainer';
import { HomeView } from './components/HomeView/HomeView';
import { NavBar } from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  return (
    <div className="components">
      <NavBar />
      <HomeView />
      <ItemListContainer/>
    </div>
  );
}

export default App;
