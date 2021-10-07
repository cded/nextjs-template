import axios from 'axios';
import React, { useState } from 'react';
import Button from 'src/components/Button';
import TextInput from 'src/components/TextInput/TextInput';
import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Login = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const router = useRouter();

  const login = async () => {
    axios
      .post(
        'http://localhost:8080/api/auth/login',
        { email, password },
        { withCredentials: true }
      )
      .then(() => {
        router.push('/');
      });
  };

  return (
    <Wrapper>
      <Link href="/">
        <a>&larr; Home</a>
      </Link>
      <TextInput label="Email" placeholder="Email" setInput={setEmail} />
      <TextInput
        label="Password"
        placeholder="Password"
        setInput={setPassword}
      />
      <Button onClick={login}>Login</Button>
    </Wrapper>
  );
};

export default Login;

const Wrapper = styled.div`
  padding: 20px;
`;
