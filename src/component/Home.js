import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import ProductDisplay from './ProductDisplay';
import JSON from './db.json';

class Home extends Component{
    constructor(props){
        super(props)
        this.state={
            products:JSON
        }
    }
    render(){
        //console.log(this.state.products)
        return(
            <>
            <Header/>
            <ProductDisplay prodData={this.state.products}/>
            <Footer year="2021"  month="Nov"/>
            </>
        )
    }
}




// const Home= () =>{
//     return(
//         <>
//         <Header/>
//         <ProductDisplay/>
//         <Footer year="2021"  month="Nov"/>
//         </>
//     )
// }

export default Home;