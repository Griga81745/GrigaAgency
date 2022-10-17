import React from 'react';
import Head from "next/head";
import Image from "next/image";
import Logo from "../../../public/assets/images/Header/Logo.png"
import style from "./Header.module.scss"
import A from "../customTags/A";

function Header(props) {
    return (
        <div>
            <Head>
                <title>GRIGA AGENCY</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className={style.header_Container}>
                <div className={style.header_container_flex}>
                    <a href="/">
                        <Image src={Logo}/>
                    </a>
                    <div className={style.headerLinks_adaptation}>
                        <div id="header-links" className={style.headerLinks}>
                            <A href={"/"} text={"Главная"}/>
                            <A href={"/"} text={"Портфолио"}/>
                            <A href={"/"} text={"Обо мне"}/>
                            <A href={"/"} text={"Технологии"}/>
                            <A href={"/"} text={"Контакты"}/>
                        </div>
                    </div>
                    <button>Заказать</button>
                </div>
            </header>
        </div>
    );
}

export default Header;