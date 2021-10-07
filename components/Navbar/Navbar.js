import React from 'react';
import styled from 'styled-components';

const Navbar = () => (
  <Wrapper>
    <Header>
      <Title>Next Template</Title>
    </Header>
  </Wrapper>
);

export default Navbar;

const Wrapper = styled.div`
  position: sticky;
  top: 0;
  background-color: var(--color-background);
  transition: background 350ms ease 0s;
`;

const Header = styled.div`
  position: relative;
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 32px;
`;

const Title = styled.div`
  color: var(--color-text);
  font-size: var(--font-size-large);
  margin-left: auto;
  margin-right: auto;
  font-family: Lobster;
`;
