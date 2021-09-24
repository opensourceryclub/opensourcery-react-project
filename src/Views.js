import { useState } from "react"

// Utility file to track page views localy

const api = 'https://jurrgicv60.execute-api.us-east-1.amazonaws.com/'
const cached = {}

// Adds a view to a page
export function recordView ( page ) {

    fetch( api + "recordView", {
        method : "POST",
        body : JSON.stringify({
            pageIdentifier : page
        })
    } )

}

// Hook for pulling in number of views for pages
export function useViews ( pages ) {

    const [state, setState] = useState()
    const [step, setStep] = useState('initial')
    const [request_id, setRequest] = useState(JSON.stringify( pages ))

    const request_body = { identifiers : pages }
    const request = {  method : "POST", body : JSON.stringify(request_body) }

    if ( request_id != JSON.stringify( pages )){
        setRequest( JSON.stringify( pages ) )
        setState()
        setStep('initial')
    }

    if ( step == 'done' ) return state
    if ( step == 'waiting' ) return state

    if ( request_id in cached ) {
        if ( 'value' in cached[request_id] ){
            setState( cached[request_id].value)
            setStep( 'done' )
            return state
        }
        else {
            cached[request_id].callbacks.push(data => {
                setState( data)
                setStep( 'done' )
            })
            setStep( 'waiting' )
            return 
        }
    }

    setStep( 'waiting' )
    cached[request_id] = {
        callbacks : []
    }
    fetch( api + "readViews", request )
        .then(response => response.json())
        .then(results => {
            const map = {}
            results.forEach( r => {
                map[r.pageIdentifier] = r.pageViews.length
            })
            pages.forEach( p => {
                if ( !(p in map) ) map[p] = 0
            })
            return map
        })
        .then ( results => {

            setStep('done')
            setState(results)
            cached[request_id].value = results

            cached[request_id].callbacks.forEach( c => c(results) )

        })
        
}