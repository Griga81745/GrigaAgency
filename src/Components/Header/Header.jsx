import React from 'react';
import Head from "next/head";
import Image from "next/image";
import Logo from "../../../public/assets/images/Header/Logo.png"
import style from "./Header.module.scss"
import A from "../customTags/A";
import Order from "../customTags/order";

function Header(props) {

    return (
        <div>
            <Head>
                <title>GRIGA AGENCY</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="Заказать сайт под ключ. Агенство разработки сайтов. грига агенство. Заказ сайта. Разработка сайта. Агенство которое сделает сайт. грига шоп. griga shop. заказать сайт." />
                <meta name='viewport' content='width=device-width,initial-scale=1, maximum-scale=5'/>
                <meta content='true' name='HandheldFriendly'/>
                <meta content='width' name='MobileOptimized'/>
                <meta content='yes' name='apple-mobile-web-app-capable'/>
            </Head>
            <header className={style.header_Container}>
                <div className={style.header_container_flex}>
                    <a href="/">
                        <Image src={Logo} alt={"logo"}/>
                    </a>
                    <div className={style.headerLinks_adaptation}>
                        <div id="header-links" className={style.headerLinks}>
                            <A href={"#hero"} text={"Главная"}/>
                            <A href={"#portfolio"} text={"Портфолио"}/>
                            <A href={"#OurUs"} text={"О нас"}/>
                            <A href={"#technology"} text={"Технологии"}/>
                            <A href={"#footer"} text={"Контакты"}/>
                        </div>
                    </div>
                    <Order/>
                </div>
            </header>
        </div>
    );
}

export default Header;