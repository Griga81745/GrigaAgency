import React from 'react';
import style from "./Contact_Us.module.scss"
import {increment} from "../../features/popup/popupSlice";
import {useDispatch} from "react-redux";

function ContactUs() {
    const dispath = useDispatch()
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <h1>Оставьте заявку и мы свяжемся с Вами!</h1>
                <div className={style.button_container}>
                    <button className={style.button} onClick={()=>dispath(increment())} >Написать нам</button>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;