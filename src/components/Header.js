import React, {useContext} from "react"
import {Link} from 'react-router-dom';
import { Context } from "../userContext";

function Header() {

    const {cartItems} = useContext(Context)
    const typeOfCart = cartItems.length? "ri-shopping-cart-fill ri-fw ri-2x" : "ri-shopping-cart-line ri-fw ri-2x"
    return (
        <header>
            <h2><Link to={'/'}>Vitenge Fashions</Link></h2>
            <Link to={'/cart'}><i className={typeOfCart}></i></Link>
        </header>
    )
}

export default Header