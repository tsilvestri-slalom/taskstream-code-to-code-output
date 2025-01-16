import styled from 'styled-components';

export const Container = styled.div`
  font-family: Arial, sans-serif;
  padding: 20px;
`;

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const ListItem = styled.li`
  cursor: pointer;
  padding: 5px;
  border: 1px solid #ddd;
  margin: 5px 0;
  border-radius: 4px;
  &:hover {
    background-color: #f0f0f0;
  }
`;

export const SelectedItem = styled.div`
  margin-top: 20px;
  padding: 10px;
  border: 1px solid #aaa;
  background-color: #f9f9f9;
  border-radius: 4px;
`;
