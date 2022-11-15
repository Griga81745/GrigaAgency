import React, {useEffect, useRef, useState} from 'react';
import style from "./PortfolioMain.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Cart from "./Cart/Cart";
import Description from "./Description/Description";

function PortfolioMain() {
    const [projects,setProjects] = useState([])
    useEffect( () => {
        fetch('http://127.0.0.1:8000/api/projects/')
            .then(res=>res.json())
            .then(setProjects)
    },[])
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
                    projects.map((item)=>(
                        <div key={item.id}>
                            <Cart Href={item.link} Src={item.image} Alt={"project"}/>
                            <Description GitLink={item.link_github} project={item}/>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default PortfolioMain;