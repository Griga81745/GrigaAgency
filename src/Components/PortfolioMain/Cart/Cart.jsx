import React from 'react';
import style from "./Cart.module.scss";
import Image from "next/image";
import portfolioImage_1 from "../../../../public/assets/images/PortfolioMain/edwardPortfolio.webp";
import Description from "../Description/Description";

function Cart() {
    return (
        <div>
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
        </div>
    );
}

export default Cart;