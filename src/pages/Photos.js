import React, {useContext} from "react"
import Image from "../components/Image"
import {getClass} from "../utils"
import { Context } from "../userContext"

function Photos() {

    /* bring all data using hooks that was in state of useContext 
        import photo as exported matching name of object typ array for array etc*/
    const {photos, toggleFavorite} = useContext(Context)

    const photosToDisplap = photos.map((el, idx)=><Image key={el.id} 
            toggleFavorite={toggleFavorite} 
            img={el}
            inCart={el.inCart}
            isFavorite={el.isFavorite} 
            className={getClass(idx)} />)

    return (
        <main className="photos">
            {photosToDisplap}
        </main>
    )
}

export default Photos