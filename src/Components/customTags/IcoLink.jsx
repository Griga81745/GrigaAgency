import Image from "next/image";
import linkStyle from "../Hero/Links/Links.module.scss"


export default function ({Href, ImageICO}) {
    return(
        <>
            <a href={Href} target={"_blank"}>
                <div className={linkStyle.circle}>
                    <Image className={linkStyle.circle_image} src={ImageICO}/>
                </div>
            </a>
        </>
    )
}