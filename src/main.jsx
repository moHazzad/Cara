import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App'
import './index.css'
import Home from './components/pages/Home';
import Shop from './components/pages/Shop';
import Blogs from './components/pages/Blogs';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import { getCardData } from './LodaingData';
import SingleProduct from './components/home/SingleProduct';
import Cart from './components/home/Cart';
import ProductsDetails from './components/home/ProductsDetails';
import PayNow from './components/Payment/PayNow';
import Login from './components/Athentications/Login/Login';
import Register from './components/Athentications/Register/Register';
import AuthProviders from './components/AuthProviders/AuthProviders';
import PrivetRoute from './Route/PrivetRoute';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    loader: getCardData,
    children:[
      {
        path: "/",
        element: <Home />,
        
      },
      
      {
        path: "cart",
        element: <Cart />,
        loader: getCardData,
        // loader: ()=> fetch("/FeaturesProducts.json")
        
      },
      
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "pay",
        element: <PrivetRoute> <PayNow /> </PrivetRoute> ,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      // {
      //   path: "product",
      //   element: <SingleProduct />,
      // },
      {
        path: "blog",
        element: <Blogs /> ,
      },
      {
        path: "about",
        element: <About /> ,
      },
      {
        path: "contact",
        element: <Contact /> ,
      },
      {
        path: "productDetails/:id",
        element: <ProductsDetails />,
        loader: ()=> fetch("/FeaturesProducts.json")
        
      },
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
      </AuthProviders>
  </React.StrictMode>,
)
