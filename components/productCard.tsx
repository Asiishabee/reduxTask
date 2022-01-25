function ProductCard(){


  
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

}

export default ProductCard