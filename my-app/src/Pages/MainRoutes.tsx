import { Route, Routes } from "react-router-dom";
import MainPage from "./Cart/MainPage";
import Landing from "./Landing/Landing";
import Payment from "./Payment/Payment";
import { ProductPage } from "./Product/ProductPage";

export default function MainRoutes(){
    return (
    <Routes>
        <Route path="/" element={<Landing/>}></Route>
        <Route path="/products" element={<ProductPage/>}></Route>
        <Route path="/cart" element={<MainPage/>}></Route>
        <Route path="/payment" element={<Payment/>}></Route>
    </Routes>
    )
}