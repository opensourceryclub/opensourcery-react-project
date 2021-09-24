import react from "react";
import { CenteredPanel } from "../library/Layout";
import { Button } from '../library/Buttons'
import { useRoute } from "../Router";
import { useViews } from '../Views'


export default function Mising () {
    
    const [route, setRoute] = useRoute()

    const style = {
        textAlign: 'center',
        padding: 10,
        lineHeight: 2
    }

    return <CenteredPanel width={500} height={500}>
        <img src="https://media.tenor.com/images/0c5663c2681a97e2b5245713027bf43b/tenor.png" width={500}/>
        <div style={style}>
            The page "/{route}" you were looking for could not be found. <br/>
            Try Adding it to the routes located in 'src/pages/_.js'
        </div>
        <Button 
            text="Go back to home page" 
            onClick={() => setRoute('Home')} />
    </CenteredPanel>

}

