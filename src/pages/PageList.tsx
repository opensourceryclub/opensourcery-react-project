import { useRoute } from "../Router";
import PagePreview from "../library/PagePreview";
import Colors from "../Colors";
import { PageMeta } from "./page.type";
import { CSSProperties } from "react";
import { AllRoutes } from "./_";

export default {

    title : 'Page List',

    creator : 'Opensourcery',

    description : 'The page you are on right now! Since this page shows you all pages on the application, it also shows itself! Clicking on it will redirect you to the current page.',

    date : new Date('September 25, 2021'),

    thumbnail : 'Badge.png',

    page : PageList

} as PageMeta


function PageList () {
    
    const [route, setRoute] = useRoute()
    
    const style = {
        width: 800,
        marginLeft: `calc(50% - 400px)`
    } as CSSProperties

    return <div style={style}>

        <div style={{fontSize: 40, margin: 50, textAlign: 'center', color: Colors.blue.primaryDark}}>
            Opensourcery React
        </div>

        <div style={{lineHeight: 2, margin: 30, }}>
            This is a full list of pages in this project. Add your own pages by creating a React Component in the './src/pages' directory and adding it to the routes in './src/pages/_.ts'. <br/>
            Pages should return a describe function that will allow the project to render them properly on this list.
        </div>
        {
            Object.keys(AllRoutes)
                .filter( r => r.length)
                .map ( r =>
                    <PagePreview 
                        key={AllRoutes[r].title}
                        creator={AllRoutes[r].creator}
                        img={AllRoutes[r].thumbnail}
                        title={AllRoutes[r].title}
                        description={AllRoutes[r].description}
                        onClick={()=>setRoute(r)}
                    />
                )
        }
        
    </div>

}