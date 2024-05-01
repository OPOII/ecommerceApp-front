import { User } from "src/app/auth/interfaces/user.interface";
import { DetailOrder } from "./detailOrder.interface";

export interface Order{
    id:string,
    numero:string,
    fechaCreacion:string,
    fechaRecibida:string,
    total:number,
    user:User,
    detailOrder:DetailOrder
}
