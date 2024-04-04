import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from '../styles/styles.module.css'
import { ProductTitleProps } from "../interfaces/ProductTitleProps";


export const ProductTitle = ( { title, className, style }: ProductTitleProps) => {

    const { product } = useContext( ProductContext );
    
    return (
        <span 
            className={ `${ styles.productDescription } ${ className }` }
            style={ style }
        >
            { title ?? product.title }
        </span>
    );
}
