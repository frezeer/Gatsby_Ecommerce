import React from 'react';
import ProductCard from '../components/ProductCard';

export default ({ products }) => {
  //  console.log(products);
    return (
    <div>
            {
                   products.map((product) => (
                        <ProductCard product={product} key={product.id} >{ product.name }</ProductCard>
                    ))
            }
    </div>
   )
}

