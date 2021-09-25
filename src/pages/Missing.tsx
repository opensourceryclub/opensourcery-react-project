import react, { CSSProperties } from "react";
import { CenteredPanel } from "../library/Layout";
import { Button } from '../library/Buttons'
import { useRoute } from "../Router";
import { useViews } from '../Views'
import { PageMeta } from "./page.type";

export default {

    title : 'Missing Page',

    creator : 'Opensourcery',

    description : 'Shown only when a given url cant be found. Not added to the page list, but could be.',

    date : new Date('September 25, 2021'),

    thumbnail : 'Badge.png',

    page : Missing


} as PageMeta

export function Missing () {
    
    const [route, setRoute] = useRoute()

    const style = {
        textAlign: 'center',
        padding: 10,
        lineHeight: 2
    } as CSSProperties

    return <CenteredPanel width={500} height={500}>
        <img src="https://media.tenor.com/images/0c5663c2681a97e2b5245713027bf43b/tenor.png" width={500}/>
        <div style={style}>
            The page "/{route}" you were looking for could not be found. <br/>
            Try Adding it to the routes located in 'src/pages/_.ts'
        </div>
        <Button 
            text="Go back to home page" 
            onClick={() => setRoute('Home')} />
    </CenteredPanel>

}

