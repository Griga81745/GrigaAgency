import React, {useEffect} from 'react';
import Cart from "../PortfolioMain/Cart/Cart";
import style from "./Portfolio.module.scss"
import Description from "../PortfolioMain/Description/Description";
import {useState} from "react";
import axios from "axios";

function Portfolio_() {
    const [projects,setProjects] = useState([])
    useEffect( () => {
        fetch('http://127.0.0.1:8000/api/projects/')
            .then(res=>res.json())
            .then(setProjects)
    },[])
    console.log(projects)
    console.log(projectZero)
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                {
                    Array.apply(null,Array(projects.id)).map(()=>(
                        <div>
                            <Cart Href={projects[0]} Src={""} Alt={"Project load error"}/>
                            <Description Stack1={" | Get in api"} Stack2={"JavaScript"} Stack3={"React"} Stack4={"Next.js"} Stack5={"Redux"} GitLink={"https://github.com/Griga81745"}/>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Portfolio_;