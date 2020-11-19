import React from 'react'
import './Home.css'
import Header from '../components/home/Header'
import Product from '../components/Products/Product'
import img1 from '../assets/hamburger-and-fries.jpg'
import img2 from '../assets/qr-codes-in-store.jpg'
import img3 from '../assets/striped-fashion-shirt.jpg'
import img4 from '../assets/products-are-paid.jpg'
import img5 from '../assets/collecting-order-at-curbside-from-retail-store.jpg'
import img6 from '../assets/retail-shopping-package.jpg'

function Home() {
    return (
        <div className="home">
            <Header />
            <div className="home_product">
                <h2>Produits</h2>
                <div className="home_product_contain">
                    <Product 
                        url={img1}
                        title="Hamburger et Frite"
                        price={15.83}
                    />
                    <Product 
                        url={img2}
                        title="Gueruty pharma"
                        price={8.87}
                    />
                    <Product 
                        url={img3}
                        title="Fashion tshirt"
                        price={47.81}
                    />
                </div>
            </div>
            <div className="home_section_img">
                <img src={img4} alt="" />
                <img src={img6} alt="" />
                <img src={img5} alt="" />
            </div>
        </div>
    )
}

export default Home
