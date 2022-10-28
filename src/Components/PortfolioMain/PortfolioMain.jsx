import React, {useEffect, useRef} from 'react';
import style from "./PortfolioMain.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Cart from "./Cart/Cart";
import Description from "./Description/Description";

function PortfolioMain() {

    return (
        <div id={"portfolio"} className={style.wrapper}>
            <div className={style.tag_container}>
                <h1>Портфолио</h1>
                <div className={style.see_more_container}>
                    <Link href="/portfolio">
                        <a href="/portfolio" className={style.see_more}>
                            <p>Посмотреть больше</p>
                            <FontAwesomeIcon className={style.see_more_arrow} icon={faChevronRight}/>
                        </a>
                    </Link>
                </div>
            </div>
            <div className={style.portfolio_wrapper}>
                {
                    Array.apply(null,Array(3)).map(()=>(
                        <div>
                            <Cart Href={"https://edwardtrubin.com/"} Src={"edwardPortfolio.webp"} Alt={"Edward Trubin Portfolio"}/>
                            <Description Stack1={"HTML | CSS"} Stack2={"JavaScript"} Stack3={"React"} Stack4={"Next.js"} Stack5={"Redux"} GitLink={"https://github.com/Griga81745"}/>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default PortfolioMain;