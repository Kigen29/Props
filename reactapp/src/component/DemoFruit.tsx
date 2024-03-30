import React from 'react';
import FruitList from './FruitList';

const DemoFruit = () => {

     // Sample data
 const fruit: FruitType[] = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Orange' },
  ];
  
  return (
    <div>
      <h1>Fruit List Demo</h1>
      <FruitList fruits={fruit} />
    </div>
  )
}

export default DemoFruit;
