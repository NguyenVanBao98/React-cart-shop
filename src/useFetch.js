import React, { useEffect, useState } from "react";

const useFetch = (url) => {
    const [product, setProduct] = useState([]);
    const fetchProduct = async () => {
        const res = await fetch(url);
        const data = await res.json();
        setProduct(data);
    };
    useEffect(() => {
        fetchProduct();
    }, [url]);
    return product;
};

export default useFetch;


