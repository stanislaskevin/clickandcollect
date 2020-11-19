import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className="footer">
                <div className="footer_top">
                    <div className="footer_top_left">
                        <p>Search</p>
                    </div>
                    <div className="footer_top_right">
                        <h3>Si vous êtes intéresser pour avoir des informations sur nos produits!</h3>
                        <form>
                            <input className="" placeholder="Email address" />
                            <button>SUBSCRIBE</button>
                        </form>
                    </div>
                </div>
                <hr />
                <div className="footer_bottom">
                    <span>
                        © 2020, Store Pickup Demo by Worldigitech
                    </span>
                </div>
            </div>
    )
}

export default Footer
