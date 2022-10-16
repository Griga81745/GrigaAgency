import React from 'react';
import style from "./Footer.module.scss"
import Image from "next/image";
import logo from "../../../public/assets/images/Footer/Logo.svg"
import github from "../../../public/assets/images/Footer/gitHub.svg"
import mail from "../../../public/assets/images/Footer/mail.svg"
import telegram from "../../../public/assets/images/Footer/telegram.svg"
import Links from "../Hero/Links/Links";


function Footer() {
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <div className={style.logo}>
                    <Image src={logo}/>
                </div>
                <div id={"container_rights"} className={style.container_rights}>
                    <p className={style.rights}>© 2020 Griga Agency. All rights reserved. </p>
                </div>
                <div className={style.links}>
                    <Links/>
                </div>
            </div>
        </div>
    );
}

export default Footer;