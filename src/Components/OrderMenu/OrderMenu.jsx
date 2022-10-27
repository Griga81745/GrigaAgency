import React from 'react';
import style from "./OrderMenu.module.scss"
import Image from "next/image";
import exit from "../../../public/assets/images/OrderMenu/exit.svg"
import {useSelector} from "react-redux";


function OrderMenu() {
    const statusPopUp = useSelector(state=> state.togle.state)
    return (
        <div className={style.wrapper} style={{transform: statusPopUp? "translateX(0px)":"translateX(-2000px)"}}>
            <div className={style.modal}>
                <div className={style.modal_form}>
                    <div className={style.exit}>
                        <Image src={exit} className={style.exit_Image}/>
                    </div>
                    <h1>Написать нам</h1>
                    <div>
                        <form action="/" className={style.modal__forms}>
                            <input type="text" placeholder={"Имя"}/>
                            <input type="text" placeholder={"Email"}/>
                            <input type="text" placeholder={"Telegram "}/>
                            <input type="text" placeholder={"Название проекта"}/>
                            <input type="text" placeholder={"Информация"}/>
                            <button type={"submit"} className={style.modal__submit}>Отправить</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OrderMenu;