import { CSSProperties, ReactElement } from "react";
import { Product } from "./Product";
import { OnChangeArgs } from "./OnChangeArgs";
import { InitialValues } from "./InitialValues";
import { ProductCardHandlers } from "./ProductCardHandlers";


export interface ProductCardProps {
    product: Product;
    //children?: ReactElement | ReactElement[];
    children?: ( args: ProductCardHandlers) => JSX.Element;
    className?: string;
    style?: CSSProperties;
    onChange?: ( args: OnChangeArgs ) => void;
    value?: number;
    initialValues?: InitialValues;
}