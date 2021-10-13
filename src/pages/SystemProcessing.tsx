import react, { CSSProperties } from "react";
import { CenteredPanel } from "../library/Layout";
import { Button } from '../library/Buttons'
import { useRoute } from "../Router";
import { useViews } from '../Views'
import { PageMeta } from "./page.type";

export default {

    title : 'System Processing',

    creator : 'Lana',

    description : 'System processing',

    date : new Date('September 25, 2021'),

    thumbnail : 'https://lh3.googleusercontent.com/proxy/UXH-pl02x69xyKtpaqIJSwwDbp62WNJasAZQ8X0RynQJ5Kse-PcZkKbI8ZenzwOgNluoPXw32K5LSFMjyLR47xrUvRvi2Qy9GA',

    page : SystemPage


} as PageMeta


function SystemPage () {

    const [route, setRoute] = useRoute()

    const style = {
        textAlign: 'center',
        padding: 10,
        lineHeight: 2
    } as CSSProperties

    return <CenteredPanel width={500} height={600}>

        <div style={style}>
            Welcome to the System Processing page!  <br/>
            Still a work in process!
        </div>
    </CenteredPanel>

}
