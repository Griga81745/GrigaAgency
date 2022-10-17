import "../styles/normolize.css"
import "../styles/gloal.scss"
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above
import {useEffect} from "react";
import ReactGA from "react-ga";

export default function ({ Component, pageProps}){
    useEffect(() => {
        if(process.env.googleAnalyticsID && process.env.NODE_ENV === "production") { // Checks for GA ID and only turns on GA in production
            ReactGA.initialize(process.env.googleAnalyticsID);
            ReactGA.pageview(window.location.pathname + window.location.search);
        }
    });
    return <Component {...pageProps}/>
}