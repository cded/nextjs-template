import React from 'react';
import styled from 'styled-components';

const TextInput = ({ label, placeholder }) => {
  console.log(label);
  return (
    <Wrapper>
      <InputLabel>{label}</InputLabel>
      <Input placeholder={placeholder} />
    </Wrapper>
  );
};

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
