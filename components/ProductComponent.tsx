import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/reducers";
import ProductCard from "./productCard";

const ProductComponent = () => {

  // const store = useStore().getState() ==> getting values from store
  // const products1 = useSelector((state:RootStateOrAny) => state.allProducts.products);
  const products = useSelector((state: RootState) => state.allProducts.products);
  const totalProductsCount = products.reduce((previousProductsCount: number) => previousProductsCount + 1 ,0);
  const totalProductsPrice = products.reduce((previousProductsPrice: number, currentProductPrice: { price: number; }) =>previousProductsPrice + currentProductPrice.price,0);
  const [categoryProducts, setCategoryProducts] = useState(products);
  const [filteredProductsCount, setFilteredProductsCount] = useState(totalProductsCount);
  const [filteredProductsPrice, setfilteredProductsPrice] = useState(totalProductsPrice);
  const productsByCategoryMap = new Map();
  const categoryList: any[] = [];

  products.forEach((prod: { category: any }) => {
    if (!categoryList.includes(prod.category)) {
      categoryList.push(prod.category);
    }
  });

  categoryList.forEach((category) => {
    productsByCategoryMap.set(
      category,
      products.filter((prod: { category: string }) => prod.category === category)
    );
  });

 
    const updateByCategory = (categoryName: string) => {
    const FilterByCategory =productsByCategoryMap.get(categoryName);
    // const FilterByCategory = products.filter((prod: { category: string }) => prod.category == category);
    const totalCountByCategory = products.reduce((previousVal: number, product: { category: string; }) => product.category === categoryName ? previousVal + 1 : previousVal,0);
    const totalPriceByCategory = FilterByCategory.reduce((previousProductPrice: number, currentProductPrice: { price: number; }) =>previousProductPrice + currentProductPrice.price,0);

    setCategoryProducts(FilterByCategory);
    setFilteredProductsCount(totalCountByCategory);
    setfilteredProductsPrice(totalPriceByCategory);
  }

  const reset = () => {
    // reset values
    setCategoryProducts(products);
    setfilteredProductsPrice(totalProductsPrice);
    setFilteredProductsCount(totalProductsCount);
  };

  return (
    <>
      <div className="">
        <button className="bg-red-200 m-2 p-4" onClick={reset}>
          All
        </button>
        {categoryList.map((categoryName) => {
          return (
            <button className="bg-red-200 m-2 p-4" onClick={() => updateByCategory(categoryName)}>{categoryName} </button>
          );
        })}
      </div>
      <div>Total count - {filteredProductsCount}</div>
      <div>Total Cost is - Rs:{filteredProductsPrice}</div>
      <div className="flex flex-wrap justify-center">
      {categoryProducts.map((cat: {image: string;title:string; price:string}) => {
            return (
              <ProductCard category = {cat}/>
            );
          }
      )}
      </div>
    </>
  );





};

export default ProductComponent;
