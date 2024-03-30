import React from 'react';
import "./App.css";
import Counter from './component/Counter';
import PropDrilling from './component/PropDrilling';
import Context from './component/Context';
import Login from './component/Login';
import ShoppingApp from './component/ShoppingApp';
import DemoFruit from './component/DemoFruit';
import Register from './component/Register';


function App() {
  return (
    <div>
      <Register/>
      <DemoFruit/>
      <Context />
      <Login />
      <ShoppingApp />
    </div>
  );
}

//Add props to Counter
//initialCount via TypeScript


export default App;