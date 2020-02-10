import styled from "styled-components";

const Button = styled.button`
  height: 32px;
  border: 0;
  background: #009aff;
  color: white;
  padding: 8px 16px;
  border-radius: 240px;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &:hover {
    background: #0083d9;
  }

  &:active {
    background: #03a9f4;
  }

  &:disabled {
    background: #d4d4d4;
    color: #5d5d5d;
    cursor: not-allowed;
  }
`;

export default Button;