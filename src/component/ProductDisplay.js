import React from 'react';

const ProductDisplay= (props) => {
    console.log("product display ")
    console.log(props.prodData)
   const renderProduct= props.prodData.map((item) =>{
       return(
              <div>
                  <img src={item.image} style={{height:100,width:100}}/>
               <h2>{item.name}</h2>
               <h2>{item.brand}</h2>
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