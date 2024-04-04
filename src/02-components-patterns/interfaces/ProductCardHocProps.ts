import { ProductButtonsProps } from "./ProductButtonsProps";
import { ProductCardProps } from "./ProductCardProps";
import { ProductImageProps } from "./ProductImageProps";
import { ProductTitleProps } from "./ProductTitleProps";


export interface ProductCardHocProps {
    ({ children, product, className }: ProductCardProps ): JSX.Element,
    Title: ({ title, className }: ProductTitleProps ) => JSX.Element,
    Image: ({ img, className }: ProductImageProps ) => JSX.Element,
    Buttons: ( { className }: ProductButtonsProps ) => JSX.Element
}