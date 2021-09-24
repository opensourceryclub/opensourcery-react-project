import { routes, useRoute } from './Router';
import Missing from './pages/Missing'
import { useState } from 'react';
import { useViews } from './Views';
import { routeDescription, routePaths } from './pages/_';
import { ViewIndicator } from './library/ViewIndicator';

export let forceUpdate = () => {}

export default function App() {

    const [, updateState] = useState();
    forceUpdate = () => updateState({})

    const [route, setRoute] = useRoute()
    const pageViews = useViews( routePaths )

    if ( ! pageViews )
        return <div />

    let Page = undefined

    if ( ! ( route in routeDescription ))
        Page = Missing
    else 
        Page = routeDescription[route].render

    return <div>
        <Page /> 
        <ViewIndicator page={route} />
    </div>


}