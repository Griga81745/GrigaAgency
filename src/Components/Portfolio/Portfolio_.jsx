import React from 'react';
import Cart from "../PortfolioMain/Cart/Cart";
import style from "./Portfolio.module.scss"
import Description from "../PortfolioMain/Description/Description";

function Portfolio_() {
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                {
                    Array.apply(null,Array(6)).map(()=>(
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

export default Portfolio_;