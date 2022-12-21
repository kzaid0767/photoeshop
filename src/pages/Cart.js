import React, {useContext, useState} from "react"
import { Context } from "../userContext"
import Cartitem from "../components/Cartitem"

function Cart() {

    const [ordering, setOrdering] = useState(false)

    const {cartItems,addToCart,emptyCart} = useContext(Context)
    const cartItemsElements = cartItems.map(item=><Cartitem key={item.id} remove={addToCart} item={item} />)
    const totalPrice = (cartItems.length*5.99).toLocaleString("en-US", {style: "currency", currency: "USD"})

    function handleClick(){
        if(cartItems.length){
            setOrdering(true)
            setTimeout(() => {
                emptyCart()
                setOrdering(false)
                alert('Order Placed')
            }, 3000)
        } else alert('Your cart is empty')
    }

    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemsElements}
            <p className="total-cost">Total:{totalPrice} </p>
            <div className="order-button">
                {ordering? <h3>Ordering...</h3>: <button 
                onClick={handleClick}>{cartItems.length?'Place Order':'Cart Empty'}</button>}
            </div>
        </main>
    )
}

export default Cart