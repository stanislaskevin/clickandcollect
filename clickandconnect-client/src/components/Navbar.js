import React from 'react'
import './Navbar.css'
import SearchIcon from '@material-ui/icons/Search';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import {Link} from 'react-router-dom'

function Navbar() {
    return (
        <div className="navbar">
            <Link to="/" className="navbar_left">
                <img src="https://www.sw-siteinternet.com/wp-content/uploads/Click_Collect-Logo.png" alt="" />
            </Link>
            <div className="navbar_center">
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
                <Link to="/installerclickandconnect">Installer <i>Click and Collect</i></Link>
            </div>
            <div className="navbar_right">
                <Link to="/search">
                    <SearchIcon className="navbar_icon"/>
                </Link>
                <Link to="/basket">
                    <LocalMallIcon className="navbar_icon"/>
                </Link>
            </div>
        </div>
    )
}

export default Navbar
