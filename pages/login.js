import React, { useState } from 'react';
import Button from 'src/components/Button';
import TextInput from 'src/components/TextInput/TextInput';
import styled from 'styled-components';

const Login = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  return (
    <Wrapper>
      <TextInput label="Email" placeholder="Email" />
      <TextInput label="Password" placeholder="Password" />
      <Button>Login</Button>
    </Wrapper>
  );
};

export default Login;

const Wrapper = styled.div`
  padding: 20px;
`;
