import Head from 'next/head';
import styled from 'styled-components';
import Link from 'next/link';
import Router from 'next/router';
import Button from 'src/components/Button';
import axios from 'axios';

export default function Home({ userLoggedIn, user }) {
  const logout = () => {
    axios
      .post('http://localhost:8080/api/auth/logout', null, {
        withCredentials: true
      })
      .then(() => {
        Router.reload();
      });
  };
  return (
    <Wrapper>
      <Head>
        <title>NextJS Template</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h5 className="title">Template for fast UI development</h5>
      {userLoggedIn ? (
        <div>
          <p>Hi {user.name}</p>
          <Button onClick={logout}>Logout</Button>
        </div>
      ) : (
        <Link href="/login">
          <a>Login</a>
        </Link>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 10px;
`;

export async function getServerSideProps(context) {
  if (!context.req.cookies.sid) {
    return {
      props: { userLoggedIn: false }
    };
  }

  const cookie = `sid=${context.req.cookies.sid}`;
  const res = await fetch('http://localhost:8080/api/user/', {
    headers: context.req.cookies.sid ? { cookie } : undefined,
    credentials: 'include'
  });

  const user = await res.json();

  return {
    props: { userLoggedIn: true, user }
  };
}
