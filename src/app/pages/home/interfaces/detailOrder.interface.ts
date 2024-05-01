import { Order } from "./order.interface";
import { Product } from "./products.interface";

export interface DetailOrder{

  id:string,
  nombre:string,
  cantidad:number,
  precio:number,
  total:number,
  order:Order,
  product:Product,

}
