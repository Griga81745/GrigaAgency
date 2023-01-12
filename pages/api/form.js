import {parseBody} from "next/dist/server/api-utils/node";

export default function handler(req, res) {
    const tgToken = "********"
    // let banList = ["Crytonek","test"]
    let message = JSON.stringify(req.body, null, 2);
    message = message.replaceAll(`{`," ").replaceAll(`}`,``).replaceAll(",","%0A%0A").replaceAll(`"`,"")

    if (req.method === 'POST') {
        if (message.includes("Crytonek")){
            res.status(412).redirect("/")
        }else {
            const ret = fetch(
                `https://api.telegram.org/bot${tgToken}/sendMessage?chat_id=2071502991&text=${message}&parse_mode=HTML`
            );
            res.status(200).redirect("/")
        }

    }else{
        res.status(405).redirect("/")
    }

}
