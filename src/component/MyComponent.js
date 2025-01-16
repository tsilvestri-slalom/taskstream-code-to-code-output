import React from 'react';

const MyComponent = ({ title, items, selectedItem, selectItem }) => (
  <div className="container">
    <h1>{title}</h1>
    <ul>
      {items.map((item, index) => (
        <li key={index} onClick={() => selectItem(item)}>
          {item}
        </li>
      ))}
    </ul>
    {selectedItem && (
      <div className="selected-item">
        <p>You selected: {selectedItem}</p>
      </div>
    )}
  </div>
);

export default MyComponent;