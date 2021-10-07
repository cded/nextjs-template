import React from 'react';
import styled from 'styled-components';

const TextInput = ({ label, placeholder, setInput }) => (
  <Wrapper>
    <InputLabel>{label}</InputLabel>
    <Input
      autocomplete
      placeholder={placeholder}
      onChange={(e) => setInput(e.target.value)}
    />
  </Wrapper>
);

export default TextInput;

const Wrapper = styled.div`
  padding: 5px;
  display: flex;
  flex-direction: column;
`;

const InputLabel = styled.label`
  color: var(--color-text);
`;

const Input = styled.input`
  margin-top: 10px;
  font-size: var(--font-size-medium);
  padding: 6px 8px;
`;
