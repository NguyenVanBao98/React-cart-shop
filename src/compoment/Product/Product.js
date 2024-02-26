import React, { useEffect, useState } from "react";
import useFetch from "../../useFetch";
import { Container } from "react-bootstrap";
import CardProduct from "../CardProduct/CardProduct";
import "./Product.css";

const Product = () => {
    const listProduct = useFetch("https://fakestoreapi.com/products");
    const [tab, setTab] = useState(1);

    const [filterProduct, setFilterProduct] = useState();

    useEffect(() => {
        setFilterProduct(listProduct);
    }, [listProduct]);

    const handleFilter = (tab, min, max) => {
        setTab(tab);
        if (min && max) {
            const result = listProduct.filter((item) => item.price >= min && item.price <= max);
            setFilterProduct(result);
        } else {
            setFilterProduct(listProduct);
        }
    };
    return (
        <div className="list-product mt-5">
            <Container>
                <div className="filter-list">
                    <li className={`${tab === 1 && "active"}`} onClick={() => handleFilter(1)}>
                        All
                    </li>
                    <li className={`${tab === 2 && "active"}`} onClick={() => handleFilter(2, 0, 100)}>
                        Form 0 - 100$
                    </li>
                    <li className={`${tab === 3 && "active"}`} onClick={() => handleFilter(3, 100, 200)}>
                        Form 100$ - 200$
                    </li>
                    <li className={`${tab === 4 && "active"}`} onClick={() => handleFilter(4, 200, 300)}>
                        Form 200$ - 300$
                    </li>
                    <li className={`${tab === 5 && "active"}`} onClick={() => handleFilter(5, 300, 10000)}>
                        Form 300$ - 500$
                    </li>
                </div>
                <div className="list">{filterProduct && filterProduct.map((item) => <CardProduct key={item.id} id={item.id} title={item.title} price={item.price} img={item.image}></CardProduct>)}</div>
            </Container>
        </div>
    );
};

export default Product;
