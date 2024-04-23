import { identificationType } from "./identificationType.enum";

export interface RegisterUser{
  firstName:     string;
  middleName:     string;
  secondName:     string;
  username:string;
  lastName:     string;
  identification:     identificationType;
  identificationNumber:     string;
  email:     string;
  direction:     string;
  phone:    string;
  password:    string;
  password2: string;
}
