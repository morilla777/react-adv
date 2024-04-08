import { useState } from "react";
import { ProductInCart } from "../interfaces/ProductInCart";
import { OnChangeArgs } from "../interfaces/OnChangeArgs";
import { products } from "../data/products";


export const useShoppingCart = () => {

    const [ shoppingCart, setShoppingCart ] = useState<{ [key:string]: ProductInCart }>({});

    const onProductCountChange = ({ count, product }: OnChangeArgs ) => {
       // console.log('onProductCountChange', count, product);
       setShoppingCart( oldShoppingCart => {

            const productInCart: ProductInCart = oldShoppingCart[product.id] || { ...product, count: 0};

            if( Math.max( productInCart.count + count, 0) > 0){
                productInCart.count += count;
                return {
                    ...oldShoppingCart,
                    [product.id]: productInCart
                }
            }

            //Borrar el producto
            const { [product.id]: toDelete, ...rest } = oldShoppingCart;
            return rest;

            //Solución profe
            /*if( count === 0 ){
                const { [ product.id]: toDelete, ...rest } = oldShoppingCart;

                return rest;
            }*/

            /*if( count === 0){
                const osc = { ...oldShoppingCart }
                delete osc[product.id];
                return {
                    ...osc
                }
            }
            else {
                return {
                    ...oldShoppingCart,
                    [ product.id ]: { ...product, count}
                }
            }*/
            
       });
    }

    return {
        shoppingCart,
        onProductCountChange,
        products
    }
}