import React from 'react';
import style from "./Contact_Us.module.scss"

function ContactUs() {
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <h1>Оставьте заявку и мы свяжемся с Вами!</h1>
                <div className={style.button_container}>
                    <button className={style.button}>Написать нам</button>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;