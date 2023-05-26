import { createContext, useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
import NavBar from "./components/navBar/NavBar";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "./components/Footer/Footer";


export const CartContext = createContext();


function App() {
  const {storedCardById} = useLoaderData()
  // console.log(storedCardById);
  
  const [cartItems, setCardItems] = useState(storedCardById.length)

  return (
    <div>
      {/* <MyContext.Provider value={{ selectProduct, setSelectProduct}}> */}
        <CartContext.Provider value={{setCardItems}}>
        <NavBar cartItems={cartItems} />
        <Outlet />
        </CartContext.Provider>
      {/* </MyContext.Provider> */}
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
