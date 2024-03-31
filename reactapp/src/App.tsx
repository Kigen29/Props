import React from 'react';
import "./App.css";
import Counter from './component/Counter';
import PropDrilling from './component/PropDrilling';
import Context from './component/Context';
import Login from './component/Login';
import ShoppingApp from './component/ShoppingApp';
import DemoFruit from './component/DemoFruit';
import Register from './component/Register';
import ColourContextProvider  from './context/ColourContextProvider';
import Colour from './component/Colour';


function App() {
  return (
    <div>

<ColourContextProvider>

      <Register/>
      <DemoFruit/>
      <Context />
      <Login />
      <ShoppingApp />
      <Colour/>

</ColourContextProvider>
      
    </div>
  );
}

//Add props to Counter
//initialCount via TypeScript


export default App;