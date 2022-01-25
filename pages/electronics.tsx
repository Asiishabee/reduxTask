import React from "react";
import { useSelector } from "react-redux";

const Electronics= () =>{
    const productss = useSelector((state) => state.allProducts.products)

    const renderElectroniProducts = productss.map((product) =>{
        return(
           <>
            
            <div className="m-4 p-4 h-80 w-80 bg-gray-200" key={product.id}>
            <img src={product.image} className="p-2 h-3/5 w-full" alt="" />
            <div className="p-2">
            <h1>{product.title}</h1>
            <p>{product.price}</p>
            </div>
           
          
           
         </div>
           </>
           
         
        )
    })

    return(
        <div>
             <h1>Electronics</h1>
             <div className="flex flex-wrap justify-center">
         {renderElectroniProducts}
        </div>
        </div>
      
      
    )
}


export default Electronics