import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Link,Route} from 'react-router-dom';
import Header from './component/Header';
import Footer from './component/Footer';
import Home from './component/Home';
import Post from './component/Post';
import Profile from './component/Profile';

ReactDOM.render(
    <BrowserRouter>
    <Header/>
    <Link to="/">Home</Link>
    <Link to="/post">Post</Link>
    <Link to="/profile">Profile</Link>
     <Route path="/" component={Home}/>
     <Route path="/post" component={Post}/>
     <Route path="/profile" component={Profile}/>
    <Footer/>
    </BrowserRouter>,document.getElementById('root')
)