import React from 'react';

const FruitList = ({ fruits }:FruitListProps ) => {
    return (
      <div>
        <h2>List of Fruits</h2>
        <ul>
          {fruits.map((fruit) => (
            <li key={fruit.id}>{fruit.name}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  
  export default FruitList;