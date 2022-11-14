import React from 'react';
import style from "./Cart.module.scss";
import Image from "next/image";

export default function ({Href, Src, Alt}){
    return (
        <div>
            <div className={style.portfolio_container}>
                <div className={style.portfolio_container_position}>
                    <div className={style.portfolio_imageContainer}>
                        <a href={Href} target={"_blank"}>
                            <Image className={style.portfolio_image} src={Src} width={320} height={320} alt={Alt}/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

