import React, {useState, useContext} from 'react'
import PropTypes from 'prop-types';
import { Context } from '../userContext';
import useHover from '../hooks/useHover';

/* you can also bring toggle favorite using context instead of props from photos */
function Image({className,img,toggleFavorite,isFavorite,inCart}) {

  // const [hovered, setHovered] = useState(false)

  const [hovered,buttonRef] = useHover()

  const {addToCart} = useContext(Context)

 /*  
  These were used before custom hook was created

  function mouseEnter(){
    setHovered(true) 
  }

  function mouseLeave(){
    setHovered(false)
  } */

  /* function the return cart icon is item is cart already */
  function isCarted(){
    if(inCart){
      return <i onClick={()=>addToCart(img.id)} className="ri-shopping-cart-fill cart"></i>
    } else if(hovered) {
      return <i onClick={()=>addToCart(img.id)} className="ri-add-circle-line cart"></i>
    }
  }

  return (
    <div ref={buttonRef} className={`${className} image-container`}>
            {hovered && <i onClick={()=>toggleFavorite(img.id)} className="ri-heart-line favorite"></i>}
            {isFavorite && <i onClick={()=>toggleFavorite(img.id)} className="ri-heart-fill favorite"></i>}
            {isCarted()}
            <img src={img.url} alt={'one of images for sale'} className="image-grid"/>
        </div>
  )
}

/* gives a warning when one these prop conditions are not met */
Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.shape({
      id: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      isFavorite: PropTypes.bool
  })
}

export default Image