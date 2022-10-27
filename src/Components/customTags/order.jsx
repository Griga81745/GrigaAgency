import React from "react";
import {useSelector} from "react-redux";

export default function () {
    const statusPopUp = useSelector(state=> state.togle.cartOpen)
    console.log(statusPopUp + " order")
    return(
        <>
            <button onClick={statusPopUp}>Заказать</button>
        </>
    )
}