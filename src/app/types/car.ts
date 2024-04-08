import { User } from './user';

export interface Car {
  brand:string;
  model: string;
  imageUrl:string;
  price: number;
  _id: string;
  weight: number;
  userId: string;
  speed:number;
  color:string;
  register:string;
  about:string[];
}