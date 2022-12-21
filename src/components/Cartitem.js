import React, {useState} from 'react'


function Cartitem({item, remove}) {

    const [mouseOn, setMouseOn] = useState(false)

    const style = mouseOn? "ri-delete-bin-fill" : "ri-delete-bin-line"

    return (
        <div className="cart-item">
            <i onClick={()=>remove(item.id)}
            onMouseEnter={()=>setMouseOn(true)}
            onMouseLeave={()=>setMouseOn(false)}
            className={style}></i>
            <img src={item.url} alt='item to be bought' width="130px" />
            <p>$5.99</p>
        </div>
    )
}

export default Cartitem