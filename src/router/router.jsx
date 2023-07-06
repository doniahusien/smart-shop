import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import LogIn from '../pages/LogIn';
import ProductItem from '../pages/ProductItem';
import Products from '../pages/Products';
import Create from '../pages/Create';
import ShoppingCart from '../pages/ShoppingCart';
import NotFound from '../pages/NotFound';
import Layout from '../components/Layout/Layout';
import secondLayout from '../components/Layout/secondLayout';

const Routing = () => {
    return (
        <Router>

            <Routes>
                <Route path='/' element={<Layout> <Home /> </Layout>} />
                <Route path='/productitem' element={<Layout><ProductItem /></Layout>} />
                <Route path='/Products' element={<Layout><Products /></Layout> } />
                <Route path='/shoppingcart' element={<Layout><ShoppingCart /></Layout> } />
                <Route path='/create' element={<secondLayout> <Create /> </secondLayout >} />
                
                <Route path='/login' element={<secondLayout><LogIn/> </secondLayout>} />
                <Route path='*' element={<secondLayout><NotFound /> </secondLayout>} />

                </Routes>

        </Router>
    )
}

export default Routing