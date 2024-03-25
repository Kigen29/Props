import Product from  './Product';
import  React, { useState } from 'react';

const ProductList =({product}:ProductProps)=>{

    return<Product product={product}/>;

};



export default ProductList;