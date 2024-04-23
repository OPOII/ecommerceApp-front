import { identificationType } from "./identificationType.enum";

export interface User{
  _id:      string;
  firstName:     string;
  middleName:     string;
  secondName:     string;
  lasName:     string;
  identification:     identificationType;
  identificationNumber:     string;
  email:     string;
  direction:     string;
  phone:    string;
  password:    string;
  isActive: boolean;
  roles:    string[];
}
