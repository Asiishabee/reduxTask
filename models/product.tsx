import { Category } from "./Category";

export class Product{
  id: number;
  title: string;
  price: number;
  image:string;
  category:Category

  constructor(id: number, title: string, price: number, image: string,category: Category) {
      this.id = id;
      this.title = title;
      this.price = price;
      this.image = image;
      this.category = category;
    }
 
}

