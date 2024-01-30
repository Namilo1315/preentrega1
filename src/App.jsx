
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/Navbar";
import Baner from "./components/baner";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";

const App =() => {
  return (   
  <BrowserRouter>
    < NavBar/>
    <Routes>
      <Route path = {"/"} element={<ItemListContainer/>} />
      <Route path = {"/category/:id"} element={<ItemListContainer/>} />
      <Route path = {"/item/:id"} element={<ItemDetailContainer/>} />
      
    </Routes>
    <Baner/>
  </BrowserRouter>
    
  )
}
export default App;
