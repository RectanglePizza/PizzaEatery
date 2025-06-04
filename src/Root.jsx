import { createBrowserRouter,RouterProvider } from "react-router-dom";
import { useState } from "react";
import App from "./App";
import Pizzas from "./components/Pizzas";

function Root(){
    
    let [cart,setCart] = useState(0)

    
    const routes = createBrowserRouter([
    {
        path:'/',element:<App cart={cart}></App>
    },
    {
        path:'/pizzas',element:<Pizzas cart={cart} setCart={setCart}></Pizzas>
    }
    ])

    
    return( <RouterProvider router={routes}></RouterProvider> )
}
export default Root