import React from 'react';
import style from "./NeedToCreate.module.scss"
import Image from "next/image";
import gear from "../../../public/assets/images/Need_To_Create/gear.svg"
import {increment} from "../../features/popup/popupSlice";
import {useDispatch} from "react-redux";

function NeedToCrate() {
    const dispath = useDispatch()
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <div className={style.container_text}>
                    <div>
                        <div className={style.text}>
                            <h1>Нужна разработка сайта?</h1>
                            <p>Если у вас крупный имиджевый проект или сложная <br/> техническая часть, то все цены и сроки обсуждаются <br/> индивидуально</p>
                        </div>
                        <div className={style.create_offer_button}>
                            <button onClick={()=>dispath(increment())}>Заказать проект</button>
                        </div>
                    </div>
                    <div className={style.image_gear}>
                        <Image src={gear} alt={"gear"}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NeedToCrate;