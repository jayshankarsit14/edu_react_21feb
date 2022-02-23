import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Footer from './Footer';

const Home= () =>{
    return(
        <>
        <Header/>
        <h1>This is react Home</h1>
        <Footer year="2021"  month="Nov"/>
        </>
    )
}

export default Home;