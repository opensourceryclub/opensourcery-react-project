import { ReactNode } from "react";

export interface PageMeta {

    // The title of the page 
    title : string,

    // Your name
    creator : string,

    // Description shown of your page
    description : string,

    // Date of publication
    date : Date, 

    // Image path or component for thumbnail
    thumbnail : ReactNode | string,

    // The page itself as a react component
    page : () => JSX.Element

}