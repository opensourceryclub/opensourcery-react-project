import react, { CSSProperties } from "react";
import { CenteredPanel } from "../library/Layout";
import { Button } from '../library/Buttons'
import { useRoute } from "../Router";
import { useViews } from '../Views'
import { PageMeta } from "./page.type";

export default {

    title: 'Eric\'s Cool page',

    creator: 'Me',

    description: 'So you all learn react + me showwing off a bit',

    date: new Date('September 25, 2021'),

    thumbnail: 'eric.jfif',

    page: EricsPage


} as PageMeta


function EricsPage() {

    const [route, setRoute] = useRoute()

    const style = {
        textAlign: 'center',
        padding: 10,
        lineHeight: 2
    } as CSSProperties

    const background = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: "100%",
        height: '100%',
        backgroundImage: `url(
            https://www.umd.edu/sites/umd.edu/files/IMG_7118-NYSE_IONQ_1920x1080-1.jpg)`
    } as CSSProperties

    return <div style={background}>
        <CenteredPanel width={500} height={600}>
            <img src="eric.jfif" width={300} style={{ marginLeft: 100 }} />

            <Button text="Click me plz" onClick={() => { console.log("clicked") }} />

        </CenteredPanel>
    </div>


}
