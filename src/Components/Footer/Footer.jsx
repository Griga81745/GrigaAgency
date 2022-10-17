import React from 'react';
import style from "./Footer.module.scss"
import Image from "next/image";
import logo from "../../../public/assets/images/Footer/Logo.svg"
import Links from "../Hero/Links/Links";


function Footer() {
    return (
        <div id={"footer"} className={style.wrapper}>
            <div className={style.container}>
                <div className={style.logo}>
                    <Image src={logo} alt={"logo"}/>
                </div>
                <div id={"container_rights"} className={style.container_rights}>
                    <p className={style.rights}>Griga Agency</p>
                </div>
                <div className={style.links}>
                    <Links/>
                </div>
            </div>
        </div>
    );
}

export default Footer;