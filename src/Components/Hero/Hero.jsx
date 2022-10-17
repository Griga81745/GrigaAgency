import React from 'react';
import Image from "next/image";
import style from "./Hero.module.scss"
import apiImage from "../../../public/assets/images/Hero/HeroApi.webp"
import Links from "./Links/Links";

function Hero() {

    return (
        <div id={"hero"} className={style.container}>
            <div className={style.containerLeft}>
                <h1>GRIGA AGENCY</h1>
                <p>Создаем сайты которые решают бизнес задачи и приносят прибыль</p>
                <Links/>
                <button id={"animateButton"} className={style.containerLeft_Button}>Заказать проект</button>
            </div>
            <div className={style.containerRight}>
                <Image src={apiImage} alt={"apiImage"} placeholder={"blur"}/>
            </div>
        </div>
    );
}

export default Hero;