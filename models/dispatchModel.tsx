import { Product } from "./product";

export class DispatchModel{
    type:string;
    payload:Array<Product>

    constructor(type:string,  payload:Array<Product>){
        this.type = type;
        this.payload =payload
    }
}