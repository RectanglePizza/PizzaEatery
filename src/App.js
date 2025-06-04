import { FaShoppingCart } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import pizza from './assets/pizza.svg'
import './App.css'
import { Link } from "react-router-dom";
import { useState } from "react";
import CartPanel from "./components/CartPanel";

function App({cart}) {
  let [cartstate,setCartActive] = useState(false)
  return (
    <>
      <nav className="navBar">
        
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/pizzas">
                Pizzas
            </Link>
          </li>
          <li>Contact</li>
        </ul>

        <div className="cart">
          <FaShoppingCart onClick={() => {
            setCartActive(true)
          }}></FaShoppingCart>
          <p className="cartCount">{cart}</p>
        </div>

      </nav>
      <section>
        <div>
          <h1>Delicious Pizza</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type
             specimen book. It has survived not only five centuries, but also the leap into
              electronic typesetting.</p>
              
        </div>

        {/* here I will using upsplash pizza image */}
        {/* {cartstate && <CartPanel></CartPanel>} */}
        <img src={pizza} alt="pizza"></img>

      </section>
      <div className="button_section">
        <button>ORDER NOW
          <span>
             <FaArrowRight className="right_arrow"></FaArrowRight>
          </span>
        </button>
      </div>
    </>
  );
}
export default App;
