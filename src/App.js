import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CardProduct from "./compoment/CardProduct/CardProduct";
import Header from "./compoment/Header/Header";
import Product from "./compoment/Product/Product";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CartProvider } from "./CardContext";

function App() {
    return (
        <div>
            <ToastContainer></ToastContainer>
            <CartProvider>
                <Header></Header>
                <Routes>
                    <Route path="/" element={"Home"}></Route>
                    <Route path="/product" element={<Product></Product>}></Route>
                </Routes>
            </CartProvider>
        </div>
    );
}

export default App;
