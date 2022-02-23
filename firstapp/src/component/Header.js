import React,{Component} from 'react';
import './Header.css';

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
            keyword:event.target.value ?event.target.value:'User Input Here'
        })
        this.props.userText(event.target.value)
    }

    render(){
        return(
            <>
            <header>
              <center>
              <h1 className="logo">{this.state.title}</h1>
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