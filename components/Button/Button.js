import React from 'react';
import styled from 'styled-components';

const Button = ({ children, onClick }) => (
  <StyledButton onClick={onClick}>{children}</StyledButton>
);

export default Button;

const StyledButton = styled.button`
  background-color: var(--color-primary);
  padding: 5px 12px;
  color: var(--color-text-light);
  cursor: pointer;
  &:hover {
    background-color: lightblue;
  }
`;
