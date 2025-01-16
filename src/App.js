import React, { useState, useEffect } from 'react';
import { StyledWrapper } from './App.styled';
import MyComponent from './component/MyComponent';

const App = () => {
  const [title, setTitle] = useState('Simple React App (Multiple-File)');
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3']);
  const [selectedItem, setSelectedItem] = useState(null);

  const selectItem = (item) => {
    setSelectedItem(item);
  };

  useEffect(() => {
    // ComponentDidMount logic if needed
    return () => {
      // ComponentWillUnmount logic if needed
    };
  }, []);

  return (
    <StyledWrapper>
      <MyComponent 
        title={title} 
        items={items} 
        selectedItem={selectedItem} 
        selectItem={selectItem} 
      />
    </StyledWrapper>
  );
};

export default App;