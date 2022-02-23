import React,{Component} from 'react';

class Header extends Component{
    constructor(){
        super()
        this.state={
            title:'React App',
            keyword:'User Input Here'
        }
    }

    handleChange=(event)=>{
        console.log(event.target.value);
        this.setState({
            keyword:event.target.value
        })
    }

    render(){
        const myStyle={
            header:{
                backgroundColor:'tomato'
            },
            logo:{
                color:'white',
                textAlign:'center',
                fontSize:'30px'
            }
        }
        return(
            <>
            <header style={myStyle.header}>
              <center>
              <h1 style={myStyle.logo}>{this.state.title}</h1>
              <input onChange={this.handleChange}/>
              <div style={{color:'white', fontSize:'15px'}}>{this.state.keyword}</div>
              </center>
              <hr/>
              </header>
            </>
        )
    }
}

// const Header= () =>{
//     return(
//         <>
//         <center> Jay Shankar</center>
//         <hr/>
//         </>
//     )
// }

export default Header;