import react from "react";
import { CenteredPanel } from "../library/Layout";
import { Button } from '../library/Buttons'
import { useRoute } from "../Router";
import { useViews } from '../Views'

export function describe(){
    return {
        name : 'Home Page',
        creator : 'Opensourcery',
        img : 'Badge.png',
        description: "The home page of this project. Loaded from './src/pages/Home.js",
        render : Render
    }
}

function Render () {
    
    const [route, setRoute] = useRoute()

    const style = {
        textAlign: 'center',
        padding: 10,
        lineHeight: 2
    }

    return <CenteredPanel width={500} height={600}>
        <img src="Badge.png" width={300} style={{marginLeft: 100}}/>
        <div style={style}>
            Welcome to the Opensourcery React Workshop!  <br/>
            Add your own pages and show off your react-swag
        </div>
        <Button 
            text="Jump into some react-tutorials" 
            onClick={() => setRoute('Tutorial')} />
        <Button 
            text="See what people have made!" 
            onClick={() => setRoute('PageList')} />
    </CenteredPanel>

}