import React from 'react'
import Footer from '../shared/Footer/Footer';
import Nav from '../shared/Nav/Nav'
const Layout = ({ children }) => {
    return (
        <div>
            <Nav />
            {children}
            <Footer />
        </div>
    );
};
export default Layout