import React, { useState } from 'react';
import { StyledWrapper } from './App.styled';
import MyComponent from './MyComponent';

const App = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const title = 'Simple React App (Multiple-File)';
  const items = ['Item 1', 'Item 2', 'Item 3'];

  const selectItem = (item) => {
    setSelectedItem(item);
  };

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