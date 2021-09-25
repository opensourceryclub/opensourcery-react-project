import { Missing } from './pages/Missing'
import { useState } from 'react';
import { useViews } from './Views';
import { ViewIndicator } from './library/ViewIndicator';
import { useRoute } from './Router';
import { AllRoutes } from './pages/_'

export let forceUpdate = () => {}

export default function App() {

    const [, updateState] = useState( undefined as any );
    forceUpdate = () => updateState({})

    const [route, setRoute] = useRoute()
    const pageViews = useViews( Object.keys(AllRoutes) )

    if ( ! pageViews )
        return <div />

    let Page = undefined

    if ( ! ( route in AllRoutes ))
        Page = Missing
    else 
        Page = AllRoutes[route].page

    return <div>
        <Page /> 
        <ViewIndicator page={route} />
    </div>


}