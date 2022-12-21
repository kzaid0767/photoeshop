import React from 'react'
import PropTypes from "prop-types"
import useHover from '../hooks/useHover'


function Cartitem({item, remove}) {

    //const [mouseOn, setMouseOn] = useState(false)

    /* custom hooks handles the hover and its changing */
    const [hovered, buttonRef] = useHover()

    const style = hovered? "ri-delete-bin-fill" : "ri-delete-bin-line"

    return (
        <div className="cart-item">
            <i onClick={()=>remove(item.id)}
            ref={buttonRef}
            className={style}></i>
            <img src={item.url} alt='item to be bought' width="130px" />
            <p>{item.price}</p>
        </div>
    )
}

Cartitem.propTypes = {
    item: PropTypes.shape({
        url: PropTypes.string.isRequired
    })
}

export default Cartitem