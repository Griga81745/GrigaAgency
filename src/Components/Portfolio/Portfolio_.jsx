import React from 'react';
import Cart from "../PortfolioMain/Cart/Cart";
import style from "./Portfolio.module.scss"

function Portfolio_() {
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                {
                    Array.apply(null,Array(6)).map(()=>(
                        <Cart/>
                    ))
                }
            </div>
        </div>
    );
}

export default Portfolio_;