import React from 'react';
import Image from "next/image";
import style from "./Hero.module.scss"
import github from "../../../public/assets/images/Hero/gitHub.svg"
import telegram from "../../../public/assets/images/Hero/telegram.svg"
import mail from "../../../public/assets/images/Hero/mail.svg"
import apiImage from "../../../public/assets/images/Hero/HeroApi.svg"

function Hero() {

    return (
        <div className={style.container}>
            <div className={style.containerLeft}>
                <h1>GRIGA AGENCY</h1>
                <p>Создаем сайты которые решают бизнес задачи и приносят прибыль</p>
                <div className={style.contactICOS}>
                    <a href="https://github.com/Griga81745" target={"_blank"}>
                        <Image src={github}/>
                    </a>
                    <a href="mailto:gr_73@inbox.ru" type={mail}>
                        <Image src={mail}/>
                    </a>
                    <a href="https://t.me/FrontEnd_Dev_Griga" target={"_blank"}>
                        <Image src={telegram}/>
                    </a>
                </div>
                <button id={"animateButton"} className={style.containerLeft_Button}>Заказать проект</button>
            </div>
            <div className={style.containerRight}>
                <Image src={apiImage} alt={"apiImage"}/>
            </div>
        </div>
    );
}

export default Hero;