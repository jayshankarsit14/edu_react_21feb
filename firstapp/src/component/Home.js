import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import ProductDisplay from './ProductDisplay';
import JSON from './db.json';

class Home extends Component{
    constructor(props){
        super(props)
        this.state={
            products:JSON,
            filtered:JSON
        }
    }

    filterProduct = (keyword) => {
        var output = this.state.products.filter((data) => {
            return data.name.toLowerCase().indexOf(keyword.toLowerCase()) > -1
        })
        this.setState({filtered:output})
    }


    render(){
        //console.log(this.state.products)
        return(
            <>
            <Header userText={(data)=>{this.filterProduct(data)}}/>
            <ProductDisplay prodData={this.state.filtered}/>
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