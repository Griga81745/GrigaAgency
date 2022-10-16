import React from 'react';
import style from "./Technology.module.scss"
import html from "../../../public/assets/images/Technology/html.svg"
import css from "../../../public/assets/images/Technology/css.svg"
import JS from "../../../public/assets/images/Technology/js.svg"
import TS from "../../../public/assets/images/Technology/typeScript.svg"
import react from "../../../public/assets/images/Technology/logos_react.svg"
import NextJs from "../../../public/assets/images/Technology/nextJS.svg"
import NodeJs from "../../../public/assets/images/Technology/nodeJS.svg"
import Express from "../../../public/assets/images/Technology/express.svg"
import Redux from "../../../public/assets/images/Technology/redux.svg"
import Python from "../../../public/assets/images/Technology/python.svg"
import django from "../../../public/assets/images/Technology/django.svg"
import flask from "../../../public/assets/images/Technology/flask.svg"
import go from "../../../public/assets/images/Technology/go.svg"
import Image from "next/image";
import Card from "../customTags/card";

function Technology() {
    return (
        <div className={style.wrapper}>
            <h1>Технологии</h1>
            <div className={style.container_cards}>
                <div className={style.card}>
                    <div className={style.image}>
                        <Image src={html} alt={"html"}/>
                        <Image src={css} alt={"css"}/>
                    </div>
                    <p>HTML | CSS</p>
                </div>
                <Card image={JS} alt={"JS"} technology_name={"JavaScript"}/>
                <Card image={TS} alt={"TypeScript"} technology_name={"TypeScript"}/>
                <Card image={react} alt={"React"} technology_name={"React"}/>
                <Card image={NextJs} alt={"Next.js"} technology_name={"Next.js"}/>
                <Card image={NodeJs} alt={"Node.js"} technology_name={"Node.js"}/>
                <Card image={Express} alt={"Express"} technology_name={"Express"}/>
                <Card image={Redux} alt={"Redux"} technology_name={"Redux"}/>
                <Card image={Python} alt={"Python"} technology_name={"Python"}/>
                <Card image={django} alt={"Django"} technology_name={"Django"}/>
                <Card image={flask} alt={"Flask"} technology_name={"Flask"}/>
                <Card image={go} alt={"GO"} technology_name={"GO"}/>
            </div>
        </div>
    );
}

export default Technology;