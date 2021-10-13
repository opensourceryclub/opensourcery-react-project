import { PageMeta } from './page.type'
import Home from './Home'
import PageList from './PageList'
import Tutorial from './Tutorial'
import EricAmazingPage from './EricAmazingPage'
import SystemPage from './SystemProcessing'


type Routes = {
    [key: string]: PageMeta
}

export const AllRoutes: Routes = {

    '': Home,

    'home': Home,

    'pagelist': PageList,

    'tutorial': Tutorial,

    'eric': EricAmazingPage,

    'system': SystemPage,

}