import styled from 'styled-components';

export const StyledWrapper = styled.div`
  font-family: Arial, sans-serif;
  width: 800px;
  margin: 0 auto;
  padding: 16px;
  box-sizing: border-box;

  ul {
    list-style-type: none;
    padding: 0;

    li {
      cursor: pointer;
      padding: 5px;
      border: 1px solid #ddd;
      margin: 5px 0;
      border-radius: 4px;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: #f0f0f0;
      }
    }
  }

  .selected-item {
    margin-top: 20px;
    padding: 10px;
    border: 1px solid #aaa;
    background-color: #f9f9f9;
    border-radius: 4px;
  }
`