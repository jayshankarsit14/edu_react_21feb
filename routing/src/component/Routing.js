import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Post from './Post';
import Profile from './Profile';
import PostDetails from './PostDetails';

const Routing = () => {
    return (
        <div className="container">
            <BrowserRouter>
                <Header />
                <Route exact path="/" component={Home} />
                <Route exact path="/post" component={Post} />
                <Route path="/post/:topic" component={PostDetails} />
                <Route path="/profile" component={Profile} />
                <Footer />
            </BrowserRouter>
        </div>
    )
}

export default Routing;