import styled from "styled-components";

const AppContainer = styled.div`
  background: rgba(255, 255, 255, 1);
  height: 100vh;
  font-family: Roboto, sans-serif;
  overflow-y: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #f5f5f5;
    overflow-x: auto;
  }

  &::-webkit-scrollbar {
    width: 8px;
    height: 6px;
    background-color: #f5f5f5;
    overflow-x: auto;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #d2d2d2;
    overflow-x: auto;
  }
`;

export default AppContainer;