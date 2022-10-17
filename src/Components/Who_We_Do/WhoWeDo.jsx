import React from 'react';
import style from "./WhoWeDo.module.scss"
import screen from "../../../public/assets/images/Who_We_Do/screen.png"
import loop from "../../../public/assets/images/Who_We_Do/loop.png"
import cube from "../../../public/assets/images/Who_We_Do/cube.png"
import Image from "next/image";

function WhoWeDo() {
    return (
        <div id={"OurUs"} className={style.wrapper}>
            <div className={style.tag}>
                <h1>Чем мы занимаемся?</h1>
            </div>
            <div className={style.all_block_container}>
                <div className={style.container}>
                    <Image src={screen} alt={"screen"}/>
                    <div className={style.underline}></div>
                    <div className={style.text}>
                        <h1>Разработка</h1>
                        <p>создание современных <br/> веб приложений</p>
                        <p>разработка логики <br/> компонента или <br/> приложения</p>
                    </div>
                </div>
                <div className={style.container}>
                    <Image src={loop} alt={"loop"}/>
                    <div className={style.underline}></div>
                    <div className={style.text}>
                        <h1>Проектирование</h1>
                        <p>продумывание <br/> архитектуры приложения</p>
                        <p>поиск и оценка решений;</p>
                    </div>
                </div>
                <div className={style.container}>
                    <Image src={cube} alt={"cube"}/>
                    <div className={style.underline}></div>
                    <div className={style.text}>
                        <h1>Поддержка</h1>
                        <p>рефакторинг и <br/> оптимизация текущего <br/> функционала</p>
                        <p>Деплой и обновления</p>
                        <p>настройка и оптимизация <br/> сборки проекта</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhoWeDo;