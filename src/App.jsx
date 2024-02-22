
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import Baner from "./components/baner";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import CartContextProvider from "./components/context/CartContext";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Footer from "./components/footer";

const App =() => {
  return (   
    <CartContextProvider>
  <BrowserRouter>
    < NavBar/>
    <Routes>
      <Route path = {"/"} element={<ItemListContainer/>} />
      <Route path = {"/category/:id"} element={<ItemListContainer/>} />
      <Route path = {"/item/:id"} element={<ItemDetailContainer/>} />
      <Route path={"/cart"} element={<Cart />} />
      <Route path={"/checkout"} element={<Checkout />} />
    </Routes>
    <Baner/>
  </BrowserRouter>
  <Footer/>
  </CartContextProvider>
  
  )
}
export default App;
