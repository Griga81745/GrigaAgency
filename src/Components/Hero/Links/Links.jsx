import React from 'react';
import linksStyle from "../Links/Links.module.scss";
import IcoLink from "../../customTags/IcoLink";
import github from "../../../../public/assets/images/Hero/github_ico.svg";
import mail from "../../../../public/assets/images/Hero/Mail.svg";
import telegram from "../../../../public/assets/images/Hero/Telegram.svg";

function Links() {
    return (
        <div>
            <div className={linksStyle.contactICOS}>
                <IcoLink Href={"https://github.com/Griga81745"} ImageICO={github} alt={"github"}/>
                <IcoLink Href={"mailto:gr_73@inbox.ru"} ImageICO={mail} alt={"mail"}/>
                <IcoLink Href={"https://t.me/FrontEnd_Dev_Griga"} ImageICO={telegram} alt={"Telegram"}/>
            </div>
        </div>
    );
}

export default Links;