import { ProductCard, ProductButtons,ProductImage, ProductTitle } from "../components"
import '../styles/styles.module.css';
import '../styles/custom-styles.css';
import { useShoppingCart } from "../hooks/useShoppingCart";
import { products } from "../data/products";

export const ShoppingPage = () => {

    const { shoppingCart, onProductCountChange } = useShoppingCart();

  return (
    <div>
        <h1>Shopping Store</h1>
        <hr />

        <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap'
        }}>

            {
                products.map( product => (
                <ProductCard 
                    product={ product } 
                    className="bg-dark text-white"
                    key={ product.id }
                    onChange={ onProductCountChange }
                    value={ shoppingCart[product.id]?.count || 0}
                >
                    <ProductImage img={ product.img } className="custom-image"  />
                    <ProductTitle title={ product.title } className="text-bold" />
                    <ProductButtons className="custom-buttons" />
                </ProductCard>

                ))
            }
        </div>

        <div className="shopping-cart">
            {
                //Solución mía
                //Object.values(shoppingCart).map( value => (
                
                //Solución profe
                Object.entries(shoppingCart).map( ([ key, product ]) => (
                    <ProductCard 
                        product={ product } 
                        className="bg-dark text-white"
                        style={{ width: '100px'}}
                        key={ key }
                        value={ product.count}
                        onChange={ onProductCountChange }
                    >
                        <ProductImage  className="custom-image"  />
                        <ProductButtons 
                            className="custom-buttons" 
                            style={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}    
                        />
                    </ProductCard>
                ))

            }
            
        </div>
       
    </div>
  )
}
