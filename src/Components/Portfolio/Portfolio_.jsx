import React, {useEffect} from 'react';
import Cart from "../PortfolioMain/Cart/Cart";
import style from "./Portfolio.module.scss"
import Description from "../PortfolioMain/Description/Description";
import {useState} from "react";

function Portfolio_() {
    const [projects,setProjects] = useState([])
    useEffect( () => {
        fetch('https://api.griga.shop/api/projects/')
            .then(res=>res.json())
            .then(setProjects)
    },[])
    console.log(projects)
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
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

export default Portfolio_;