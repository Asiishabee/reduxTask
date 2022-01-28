import React, { useState } from "react";
import { RootStateOrAny, useSelector } from "react-redux";
import { Category } from "../models/Category";
import { Product } from "../models/product";
import ProductCard from "./productCard";

const ProductComponent = () => {

  // const store = useStore().getState() ==> getting values from store
  // const products1 = useSelector((state:RootState) => state.allProducts.products);
  const products: Array<Product> = useSelector((state:RootStateOrAny) => state.allProducts.products);
  const totalProductsCount = products.reduce((previousProductsCount) => previousProductsCount + 1 ,0);
  const totalProductsPrice = products.reduce((previousProductsPrice, currentProductPrice) =>previousProductsPrice + currentProductPrice.price,1);
  const [categoryProducts, setCategoryProducts] = useState(products);
  const [filteredProductsCount, setFilteredProductsCount] = useState(totalProductsCount);
  const [filteredProductsPrice, setfilteredProductsPrice] = useState(totalProductsPrice);
  const productsByCategoryMap = new Map();
  const categoryList: Array<Category> = [];

  products.forEach((product) => {
    if (!categoryList.includes(product.category)) {
      categoryList.push(product.category);
    }
  });

  categoryList.forEach((category) => {
    productsByCategoryMap.set(
      category,
      products.filter((product) => product.category === category)
    );
  });

  const updateProductsByCategory = (categoryName: Category) => {
    const FilterByCategory: Array<Product> = productsByCategoryMap.get(categoryName);
    // const FilterByCategory = products.filter((prod: { category: string }) => prod.category == category);
    const totalCountByCategory = products.reduce(
      (previousProductsCount, currentProductCount) =>
        currentProductCount.category === categoryName
          ? previousProductsCount + 1
          : previousProductsCount,
      0
    );

    const totalPriceByCategory = FilterByCategory.reduce(
      (previousProductsPrice, currentProductPrice) =>
        previousProductsPrice + currentProductPrice.price,
      0
    );

    setCategoryProducts(FilterByCategory);
    setFilteredProductsCount(totalCountByCategory);
    setfilteredProductsPrice(totalPriceByCategory);
  };

  const reset = () => {
    setCategoryProducts(products);
    setfilteredProductsPrice(totalProductsPrice);
    setFilteredProductsCount(totalProductsCount);
  };

  const buttonByCategory =categoryList.map((categoryName, index) => {
    return (
      <button key={index} className="bg-red-200 m-2 p-4" onClick={() => updateProductsByCategory(categoryName)}>{categoryName} </button>
    );
  })

  const productByCategory = categoryProducts.map((prod) => {
    return (
      <ProductCard  product={prod}/>
    );
  }
)

  return (
    <>
      <div className="">
        <button className="bg-red-200 m-2 p-4" onClick={reset}>All</button>
        {buttonByCategory}
      </div>
      <div key="total_count">Total count - {filteredProductsCount}</div>
      <div key="total_cost">Total Cost is - Rs:{filteredProductsPrice}</div>
      <div className="flex flex-wrap justify-center">
      {productByCategory}
      </div>
    </>
  );
};

export default ProductComponent;
