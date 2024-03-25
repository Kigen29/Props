import React from 'react';
import "./App.css";
import Counter from './component/Counter';
import PropDrilling from './component/PropDrilling';
import Context from './component/Context';
import Form from './component/Form';
import ShoppingApp from './component/ShoppingApp';


function App() {
  return (
    <div>
      
      
      <Context />
      <Form />
      <ShoppingApp />
    </div>
  );
}

//Add props to Counter
//initialCount via TypeScript


export default App;