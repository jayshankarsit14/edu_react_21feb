import React from 'react';
import ReactDOM from 'react-dom';
import Header from './component/Header';
import Footer from './component/Footer';

const App= () =>{
    return(
        <React.Fragment>
            <Header/>
        <h1>This is react component</h1>
        <h1>test</h1>
        <Footer/>
        </React.Fragment>
    )
}

ReactDOM.render(<App/>,document.getElementById('root'))



//Old way to write code es5
/*import React from 'react';
import ReactDOM from 'react-dom';

function App(){
    return(
        <h1>This is react component</h1>
    )
}

ReactDOM.render(<App/>,document.getElementById('root'))*/