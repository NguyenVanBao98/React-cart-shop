import { Children, createContext, useContext, useState } from "react";

const CardContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(localStorage.getItem("LIST_CARD") ? JSON.parse(localStorage.getItem("LIST_CARD")) : []);
    const addToCart = (product) => {
        const newCart = [...cart];

        const checkIndex = newCart.findIndex((item) => item.id === product.id);
        console.log(checkIndex);
        if (checkIndex >= 0) {
            newCart[checkIndex].quality++;
        } else {
            product.quality = 1;
            newCart.push(product);
        }
        setCart(newCart);
        localStorage.setItem("LIST_CART", JSON.stringify(newCart));
    };
    console.log(cart);
    return <CardContext.Provider value={{ addToCart, cart }}>{children}</CardContext.Provider>;
};

const useCart = () => {
    return useContext(CardContext);
};

export { CartProvider, useCart };
