import { CSSProperties } from "react"
import Colors from "../Colors"
import { useViews } from "../Views"

interface ViewIndicatorProps {
    page : string,
    color ?: string,
    style ?: CSSProperties
}

export function ViewIndicator ( props : ViewIndicatorProps ) {

    const { page, color, style } = props
    const views = useViews([page])

    if ( ! views ) return <div/>

    const pallet = color ? Colors[color] : Colors['blue']

    const componentStyle = {
        position : 'absolute',
        right: 5,
        bottom: 5,
        padding: 5,
        borderRadius: 5,
        textAlign: 'right',
        background : pallet.primary,
        ...style
    } as CSSProperties

    return <div 
        style={componentStyle}>
        {views[page]} Views
    </div>

}