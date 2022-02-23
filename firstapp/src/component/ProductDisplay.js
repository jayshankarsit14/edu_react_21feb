import React from 'react';
import './Product.css';
const ProductDisplay= (props) => {
    console.log("product display ")
    console.log(props.prodData)
   const renderProduct= props.prodData.map((item) =>{
       return(
        <div className="card" key={item.id}>
        <img src={item.image} style={{height:100,width:100}}/>
        <h2>{item.name}</h2>
        <p>{item.brand}</p>
    </div>
       )
   })
   return(
    <div>
       {renderProduct}
    </div>
)
}

export default ProductDisplay;