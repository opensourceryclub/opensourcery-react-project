import { CenteredPanel } from "../library/Layout";
import { Button } from '../library/Buttons'
import { useRoute } from "../Router";
import { useViews } from '../Views'
import { routeDescription, routePaths } from "./_";
import PagePreview from "../library/PagePreview";
import Colors from "../Colors";

export function describe(){
    return {
        name : 'Page List',
        creator : 'Opensourcery',
        img : 'Badge.png',
        description: "The page you are on right now! Since this page shows you all pages on the application, it also shows itself! Clicking on it will redirect you to the current page.",
        render : Render
    }
}

function Render () {
    
    const [route, setRoute] = useRoute()
    const activeRoutes = routePaths.filter( r => 
        ( r in routeDescription ) && routeDescription[r] && r.length > 0)
    const descriptions = activeRoutes.map( r => ({
        ...routeDescription[r],
        route : r
    }))

    const style = {
        width: 800,
        marginLeft: `calc(50% - 400px)`
    }

    return <div style={style}>
        <div style={{fontSize: 40, margin: 50, textAlign: 'center', color: Colors.blue.primaryDark}}>
            Opensourcery React
        </div>
        <div style={{lineHeight: 2, margin: 30, }}>
            This is a full list of pages in this project. Add your own pages by creating a React Component in the './src/pages' directory and adding it to the routes in './src/pages/_.js'. <br/>
            Pages should return a describe function that will allow the project to render them properly on this list.
        </div>
        {
            descriptions.map ( d =>
                <PagePreview 
                    key={d.name}
                    creator={d.creator}
                    img={d.img}
                    title={d.name}
                    description={d.description}
                    onClick={()=>setRoute(d.route)}
                />
            )
        }
        
    </div>

}