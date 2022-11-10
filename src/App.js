import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AddFood from './components/AddFood/AddFood';
import FoodList from './components/FoodList/FoodList';

function App() {

  return (
    <div className="App">
      <FoodList />
    </div>
  );
}

export default App;