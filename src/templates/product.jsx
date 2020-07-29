import React from 'react';
import Layout from '../components/Layout';
import Product from '../components/Product';
import { graphql } from 'gatsby'


export default (props) => {
   
    //console.log(props);
    //const product = props.data.StripeProduct;
    const product = props.data.allStripeProduct;
    //console.log(product);
    const sku = props.data.allStripePrice;
    //console.log(sku);
    
    
    return (<Layout>
              <Product product={product} sku={sku}  >
              </Product>
            </Layout>)
}
/*
*/

export const pageQuery = graphql` 

query($id: String){
       stripeProduct(id: {eq: $id }){
         name
         slug
         images
       } 
       allStripeProduct 
        {
             nodes {
                   id
                   slug
                   images
                   created
              }
        }

       allStripePrice {
          nodes {
          created
          currency
          product {
          id
          images
        }
        unit_amount
        unit_amount_decimal
        created
        id
    }
    totalCount
  }
}
 `;
