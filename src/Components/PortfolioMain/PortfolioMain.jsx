import React, {useEffect, useRef} from 'react';
import style from "./PortfolioMain.module.scss"
import portfolioImage_1 from "../../../public/assets/images/PortfolioMain/edwardPortfolio.jpg"
import Image from "next/image";
import Description from "./Description/Description";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

function PortfolioMain() {

    return (
        <div id={"portfolio"} className={style.wrapper}>
            <div className={style.tag_container}>
                <h1>Портфолио</h1>
                <div className={style.see_more_container}>
                    <a href="/portfolio" className={style.see_more}>
                        <p>Посмотреть больше</p>
                        <FontAwesomeIcon icon={faChevronRight}/>
                    </a>
                </div>
            </div>
            <div className={style.portfolio_wrapper}>
                {
                    Array.apply(null,Array(3)).map(()=>(
                        <div className={style.portfolio_container}>
                            <div className={style.portfolio_container_position}>
                                <div className={style.portfolio_imageContainer}>
                                    <a href="/" target={"_blank"}>
                                        <Image className={style.portfolio_image} src={portfolioImage_1} width={320} height={320} alt={"portfolio image"} placeholder={"blur"}/>
                                    </a>
                                </div>
                            </div>
                            <Description/>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default PortfolioMain;