import React, {useState, useEffect} from "react"

const Context = React.createContext()

/* destructuring children from props so no need to props.childlren but just {children} */
function ContextProvider ({children}) {
    
    const [photos, setPhotos] = useState([])
    const [cartItems, setCartItems] = useState([])

    /* empty array of depencies makes useEffect run once  */
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json')
            .then(res => res.json())
            .then(data => setPhotos(data))
    },[])

    function toggleFavorite(id) {
        const newArr = photos.map(photo => photo.id===id? {...photo, isFavorite:!photo.isFavorite}:photo)
        setPhotos(newArr)
    }

    /* add to or remove from cart and gives added to carted boolean true */
    function addToCart(id){
        const selectedPic = photos.filter(photo=>photo.id === id)[0]
        const alreadyInCart = cartItems.some(item=>item.id===selectedPic.id)
        console.log(cartItems)
        if(!alreadyInCart){
            setCartItems(prevState => [...prevState, selectedPic])
            const cartedArr = photos.map(photo => photo.id === id? {...photo,inCart: true} : photo)
            setPhotos(cartedArr)
        } else {
            const removedItemArr = cartItems.filter(el=>el.id !==id)
            setCartItems(removedItemArr)
            const cartedArr = photos.map(photo => photo.id === id? {...photo,inCart: false} : photo)
            setPhotos(cartedArr)
        }
        
    }

    console.log(cartItems)

    return (
        <Context.Provider value={{photos, toggleFavorite, addToCart}}>
            {children}
        </Context.Provider>
    )
    
}

export {ContextProvider, Context}