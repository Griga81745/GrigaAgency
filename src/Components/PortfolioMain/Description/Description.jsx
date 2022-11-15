import React, {useState} from 'react';
import style from "./Description.module.scss";
import Image from "next/image";
import arrow from "../../../../public/assets/images/PortfolioMain/arrow.svg";
import githubICO from "../../../../public/assets/images/PortfolioMain/github.svg";

export default function ({project, GitLink}) {
    const [active, setActive] = useState(false)

    function set_Active(){
        setActive(active => ! active);
    }

    return (
        <div>
            <div className={style.portfolio_description} style={{maxHeight: active?"1000px":"50px", transitionDuration: "0.5s"}}>
                <div className={style.portfolio_description_descriptionTag_container}>
                    <div id={"description_1"} onClick={set_Active} className={style.portfolio_description_descriptionTag}>
                        <p style={{userSelect: "none"}}>Подробнее</p>
                        <Image src={arrow} alt={"arrow"} style={{transform: active? 'rotate(180deg)':"", transitionDuration: "0.5s"}}/>
                    </div>
                </div>
                <div className={style.portfolio_descriptionTag}>
                    <p>Стек технологий</p>
                </div>
                <div className={style.portfolio_description_stack}>
                    <ul>
                        {
                            project.stack.map(Stack=><li key={Stack}>{Stack}</li>)
                        }
                    </ul>
                </div>
                <div className={style.portfolio_description_githubICO}>
                    <a href={GitLink} target={"_blank"}>
                        <Image src={githubICO} alt={"github"}/>
                    </a>
                </div>
            </div>
        </div>
    );
}

