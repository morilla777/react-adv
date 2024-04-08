import { CSSProperties, ReactElement } from "react";
import { Product } from "./Product";
import { OnChangeArgs } from "./OnChangeArgs";


export interface ProductCardProps {
    product: Product;
    children?: ReactElement | ReactElement[];
    className?: string;
    style?: CSSProperties;
    onChange?: ( args: OnChangeArgs ) => void;
    value?: number;
}