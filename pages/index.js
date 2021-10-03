import Head from 'next/head';
import styled from 'styled-components';

export default function Home() {
  return (
    <Wrapper>
      <Head>
        <title>NextJS Template</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h5 className="title">Template for fast UI development</h5>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 10px;
`;
