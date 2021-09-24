import Colors from "../Colors"
import { useViews } from "../Views"

export function ViewIndicator ( props ) {

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
    }

    return <div 
        style={componentStyle}>
        {views[page]} Views
    </div>

}