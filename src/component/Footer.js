import React,{Fragment} from 'react';

const Footer= (props) =>{
    return(
        <Fragment>
            <hr/>
        <center> @Jay Shankar soft {props.month} {props.year} </center>
        </Fragment>
    )
}

export default Footer;