import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {increment} from "../../features/popup/popupSlice";

export default function () {
    const statusPopUp = useSelector(state=> state.toolkit.bolean)
    const dispath = useDispatch()

    return(
        <>
            <button onClick={()=>dispath(increment())}>Заказать</button>
        </>
    )
}