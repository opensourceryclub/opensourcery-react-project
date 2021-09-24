import react from "react";
import { CenteredPanel } from "../library/Layout";
import { Button } from '../library/Buttons'
import { useRoute } from "../Router";
import { useViews } from '../Views'

export function describe(){
    return {
        name : 'Tutorial Page',
        creator : 'Opensourcery',
        img : 'Badge.png',
        description: "Some links to help you get started. Libraries and packages can be added through NPM and can be tremendously helpful. Dont reinvent the wheel! Loaded from './src/pages/Tutorial.js",
        render : Render
    }
}

function Render () {
    
    const style = {
        textAlign: 'center',
        padding: 10,
        lineHeight: 2
    }

    return <CenteredPanel width={500} height={600}>
        <div style={style}>
            This is a few resources you may want to check out to get started!  <br/>
            Add your own pages and show off your react-swag
        </div>
        <Button 
            text="Official React Tutorial" 
            onClick={() => window.open(
                'https://reactjs.org/tutorial/tutorial.html'
            )} />
        <Button 
            text="Material UI (popular component framework)" 
            onClick={() => window.open(
                'https://mui.com/getting-started/installation/'
            )} />
        <Button 
            text="React Icons (Simple Icon Pack)" 
            onClick={() => window.open(
                'https://react-icons.github.io/react-icons/'
            )} />
    </CenteredPanel>

}