import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  console.log('footer');
  return <Wrapper>{/* <Text>© 2021</Text> */}</Wrapper>;
};

export default Footer;

const Wrapper = styled.footer`
  position: relative;
  min-height: 50px;
  margin-top: auto;
  background: linear-gradient(
    0deg,
    var(--color-background-dark),
    var(--color-background-light)
  );
  padding: 10px 32px;
`;

const Text = styled.p`
  font-size: var(--font-size-small);
  color: var(--color-text);
`;
