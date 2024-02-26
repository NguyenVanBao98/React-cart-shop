import React from "react";
import { toast } from "react-toastify";
import { useCart } from "../../CardContext";

const CardProduct = ({ id, img, title, price }) => {
    const { addToCart } = useCart();
    const handleAdd = () => {
        toast.success("Success ADD CART !", {
            position: "top-center",
            autoClose: 1000,
        });
        const product = { id, img, title, price };
        addToCart(product);
    };
    return (
        <div className="card-product">
            <img src={img} alt="" />
            <h3>{title}</h3>
            <p>{price}</p>
            <button onClick={handleAdd}>Add To Cart</button>
        </div>
    );
};

export default CardProduct;
