import { Product } from "../models/product"


function ProductCard(props:{product: Product}){
    return(
      <div  className="w-80 h-80 m-4 bg-gray-100">
      <img src={props.product.image} alt="" className="p-4 h-3/5 w-full" />
      <h1 className="p-4">{props.product.title}</h1>
      <p className="p-4">Rs: {props.product.price}</p>
    </div>
    )
}

export default ProductCard