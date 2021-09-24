import * as Home from './Home'
import * as PageList from './PageList'
import * as Tutorial from './Tutorial'

const routes = {
    '' : Home,
    'home' : Home,
    'tutorial' : Tutorial,
    'pagelist' :  PageList
}

export const routeDescription = {}
export const routePaths = Object.keys( routes )

routePaths.map( p => {
    if (routes[p].describe)
        routeDescription[p] = routes[p].describe()
    else    
        console.log('Page', p, 'does not have a describe function, not adding to page list. Make sure its formated right!')
})

 