import { IconType } from "react-icons";

export interface IDropdownMenuItem {
  Icon: IconType;
  text: string;
}

export type ICategoryItem = Pick<IDropdownMenuItem, "Icon">;

export type ProductType = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

export type ReturnedDataType = {
  limit: number
  products : ProductType[]
  skip: number
  total : number
  }