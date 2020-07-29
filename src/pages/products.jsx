import React from 'react';
import Layout from '../components/Layout';
import Products from '../components/Products';
import { graphql } from 'gatsby';

export default (props) => {
    
    const products = props.data.allStripeProduct.nodes;
    //console.log(products);
    
    return (<Layout>
                <Products products={products} />
            </Layout>) 
};

export const pageQuery = graphql` 
    query MyQuery {
      allStripeProduct {
        nodes {
          id
          name
        }
      }
    }`;