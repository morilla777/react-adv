
import styles from '../styles/styles.module.css'
import { useProduct } from '../hooks/useProduct';
import { createContext } from 'react';
import { ProductCardProps } from '../interfaces/ProductCardProps';
import { ProductContextProps } from '../interfaces/ProductContextProps';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;


export const ProductCard = ( { children, product, className, style, onChange, value, initialValues }: ProductCardProps ) => {
    
    const { counter, increaseBy, maxCount, isMaxCountReached, reset } = useProduct({ 
      onChange, 
      product,
      value,
      initialValues,
    });

  return (
    <Provider value={{
        counter,
        maxCount,
        increaseBy,
        product
    }}> 
        <div 
          className={ `${styles.productCard} ${ className }` }
          style={ style }
        >
        
        { children && children({
            count: counter,
            isMaxCountReached,
            maxCount: initialValues?.maxCount,
            product,
            increaseBy,
            reset
          }) 
        }

        </div>
    </Provider>
  )
}
