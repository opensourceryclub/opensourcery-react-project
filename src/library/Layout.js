import { useState } from "react/cjs/react.development"
import Colors from "../Colors"

export function CenteredPanel ( props ) {

    const { style, width, height, children } = props

    const componentStyle = {
        width,
        height,
        position: 'absolute',
        borderRadius : 3,
        top: `calc(50% - ${height/2}px)`,
        left: `calc(50% - ${width/2}px)`,
        ...style
    }

    return <div style={componentStyle}>
        {children}
    </div>

}


export function ClickablePanel ( props ) {

    const [hover, setHover] = useState(false)
    const [click, setClick] = useState(false)

    const { style, width, height, children, color, onClick } = props
    const pallet = color ? Colors[color] : Colors['blue']

    const componentStyle = {
        width,
        height,
        cursor : 'pointer',
        borderRadius : 3,
        top: `calc(50% - ${height/2}px)`,
        left: `calc(50% - ${width/2}px)`,
        margin: 20,
        padding: 10,
        position: 'relative',
        boxShadow: hover ? `0 0 8px ${pallet.shadow}` : '',
        ...style
    }

    if ( click )
        componentStyle.boxShadow = `0 0 8px inset ${pallet.shadow}`
        
    return <div 
        style={componentStyle}
        onMouseEnter={()=>setHover(true)}
        onMouseLeave={()=>{setHover(false); setClick(false)}}
        onMouseDown={()=>setClick(true)}
        onMouseUp={()=>{setClick(false);onClick()}}>
            {children}
    </div>

}
