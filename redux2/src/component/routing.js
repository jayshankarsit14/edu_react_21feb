import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../container/Home';
import Header from './header';
import Footer from './footer';
import NewsDetails from '../container/NewsDetails'

const Routing = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/details/:id" element={<NewsDetails/>} /> 
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default Routing