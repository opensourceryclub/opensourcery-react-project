import { useState } from "react";
import { forceUpdate } from "./App";
import { recordView } from "./Views";

const routeStack = []

function currentRoute () {
    let url = window.location.href.split('/')
    let last = url[ url.length - 1].toLowerCase()
    return last.length == 0 ? "home" : last
}

export function useRoute () {

    const route = currentRoute()

    const updateRoute = ( new_route ) => {
        if ( new_route == route ) return
        let old_route = window.location.href.split('/')
        old_route[ old_route.length -1 ] = new_route
        window.history.pushState(undefined,"", old_route.join('/'))
        recordView( new_route.toLowerCase() )
        forceUpdate()
    }

    return [route, updateRoute]

}

routeStack.push(currentRoute())
recordView(currentRoute())

window.onpopstate = function () {
    forceUpdate()
}