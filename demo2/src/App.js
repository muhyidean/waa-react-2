import {useState} from 'react'; 
import './App.css';
import Product from './components/Product/Product';
import Dashboard from './containers/DashBoard/Dashboard';
import Products from './containers/Products/Products';

function App() {


  return (
    <div className="App">
        <h1> Welcome WAA </h1>
        <Dashboard />
    </div>
  );
}

export default App;
