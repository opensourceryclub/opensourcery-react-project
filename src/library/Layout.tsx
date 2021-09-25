import { CSSProperties, useState } from "react"
import Colors from "../Colors"

interface CenteredPanelProps {
    style ?: CSSProperties,
    width : number,
    height : number,
    children : React.ReactNode
}

export function CenteredPanel ( props : CenteredPanelProps ) {

    const { style, width, height, children } = props

    const componentStyle = {
        width,
        height,
        position: 'absolute',
        borderRadius : 3,
        top: `calc(50% - ${height/2}px)`,
        left: `calc(50% - ${width/2}px)`,
        ...style
    } as CSSProperties

    return <div style={componentStyle}>
        {children}
    </div>

}

interface ClickablePanelProps {
    style ?: CSSProperties,
    width : number,
    height : number,
    children : React.ReactNode,
    color ?: string,
    onClick : () => void
}
export function ClickablePanel ( props : ClickablePanelProps ) {

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
    } as CSSProperties

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
