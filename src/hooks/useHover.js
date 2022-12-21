import {useState, useEffect, useRef} from 'react'

function useHover() {

    const [hovered, setHovered] = useState(false)
    const buttonRef = useRef(null)

    function mouseEnter(){
        setHovered(true) 
    }
    
    function mouseLeave(){
        setHovered(false)
    }

    useEffect(()=>{
        const usedButtonRef = buttonRef.current
        usedButtonRef.addEventListener('mouseenter', mouseEnter)
        usedButtonRef.addEventListener('mouseleave', mouseLeave)

        return ()=>{
            usedButtonRef.removeEventListener('mouseenter', mouseEnter)
            usedButtonRef.removeEventListener('mouseleave', mouseLeave)
        }
    },[])

    return [hovered,buttonRef]
}

export default useHover