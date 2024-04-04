import { CSSProperties, ReactElement } from "react";
import { Product } from "./interfaces";


export interface ProductCardProps {
    product: Product;
    children?: ReactElement | ReactElement[];
    className?: string;
    style?: CSSProperties 
}