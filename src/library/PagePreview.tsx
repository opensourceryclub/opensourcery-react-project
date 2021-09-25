import { CSSProperties, ReactNode } from "react";
import { ClickablePanel } from "./Layout";

interface PagePreviewProps {
    onClick : () => void,
    title : string,
    img : string | ReactNode,
    description : string,
    creator : string
}   

export default function ( props : PagePreviewProps ) {

    const { onClick, title, img, description, creator } = props

    const style = {
        img : {
            width: 80,
            margin: 10
        },
        text : {
            position: 'absolute',
            left: 150,
            padding: 10,
            top: 20,
            width: 500,
            height: 80
        },
        title : {
            position: 'absolute',
            top: 0,
            fontSize: 20,
            fontWeight: 'bold'
        },
        content : {
            position: 'absolute',
            top: 30,
            fontSize: 14
        },
        creator : {
            position: 'absolute',
            bottom: 20,
            right: 10,
            fontSize: 14,
            textAlign: 'right'
        }
    } as {[key:string] : CSSProperties}

    const imgComponent : ReactNode = (typeof img === 'string')  
        ? <img src={img as string} width="100%" style={{overflow: 'hidden'}} />
        : img

    return <ClickablePanel width={740} height={100} onClick={onClick} >
        <div style={style.img}>
            {imgComponent}
        </div>
        <div style={style.text}>
            <div style={style.title}>
                {title}
            </div>
            <div style={style.content}>
                {description}
            </div>
            <div style={style.creator}>
                Created by: {creator}
            </div>
        </div>

    </ClickablePanel>


}