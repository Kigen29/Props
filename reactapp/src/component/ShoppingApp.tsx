import React from "react";
import { useState } from "react";
import Category from  './Category';




const ShoppingApp =()=> {
    const [product,setProduct] = useState ('Smartphone');
    return <Category product = {product}/>;
};


export default ShoppingApp;