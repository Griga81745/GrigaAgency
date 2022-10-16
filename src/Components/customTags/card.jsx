import style from "../Technology/Technology.module.scss";
import Image from "next/image";

export default function ({image, alt, technology_name}) {
    return(
        <>
            <div className={style.card}>
                <div className={style.image}>
                    <Image src={image} alt={alt}/>
                </div>
                <p>{technology_name}</p>
            </div>
        </>
    )
}