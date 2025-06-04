import { Link } from "react-router-dom"
import {useEffect, useState} from 'react'
import '../styles/pizza.css'
function Pizzas({cart,setCart}){
    let [images,setImages] = useState([])
    
    useEffect(() => {
        let data = async () => {
            let fetched_images = await fetch("https://api.unsplash.com/search/photos?page=1&query=pizza&client_id=V18lE3WLPMYH9_0_-9H36JeQMRb9_X3Ks1MkEG5osv8")
            let json_data = await fetched_images.json()
            // console.log(json_data)
            setImages(json_data.results.slice(0,6))
        }

        data()
    },[])
    let createIncrease = () => {
        cart++
        setCart(cart)
    }
    return(
        <>
            <Link to='/' className="backPageLink">
                <span>Go back to Home page</span>
            </Link>
            <div className="pizza_cont">
                {images.map(img => {
                    return (
                        <div>
                            <img className="pizza_img" src={img.urls.raw} alt={img.alt_description}></img>
                            <p>{img.alt_description}</p>
                            <button onClick={() => {
                                createIncrease()
                                console.log(img.alt_description)
                            }}>Add to Cart</button>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
export default Pizzas