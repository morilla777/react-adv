
import styles from '../styles/styles.module.css'
import { useProduct } from '../hooks/useProduct';
import { createContext } from 'react';
import { ProductContextProps } from '../interfaces/interfaces';
import { ProductCardProps } from '../interfaces/ProductCardProps';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;


export const ProductCard = ( { children, product, className, style }: ProductCardProps ) => {
    
    const { counter, increaseBy } = useProduct();

  return (
    <Provider value={{
        counter,
        increaseBy,
        product
    }}> 
        <div 
          className={ `${styles.productCard} ${ className }` }
          style={ style }
        >
        
        { children }

        </div>
    </Provider>
  )
}
