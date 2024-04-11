import { useCallback, useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from '../styles/styles.module.css'
import { ProductButtonsProps } from "../interfaces/ProductButtonsProps";


export const ProductButtons = ( { className, style }: ProductButtonsProps) => {

    // TODO: maxCount
    const { increaseBy, counter, maxCount } = useContext( ProductContext );

    //TODO: isMaxReached = useCallback, [ count, maxCount ]
    //TRUE si el count === maxCount
    //FALSE en caso contrario
    const isMaxReached = useCallback(() => {
        return maxCount ? counter === maxCount : false;
    },[counter, maxCount])

    return (
        <div 
            className={ `${styles.buttonsContainer} ${ className }` }
            style={ style }
        >
            <button 
                className={ styles.buttonMinus }
                onClick={ () => increaseBy(-1) } >-</button>
            
            <div className={ styles.countLabel }>{ counter }</div>

            <button
                className={ `${ styles.buttonAdd } ${ isMaxReached() ? styles.disabled : '' }` }
                onClick={ () => increaseBy(1) } >+</button>
        </div>

    );
}