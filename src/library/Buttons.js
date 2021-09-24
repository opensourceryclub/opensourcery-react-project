import { useState } from "react/cjs/react.development"
import Colors from "../Colors"

export function Button ( props ) {

    const [hover, setHover] = useState(false)
    const [click, setClick] = useState(false)

    const { style, text, onClick, color } = props
    const pallet = color ? Colors[color] : Colors['blue']

    const componentStyle = {
        borderRadius : 5,
        textAlign: 'center',
        cursor : 'pointer',
        padding: 10,
        margin: 10,
        height: 20,
        lineHeight: '20px',
        background : hover ? pallet.primaryDark : pallet.primary,
        boxShadow: hover ? `0 0 8px ${pallet.shadow}` : '',
        color: 'white',
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
        {text}
    </div>

}