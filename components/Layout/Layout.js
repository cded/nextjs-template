import React from 'react';
import Navbar from 'src/components/Navbar';
import Footer from 'src/components/Footer';

const Layout = ({ children }) => (
  <>
    <Navbar />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
