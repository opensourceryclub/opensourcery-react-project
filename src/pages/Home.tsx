import react, { CSSProperties } from "react";
import { CenteredPanel } from "../library/Layout";
import { Button } from '../library/Buttons'
import { useRoute } from "../Router";
import { useViews } from '../Views'
import { PageMeta } from "./page.type";

export default {

    title : 'Home Page',

    creator : 'Opensourcery',

    description : 'The home page of this project. Loaded from \'./src/pages/Home.ts\'',

    date : new Date('September 25, 2021'),

    thumbnail : 'Badge.png',

    page : HomePage


} as PageMeta


function HomePage () {

    const [route, setRoute] = useRoute()

    const style = {
        textAlign: 'center',
        padding: 10,
        lineHeight: 2
    } as CSSProperties

    return <CenteredPanel width={500} height={600}>

        <img src="Badge.png" width={300} style={{marginLeft: 100}}/>
        <div style={style}>
            Welcome to the Opensourcery React Workshop!  <br/>
            Add your own pages and show off your react-swag
        </div>
        <Button 
            text="Check out the project repo" 
            onClick={() => window.open('https://github.com/opensourceryclub/opensourcery-react-project')} />
        <Button 
            text="Opensourcery Discord" 
            onClick={() => window.open('https://discord.gg/ZNddcCw3vy')} />
        <Button 
            text="Jump into some react-tutorials" 
            onClick={() => setRoute('Tutorial')} />
        <Button 
            text="See what people have made!" 
            onClick={() => setRoute('PageList')} />
    </CenteredPanel>

}
