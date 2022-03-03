import React,{useEffect, useState} from 'react';
import DisplayComponent from './DisplayComponent'

const url="https://developerfunnel.herokuapp.com/location";

function HooksComponent(){
    const [title] =useState('React Hooks App');
    const [count,setCount] =useState(0);
    const [city,setCity] =useState();


    const updateCount=()=>{
        setCount(count+1)
    }

    useEffect(() =>{
        fetch(url)
        .then((res) =>res.json())
        .then((data) =>{
            setCity(data)
        })
    })

    return(
        <div>
            <h2>{title}</h2>
            <h2>{count}</h2>
            <button onClick={updateCount}>Counter</button>
            <DisplayComponent myCity={city}/>
        </div>
    )
}

export default HooksComponent