import React, { useState } from "react";
import { useSelector } from "react-redux";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const calculateAllPrice=  (items) => items.reduce((acc: any, curr: { price: any; }) =>
  acc + curr.price , 0);
  const initialPrice = calculateAllPrice(products)
  console.log(initialPrice);
 
 
  const [category, setCategory] = useState(products);
  const [filteredCount, setFilteredCount] = useState(10)
  const [filteredPrice, setfilteredPrice] = useState(initialPrice)
  const productsByCategoryMap = new Map();

  var categorryList: any[] = [];
  products.forEach((prod: { category: any; }) => {
    if (!categorryList.includes(prod.category)) {
      categorryList.push(prod.category);
    }
  });

  categorryList.forEach((category) => {
    productsByCategoryMap.set(
      category,
      products.filter((prod: { category: string }) => prod.category == category)
    );
  });

  
  function updateByCategory(category:string) {
  

    const FilterByCategory  =  products.filter((prod: { category: string }) => prod.category == category)

    const totalFilteredProduct = products.reduce((previousVal: number, product: { category: string; }) =>  product.category == category? previousVal+1 : previousVal, 0);
    const totalFilteredPrice=  (items: any[]) => items.reduce((acc: any, curr: { price: any; }) =>
    acc + curr.price , 0);





    setCategory(FilterByCategory)
    setFilteredCount(totalFilteredProduct)
    setfilteredPrice(totalFilteredPrice(FilterByCategory))
    
  }

  const reset = () => {
    // reset values
    setCategory(products);
    setfilteredPrice(initialPrice);
    setFilteredCount(10)
    
  };


  return (
      <>

<div className="">
<button   className="bg-red-200 m-2 p-4" onClick={reset}>All</button>
      {categorryList.map((cat, index) => {
        return (
          <button  id={index}
            className="bg-red-200 m-2 p-4"
            onClick={() => updateByCategory(cat)} 
          >
            {cat}
          </button>
        );
      })}

    
</div>
     
    <div>Total count - {filteredCount}</div>
    <div>Total Cost is - Rs:{filteredPrice}</div>
       
      <div className="flex flex-wrap justify-center">{category.map((cat: { image: string | undefined; title: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; price: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) =>{

          return(
              <>
            
              <div className="w-80 h-80 m-4 bg-gray-100">
              <img src={cat.image} alt="" className="p-4 h-3/5 w-full"/>
              <h1 className="p-4">{cat.title}</h1>
              <p className="p-4">Rs: {cat.price}</p>
              </div>
            
              </>
          ) 
      })}</div>
   
      </>
      
  
  );

  
};

export default ProductComponent;
