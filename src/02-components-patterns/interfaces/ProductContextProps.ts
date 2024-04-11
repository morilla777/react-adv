import { Product } from "./Product";

export interface ProductContextProps {
    counter?: number;
    maxCount?: number;
    increaseBy: ( value: number ) => void;
    product: Product;
}