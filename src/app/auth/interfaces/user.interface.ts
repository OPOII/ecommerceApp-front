import { Product } from "src/app/pages/home/interfaces/products.interface";
import { Order } from "src/app/pages/home/interfaces/order.interface";

export interface User{
  id:                    number;
  firstName:             string;
  middleName:            string;
  secondName:            string;
  lastName:              string;
  username:              string;
  identification:        string;
  identificationNumber:  string;
  email:                 string;
  direction:             string;
  phone:                 string;
  role:                  string;
  products:              Array<Product>;
  orders:                Array<Order>;
  active:                boolean;
  enabled:               boolean;
  accountNonLocked:      boolean;
  credentialsNonExpired: boolean;
  accountNonExpired:     boolean;
}
