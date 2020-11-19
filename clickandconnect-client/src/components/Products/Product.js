import React from 'react'
import './Product.css'
import {Link} from 'react-router-dom'

function Product({url, title, price}) {
    return (
        <div className="product">
            <Link className="product_item" to="/productDetail">
                <img src={url} />
                <p>{title}</p>
                <span>€{price}</span>
            </Link>
        </div>
    )
}

export default Product
