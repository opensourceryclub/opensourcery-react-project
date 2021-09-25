import { useEffect, useState } from "react"

// Utility file to track page views localy

const api = 'https://jurrgicv60.execute-api.us-east-1.amazonaws.com/'
const cached = {} as {[req:string] : any}

// Adds a view to a page
export function recordView ( page : string ) {

    fetch( api + "recordView", {
        method : "POST",
        body : JSON.stringify({
            pageIdentifier : page
        })
    } )

}

// Hook for pulling in number of views for pages
export function useViews ( pages : string[] ) {

    const [data, setData] = useState()

    const requestID = JSON.stringify( pages )
    const request_body = { identifiers : pages }
    const request = {  method : "POST", body : JSON.stringify(request_body) }

    useEffect(() => {

        if ( requestID in cached )
            setData( cached[requestID] )
        
        else
            fetch( api + "readViews", request )
                .then(response => response.json())
                .then(results => {
                    const map = {} as any
                    results.forEach( (r : any) => map[r.pageIdentifier] = r.pageViews.length )
                    pages.forEach( p => map[p] = !(p in map) ? 0 : map[p])
                    cached[requestID] = map
                    return map
                })
                .then ( setData as any )

    }, pages)

    return data

}