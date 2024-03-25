import React from "react";
import { useState } from 'react';
import ProductList from  './ProductList';


const Category =({product}:ProductProps) => {
    return <ProductList product = {product} />;
};

export default Category;